(ns client.viewport
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [<! >! put! alts! chan]]

            [client.utils :refer [set-to-ns get-from-ns]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def viewport-reset-chan (chan))
(def viewport-resize-chan (chan))

(.addEventListener js/window
  "resize"
  #(put! viewport-resize-chan 0)
  false)

(defn reset-viewport [viewport-node]
  (set! (.. viewport-node -innerHTML) nil))

(defn update-viewport-size [w h viewport-node]
  (set-to-ns "WIDTH" w)
  (set-to-ns "HEIGHT" h)
  (if-let [r (get-from-ns "RENDERER")]
    (.setSize r w h)))

(defn update-aspect-ratio [w h]
  (if-let [c (get-from-ns "CAMERA")]
    (do
      (set! (.. c -aspect) (/ w h))
      (.updateProjectionMatrix c))))

(defn resize-viewport [viewport-node]
  (let [w (.. viewport-node -clientWidth)
        h (.. viewport-node -clientHeight)]
    (update-viewport-size w h viewport-node)
    (update-aspect-ratio w h)))

(defn viewport-component [app owner]
  (reify
    om/IDidMount
    (did-mount [_]
      (let [viewport-node (om/get-node owner "viewport")]
        (om/update! app [:viewport] viewport-node)
        (go
          (while true
            (let [[v ch] (alts! [viewport-reset-chan viewport-resize-chan])]
              (when (= ch viewport-reset-chan)
                (do
                  (reset-viewport viewport-node)
                  (>! v 0)))
              (when (= ch viewport-resize-chan)
                (resize-viewport viewport-node)))))))
    om/IShouldUpdate
    (should-update [_ _ _] false)
    om/IRender
    (render [_]
      (dom/div #js {:className "viewport" :ref "viewport"}))))
