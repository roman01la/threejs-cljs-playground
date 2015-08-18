(function(scope, undefined) {

  'use strict';

  var remote = new Firebase("https://cljs-three-pg.firebaseio.com/");

  scope.remote = {

    get: function(id) {
      return new Promise(function(resolve, reject) {
        remote.child('sheets/' + id).once('value', function(res) {
          resolve(res.val());
        }, function(err) { reject(err); });
      });
    },

    set: function(hid, code) {
      return new Promise(function(resolve, reject) {
        var id = hid || guid();
        remote.child('sheets/' + id).set(code, function(err) {
          if (err) {
            var nid = guid();
            remote.child('sheets/' + nid).set(code, function(err) {
              if (err) { return reject(err); }
              resolve(nid);
            });
          }
          resolve(id);
        });
      });
    }
  };

  function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

})(window);
