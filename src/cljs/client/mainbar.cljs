(ns client.mainbar
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [<! >! put! take! chan]]

            [client.list :refer [list-component]]
            [client.button :refer [button-component]]
            [client.utils :refer [get-login-btn-text]]
            [client.loadbar :refer [loadbar-chan]]
            [client.remote :refer [frb-chan set-demo-chan get-all-demos-chan]]
            [client.editor :refer [eval-change-chan]]
            [client.select :refer [select-component]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(def notify-share (chan))

(defn toggle-loadbar []
  (put! loadbar-chan true))

(defn set-demo [app]
  (let [res (chan)
        code (.getValue (:editor @app))
        page (:page @app)
        user (:user @app)]
    (go
      (>! set-demo-chan {:res res :code code :page page :user user})
      (om/update! app :page (<! res))
      (>! notify-share 0))))

(defn manage-auth [app]
  (let [res (chan) dres (chan)]
    (go
      (>! frb-chan
        {:op (if (empty? (:user app)) :login :logout)
         :res res})
      (let [user (<! res)]
        (if-not (empty? user)
          (do
            (>! get-all-demos-chan {:res dres :uid (get-in user [:github :id])})
            (let [demos (js->clj (<! dres))]
              (om/transact! app #(assoc (assoc % :all-demos demos) :user user))))
          (om/update! app :user user))))))

(def eval-btn-component
  [button-component nil {:opts {:className "eval-btn"
                                :text "Eval"
                                :onClick #(put! eval-change-chan 0)}}])

(def upload-btn-component
  [button-component nil {:opts {:className "upload-btn"
                                :text "Upload"
                                :onClick toggle-loadbar}}])

(defn share-btn-component [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:text "Share"})
    om/IDidMount
    (did-mount [_]
      (let [res (chan)]
        (go-loop []
          (<! notify-share)
          (when-not (empty? (:user @app))
            (>! get-all-demos-chan {:res res :uid (get-in @app [:user :github :id])})
            (om/update! app :all-demos (js->clj (<! res))))
          (om/set-state! owner :text "Saved! Copy URL from the address bar.")
          (js/setTimeout
            #(om/set-state! owner :text "Share")
            3000)
          (recur))))
    om/IRenderState
    (render-state [_ state]
      (om/build button-component
        (:text state)
        {:opts {:className "share"
                :onClick (partial set-demo app)}}))))

(defn login-btn-component [app _]
  (reify
    om/IRender
    (render [_]
      (om/build button-component
        (dom/span #js {:className "text"}
          (get-login-btn-text (get-in @app [:user :github :username])))
        {:opts {:className "login-btn"
                :onClick (partial manage-auth app)}}))))

(defn select-demo [app did]
  (om/update!
    app
    :page
    {:uid (get-in @app [:user :github :id])
     :did did
     :rev nil}))

(defn shorten [max text]
  (str (clojure.string/join (take max text)) "..."))

(defn to-title-value [items]
  (map
    (fn [item] {:title (shorten 8 item) :value item })
    items))

(defn choose-demo-component [app _]
  (reify
    om/IRender
    (render [_]
      (dom/div nil
        (dom/label nil "My demos: ")
        (om/build select-component
          (to-title-value (:all-demos @app))
          {:opts {:className "choose-demo"
                  :onChange #(select-demo app (.. % -target -value))}})))))

(defn get-user-buttons [user]
  (let [login-btn [login-btn-component]]
    (if (empty? user)
      login-btn
      (conj login-btn choose-demo-component))))

(defn mainbar-component [app _]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "toolbar bar"}
        (list-component
          app
          (get-user-buttons (:user @app))
          {:className "left"})
        (list-component
          app
          [eval-btn-component
           upload-btn-component
           share-btn-component])))))
