(function(scope, undefined) {

  'use strict';

  var canvas, canvasStyle;
  var viewport = document.querySelector('.viewport');
  var editorContainer = document.querySelector('.editor');

  var WIDTH = window.innerWidth;
  var HEIGHT = window.innerHeight;

  var STORAGE = 'THREE_JS_CLJS_STORAGE';

  var DEFAULT_DEFS = `
    (def THREE (.-THREE js/window))
    (def VIEWPORT (.querySelector js.document ".viewport"))
    (def WIDTH ${viewport.clientWidth})
    (def HEIGHT ${viewport.clientHeight})
    `;

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
      evalCljs(
        `(def WIDTH ${viewport.clientWidth})
        (def HEIGHT ${viewport.clientHeight})`, null,
        function() {
          evalCljs(instance.getValue(), function beforeEvalAfterCompile() {
            viewport.innerHTML = '';
          });
        });
    }
  });

  editor.on('change', function(instance) {
    localStorage.setItem(STORAGE, instance.getValue());
  });

  appendResizer(editorContainer, viewport);

  window.addEventListener('resize', onResize, false);

  evalCljs(DEFAULT_DEFS);
  evalCljs(editor.getValue());

  function evalCljs(code, callback, cb) {

    jsbin_cljs.core.eval_expr(code, function(err, output) {
      if (err) {
        console.error(err);
      } else {
        callback && callback();
        eval(output);
        cb && cb();
      }
    });
  }

  function onResize() {

    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;

    resizeViewport(WIDTH, HEIGHT);
  }

  function resizeViewport(w, h) {

    if (!canvas) {
      canvas = viewport.querySelector('canvas');
      canvasStyle = canvas.style;
    }

    var ratio = canvas.width / parseFloat(canvasStyle.width);

    var canvasNewWidth = w - editorContainer.clientWidth;

    viewport.style.width = canvasNewWidth + 'px';

    canvasStyle.width = canvasNewWidth + 'px';
    canvasStyle.height = h + 'px';

    canvas.width = canvasNewWidth * ratio;
    canvas.height = h * ratio;
  }

  function appendResizer(editorContainer, viewportContainer) {

    var resizer = document.createElement('div');
    resizer.classList.add('resizer');
    editorContainer.appendChild(resizer);

    var editorContainerStyle = editorContainer.style;
    var viewportContainerStyle = viewportContainer.style;

    interact('.editor')
      .resizable({
         edges: { right: true }
       })
       .on('resizemove', function(event) {

         if (!canvas) {
           canvas = viewport.querySelector('canvas');
           canvasStyle = canvas.style;
         }

         var x = (parseFloat(editorContainer.getAttribute('data-x')) || 0);
         editorContainerStyle.width  = event.rect.width + 'px';

         viewportContainerStyle.width = WIDTH - event.rect.width + 'px';

         resizeViewport(WIDTH, HEIGHT);
       });
  }

  function getDefaultValue() {

    return `;; Globals (initialized once): THREE, VIEWPORT, WIDTH, HEIGHT
;; Press Alt-Enter to evaluate

(def scene (THREE.Scene.))
(def camera (THREE.PerspectiveCamera. 75 (/ WIDTH HEIGHT) 0.1 1000))
(def renderer (THREE.WebGLRenderer. #js {"antialias" true}))

(.setPixelRatio renderer js.window.devicePixelRatio)
(.setSize renderer WIDTH HEIGHT)

(.appendChild VIEWPORT renderer.domElement)

(def geometry (THREE.BoxGeometry. 1 1 1))
(def material (THREE.MeshBasicMaterial. #js {"color" 0x00ff00}))
(def cube (THREE.Mesh. geometry material))

(.add scene cube)

(set! (.-z camera.position) 5)

(defn animate []
  (set! (.-x cube.rotation) (+ cube.rotation.x 0.01))
  (set! (.-y cube.rotation) (+ cube.rotation.y 0.01)))

(defn render []
  (js/requestAnimationFrame render)
  (animate)
  (.render renderer scene camera))

(render)`;
  }

})(window);
