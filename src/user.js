(function(scope, undefined) {

  'use strict';

  var signInBtn = document.querySelector('.login-btn');
  var chooseDemoSelect = document.querySelector('.choose-demo');

  chooseDemoSelect.addEventListener('change', function() {
    var id = chooseDemoSelect.value;
    if (id === 'none') { return; }
    remote.get(id)
      .then(function(code) {
        code && scope._editor.setValue(code);
        scope.location.hash = id;
      })
      .catch(console.error.bind(console));
  }, false);

  remote.checkAuth()
    .then(function(user) {
      if (user) {
        setupListeners(user);
        getAllSheets();
        chooseDemoSelect.hidden = false;
      }
      else { setupListeners(); }
      scope._init();
    })
    .catch(function() { setupListeners(); })

  function setupListeners(user) {
    if (user) {
      remote.addUser(user.uid, user.github.cachedUserProfile);
      signInBtn.children[0].innerHTML = user.github.username;
    }
    signInBtn.addEventListener('click', function() {
      if (scope._user) {
        remote.signOut()
          .then(function() {
            signInBtn.children[0].innerHTML = 'Sign in';
            chooseDemoSelect.hidden = true;
          })
          .catch(console.error.bind(console));
      } else {
        remote.signIn()
          .then(function(user) {
            remote.addUser(user.uid, user.github.cachedUserProfile);
            signInBtn.children[0].innerHTML = user.github.username;
            getAllSheets();
            chooseDemoSelect.hidden = false;
          })
          .catch(console.error.bind(console));
      }
    }, false);
  }

  function getAllSheets() {
    remote.getAll()
      .then(buildSelector)
      .catch(function(err) { console.log(err)});
  }

  function buildSelector(data) {
    chooseDemoSelect.innerHTML = '';
    chooseDemoSelect.innerHTML = '<option value="none">Your demos</option>';
    chooseDemoSelect.innerHTML += Object.keys(data).map(function(s) {
      return '<option value="'+s+'">'+s.slice(0, 5)+'</option>';
    }).join('');
  }

})(window);
