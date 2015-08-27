(ns client.routes
  (:require [secretary.core :as secretary :refer-macros [defroute]]
            [goog.events :as events]
            [goog.history.EventType :as EventType]

            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [<! >! put! chan]]

            ; [client.remote :refer [get-demo]]
            [client.app-state :refer [page-chan]]
            )
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:import goog.History))

(def h (History.))
(def page (atom nil))

(def guid-re #"/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})")
(def user-guid-re #"/([0-9]*)/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/")
(def user-guid-rev-re #"/([0-9]*)/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/([0-9]*)")

(secretary/set-config! :prefix "#")

(defn handle-err [err]
  (.setToken h "/"))

(defn route-to [demo-data]
  (let [{:keys [did uid rev]} demo-data]
    (.setToken h
      (str
        "/"
        (if-not (nil? uid)
          (str uid "/" did
            (if-not (nil? rev) (str "/" rev)))
          did)))))

(defroute index "/" []
  (put! page-chan
    {:uid nil
     :did nil
     :rev nil}))

(defroute anon-demo guid-re [did]
  (put! page-chan
    {:uid nil
     :did did
     :rev nil}))

(defroute user-demo user-guid-re [uid did]
  (put! page-chan
    {:uid uid
     :did did
     :rev nil}))

(defroute user-demo-rev user-guid-rev-re [uid did rev]
  (put! page-chan
    {:uid uid
     :did did
     :rev rev}))

(defroute others "*" []
  (handle-err nil))

(defn start []
  (events/listen h EventType/NAVIGATE #(secretary/dispatch! (.-token %)))
  (doto h (.setEnabled true)))
