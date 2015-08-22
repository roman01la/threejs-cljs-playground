(ns threejs-cljs-pg.user
  (:require [goog.dom :as dom]
            [goog.events :as events]
            [goog.events.EventType :refer [CLICK CHANGE]]
            [threejs-cljs-pg.remote :refer [sign-in add-user]]))

(def login-btn (dom/getElementByClass "login-btn"))

(.addEventListener login-btn "click"
  (fn [evt]
    (.then (sign-in)
      (fn [user]
        (add-user (.. user -uid) (.. user -github -cachedUserProfile))
        (set! (.. (aget (.. login-btn -children) 0 ) -innerHTML) (.. user -github -username)))))
  false)
