(ns client.loaders
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [<! >! put! alts! chan]]

            [client.utils :refer [push-into-ns]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def obj-loader-chan (chan))
(def collada-loader-chan (chan))
(def texture-loader-chan (chan))

(defn add-model [model type]
  (push-into-ns "MODELS" #js {"type" type "data" model}))

(defn add-raw-model [data type]
  (push-into-ns "MODELS_DATA" #js {"type" type "data" data}))

(defn add-texture [texture]
  (push-into-ns "TEXTURES" texture))

(defn add-raw-texture [raw-texture]
  (push-into-ns "TEXTURES_DATA" raw-texture))

(defn build-dom-fragment [s]
  (let [fragment (js/document.createElement "div")]
    (set! (.. fragment -innerHTML) s)
    (aget (.. fragment -children) 0)))

(defn read-file [cb fmt file]
  (let [reader (js/FileReader.)]
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

(go
  (while true
    (let [[v ch] (alts! [obj-loader-chan
                         collada-loader-chan
                         texture-loader-chan])]
      (when (= ch obj-loader-chan)
        (read-file parse-obj "text" v))
      (when (= ch collada-loader-chan)
        (read-file parse-dae "text" v))
      (when (= ch texture-loader-chan)
        (read-file load-texture "url" v)))))
