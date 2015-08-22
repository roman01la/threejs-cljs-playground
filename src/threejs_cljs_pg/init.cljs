(ns threejs-cljs-pg.init
  (:require [goog.dom :as dom]
            [goog.events :as events]
            [goog.events.EventType :refer [CLICK]]
            [threejs-cljs-pg.compiler :refer [eval-expr]]
            [threejs-cljs-pg.remote :refer [get-demo]]
            [threejs-cljs-pg.user]))

(def viewport (dom/getElementByClass "viewport"))
(def editor-container (dom/getElementByClass "editor"))
(def STORAGE "THREE_JS_CLJS_STORAGE")

(defn get-default-vals []
  (str "(def WIDTH " (.. viewport -clientWidth) ")
   (def HEIGHT " (.. viewport -clientHeight) ")
   (def VIEWPORT (js/document.querySelector \".viewport\"))
   (def TEXTURES_DATA (.. js/window -texturesData))
   (def TEXTURES #js [])
   (def MODELS_DATA (.. js/window -modelsData))
   (def MODELS #js [])
   (def RAF)
   (def CAMERA)
   (def RENDERER)"))

(def MODELS-RELOADER
  "(loop [i 0 arr MODELS_DATA]
     (when (< i (.. arr -length))
       (let [data (aget arr i)]
         (case (.. data -type)
           \"obj\" (.push MODELS (THREE.OBJLoader.prototype.parse (.. data -data)))
           \"dae\" (.parse (THREE.ColladaLoader.) (.. data -data) (fn [model] (.push MODELS model)))))
       (recur (inc i) arr)))")

(def TEXTURES-RELOADER
  "(loop [i 0 arr TEXTURES_DATA]
      (when (< i (.. arr -length))
        (let [texture (THREE.Texture. (aget arr i))]
          (set! (.. texture -needsUpdate) true)
          (.push TEXTURES texture))
        (recur (inc i) arr)))")

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
  (.setSize js/cljs.user.RENDERER w h))

(defn update-aspect-ratio [w h]
  (set! (.. js/window -cljs -user -CAMERA -aspect) (/ w h))
  (.updateProjectionMatrix js/window.cljs.user.CAMERA))

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
  (fn [instance] (js/localStorage.setItem STORAGE (.getValue instance))))

(defn get-value [code]
  (str
    (get-default-vals)
    (maybe-reload TEXTURES-RELOADER (get-from-ns "MODELS_DATA"))
    (maybe-reload MODELS-RELOADER (get-from-ns "TEXTURES_DATA"))
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

(events/listen (dom/getElementByClass "eval-btn") CLICK eval-change)

(.addEventListener js/window "resize"
  (fn []
    (let [w (.. viewport -clientWidth)
          h (.. viewport -clientHeight)]
      (update-viewport-size w h)
      (update-aspect-ratio w h)))
  false)

(def code-str
  ";; Globals (initialized once): THREE, VIEWPORT, WIDTH, HEIGHT, MODELS, TEXTURES
;; THREE is three.js namespace, read API docs http://threejs.org/docs/
;; VIEWPORT is a reference to the viewport DOM element
;; WIDTH & HEIGHT are dimensions of the viewport
;; MODELS is JS array where uploaded models are stored
;; Upload OBJ/Collada model and access it with (aget MODELS \"index number\")
;; Upload image and get the texture with (aget TEXTURES \"index number\")
;; Press Alt-Enter to evaluate

(def scene (THREE.Scene.))
(def camera (THREE.PerspectiveCamera. 75 (/ WIDTH HEIGHT) 0.1 1000))
(def renderer (THREE.WebGLRenderer. #js {\"antialias\" true}))

;; assign renderer instace to global var RENDERER
;; and camera instance to global var CAMERA
;; to let me handle window resizing for you
(set! RENDERER renderer)
(set! CAMERA camera)

(.setPixelRatio renderer js.window.devicePixelRatio)
(.setSize renderer WIDTH HEIGHT)

(.appendChild VIEWPORT renderer.domElement)

(def geometry (THREE.BoxGeometry. 1 1 1))
(def material (THREE.MeshBasicMaterial. #js {\"color\" 0x00ff00}))
(def cube (THREE.Mesh. geometry material))

(.add scene cube)

(set! (.-z camera.position) 5)

(defn animate []
  (set! (.-x cube.rotation) (+ cube.rotation.x 0.01))
  (set! (.-y cube.rotation) (+ cube.rotation.y 0.01)))

(defn render []
  ;; assign every call to js/requestAnimationFrame to global RAF var
  ;; required to clean up render loop before each evaluation
  (set! RAF (js/requestAnimationFrame render))
  (animate)
  (.render renderer scene camera))

(render)")

(defn parse-id []
  (aget (.match js/window.location.hash (js/RegExp. "#(.*)")) 1))


(defn run [code]
  (.setValue editor code)
  (reset-ns)
  (reset-dom)
  (eval-change))

(defn initialize []
  (if-not (empty? (.. js/window -location -hash))
    (.then (get-demo (parse-id)) run)
    (run
      (let [init-code (js/localStorage.getItem STORAGE)]
        (if (empty? init-code)
          code-str
          init-code)))))
