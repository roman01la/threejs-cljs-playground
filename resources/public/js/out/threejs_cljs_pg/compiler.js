// Compiled by ClojureScript 1.7.28 {}
goog.provide('threejs_cljs_pg.compiler');
goog.require('cljs.core');
goog.require('cljs.js');
goog.require('cljs.tools.reader');
threejs_cljs_pg.compiler.st = cljs.js.empty_state.call(null);
threejs_cljs_pg.compiler.eval_expr = (function threejs_cljs_pg$compiler$eval_expr(source,cb){
return cljs.js.compile_str.call(null,threejs_cljs_pg.compiler.st,source,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"source-map","source-map",1706252311),true], null),(function (p__21419){
var map__21420 = p__21419;
var map__21420__$1 = ((((!((map__21420 == null)))?((((map__21420.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21420.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21420):map__21420);
var error = cljs.core.get.call(null,map__21420__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__21420__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.not.call(null,error)){
return cb.call(null,null,value);
} else {
return cb.call(null,error.cause.stack);
}
}));
});

//# sourceMappingURL=compiler.js.map?rel=1440195085127