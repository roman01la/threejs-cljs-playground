(ns client.utils)

(def STORAGE "THREE_JS_CLJS_STORAGE")

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

(defn get-default-vals [viewport]
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
