(ns client.remote
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [<! >! put! alts! chan]]

            [cljsjs.firebase]

            [client.utils :refer [guid]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def frb-chan (chan))
(def set-demo-chan (chan))
(def get-demo-chan (chan))
(def get-all-demos-chan (chan))

(def remote (js/Firebase. "https://cljs-three-pg.firebaseio.com/"))

(defn f-child [frb fp & path]
  (loop [c (.child frb fp) p path]
    (if-not (empty? p)
      (recur
        (.child c (first p))
        (rest p))
      c)))

(defn check-auth [cb]
  (.onAuth remote cb))

(defn add-user [uid profile]
  (.set (f-child remote "users" uid "profile") profile))

(defn login [cb]
  (.authWithOAuthPopup remote
    "github"
    (fn [err auth-data]
      (add-user
        (.. auth-data -github -id)
        (.. auth-data -github -cachedUserProfile))
      (cb (js->clj auth-data :keywordize-keys true)))))

(defn logout [cb]
  (cb (.unauth remote)))

(defn get-demo-revs [cb uid did]
  (.once
    (f-child remote "users" uid "sheets" did)
    "value"
    cb))

(defn last-demo-index [cb uid did]
  (get-demo-revs
    #(cb (js/parseInt (.numChildren %)))
    uid
    did))

(defn set-demo
  ([cb code {:keys [uuid]}]
    (if (nil? uuid)
      (let [did (guid)]
        (.set (f-child remote "sheets" did)
          code
          #(cb {:did did :uid nil :rev nil})))
      (set-demo cb code {:uuid uuid} (guid))))
  ([cb code {:keys [uuid]} did]
    (cond
      (nil? uuid)
        (let [ndid (guid)]
          (.set (f-child remote "sheets" ndid)
            code
            #(cb {:did ndid :uid nil :rev nil})))
      (not (nil? uuid))
        (set-demo cb code {:uuid uuid} did uuid)))
  ([cb code uuid did uid]
    (last-demo-index
      #(set-demo cb code uuid (if (= % 0) (guid) did) uid %)
      uid
      did))
  ([cb code {:keys [uuid]} did uid rev]
    (cond
      (and (not (nil? uuid)) (= uuid uid))
        (let [nrev (inc (js/parseInt rev))]
          (.set (f-child remote "users" uid "sheets" did nrev)
            code
            #(cb {:did did :uid uid :rev nrev})))
      (and (nil? uuid) (not (nil? uid)))
        (set-demo cb code nil)
      (and (not (nil? uuid)) (not= uuid uid))
        (set-demo cb code {:uuid uuid} did uuid))))

(defn get-demo
  ([cb did]
    (.once
      (f-child remote "sheets" did)
      "value"
      #(cb {:code (.val %) :page {:did did}})))
  ([cb did uid]
    (last-demo-index
      #(get-demo cb did uid %)
      uid
      did))
  ([cb did uid rev]
    (let [nrev (js/parseInt rev)]
      (.once
        (f-child remote "users" uid "sheets" did nrev)
        "value"
        #(cb {:code (.val %) :page {:did did :uid uid :rev nrev}})))))

(defn get-all-demos [cb uid]
  (if-not (nil? uid)
    (.once
      (f-child remote "users" uid "sheets")
        "value"
        #(cb (js/Object.keys (or (.val %) #js {}))))))

(go (loop [{:keys [op res]} (<! frb-chan)]
      (case op
        :check-auth (check-auth (fn [user]
                                  (if (nil? user)
                                    (put! res #js {})
                                    (put! res user))))
        :login (login #(put! res %))
        :logout (logout #(put! res {})))
      (recur (<! frb-chan))))

(go
  (while true
    (let [[v ch] (alts! [set-demo-chan get-demo-chan get-all-demos-chan])]
      (when (= ch set-demo-chan)
        (let [{:keys [uid did rev]} (:page v)
              uuid (get-in v [:user :github :id])]
          (apply set-demo
            (filter #(not (nil? %)) [#(put! (:res v) %) (:code v) {:uuid uuid} did uid rev]))))
      (when (= ch get-demo-chan)
        (let [{:keys [uid did rev]} (:page v)]
          (apply get-demo
            (filter #(not (nil? %)) [#(put! (:res v) %) did uid rev]))))
      (when (= ch get-all-demos-chan)
        (get-all-demos #(put! (:res v) %) (:uid v))))))
