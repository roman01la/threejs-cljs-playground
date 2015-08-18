(function(scope, undefined) {

  'use strict';

  var loadBar = document.querySelector('.load-bar');

  var objFile = document.querySelector('.obj-file');
  var objBtn = document.querySelector('.obj-btn');
  var colladaFile = document.querySelector('.collada-file');
  var colladaBtn = document.querySelector('.collada-btn');
  var textureFile = document.querySelector('.texture-file');
  var textureBtn = document.querySelector('.texture-btn');

  document.querySelector('.upload-btn')
    .addEventListener('click', function() {
      loadBar.hidden = !loadBar.hidden;
    }, false);

  objFile.addEventListener('change', readFile.bind(null, parseOBJ, 'text'), false);
  colladaFile.addEventListener('change', readFile.bind(null, parseCollada, 'text'), false);
  textureFile.addEventListener('change', readFile.bind(null, loadTexture, 'url'), false);

  objBtn.addEventListener('click', function() {
    objFile.click();
  }, false);

  colladaBtn.addEventListener('click', function() {
    colladaFile.click();
  }, false);

  textureBtn.addEventListener('click', function() {
    textureFile.click();
  }, false);

  function readFile(callback, format, event) {
    var reader = new FileReader();
    reader.addEventListener('loadend', function(ent) {
      callback(ent.target.result);
    }, false);
    if (format === 'text') {
      reader.readAsText(event.target.files[0]);
    } else if (format === 'url') {
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  function parseOBJ(data) {
    cljs.user.MODELS_DATA.push({ type: 'obj', data: data });
    cljs.user.MODELS.push({ type: 'obj', data: THREE.OBJLoader.prototype.parse(data) });
  }

  function parseCollada(data) {
    var loader = new THREE.ColladaLoader();
    var fragment = document.createElement('div');
    fragment.innerHTML = data;
    var xmlData = fragment.children[0];
    loader.parse(xmlData, function(model) {
      cljs.user.MODELS_DATA.push({ type: 'collada', data: xmlData });
      cljs.user.MODELS.push({ type: 'collada', data: model });
    });
  }

  function loadTexture(url) {
    var img = document.createElement('img');
    img.addEventListener('load', function() {
      var texture = new THREE.Texture(img);
      texture.needsUpdate = true;
      cljs.user.TEXTURES_DATA.push(img);
      cljs.user.TEXTURES.push(texture);
    }, false);
    img.src = url;
  }

})(window);
