(function(scope, undefined) {

  'use strict';

  var remote = new Firebase("https://cljs-three-pg.firebaseio.com/");
  scope._user = false;

  scope.remote = {

    get: function(id) {
      return new Promise(function(resolve, reject) {
        var req;

        if (scope._user) {
          req = remote.child('users').child(scope._user.uid).child('sheets').child(id);
        } else {
          req = remote.child('sheets').child(id);
        }

        req.once('value', function(res) {
          resolve(res.val());
        }, function(err) { reject(err); });
      });
    },

    getAll: function() {
      return new Promise(function(resolve, reject) {
        remote.child('users').child(scope._user.uid).child('sheets').once('value', function(res) {
          resolve(res.val());
        }, function(err) { reject(err); });
      });
    },

    set: function(hid, code) {
      return new Promise(function(resolve, reject) {
        var id = hid || guid(), req;

        if (scope._user) {
          req = remote.child('users').child(scope._user.uid).child('sheets').child(id);
        } else {
          req = remote.child('sheets').child(id);
        }

        req.set(code, function(err) {
          if (err) { reject(err); }
          resolve(id);
        });
      });
    },

    signIn: function() {
      return new Promise(function(resolve, reject) {
        remote.authWithOAuthPopup('github', function(err, authData) {
          if (err) { return reject(err); }
          scope._user = authData;
          resolve(authData);
        });
      });
    },

    signOut: function() {
      scope._user = false;
      return Promise.resolve(remote.unauth());
    },

    checkAuth: function() {
      return new Promise(function(resolve) {
        remote.onAuth(function check(user) {
          remote.offAuth(check);
          scope._user = user;
          resolve(user);
        });
      });
    },

    addUser: function(uid, info) {
      remote.child('users').child(uid).child('info').set(info);
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
