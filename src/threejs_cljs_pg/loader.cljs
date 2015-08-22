(ns threejs-cljs-pg.loader
  (:require [goog.dom :as dom]
            [goog.events :as events]
            [goog.events.EventType :refer [CLICK CHANGE]]))

(def loader-bar (dom/getElementByClass "load-bar"))
(def upload-btn (dom/getElementByClass "upload-btn"))

(def obj-input (dom/getElementByClass "obj-file"))
(def obj-btn (dom/getElementByClass "obj-btn"))

(def dae-input (dom/getElementByClass "collada-file"))
(def dae-btn (dom/getElementByClass "collada-btn"))

(def texture-input (dom/getElementByClass "texture-file"))
(def texture-btn (dom/getElementByClass "texture-btn"))

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

(events/listen upload-btn CLICK toggle-loader-bar)

(events/listen obj-btn CLICK (fn [] (.click obj-input)))
(events/listen obj-input CHANGE (partial read-file parse-obj "text"))

(events/listen dae-btn CLICK (fn [] (.click dae-input)))
(events/listen dae-input CHANGE (partial read-file parse-dae "text"))

(events/listen texture-btn CLICK (fn [] (.click texture-input)))
(events/listen texture-input CHANGE (partial read-file load-texture "url"))
