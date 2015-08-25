(ns client.loader)

(def loader-bar (js/document.querySelector ".load-bar"))
(def upload-btn (js/document.querySelector ".upload-btn"))

(def obj-input (js/document.querySelector ".obj-file"))
(def obj-btn (js/document.querySelector ".obj-btn"))

(def dae-input (js/document.querySelector ".collada-file"))
(def dae-btn (js/document.querySelector ".collada-btn"))

(def texture-input (js/document.querySelector ".texture-file"))
(def texture-btn (js/document.querySelector ".texture-btn"))

(defn toggle-loader-bar []
  (set! (.. loader-bar -hidden) (not (.. loader-bar -hidden))))

(defn add-model [model type]
  (.push (.. js/window -cljs -user -MODELS) #js {"type" type "data" model}))

(defn add-raw-model [data type]
  (.push (.. js/window -cljs -user -MODELS_DATA) #js {"type" type "data" data}))

(defn add-texture [texture]
  (.push (.. js/window -cljs -user -TEXTURES) texture))

(defn add-raw-texture [raw-texture]
  (.push (.. js/window -cljs -user -TEXTURES_DATA) raw-texture))

(defn build-dom-fragment [s]
  (let [fragment (js/document.createElement "div")]
    (set! (.. fragment -innerHTML) s)
    (aget (.. fragment -children) 0)))

(defn read-file [cb fmt evt]
  (let [reader (js/FileReader.)
        file   (aget (.. evt -target -files) 0)]
    (.addEventListener reader "loadend"
      (fn [ent]
        (cb (.. ent -target -result))) false)
    (case fmt
      "text" (.readAsText reader file)
      "url"  (.readAsDataURL reader file))))

(defn parse-obj [data]
  (add-raw-model data "obj")
  (add-model (js/THREE.OBJLoader.prototype.parse data) "obj"))

(defn parse-dae [data]
  (let [loader (THREE.ColladaLoader.)
        xml (build-dom-fragment data)]
    (.parse loader xml
      (fn [model]
        (add-raw-model xml "dae")
        (add-model model "dae")))))

(defn load-texture [url]
  (let [img (js/Image.)]
    (.addEventListener img "load"
      (fn [evt]
        (let [texture (THREE.Texture. img)]
          (set! (.. texture -needsUpdate) true)
          (add-raw-texture img)
          (add-texture texture)))
      false)
    (set! (.. img -src) url)))

(.addEventListener upload-btn "click" toggle-loader-bar false)

(.addEventListener obj-btn "click" (fn [] (.click obj-input)) false)
(.addEventListener obj-input "change" (partial read-file parse-obj "text") false)

(.addEventListener dae-btn "click" (fn [] (.click dae-input)) false)
(.addEventListener dae-input "change" (partial read-file parse-dae "text") false)

(.addEventListener texture-btn "click" (fn [] (.click texture-input)) false)
(.addEventListener texture-input "change" (partial read-file load-texture "url") false)
