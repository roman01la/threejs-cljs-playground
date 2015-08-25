(ns client.routes
  (:require [secretary.core :as secretary :refer-macros [defroute]]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [client.remote :refer [get-demo]]
            [client.init :refer [run initialize]])
  (:import goog.History))

(def h (History.))

(def guid-re #"/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}")
(def user-guid-re #"/(.*)/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})")

(secretary/set-config! :prefix "#")

(defn handle-err [err]
  (.setToken h "/"))

(defroute index "/" []
  (initialize))

(defroute anon-demo guid-re [id]
  (.catch
    (.then (get-demo id) run)
    handle-err))

(defroute user-demo user-guid-re [user id]
  (.catch
    (.then (get-demo id user) run)
    handle-err))

(defroute others "*" []
  (handle-err nil))

(defn route-to [demo-data]
  (let [{:keys [id user-id]} demo-data]
    (.setToken h
      (str
        "/"
        (if-not (nil? user-id)
          (str user-id "/" id)
          id)))))

(defn start []
  (events/listen h EventType/NAVIGATE #(secretary/dispatch! (.-token %)))
  (doto h (.setEnabled true)))
