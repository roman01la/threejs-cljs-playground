(ns client.editor
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [<! >! put! chan]]

            [cljsjs.codemirror.mode.clojure]
            [cljsjs.codemirror.addons.active-line]
            [cljsjs.codemirror.addons.matchbrackets]
            [cljsjs.codemirror.addons.closebrackets]

            [client.constants :as c]
            [client.compiler :refer [eval-expr]]
            [client.viewport :refer [viewport-reset-chan]]
            [client.app-state :refer [app-state]]
            [client.utils :refer [get-from-ns cache-from-ns reset-ns]]
            [client.remote :refer [get-demo-chan]]
            [client.routes :refer [route-to]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def eval-change-chan (chan))

(defn reset-dom [cb]
  (let [res (chan)]
    (go
      (>! viewport-reset-chan res)
      (cb (<! res)))))

(defn maybe-reload [reloader data]
  (if-not (and (array? data) (> (.. data -length) 0))
    reloader
    nil))

(defn get-value [code]
  (str
    (c/get-default-vals (:viewport @app-state))
    (maybe-reload c/TEXTURES-RELOADER (get-from-ns "MODELS_DATA"))
    (maybe-reload c/MODELS-RELOADER (get-from-ns "TEXTURES_DATA"))
    code))

(defn reset-sandbox [cb]
  (js/cancelAnimationFrame (get-from-ns "RAF"))
  (cache-from-ns "MODELS_DATA" "modelsData")
  (cache-from-ns "TEXTURES_DATA" "texturesData")
  (reset-ns)
  (reset-dom cb))

(defn eval-change [instance]
  (reset-sandbox
    #(eval-expr
      (get-value (.getValue instance))
      (fn [err out]
        (if (nil? err)
          (try
            (js/eval out)
          (catch :default e
            (js/console.error e)))
          (js/console.error err))))))

(defn create-editor [target]
  (js/CodeMirror
    target
    #js {
      "mode" "clojure",
      "theme" "neo",
      "lineNumbers" true,
      "autofocus" true,
      "autoCloseBrackets" true,
      "matchBrackets" true,
      "styleActiveLine" true}))

(defn init-editor [editor]
  (.on editor
    "change"
    (fn [instance]
      (js/localStorage.setItem c/STORAGE (.getValue instance))))
  (.setOption editor
    "extraKeys"
    #js {"Alt-Enter" #(put! eval-change-chan 0)}))

(defn init-value [editor]
  (let [init-code (js/localStorage.getItem c/STORAGE)]
    (.setValue editor
      (if-not (empty? init-code)
        init-code
        c/code-str))
    (put! eval-change-chan 0)))

(defn set-eval [editor code]
  (.setValue editor code)
  (if-not (empty? code)
    (put! eval-change-chan 0)))

(defn editor-component [app owner]
  (reify
    om/IDidMount
    (did-mount [_]
      (let [editor (create-editor (om/get-node owner "editor"))]
        (go
          (loop []
            (<! eval-change-chan)
            (eval-change editor)
            (recur)))
        (reset-ns)
        (init-editor editor)
        (init-value editor)
        (om/transact! app [:editor] #(identity editor))))
    om/IShouldUpdate
    (should-update [_ next-props _]
      (if-not (= (:page app) (:page next-props))
        (let [res (chan)]
          (go
            (>! get-demo-chan {:res res :page (:page next-props)})
            (let [{:keys [code page]} (<! res)]
              (if-not (empty? code)
                (set-eval (:editor @app) code))
              (route-to page)))))
      false)
    om/IRender
    (render [_]
      (dom/div #js {:className "editor" :ref "editor"}))))
