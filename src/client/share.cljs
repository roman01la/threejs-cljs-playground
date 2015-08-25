(ns client.share
  (:require [client.init :refer [editor]]
            [client.remote :refer [set-demo]]
            [client.routes :refer [route-to]]))

(def share-btn (js/document.querySelector ".share"))

(defn set-btn-text [text]
  (set! (.. share-btn -innerHTML) text))

(defn set-hash [id]
  (set! (.. js/window -location -hash) id))

(.addEventListener share-btn "click"
  (fn [evt]
    (.then (set-demo (.getValue editor))
      (fn [demo-data]
        (route-to demo-data)
        (set-btn-text "Saved! Copy URL from the address bar.")
        (js/setTimeout
          #(set-btn-text "Share")
          3000))))
  false)
