// Compiled by ClojureScript 1.7.28 {}
goog.provide('threejs_cljs_pg.core');
goog.require('cljs.core');
goog.require('cljs.js');
goog.require('cljs.tools.reader');
cljs.core.enable_console_print_BANG_.call(null);
window.cljs.user = {};
threejs_cljs_pg.core.st = cljs.js.empty_state.call(null);
threejs_cljs_pg.core.eval_expr = (function threejs_cljs_pg$core$eval_expr(source,cb){
return cljs.js.compile_str.call(null,threejs_cljs_pg.core.st,source,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"source-map","source-map",1706252311),true], null),(function (p__25081){
var map__25082 = p__25081;
var map__25082__$1 = ((((!((map__25082 == null)))?((((map__25082.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25082.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25082):map__25082);
var error = cljs.core.get.call(null,map__25082__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__25082__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.not.call(null,error)){
return cb.call(null,null,value);
} else {
return cb.call(null,error.cause.stack);
}
}));
});
goog.exportSymbol('threejs_cljs_pg.core.eval_expr', threejs_cljs_pg.core.eval_expr);

//# sourceMappingURL=core.js.map