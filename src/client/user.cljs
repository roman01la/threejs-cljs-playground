(ns client.user
  (:require [client.remote :refer [user sign-in sign-out add-user check-auth]]))

(def login-btn (js/document.querySelector ".login-btn"))

(defn set-btn-text [text]
  (set! (.. (aget (.. login-btn -children) 0 ) -innerHTML) text))

(defn handle-login [evt]
  (.then (sign-in)
    (fn [user-data]
      (add-user
        (clj->js (get-in user-data ["github" "id"]))
        (clj->js (get-in user-data ["github" "cachedUserProfile"]))))))

(defn handle-logout [evt]
  (.then (sign-out)
    #(reset! user nil)))

(defn manage-login [user-data]
  (if (nil? user-data)
    (do
      (.addEventListener login-btn "click" handle-login false)
      (.removeEventListener login-btn "click" handle-logout false))
    (do
      (.removeEventListener login-btn "click" handle-login false)
      (.addEventListener login-btn "click" handle-logout false))))

(add-watch user :key
  (fn [k r o n]
    (do
      (if-not (empty? n)
        (set-btn-text (get-in n ["github" "username"]))
        (set-btn-text "Sign in"))
      (manage-login n))))

(.then (check-auth)
  (fn [user-data]
    (js/console.log
      (str "User: " (get-in user-data ["github" "username"])))))
