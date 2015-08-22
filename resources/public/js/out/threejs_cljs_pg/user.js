// Compiled by ClojureScript 1.7.28 {}
goog.provide('threejs_cljs_pg.user');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('threejs_cljs_pg.remote');
threejs_cljs_pg.user.login_btn = goog.dom.getElementByClass("login-btn");
threejs_cljs_pg.user.login_btn.addEventListener("click",(function (evt){
return threejs_cljs_pg.remote.sign_in.call(null).then((function (user){
threejs_cljs_pg.remote.add_user.call(null,user.uid,user.github.cachedUserProfile);

return (threejs_cljs_pg.user.login_btn.children[(0)]).innerHTML = user.github.username;
}));
}),false);

//# sourceMappingURL=user.js.map?rel=1440252057422