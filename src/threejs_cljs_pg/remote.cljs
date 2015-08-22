(ns threejs-cljs-pg.remote)

(def remote (js/Firebase. "https://cljs-three-pg.firebaseio.com/"))
(def user (atom nil))

(defn f-child [frb fp & path]
  (loop [c (.child frb fp) p path]
    (if-not (empty? p)
      (recur
        (.child c (first path))
        (rest p))
      c)))

(defn get-demo [id]
  (js/Promise.
    (fn [res rej]
      (.once
        (if (nil? @user)
          (f-child remote "sheets" id)
          (f-child remote (f-child remote "users" (:uid user)) "sheets" id))
        "value"
        (fn [r]
          (res (.val r)))
        rej))))

(defn sign-in []
  (js/Promise.
    (fn [res rej]
      (.authWithOAuthPopup remote "github"
        (fn [err auth-data]
          (if (nil? err)
            (do
              (reset! user auth-data)
              (res auth-data))
            (rej err)))))))

(defn add-user [uid info]
  (.set (f-child remote "users" uid "info") info))
