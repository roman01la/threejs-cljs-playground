// Compiled by ClojureScript 1.7.28 {:static-fns true, :optimize-constants true}
goog.provide('cljs.env');
goog.require('cljs.core');
cljs.env._STAR_compiler_STAR_ = null;
cljs.env.default_compiler_env = (function cljs$env$default_compiler_env(){
var args28000 = [];
var len__17521__auto___28004 = arguments.length;
var i__17522__auto___28005 = (0);
while(true){
if((i__17522__auto___28005 < len__17521__auto___28004)){
args28000.push((arguments[i__17522__auto___28005]));

var G__28006 = (i__17522__auto___28005 + (1));
i__17522__auto___28005 = G__28006;
continue;
} else {
}
break;
}

var G__28002 = args28000.length;
switch (G__28002) {
case 0:
return cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28000.length)].join('')));

}
});

cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$1 = (function (options){
var G__28003 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$name,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)], null)], null),cljs.core.constant$keyword$cljs$analyzer_SLASH_constant_DASH_table,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$options,options], null)], 0));
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28003) : cljs.core.atom.call(null,G__28003));
});

cljs.env.default_compiler_env.cljs$lang$maxFixedArity = 1;

//# sourceMappingURL=env.js.map?rel=1440458057909