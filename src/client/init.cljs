(ns client.init
  (:require [client.compiler :refer [eval-expr]]
            [client.user]
            [client.utils :as utils]))

(def viewport (js/document.querySelector ".viewport"))
(def editor-container (js/document.querySelector ".editor"))

(defn maybe-reload [reloader data]
  (if-not (and (array? data) (> (.. data -length) 0))
    reloader
    nil))

;; rm canvas
(defn reset-dom []
  (set! (.. viewport -innerHTML) nil))

;; clear execution namespace
(defn reset-ns []
  (set! (.. js/window -cljs -user) #js {}))

(defn get-from-ns [prop]
  (aget (.. js/window -cljs -user) prop))

(defn set-to-ns [prop val]
  (aset (.. js/window -cljs -user) prop val))

(defn cache-from-ns [from to]
  (aset js/window to (or (get-from-ns from) #js [])))

(defn reset-sandbox []
  (js/cancelAnimationFrame (.. cljs.user -RAF))
  (cache-from-ns "MODELS_DATA" "modelsData")
  (cache-from-ns "TEXTURES_DATA" "texturesData")
  (reset-ns)
  (reset-dom))

(defn update-viewport-size [w h]
  (set-to-ns "WIDTH" w)
  (set-to-ns "HEIGHT" h)
  (if-let [r js/cljs.user.RENDERER]
    (.setSize r w h)))

(defn update-aspect-ratio [w h]
  (if-let [c js/window.cljs.user.CAMERA]
    (do
      (set! (.. c -aspect) (/ w h))
      (.updateProjectionMatrix c))))

(def editor
  (js.CodeMirror editor-container #js {
    "mode" "clojure",
    "theme" "neo",
    "lineNumbers" true,
    "autofocus" true,
    "autoCloseBrackets" true,
    "matchBrackets" true,
    "styleActiveLine" true}))

(.on editor "change"
  (fn [instance] (js/localStorage.setItem utils/STORAGE (.getValue instance))))

(defn get-value [code]
  (str
    (utils/get-default-vals viewport)
    (maybe-reload utils/TEXTURES-RELOADER (get-from-ns "MODELS_DATA"))
    (maybe-reload utils/MODELS-RELOADER (get-from-ns "TEXTURES_DATA"))
    code))

(defn eval-change []
  (reset-sandbox)
  (eval-expr (get-value (.getValue editor)) (fn [err out]
    (if (nil? err)
      (try
        (js/eval out)
      (catch :default e
        (js/console.error e)))
      (js/console.error err)))))

(.setOption editor "extraKeys" #js { "Alt-Enter" eval-change })

(.addEventListener
  (js/document.querySelector ".eval-btn") "click" eval-change false)

(.addEventListener js/window "resize"
  (fn []
    (let [w (.. viewport -clientWidth)
          h (.. viewport -clientHeight)]
      (update-viewport-size w h)
      (update-aspect-ratio w h)))
  false)

(defn run [code]
  (.setValue editor code)
  (eval-change))

(defn initialize []
  (let [init-code (js/localStorage.getItem utils/STORAGE)]
    (run (if (empty? init-code)
      utils/code-str
      init-code))))

(reset-ns)
(reset-dom)
