(function(scope, undefined) {

  'use strict';

  document.querySelector('.obj-file')
    .addEventListener('change', readOBJ.bind(null, parseOBJ), false);

function readOBJ(callback, event) {
  var reader = new FileReader();
  reader.addEventListener('loadend', function(ent) {
    callback(ent.target.result);
  }, false);
  reader.readAsText(event.target.files[0]);
}

function parseOBJ(data) {
  cljs.user.MODELS.push(THREE.OBJLoader.prototype.parse(data));
}

})(window);
