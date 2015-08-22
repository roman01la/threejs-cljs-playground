// Compiled by ClojureScript 1.7.28 {}
goog.provide('threejs_cljs_pg.remote');
goog.require('cljs.core');
threejs_cljs_pg.remote.remote = (new Firebase("https://cljs-three-pg.firebaseio.com/"));
threejs_cljs_pg.remote.user = cljs.core.atom.call(null,null);
threejs_cljs_pg.remote.f_child = (function threejs_cljs_pg$remote$f_child(){
var args__17528__auto__ = [];
var len__17521__auto___18859 = arguments.length;
var i__17522__auto___18860 = (0);
while(true){
if((i__17522__auto___18860 < len__17521__auto___18859)){
args__17528__auto__.push((arguments[i__17522__auto___18860]));

var G__18861 = (i__17522__auto___18860 + (1));
i__17522__auto___18860 = G__18861;
continue;
} else {
}
break;
}

var argseq__17529__auto__ = ((((2) < args__17528__auto__.length))?(new cljs.core.IndexedSeq(args__17528__auto__.slice((2)),(0))):null);
return threejs_cljs_pg.remote.f_child.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17529__auto__);
});

threejs_cljs_pg.remote.f_child.cljs$core$IFn$_invoke$arity$variadic = (function (frb,fp,path){
var c = frb.child(fp);
var p = path;
while(true){
if(!(cljs.core.empty_QMARK_.call(null,p))){
var G__18862 = c.child(cljs.core.first.call(null,path));
var G__18863 = cljs.core.rest.call(null,p);
c = G__18862;
p = G__18863;
continue;
} else {
return c;
}
break;
}
});

threejs_cljs_pg.remote.f_child.cljs$lang$maxFixedArity = (2);

threejs_cljs_pg.remote.f_child.cljs$lang$applyTo = (function (seq18856){
var G__18857 = cljs.core.first.call(null,seq18856);
var seq18856__$1 = cljs.core.next.call(null,seq18856);
var G__18858 = cljs.core.first.call(null,seq18856__$1);
var seq18856__$2 = cljs.core.next.call(null,seq18856__$1);
return threejs_cljs_pg.remote.f_child.cljs$core$IFn$_invoke$arity$variadic(G__18857,G__18858,seq18856__$2);
});
threejs_cljs_pg.remote.get_demo = (function threejs_cljs_pg$remote$get_demo(id){
return (new Promise((function (res,rej){
return (((cljs.core.deref.call(null,threejs_cljs_pg.remote.user) == null))?threejs_cljs_pg.remote.f_child.call(null,threejs_cljs_pg.remote.remote,"sheets",id):threejs_cljs_pg.remote.f_child.call(null,threejs_cljs_pg.remote.remote,threejs_cljs_pg.remote.f_child.call(null,threejs_cljs_pg.remote.remote,"users",new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(threejs_cljs_pg.remote.user)),"sheets",id)).once("value",(function (r){
return res.call(null,r.val());
}),rej);
})));
});
threejs_cljs_pg.remote.sign_in = (function threejs_cljs_pg$remote$sign_in(){
return (new Promise((function (res,rej){
return threejs_cljs_pg.remote.remote.authWithOAuthPopup("github",(function (err,auth_data){
if((err == null)){
cljs.core.reset_BANG_.call(null,threejs_cljs_pg.remote.user,auth_data);

return res.call(null,auth_data);
} else {
return rej.call(null,err);
}
}));
})));
});
threejs_cljs_pg.remote.add_user = (function threejs_cljs_pg$remote$add_user(uid,info){
return threejs_cljs_pg.remote.f_child.call(null,threejs_cljs_pg.remote.remote,"users",uid,"info").set(info);
});

//# sourceMappingURL=remote.js.map?rel=1440251586164