(function(scope, undefined) {

  'use strict';

  var viewport = document.querySelector('.viewport');
  var editorContainer = document.querySelector('.editor');

  var WIDTH = scope.innerWidth;
  var HEIGHT = scope.innerHeight;

  var STORAGE = 'THREE_JS_CLJS_STORAGE';

  var DEFAULT_DEFS = "(def RAF)\n(def THREE (.-THREE js/window))\n(def VIEWPORT (.querySelector js.document \".viewport\"))\n(def WIDTH " + viewport.clientWidth + ")\n(def HEIGHT " + viewport.clientHeight + ")";

  var editor = CodeMirror(editorContainer, {
    value: localStorage.getItem(STORAGE) || getDefaultValue(),
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
      if (!cljs.user.RAF) {
        showError(123);
      } else {
        cancelAnimationFrame(cljs.user.RAF);
        evalCljs(instance.getValue(), function beforeEvalAfterCompile() {
          viewport.innerHTML = '';
        });
      }
    }
  });

  editor.on('change', function(instance) {
    localStorage.setItem(STORAGE, instance.getValue());
  });

  evalCljs(DEFAULT_DEFS);
  evalCljs(editor.getValue());

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

  function showError() {

     alert('Assign requestAnimationFrame ID to global RAF variable and reload: (set! RAF (js/requestAnimationFrame render))');
  }

  function getDefaultValue() {

    return ";; Globals (initialized once): THREE, VIEWPORT, WIDTH, HEIGHT\n;; Press Alt-Enter to evaluate\n\n(def scene (THREE.Scene.))\n(def camera (THREE.PerspectiveCamera. 75 (/ WIDTH HEIGHT) 0.1 1000))\n(def renderer (THREE.WebGLRenderer. #js {\"antialias\" true}))\n\n(.setPixelRatio renderer js.window.devicePixelRatio)\n(.setSize renderer WIDTH HEIGHT)\n\n(.appendChild VIEWPORT renderer.domElement)\n\n(def geometry (THREE.BoxGeometry. 1 1 1))\n(def material (THREE.MeshBasicMaterial. #js {\"color\" 0x00ff00}))\n(def cube (THREE.Mesh. geometry material))\n\n(.add scene cube)\n\n(set! (.-z camera.position) 5)\n\n(defn animate []\n  (set! (.-x cube.rotation) (+ cube.rotation.x 0.01))\n  (set! (.-y cube.rotation) (+ cube.rotation.y 0.01)))\n\n(defn render []\n  (js/requestAnimationFrame render)\n  (animate)\n  (.render renderer scene camera))\n\n(render)";
  }

})(window);
