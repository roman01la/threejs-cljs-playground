(function(scope, undefined) {

  'use strict';

  var viewport = document.querySelector('.viewport');
  var editorContainer = document.querySelector('.editor');

  var WIDTH = scope.innerWidth;
  var HEIGHT = scope.innerHeight;

  var STORAGE = 'THREE_JS_CLJS_STORAGE';

  var DEFAULT_DEFS = "(ns cljs.user)\n(def RAF)\n(def CAMERA)\n(def RENDERER)\n(def THREE (.-THREE js/window))\n(def TEXTURES_DATA #js [])\n(def TEXTURES #js [])\n(def MODELS_DATA #js [])\n(def MODELS #js [])\n(def VIEWPORT (.querySelector js.document \".viewport\"))\n(def WIDTH " + viewport.clientWidth + ")\n(def HEIGHT " + viewport.clientHeight + ")";

  function getDefaultDefs() {

    var defs = DEFAULT_DEFS;

    if (cljs.user.MODELS_DATA && cljs.user.MODELS_DATA.length) {
      scope._modelsData = cljs.user.MODELS_DATA;
      defs = defs.replace(/\n\(def MODELS_DATA \#js \[\]\)/, '\n(def MODELS_DATA (.-_modelsData js/window))');
      var loop = "\n(loop [i (js/Number. \"0\") arr MODELS_DATA]\n  (when (< i (js/Number. (.-length arr)))\n    (let [data (aget arr i)]\n      (case (.-type data)\n        \"obj\" (.push MODELS (.parse THREE.OBJLoader.prototype (.-data data)))\n        \"collada\" (.parse (THREE.ColladaLoader.) (.-data data)\n                    (fn [model]\n                      (.push MODELS model)))))\n    (recur (inc i) arr)))";
      defs = defs.replace(/\n\(def MODELS \#js \[\]\)/, '(def MODELS #js [])' + loop);
    }

    if (cljs.user.TEXTURES_DATA && cljs.user.TEXTURES_DATA.length) {
      scope._texturesData = cljs.user.TEXTURES_DATA;
      defs = defs.replace(/\n\(def TEXTURES_DATA \#js \[\]\)/, '\n(def TEXTURES_DATA (.-_texturesData js/window))');
      var loop = "(loop [i (js/Number. \"0\") arr TEXTURES_DATA] (when (< i (js/Number. (.-length arr))) (let [texture (THREE.Texture. (aget arr i))] (do (set! (.-needsUpdate texture) true) (.push TEXTURES texture))) (recur (inc i) arr)))";
      defs = defs.replace(/\n\(def TEXTURES \#js \[\]\)/, '(def TEXTURES #js [])' + loop);
    }

    return defs;
  }

  var editor = CodeMirror(editorContainer, {
    mode: 'clojure',
    theme: 'neo',
    lineNumbers: true,
    autofocus: true,
    autoCloseBrackets: true,
    matchBrackets: true,
    styleActiveLine: true
  });

  editor.setOption('extraKeys', {
    'Alt-Enter': evalChange
  });

  editor.on('change', function(instance) {
    localStorage.setItem(STORAGE, instance.getValue());
  });

  document.querySelector('.eval-btn')
    .addEventListener('click', evalChange, false);

  if (scope.location.hash) {
    scope.remote.get(scope.location.hash.match(/#(.*)/)[1])
      .then(function(code) {
        editor.setValue(code);
        evalEditorCode();
      })
      .catch(function() {
        editor.setValue(localStorage.getItem(STORAGE) || getDefaultValue());
        evalEditorCode();
      });
  } else {
    editor.setValue(localStorage.getItem(STORAGE) || getDefaultValue());
    evalEditorCode();
  }

  function evalChange() {
    cancelAnimationFrame(cljs.user.RAF);
    evalCljs(getDefaultDefs() + editor.getValue(), function beforeEvalAfterCompile() {
      unHandleDimensions();
      cljs.user = null;
      viewport.innerHTML = '';
    }, handleDimensions);
  }

  function evalEditorCode() {
    evalCljs(getDefaultDefs() + editor.getValue(), unHandleDimensions, handleDimensions);
  }

  function handleDimensions() {
    cljs.user.RENDERER &&
    [THREE.CanvasRenderer, THREE.WebGLRenderer,
     THREE.WebGLRenderTarget, THREE.WebGLRenderTargetCube]
     .some(function(rendererConstructor) {
       return cljs.user.RENDERER instanceof rendererConstructor;
     }) &&
     (window.addEventListener('resize', resizeRenderer, false));

    cljs.user.CAMERA && cljs.user.CAMERA instanceof THREE.PerspectiveCamera &&
    (window.addEventListener('resize', updateAspectRatio, false))
  }

  function unHandleDimensions() {
    window.removeEventListener('resize', resizeRenderer, false);
    window.removeEventListener('resize', updateAspectRatio, false);
  }

  function resizeRenderer() {
    cljs.user.RENDERER.setSize(window.innerWidth / 2, window.innerHeight);
  }

  function updateAspectRatio() {
    cljs.user.CAMERA.aspect = window.innerWidth / 2 / window.innerHeight;
    cljs.user.CAMERA.updateProjectionMatrix();
  }

  function evalCljs(code, preEvalCallback, postEvalCallback) {

    jsbin_cljs.core.eval_expr(code, function(err, output) {
      if (err) {
        console.error(err);
      } else {
        preEvalCallback && preEvalCallback();
        try {
          eval(output);
        } catch (e) {
          console.error(e);
        }
        postEvalCallback && postEvalCallback();
      }
    });
  }

  function getDefaultValue() {

    return ";; Globals (initialized once): THREE, VIEWPORT, WIDTH, HEIGHT, MODELS, TEXTURES\n;; THREE is three.js namespace, read API docs http://threejs.org/docs/\n;; VIEWPORT is a reference to the viewport DOM element\n;; WIDTH & HEIGHT are dimensions of the viewport\n;; MODELS is JS array where uploaded models are stored\n;; Upload OBJ/Collada model and access it with (aget MODELS \"index number\")\n;; Upload image and get the texture with (aget TEXTURES \"index number\")\n;; Press Alt-Enter to evaluate\n\n(def scene (THREE.Scene.))\n(def camera (THREE.PerspectiveCamera. 75 (/ WIDTH HEIGHT) 0.1 1000))\n(def renderer (THREE.WebGLRenderer. #js {\"antialias\" true}))\n\n;; assign renderer instace to global var RENDERER\n;; and camera instance to global var CAMERA\n;; to let me handle window resizing for you\n(set! RENDERER renderer)\n(set! CAMERA camera)\n\n(.setPixelRatio renderer js.window.devicePixelRatio)\n(.setSize renderer WIDTH HEIGHT)\n\n(.appendChild VIEWPORT renderer.domElement)\n\n(def geometry (THREE.BoxGeometry. 1 1 1))\n(def material (THREE.MeshBasicMaterial. #js {\"color\" 0x00ff00}))\n(def cube (THREE.Mesh. geometry material))\n\n(.add scene cube)\n\n(set! (.-z camera.position) 5)\n\n(defn animate []\n  (set! (.-x cube.rotation) (+ cube.rotation.x 0.01))\n  (set! (.-y cube.rotation) (+ cube.rotation.y 0.01)))\n\n(defn render []\n  ;; assign every call to js/requestAnimationFrame to global RAF var\n  ;; required to clean up render loop before each evaluation\n  (set! RAF (js/requestAnimationFrame render))\n  (animate)\n  (.render renderer scene camera))\n\n(render)";
  }

  document.querySelector('.share')
    .addEventListener('click', function() {
      var btn = this;
      scope.remote.set(scope.location.hash && scope.location.hash.match(/#(.*)/)[1], editor.getValue())
        .then(function(id) {
          scope.location.hash = id;
          btn.innerHTML = 'Saved! Copy URL from the address bar.'
          setTimeout(function() {
            btn.innerHTML = 'Share';
          }, 3000);
        })
        .catch(console.error.bind(console));
    }, false);

  scope._evalCljs = evalCljs;

})(window);
