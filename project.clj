(defproject threejs-cljs-pg "1.0.0"
  :description "three.js playground in ClojureScript"
  :dependencies [[org.clojure/clojure          "1.10.0"]
                 [org.clojure/clojurescript    "1.10.439"]
                 [org.clojure/core.async       "0.4.490"]
                 [org.omcljs/om                "0.9.0"]
                 [secretary                    "1.2.3"]
                 [cljsjs/codemirror            "5.6.0-0"]
                 [cljsjs/firebase              "2.2.7-1"]
                 [cljsjs/three                 "0.0.91-1"]]

  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-figwheel  "0.5.18"]]

  :source-paths ["src/cljs"]
  :resource-paths ["resources"]
  :clean-targets ^{:protect false} ["resources/public/js/out"
                                    "resources/public/js/app.js"]

  :figwheel
  {:server-port 3000
   :css-dirs ["resources/public/css"]}

  :cljsbuild
  {:builds {
    :dev {
      :source-paths ["src/cljs"]
      :figwheel true
      :compiler {:optimizations :none
                 :main client.core
                 :dump-core false
                 :static-fns true
                 :optimize-constants true
                 :source-map true
                 :source-map-timestamp true
                 :verbose true
                 :cache-analysis true
                 :asset-path "js/out"
                 :output-dir "resources/public/js/out"
                 :output-to "resources/public/js/app.js"
                 :foreign-libs
                 [{:provides ["cljsjs.codemirror.addons.matchbrackets"]
                   :requires ["cljsjs.codemirror"]
                   :file "resources/public/js/vendor/codemirror/matchbrackets.js"}
                 {:provides ["cljsjs.codemirror.addons.closebrackets"]
                   :requires ["cljsjs.codemirror"]
                   :file "resources/public/js/vendor/codemirror/closebrackets.js"}
                 {:provides ["cljsjs.codemirror.addons.active-line"]
                   :requires ["cljsjs.codemirror"]
                   :file "resources/public/js/vendor/codemirror/active-line.js"}
                 {:provides ["cljsjs.three.obj-loader"]
                   :requires ["cljsjs.three"]
                   :file "resources/public/js/vendor/threejs/obj-loader.js"}
                 {:provides ["cljsjs.three.collada-loader"]
                   :requires ["cljsjs.three"]
                   :file "resources/public/js/vendor/threejs/collada-loader.js"}
                 {:provides ["cljsjs.three.texture-loader"]
                   :requires ["cljsjs.three"]
                   :file "resources/public/js/vendor/threejs/texture-loader.js"}]}}

    :release {
      :source-paths ["src"]
      :compiler {:optimizations :simple
                 :pretty-print false
                 :dump-core false
                 :static-fns true
                 :optimize-constants true
                 :verbose true
                 :language-in :ecmascript5
                 :language-out :ecmascript5
                 :output-to "resources/public/js/app.js"
                 :asset-path "js/out"
                 :foreign-libs
                 [{:provides ["cljsjs.codemirror.addons.matchbrackets"]
                   :requires ["cljsjs.codemirror"]
                   :file "resources/public/js/vendor/codemirror/matchbrackets.js"}
                 {:provides ["cljsjs.codemirror.addons.closebrackets"]
                   :requires ["cljsjs.codemirror"]
                   :file "resources/public/js/vendor/codemirror/closebrackets.js"}
                 {:provides ["cljsjs.codemirror.addons.active-line"]
                   :requires ["cljsjs.codemirror"]
                   :file "resources/public/js/vendor/codemirror/active-line.js"}
                 {:provides ["cljsjs.three.obj-loader"]
                   :requires ["cljsjs.three"]
                   :file "resources/public/js/vendor/threejs/obj-loader.js"}
                 {:provides ["cljsjs.three.collada-loader"]
                   :requires ["cljsjs.three"]
                   :file "resources/public/js/vendor/threejs/collada-loader.js"}
                 {:provides ["cljsjs.three.texture-loader"]
                   :requires ["cljsjs.three"]
                   :file "resources/public/js/vendor/threejs/texture-loader.js"}]}}}})
