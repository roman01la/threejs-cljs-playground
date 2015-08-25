(ns client.remote)

(def remote (js/Firebase. "https://cljs-three-pg.firebaseio.com/"))
(def user (atom nil))

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

;; construct path into firebase db
(defn f-child [frb fp & path]
  (loop [c (.child frb fp) p path]
    (if-not (empty? p)
      (recur
        (.child c (first p))
        (rest p))
      c)))

(defn set-user [user-data]
  (reset! user (js->clj user-data {:keywordize-keys true})))

(defn get-demo
  ([id]
    (js/Promise.
      (fn [res rej]
        (.once
          (f-child remote "sheets" id)
          "value"
          (fn [r]
            (res (.val r)))
          rej))))
  ([id user-id]
    (js/Promise.
      (fn [res rej]
        (.once
          (f-child remote "users" user-id "sheets" id)
          "value"
          (fn [r]
            (res (.val r)))
          rej)))))

(defn set-demo [code]
  (js/Promise.
    (fn [res rej]
      (let [id (guid) user-id (get-in @user ["github" "id"])]
        (.set
          (if (nil? @user)
            (f-child remote "sheets" id)
            (f-child remote "users" user-id "sheets" id))
          code
          (fn [err]
            (if (nil? err)
              (if (nil? @user)
                (res {:id id})
                (res {:id id :user-id user-id}))
              (rej err))))))))

(defn sign-in []
  (js/Promise.
    (fn [res rej]
      (.authWithOAuthPopup remote "github"
        (fn [err auth-data]
          (if (nil? err)
            (do
              (set-user auth-data)
              (res (js->clj auth-data {:keywordize-keys true})))
            (rej err)))))))

(defn sign-out []
  (js/Promise.resolve (.unauth remote)))

(defn add-user [id profile]
  (.set (f-child remote "users" id "profile") profile))

(defn check-auth []
  (js/Promise.
    (fn [res]
      (.onAuth remote
        (fn [user-data]
          (set-user user-data)
          (res @user))))))
