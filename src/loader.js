(function(scope, undefined) {

  'use strict';

  var objFile = document.querySelector('.obj-file');
  var objBtn = document.querySelector('.obj-btn');

  objFile.addEventListener('change', readOBJ.bind(null, parseOBJ), false);
  objBtn.addEventListener('click', function() {
    objFile.click();
  }, false);

  function readOBJ(callback, event) {
    var reader = new FileReader();
    reader.addEventListener('loadend', function(ent) {
      callback(ent.target.result);
    }, false);
    reader.readAsText(event.target.files[0]);
  }

  function parseOBJ(data) {
    cljs.user.MODELS_DATA.push(data);
    cljs.user.MODELS.push(THREE.OBJLoader.prototype.parse(data));
  }

})(window);
