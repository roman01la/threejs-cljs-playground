(function(scope, undefined) {

  'use strict';

  var viewport = document.querySelector('.viewport');
  var editorContainer = document.querySelector('.editor');

  var WIDTH = scope.innerWidth;
  var HEIGHT = scope.innerHeight;

  var STORAGE = 'THREE_JS_CLJS_STORAGE';

  var DEFAULT_DEFS = "(ns cljs.user)\n(def RAF)\n(def MODELS #js [])\n(def THREE (.-THREE js/window))\n(def VIEWPORT (.querySelector js.document \".viewport\"))\n(def WIDTH " + viewport.clientWidth + ")\n(def HEIGHT " + viewport.clientHeight + ")";

  function getDefaultDefs() {

    var defs = DEFAULT_DEFS, models;

    if (cljs.user.MODELS && cljs.user.MODELS.length) {
      scope._models = cljs.user.MODELS;
      defs = defs.replace(/\n\(def MODELS \#js \[\]\)/, '(def MODELS (.-_models js/window))');
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
    'Alt-Enter': function(instance){
      cancelAnimationFrame(cljs.user.RAF);
      evalCljs(getDefaultDefs() + instance.getValue(), function beforeEvalAfterCompile() {
        cljs.user = null;
        viewport.innerHTML = '';
      });
    }
  });

  editor.on('change', function(instance) {
    localStorage.setItem(STORAGE, instance.getValue());
  });

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

  function evalEditorCode() {
    evalCljs(getDefaultDefs() + editor.getValue());
  }

  function evalCljs(code, preEvalCallback) {

    jsbin_cljs.core.eval_expr(code, function(err, output) {
      if (err) {
        console.error(err);
      } else {
        preEvalCallback && preEvalCallback();
        eval(output);
      }
    });
  }

  function getDefaultValue() {

    return ";; Globals (initialized once): THREE, VIEWPORT, WIDTH, HEIGHT, MODELS\n;; THREE is three.js namespace, read API docs http://threejs.org/docs/\n;; VIEWPORT is a reference to the viewport DOM element\n;; WIDTH & HEIGHT are dimensions of the viewport\n;; MODELS is JS array where uploaded models are stored\n;; Upload OBJ model and access it with (aget MODELS \"index number\")\n;; Press Alt-Enter to evaluate\n\n(def scene (THREE.Scene.))\n(def camera (THREE.PerspectiveCamera. 75 (/ WIDTH HEIGHT) 0.1 1000))\n(def renderer (THREE.WebGLRenderer. #js {\"antialias\" true}))\n\n(.setPixelRatio renderer js.window.devicePixelRatio)\n(.setSize renderer WIDTH HEIGHT)\n\n(.appendChild VIEWPORT renderer.domElement)\n\n(def geometry (THREE.BoxGeometry. 1 1 1))\n(def material (THREE.MeshBasicMaterial. #js {\"color\" 0x00ff00}))\n(def cube (THREE.Mesh. geometry material))\n\n(.add scene cube)\n\n(set! (.-z camera.position) 5)\n\n(defn animate []\n  (set! (.-x cube.rotation) (+ cube.rotation.x 0.01))\n  (set! (.-y cube.rotation) (+ cube.rotation.y 0.01)))\n\n(defn render []\n  ;; assign every call to js/requestAnimationFrame to global RAF var\n  ;; required to clean up render loop before each evaluation\n  (set! RAF (js/requestAnimationFrame render))\n  (animate)\n  (.render renderer scene camera))\n\n(render)";
  }

  document.querySelector('.share')
    .addEventListener('click', function() {
      var btn = this;
      scope.remote.set(editor.getValue())
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
