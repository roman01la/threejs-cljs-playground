(ns client.utils
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [<! >! put! chan]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn append-class-name [class-name opts]
  (str class-name " " (:className opts)))

(defn display [show]
  (if show
    #js {}
    #js {:display "none"}))

(defn get-login-btn-text [username]
  (if (nil? username)
    "Sign in"
    username))

(defn get-from-ns [prop]
  (aget (.. js/window -cljs -user) prop))

(defn set-to-ns [prop val]
  (aset (.. js/window -cljs -user) prop val))

(defn push-into-ns [prop value]
  (.push (aget (.. js/window -cljs -user) prop) value))

(defn cache-from-ns [from to]
  (aset js/window to (or (get-from-ns from) #js [])))

(defn reset-ns []
  (set! (.. js/window -cljs -user) #js {}))

(defn s4 []
  (.substring
    (.toString
      (js/Math.floor (* (+ (js/Math.random) 1) 0x10000))
      16)
    1))

(defn guid []
  (loop [i 0 p ""]
    (if (< i 11)
      (recur
        (inc i)
        (str
          p
          (if (and (> i 1) (< i 9) (= (mod i 2) 0))
              "-"
              (s4))))
      (str p (s4)))))
