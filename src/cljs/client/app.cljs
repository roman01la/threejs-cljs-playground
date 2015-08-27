(ns client.app
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [<! >! put! chan]]

            [cljsjs.three.obj-loader]
            [cljsjs.three.collada-loader]
            [cljsjs.three.texture-loader]

            [client.remote :refer [frb-chan get-all-demos-chan]]
            [client.toolbar :refer [toolbar-component]]
            [client.editor :refer [editor-component]]
            [client.viewport :refer [viewport-component]]
            [client.app-state :refer [app-state page-chan]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(defn app-component [app owner]
  (reify
    om/IDidMount
    (did-mount [_]
      (do
        (go-loop []
          (om/update! app :page (<! page-chan))
          (recur))
        (let [res (chan) dres (chan)]
          (go
            (>! frb-chan
                {:op :check-auth
                 :res res})
            (let [user (js->clj (<! res) :keywordize-keys true)]
              (>! get-all-demos-chan {:res dres :uid (get-in user [:github :id])})
              (let [demos (js->clj (<! dres))]
                (om/transact! app #(assoc (assoc % :all-demos demos) :user user))))))))
    om/IRender
    (render [_]
      (dom/div #js {:className "app"}
        (om/build viewport-component app)
        (om/build editor-component app)
        (om/build toolbar-component app)))))
