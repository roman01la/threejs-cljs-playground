// Compiled by ClojureScript 1.7.28 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__26886){
var vec__26887 = p__26886;
var i = cljs.core.nth.call(null,vec__26887,(0),null);
var v = cljs.core.nth.call(null,vec__26887,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__26889 = seg;
var gcol = cljs.core.nth.call(null,vec__26889,(0),null);
var source = cljs.core.nth.call(null,vec__26889,(1),null);
var line = cljs.core.nth.call(null,vec__26889,(2),null);
var col = cljs.core.nth.call(null,vec__26889,(3),null);
var name = cljs.core.nth.call(null,vec__26889,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__4425__auto__)){
var name__$1 = temp__4425__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__26892 = seg;
var gcol = cljs.core.nth.call(null,vec__26892,(0),null);
var source = cljs.core.nth.call(null,vec__26892,(1),null);
var line = cljs.core.nth.call(null,vec__26892,(2),null);
var col = cljs.core.nth.call(null,vec__26892,(3),null);
var name = cljs.core.nth.call(null,vec__26892,(4),null);
var vec__26893 = relseg;
var rgcol = cljs.core.nth.call(null,vec__26893,(0),null);
var rsource = cljs.core.nth.call(null,vec__26893,(1),null);
var rline = cljs.core.nth.call(null,vec__26893,(2),null);
var rcol = cljs.core.nth.call(null,vec__26893,(3),null);
var rname = cljs.core.nth.call(null,vec__26893,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__16482__auto__ = source;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__16482__auto__ = line;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__16482__auto__ = col;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__16482__auto__ = name;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 * update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__26896 = segmap;
var map__26896__$1 = ((((!((map__26896 == null)))?((((map__26896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26896):map__26896);
var gcol = cljs.core.get.call(null,map__26896__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__26896__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__26896__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__26896__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__26896__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__26896,map__26896__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__26896,map__26896__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__26896,map__26896__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__26896,map__26896__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__26896,map__26896__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__26896,map__26896__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 * mapping original ClojureScript source locations to the generated
 * JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(){
var args26898 = [];
var len__17521__auto___26902 = arguments.length;
var i__17522__auto___26903 = (0);
while(true){
if((i__17522__auto___26903 < len__17521__auto___26902)){
args26898.push((arguments[i__17522__auto___26903]));

var G__26904 = (i__17522__auto___26903 + (1));
i__17522__auto___26903 = G__26904;
continue;
} else {
}
break;
}

var G__26900 = args26898.length;
switch (G__26900) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26898.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__26901 = (cljs.core.truth_(clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__26906 = cljs.core.next.call(null,segs__$1);
var G__26907 = nrelseg;
var G__26908 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__26906;
relseg__$1 = G__26907;
result__$1 = G__26908;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__26901,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__26901,(1),null);
var G__26909 = (gline + (1));
var G__26910 = cljs.core.next.call(null,lines__$1);
var G__26911 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__26912 = result__$1;
gline = G__26909;
lines__$1 = G__26910;
relseg = G__26911;
result = G__26912;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;
/**
 * Helper for decode. Take a source map and update it based on a
 * segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__26916 = segmap;
var map__26916__$1 = ((((!((map__26916 == null)))?((((map__26916.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26916.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26916):map__26916);
var gcol = cljs.core.get.call(null,map__26916__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__26916__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__26916__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__26916__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__26916__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__26916,map__26916__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__26916,map__26916__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__26913_SHARP_){
return cljs.core.conj.call(null,p1__26913_SHARP_,d__$1);
});})(map__26916,map__26916__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__26916,map__26916__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 * generated JavaScript source locations to the original
 * ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(){
var args26918 = [];
var len__17521__auto___26922 = arguments.length;
var i__17522__auto___26923 = (0);
while(true){
if((i__17522__auto___26923 < len__17521__auto___26922)){
args26918.push((arguments[i__17522__auto___26923]));

var G__26924 = (i__17522__auto___26923 + (1));
i__17522__auto___26923 = G__26924;
continue;
} else {
}
break;
}

var G__26920 = args26918.length;
switch (G__26920) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26918.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__26921 = (cljs.core.truth_(clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__26926 = cljs.core.next.call(null,segs__$1);
var G__26927 = nrelseg;
var G__26928 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__26926;
relseg__$1 = G__26927;
result__$1 = G__26928;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__26921,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__26921,(1),null);
var G__26929 = (gline + (1));
var G__26930 = cljs.core.next.call(null,lines__$1);
var G__26931 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__26932 = result__$1;
gline = G__26929;
lines__$1 = G__26930;
relseg = G__26931;
result = G__26932;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;
/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__26939){
var vec__26940 = p__26939;
var _ = cljs.core.nth.call(null,vec__26940,(0),null);
var source = cljs.core.nth.call(null,vec__26940,(1),null);
var line = cljs.core.nth.call(null,vec__26940,(2),null);
var col = cljs.core.nth.call(null,vec__26940,(3),null);
var name = cljs.core.nth.call(null,vec__26940,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__26941){
var vec__26942 = p__26941;
var gcol = cljs.core.nth.call(null,vec__26942,(0),null);
var sidx = cljs.core.nth.call(null,vec__26942,(1),null);
var line = cljs.core.nth.call(null,vec__26942,(2),null);
var col = cljs.core.nth.call(null,vec__26942,(3),null);
var name = cljs.core.nth.call(null,vec__26942,(4),null);
var seg = vec__26942;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__26942,gcol,sidx,line,col,name,seg,relseg){
return (function (p__26943){
var vec__26944 = p__26943;
var _ = cljs.core.nth.call(null,vec__26944,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__26944,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__26944,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__26944,(3),null);
var lname = cljs.core.nth.call(null,vec__26944,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__16482__auto__ = name;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__26942,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__16482__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__4423__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__4423__auto__)){
var name = temp__4423__auto__;
var idx = (function (){var temp__4423__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__4423__auto____$1)){
var idx = temp__4423__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__26998 = cljs.core.seq.call(null,infos);
var chunk__26999 = null;
var count__27000 = (0);
var i__27001 = (0);
while(true){
if((i__27001 < count__27000)){
var info = cljs.core._nth.call(null,chunk__26999,i__27001);
var segv_27048 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_27049 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_27050 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_27049 > (lc_27050 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__26998,chunk__26999,count__27000,i__27001,segv_27048,gline_27049,lc_27050,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_27049 - (lc_27050 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_27048], null));
});})(seq__26998,chunk__26999,count__27000,i__27001,segv_27048,gline_27049,lc_27050,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__26998,chunk__26999,count__27000,i__27001,segv_27048,gline_27049,lc_27050,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27049], null),cljs.core.conj,segv_27048);
});})(seq__26998,chunk__26999,count__27000,i__27001,segv_27048,gline_27049,lc_27050,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__27051 = seq__26998;
var G__27052 = chunk__26999;
var G__27053 = count__27000;
var G__27054 = (i__27001 + (1));
seq__26998 = G__27051;
chunk__26999 = G__27052;
count__27000 = G__27053;
i__27001 = G__27054;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26998);
if(temp__4425__auto__){
var seq__26998__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26998__$1)){
var c__17266__auto__ = cljs.core.chunk_first.call(null,seq__26998__$1);
var G__27055 = cljs.core.chunk_rest.call(null,seq__26998__$1);
var G__27056 = c__17266__auto__;
var G__27057 = cljs.core.count.call(null,c__17266__auto__);
var G__27058 = (0);
seq__26998 = G__27055;
chunk__26999 = G__27056;
count__27000 = G__27057;
i__27001 = G__27058;
continue;
} else {
var info = cljs.core.first.call(null,seq__26998__$1);
var segv_27059 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_27060 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_27061 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_27060 > (lc_27061 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__26998,chunk__26999,count__27000,i__27001,segv_27059,gline_27060,lc_27061,info,seq__26998__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_27060 - (lc_27061 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_27059], null));
});})(seq__26998,chunk__26999,count__27000,i__27001,segv_27059,gline_27060,lc_27061,info,seq__26998__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__26998,chunk__26999,count__27000,i__27001,segv_27059,gline_27060,lc_27061,info,seq__26998__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27060], null),cljs.core.conj,segv_27059);
});})(seq__26998,chunk__26999,count__27000,i__27001,segv_27059,gline_27060,lc_27061,info,seq__26998__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__27062 = cljs.core.next.call(null,seq__26998__$1);
var G__27063 = null;
var G__27064 = (0);
var G__27065 = (0);
seq__26998 = G__27062;
chunk__26999 = G__27063;
count__27000 = G__27064;
i__27001 = G__27065;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__27002_27066 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__27003_27067 = null;
var count__27004_27068 = (0);
var i__27005_27069 = (0);
while(true){
if((i__27005_27069 < count__27004_27068)){
var vec__27006_27070 = cljs.core._nth.call(null,chunk__27003_27067,i__27005_27069);
var source_idx_27071 = cljs.core.nth.call(null,vec__27006_27070,(0),null);
var vec__27007_27072 = cljs.core.nth.call(null,vec__27006_27070,(1),null);
var __27073 = cljs.core.nth.call(null,vec__27007_27072,(0),null);
var lines_27074__$1 = cljs.core.nth.call(null,vec__27007_27072,(1),null);
var seq__27008_27075 = cljs.core.seq.call(null,lines_27074__$1);
var chunk__27009_27076 = null;
var count__27010_27077 = (0);
var i__27011_27078 = (0);
while(true){
if((i__27011_27078 < count__27010_27077)){
var vec__27012_27079 = cljs.core._nth.call(null,chunk__27009_27076,i__27011_27078);
var line_27080 = cljs.core.nth.call(null,vec__27012_27079,(0),null);
var cols_27081 = cljs.core.nth.call(null,vec__27012_27079,(1),null);
var seq__27013_27082 = cljs.core.seq.call(null,cols_27081);
var chunk__27014_27083 = null;
var count__27015_27084 = (0);
var i__27016_27085 = (0);
while(true){
if((i__27016_27085 < count__27015_27084)){
var vec__27017_27086 = cljs.core._nth.call(null,chunk__27014_27083,i__27016_27085);
var col_27087 = cljs.core.nth.call(null,vec__27017_27086,(0),null);
var infos_27088 = cljs.core.nth.call(null,vec__27017_27086,(1),null);
encode_cols.call(null,infos_27088,source_idx_27071,line_27080,col_27087);

var G__27089 = seq__27013_27082;
var G__27090 = chunk__27014_27083;
var G__27091 = count__27015_27084;
var G__27092 = (i__27016_27085 + (1));
seq__27013_27082 = G__27089;
chunk__27014_27083 = G__27090;
count__27015_27084 = G__27091;
i__27016_27085 = G__27092;
continue;
} else {
var temp__4425__auto___27093 = cljs.core.seq.call(null,seq__27013_27082);
if(temp__4425__auto___27093){
var seq__27013_27094__$1 = temp__4425__auto___27093;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27013_27094__$1)){
var c__17266__auto___27095 = cljs.core.chunk_first.call(null,seq__27013_27094__$1);
var G__27096 = cljs.core.chunk_rest.call(null,seq__27013_27094__$1);
var G__27097 = c__17266__auto___27095;
var G__27098 = cljs.core.count.call(null,c__17266__auto___27095);
var G__27099 = (0);
seq__27013_27082 = G__27096;
chunk__27014_27083 = G__27097;
count__27015_27084 = G__27098;
i__27016_27085 = G__27099;
continue;
} else {
var vec__27018_27100 = cljs.core.first.call(null,seq__27013_27094__$1);
var col_27101 = cljs.core.nth.call(null,vec__27018_27100,(0),null);
var infos_27102 = cljs.core.nth.call(null,vec__27018_27100,(1),null);
encode_cols.call(null,infos_27102,source_idx_27071,line_27080,col_27101);

var G__27103 = cljs.core.next.call(null,seq__27013_27094__$1);
var G__27104 = null;
var G__27105 = (0);
var G__27106 = (0);
seq__27013_27082 = G__27103;
chunk__27014_27083 = G__27104;
count__27015_27084 = G__27105;
i__27016_27085 = G__27106;
continue;
}
} else {
}
}
break;
}

var G__27107 = seq__27008_27075;
var G__27108 = chunk__27009_27076;
var G__27109 = count__27010_27077;
var G__27110 = (i__27011_27078 + (1));
seq__27008_27075 = G__27107;
chunk__27009_27076 = G__27108;
count__27010_27077 = G__27109;
i__27011_27078 = G__27110;
continue;
} else {
var temp__4425__auto___27111 = cljs.core.seq.call(null,seq__27008_27075);
if(temp__4425__auto___27111){
var seq__27008_27112__$1 = temp__4425__auto___27111;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27008_27112__$1)){
var c__17266__auto___27113 = cljs.core.chunk_first.call(null,seq__27008_27112__$1);
var G__27114 = cljs.core.chunk_rest.call(null,seq__27008_27112__$1);
var G__27115 = c__17266__auto___27113;
var G__27116 = cljs.core.count.call(null,c__17266__auto___27113);
var G__27117 = (0);
seq__27008_27075 = G__27114;
chunk__27009_27076 = G__27115;
count__27010_27077 = G__27116;
i__27011_27078 = G__27117;
continue;
} else {
var vec__27019_27118 = cljs.core.first.call(null,seq__27008_27112__$1);
var line_27119 = cljs.core.nth.call(null,vec__27019_27118,(0),null);
var cols_27120 = cljs.core.nth.call(null,vec__27019_27118,(1),null);
var seq__27020_27121 = cljs.core.seq.call(null,cols_27120);
var chunk__27021_27122 = null;
var count__27022_27123 = (0);
var i__27023_27124 = (0);
while(true){
if((i__27023_27124 < count__27022_27123)){
var vec__27024_27125 = cljs.core._nth.call(null,chunk__27021_27122,i__27023_27124);
var col_27126 = cljs.core.nth.call(null,vec__27024_27125,(0),null);
var infos_27127 = cljs.core.nth.call(null,vec__27024_27125,(1),null);
encode_cols.call(null,infos_27127,source_idx_27071,line_27119,col_27126);

var G__27128 = seq__27020_27121;
var G__27129 = chunk__27021_27122;
var G__27130 = count__27022_27123;
var G__27131 = (i__27023_27124 + (1));
seq__27020_27121 = G__27128;
chunk__27021_27122 = G__27129;
count__27022_27123 = G__27130;
i__27023_27124 = G__27131;
continue;
} else {
var temp__4425__auto___27132__$1 = cljs.core.seq.call(null,seq__27020_27121);
if(temp__4425__auto___27132__$1){
var seq__27020_27133__$1 = temp__4425__auto___27132__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27020_27133__$1)){
var c__17266__auto___27134 = cljs.core.chunk_first.call(null,seq__27020_27133__$1);
var G__27135 = cljs.core.chunk_rest.call(null,seq__27020_27133__$1);
var G__27136 = c__17266__auto___27134;
var G__27137 = cljs.core.count.call(null,c__17266__auto___27134);
var G__27138 = (0);
seq__27020_27121 = G__27135;
chunk__27021_27122 = G__27136;
count__27022_27123 = G__27137;
i__27023_27124 = G__27138;
continue;
} else {
var vec__27025_27139 = cljs.core.first.call(null,seq__27020_27133__$1);
var col_27140 = cljs.core.nth.call(null,vec__27025_27139,(0),null);
var infos_27141 = cljs.core.nth.call(null,vec__27025_27139,(1),null);
encode_cols.call(null,infos_27141,source_idx_27071,line_27119,col_27140);

var G__27142 = cljs.core.next.call(null,seq__27020_27133__$1);
var G__27143 = null;
var G__27144 = (0);
var G__27145 = (0);
seq__27020_27121 = G__27142;
chunk__27021_27122 = G__27143;
count__27022_27123 = G__27144;
i__27023_27124 = G__27145;
continue;
}
} else {
}
}
break;
}

var G__27146 = cljs.core.next.call(null,seq__27008_27112__$1);
var G__27147 = null;
var G__27148 = (0);
var G__27149 = (0);
seq__27008_27075 = G__27146;
chunk__27009_27076 = G__27147;
count__27010_27077 = G__27148;
i__27011_27078 = G__27149;
continue;
}
} else {
}
}
break;
}

var G__27150 = seq__27002_27066;
var G__27151 = chunk__27003_27067;
var G__27152 = count__27004_27068;
var G__27153 = (i__27005_27069 + (1));
seq__27002_27066 = G__27150;
chunk__27003_27067 = G__27151;
count__27004_27068 = G__27152;
i__27005_27069 = G__27153;
continue;
} else {
var temp__4425__auto___27154 = cljs.core.seq.call(null,seq__27002_27066);
if(temp__4425__auto___27154){
var seq__27002_27155__$1 = temp__4425__auto___27154;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27002_27155__$1)){
var c__17266__auto___27156 = cljs.core.chunk_first.call(null,seq__27002_27155__$1);
var G__27157 = cljs.core.chunk_rest.call(null,seq__27002_27155__$1);
var G__27158 = c__17266__auto___27156;
var G__27159 = cljs.core.count.call(null,c__17266__auto___27156);
var G__27160 = (0);
seq__27002_27066 = G__27157;
chunk__27003_27067 = G__27158;
count__27004_27068 = G__27159;
i__27005_27069 = G__27160;
continue;
} else {
var vec__27026_27161 = cljs.core.first.call(null,seq__27002_27155__$1);
var source_idx_27162 = cljs.core.nth.call(null,vec__27026_27161,(0),null);
var vec__27027_27163 = cljs.core.nth.call(null,vec__27026_27161,(1),null);
var __27164 = cljs.core.nth.call(null,vec__27027_27163,(0),null);
var lines_27165__$1 = cljs.core.nth.call(null,vec__27027_27163,(1),null);
var seq__27028_27166 = cljs.core.seq.call(null,lines_27165__$1);
var chunk__27029_27167 = null;
var count__27030_27168 = (0);
var i__27031_27169 = (0);
while(true){
if((i__27031_27169 < count__27030_27168)){
var vec__27032_27170 = cljs.core._nth.call(null,chunk__27029_27167,i__27031_27169);
var line_27171 = cljs.core.nth.call(null,vec__27032_27170,(0),null);
var cols_27172 = cljs.core.nth.call(null,vec__27032_27170,(1),null);
var seq__27033_27173 = cljs.core.seq.call(null,cols_27172);
var chunk__27034_27174 = null;
var count__27035_27175 = (0);
var i__27036_27176 = (0);
while(true){
if((i__27036_27176 < count__27035_27175)){
var vec__27037_27177 = cljs.core._nth.call(null,chunk__27034_27174,i__27036_27176);
var col_27178 = cljs.core.nth.call(null,vec__27037_27177,(0),null);
var infos_27179 = cljs.core.nth.call(null,vec__27037_27177,(1),null);
encode_cols.call(null,infos_27179,source_idx_27162,line_27171,col_27178);

var G__27180 = seq__27033_27173;
var G__27181 = chunk__27034_27174;
var G__27182 = count__27035_27175;
var G__27183 = (i__27036_27176 + (1));
seq__27033_27173 = G__27180;
chunk__27034_27174 = G__27181;
count__27035_27175 = G__27182;
i__27036_27176 = G__27183;
continue;
} else {
var temp__4425__auto___27184__$1 = cljs.core.seq.call(null,seq__27033_27173);
if(temp__4425__auto___27184__$1){
var seq__27033_27185__$1 = temp__4425__auto___27184__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27033_27185__$1)){
var c__17266__auto___27186 = cljs.core.chunk_first.call(null,seq__27033_27185__$1);
var G__27187 = cljs.core.chunk_rest.call(null,seq__27033_27185__$1);
var G__27188 = c__17266__auto___27186;
var G__27189 = cljs.core.count.call(null,c__17266__auto___27186);
var G__27190 = (0);
seq__27033_27173 = G__27187;
chunk__27034_27174 = G__27188;
count__27035_27175 = G__27189;
i__27036_27176 = G__27190;
continue;
} else {
var vec__27038_27191 = cljs.core.first.call(null,seq__27033_27185__$1);
var col_27192 = cljs.core.nth.call(null,vec__27038_27191,(0),null);
var infos_27193 = cljs.core.nth.call(null,vec__27038_27191,(1),null);
encode_cols.call(null,infos_27193,source_idx_27162,line_27171,col_27192);

var G__27194 = cljs.core.next.call(null,seq__27033_27185__$1);
var G__27195 = null;
var G__27196 = (0);
var G__27197 = (0);
seq__27033_27173 = G__27194;
chunk__27034_27174 = G__27195;
count__27035_27175 = G__27196;
i__27036_27176 = G__27197;
continue;
}
} else {
}
}
break;
}

var G__27198 = seq__27028_27166;
var G__27199 = chunk__27029_27167;
var G__27200 = count__27030_27168;
var G__27201 = (i__27031_27169 + (1));
seq__27028_27166 = G__27198;
chunk__27029_27167 = G__27199;
count__27030_27168 = G__27200;
i__27031_27169 = G__27201;
continue;
} else {
var temp__4425__auto___27202__$1 = cljs.core.seq.call(null,seq__27028_27166);
if(temp__4425__auto___27202__$1){
var seq__27028_27203__$1 = temp__4425__auto___27202__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27028_27203__$1)){
var c__17266__auto___27204 = cljs.core.chunk_first.call(null,seq__27028_27203__$1);
var G__27205 = cljs.core.chunk_rest.call(null,seq__27028_27203__$1);
var G__27206 = c__17266__auto___27204;
var G__27207 = cljs.core.count.call(null,c__17266__auto___27204);
var G__27208 = (0);
seq__27028_27166 = G__27205;
chunk__27029_27167 = G__27206;
count__27030_27168 = G__27207;
i__27031_27169 = G__27208;
continue;
} else {
var vec__27039_27209 = cljs.core.first.call(null,seq__27028_27203__$1);
var line_27210 = cljs.core.nth.call(null,vec__27039_27209,(0),null);
var cols_27211 = cljs.core.nth.call(null,vec__27039_27209,(1),null);
var seq__27040_27212 = cljs.core.seq.call(null,cols_27211);
var chunk__27041_27213 = null;
var count__27042_27214 = (0);
var i__27043_27215 = (0);
while(true){
if((i__27043_27215 < count__27042_27214)){
var vec__27044_27216 = cljs.core._nth.call(null,chunk__27041_27213,i__27043_27215);
var col_27217 = cljs.core.nth.call(null,vec__27044_27216,(0),null);
var infos_27218 = cljs.core.nth.call(null,vec__27044_27216,(1),null);
encode_cols.call(null,infos_27218,source_idx_27162,line_27210,col_27217);

var G__27219 = seq__27040_27212;
var G__27220 = chunk__27041_27213;
var G__27221 = count__27042_27214;
var G__27222 = (i__27043_27215 + (1));
seq__27040_27212 = G__27219;
chunk__27041_27213 = G__27220;
count__27042_27214 = G__27221;
i__27043_27215 = G__27222;
continue;
} else {
var temp__4425__auto___27223__$2 = cljs.core.seq.call(null,seq__27040_27212);
if(temp__4425__auto___27223__$2){
var seq__27040_27224__$1 = temp__4425__auto___27223__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27040_27224__$1)){
var c__17266__auto___27225 = cljs.core.chunk_first.call(null,seq__27040_27224__$1);
var G__27226 = cljs.core.chunk_rest.call(null,seq__27040_27224__$1);
var G__27227 = c__17266__auto___27225;
var G__27228 = cljs.core.count.call(null,c__17266__auto___27225);
var G__27229 = (0);
seq__27040_27212 = G__27226;
chunk__27041_27213 = G__27227;
count__27042_27214 = G__27228;
i__27043_27215 = G__27229;
continue;
} else {
var vec__27045_27230 = cljs.core.first.call(null,seq__27040_27224__$1);
var col_27231 = cljs.core.nth.call(null,vec__27045_27230,(0),null);
var infos_27232 = cljs.core.nth.call(null,vec__27045_27230,(1),null);
encode_cols.call(null,infos_27232,source_idx_27162,line_27210,col_27231);

var G__27233 = cljs.core.next.call(null,seq__27040_27224__$1);
var G__27234 = null;
var G__27235 = (0);
var G__27236 = (0);
seq__27040_27212 = G__27233;
chunk__27041_27213 = G__27234;
count__27042_27214 = G__27235;
i__27043_27215 = G__27236;
continue;
}
} else {
}
}
break;
}

var G__27237 = cljs.core.next.call(null,seq__27028_27203__$1);
var G__27238 = null;
var G__27239 = (0);
var G__27240 = (0);
seq__27028_27166 = G__27237;
chunk__27029_27167 = G__27238;
count__27030_27168 = G__27239;
i__27031_27169 = G__27240;
continue;
}
} else {
}
}
break;
}

var G__27241 = cljs.core.next.call(null,seq__27002_27155__$1);
var G__27242 = null;
var G__27243 = (0);
var G__27244 = (0);
seq__27002_27066 = G__27241;
chunk__27003_27067 = G__27242;
count__27004_27068 = G__27243;
i__27005_27069 = G__27244;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__27046 = {"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__26945_SHARP_){
return [cljs.core.str(p1__26945_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__26946_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__26946_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__26947_SHARP_){
return clojure.string.join.call(null,",",p1__26947_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))};
var G__27046__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))?(function (){var G__27047 = G__27046;
goog.object.set(G__27047,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__27047;
})():G__27046);
return G__27046__$1;
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__27250 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__27250,(0),null);
var col_map = cljs.core.nth.call(null,vec__27250,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__27251 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__27251,(0),null);
var infos = cljs.core.nth.call(null,vec__27251,(1),null);
var G__27255 = cljs.core.next.call(null,col_map_seq);
var G__27256 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__27251,col,infos,vec__27250,line,col_map){
return (function (v,p__27252){
var map__27253 = p__27252;
var map__27253__$1 = ((((!((map__27253 == null)))?((((map__27253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27253):map__27253);
var gline = cljs.core.get.call(null,map__27253__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__27253__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__27251,col,infos,vec__27250,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__27255;
new_cols = G__27256;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__27257 = cljs.core.next.call(null,line_map_seq);
var G__27258 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__27257;
new_lines = G__27258;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__27309_27359 = cljs.core.seq.call(null,reverse_map);
var chunk__27310_27360 = null;
var count__27311_27361 = (0);
var i__27312_27362 = (0);
while(true){
if((i__27312_27362 < count__27311_27361)){
var vec__27313_27363 = cljs.core._nth.call(null,chunk__27310_27360,i__27312_27362);
var line_27364 = cljs.core.nth.call(null,vec__27313_27363,(0),null);
var columns_27365 = cljs.core.nth.call(null,vec__27313_27363,(1),null);
var seq__27314_27366 = cljs.core.seq.call(null,columns_27365);
var chunk__27315_27367 = null;
var count__27316_27368 = (0);
var i__27317_27369 = (0);
while(true){
if((i__27317_27369 < count__27316_27368)){
var vec__27318_27370 = cljs.core._nth.call(null,chunk__27315_27367,i__27317_27369);
var column_27371 = cljs.core.nth.call(null,vec__27318_27370,(0),null);
var column_info_27372 = cljs.core.nth.call(null,vec__27318_27370,(1),null);
var seq__27319_27373 = cljs.core.seq.call(null,column_info_27372);
var chunk__27320_27374 = null;
var count__27321_27375 = (0);
var i__27322_27376 = (0);
while(true){
if((i__27322_27376 < count__27321_27375)){
var map__27323_27377 = cljs.core._nth.call(null,chunk__27320_27374,i__27322_27376);
var map__27323_27378__$1 = ((((!((map__27323_27377 == null)))?((((map__27323_27377.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27323_27377.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27323_27377):map__27323_27377);
var gline_27379 = cljs.core.get.call(null,map__27323_27378__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27380 = cljs.core.get.call(null,map__27323_27378__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27381 = cljs.core.get.call(null,map__27323_27378__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27379], null),cljs.core.fnil.call(null,((function (seq__27319_27373,chunk__27320_27374,count__27321_27375,i__27322_27376,seq__27314_27366,chunk__27315_27367,count__27316_27368,i__27317_27369,seq__27309_27359,chunk__27310_27360,count__27311_27361,i__27312_27362,map__27323_27377,map__27323_27378__$1,gline_27379,gcol_27380,name_27381,vec__27318_27370,column_27371,column_info_27372,vec__27313_27363,line_27364,columns_27365,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_27371], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27364,new cljs.core.Keyword(null,"col","col",-1959363084),column_27371,new cljs.core.Keyword(null,"name","name",1843675177),name_27381], null));
});})(seq__27319_27373,chunk__27320_27374,count__27321_27375,i__27322_27376,seq__27314_27366,chunk__27315_27367,count__27316_27368,i__27317_27369,seq__27309_27359,chunk__27310_27360,count__27311_27361,i__27312_27362,map__27323_27377,map__27323_27378__$1,gline_27379,gcol_27380,name_27381,vec__27318_27370,column_27371,column_info_27372,vec__27313_27363,line_27364,columns_27365,inverted))
,cljs.core.sorted_map.call(null)));

var G__27382 = seq__27319_27373;
var G__27383 = chunk__27320_27374;
var G__27384 = count__27321_27375;
var G__27385 = (i__27322_27376 + (1));
seq__27319_27373 = G__27382;
chunk__27320_27374 = G__27383;
count__27321_27375 = G__27384;
i__27322_27376 = G__27385;
continue;
} else {
var temp__4425__auto___27386 = cljs.core.seq.call(null,seq__27319_27373);
if(temp__4425__auto___27386){
var seq__27319_27387__$1 = temp__4425__auto___27386;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27319_27387__$1)){
var c__17266__auto___27388 = cljs.core.chunk_first.call(null,seq__27319_27387__$1);
var G__27389 = cljs.core.chunk_rest.call(null,seq__27319_27387__$1);
var G__27390 = c__17266__auto___27388;
var G__27391 = cljs.core.count.call(null,c__17266__auto___27388);
var G__27392 = (0);
seq__27319_27373 = G__27389;
chunk__27320_27374 = G__27390;
count__27321_27375 = G__27391;
i__27322_27376 = G__27392;
continue;
} else {
var map__27325_27393 = cljs.core.first.call(null,seq__27319_27387__$1);
var map__27325_27394__$1 = ((((!((map__27325_27393 == null)))?((((map__27325_27393.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27325_27393.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27325_27393):map__27325_27393);
var gline_27395 = cljs.core.get.call(null,map__27325_27394__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27396 = cljs.core.get.call(null,map__27325_27394__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27397 = cljs.core.get.call(null,map__27325_27394__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27395], null),cljs.core.fnil.call(null,((function (seq__27319_27373,chunk__27320_27374,count__27321_27375,i__27322_27376,seq__27314_27366,chunk__27315_27367,count__27316_27368,i__27317_27369,seq__27309_27359,chunk__27310_27360,count__27311_27361,i__27312_27362,map__27325_27393,map__27325_27394__$1,gline_27395,gcol_27396,name_27397,seq__27319_27387__$1,temp__4425__auto___27386,vec__27318_27370,column_27371,column_info_27372,vec__27313_27363,line_27364,columns_27365,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_27371], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27364,new cljs.core.Keyword(null,"col","col",-1959363084),column_27371,new cljs.core.Keyword(null,"name","name",1843675177),name_27397], null));
});})(seq__27319_27373,chunk__27320_27374,count__27321_27375,i__27322_27376,seq__27314_27366,chunk__27315_27367,count__27316_27368,i__27317_27369,seq__27309_27359,chunk__27310_27360,count__27311_27361,i__27312_27362,map__27325_27393,map__27325_27394__$1,gline_27395,gcol_27396,name_27397,seq__27319_27387__$1,temp__4425__auto___27386,vec__27318_27370,column_27371,column_info_27372,vec__27313_27363,line_27364,columns_27365,inverted))
,cljs.core.sorted_map.call(null)));

var G__27398 = cljs.core.next.call(null,seq__27319_27387__$1);
var G__27399 = null;
var G__27400 = (0);
var G__27401 = (0);
seq__27319_27373 = G__27398;
chunk__27320_27374 = G__27399;
count__27321_27375 = G__27400;
i__27322_27376 = G__27401;
continue;
}
} else {
}
}
break;
}

var G__27402 = seq__27314_27366;
var G__27403 = chunk__27315_27367;
var G__27404 = count__27316_27368;
var G__27405 = (i__27317_27369 + (1));
seq__27314_27366 = G__27402;
chunk__27315_27367 = G__27403;
count__27316_27368 = G__27404;
i__27317_27369 = G__27405;
continue;
} else {
var temp__4425__auto___27406 = cljs.core.seq.call(null,seq__27314_27366);
if(temp__4425__auto___27406){
var seq__27314_27407__$1 = temp__4425__auto___27406;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27314_27407__$1)){
var c__17266__auto___27408 = cljs.core.chunk_first.call(null,seq__27314_27407__$1);
var G__27409 = cljs.core.chunk_rest.call(null,seq__27314_27407__$1);
var G__27410 = c__17266__auto___27408;
var G__27411 = cljs.core.count.call(null,c__17266__auto___27408);
var G__27412 = (0);
seq__27314_27366 = G__27409;
chunk__27315_27367 = G__27410;
count__27316_27368 = G__27411;
i__27317_27369 = G__27412;
continue;
} else {
var vec__27327_27413 = cljs.core.first.call(null,seq__27314_27407__$1);
var column_27414 = cljs.core.nth.call(null,vec__27327_27413,(0),null);
var column_info_27415 = cljs.core.nth.call(null,vec__27327_27413,(1),null);
var seq__27328_27416 = cljs.core.seq.call(null,column_info_27415);
var chunk__27329_27417 = null;
var count__27330_27418 = (0);
var i__27331_27419 = (0);
while(true){
if((i__27331_27419 < count__27330_27418)){
var map__27332_27420 = cljs.core._nth.call(null,chunk__27329_27417,i__27331_27419);
var map__27332_27421__$1 = ((((!((map__27332_27420 == null)))?((((map__27332_27420.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27332_27420.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27332_27420):map__27332_27420);
var gline_27422 = cljs.core.get.call(null,map__27332_27421__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27423 = cljs.core.get.call(null,map__27332_27421__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27424 = cljs.core.get.call(null,map__27332_27421__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27422], null),cljs.core.fnil.call(null,((function (seq__27328_27416,chunk__27329_27417,count__27330_27418,i__27331_27419,seq__27314_27366,chunk__27315_27367,count__27316_27368,i__27317_27369,seq__27309_27359,chunk__27310_27360,count__27311_27361,i__27312_27362,map__27332_27420,map__27332_27421__$1,gline_27422,gcol_27423,name_27424,vec__27327_27413,column_27414,column_info_27415,seq__27314_27407__$1,temp__4425__auto___27406,vec__27313_27363,line_27364,columns_27365,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_27414], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27364,new cljs.core.Keyword(null,"col","col",-1959363084),column_27414,new cljs.core.Keyword(null,"name","name",1843675177),name_27424], null));
});})(seq__27328_27416,chunk__27329_27417,count__27330_27418,i__27331_27419,seq__27314_27366,chunk__27315_27367,count__27316_27368,i__27317_27369,seq__27309_27359,chunk__27310_27360,count__27311_27361,i__27312_27362,map__27332_27420,map__27332_27421__$1,gline_27422,gcol_27423,name_27424,vec__27327_27413,column_27414,column_info_27415,seq__27314_27407__$1,temp__4425__auto___27406,vec__27313_27363,line_27364,columns_27365,inverted))
,cljs.core.sorted_map.call(null)));

var G__27425 = seq__27328_27416;
var G__27426 = chunk__27329_27417;
var G__27427 = count__27330_27418;
var G__27428 = (i__27331_27419 + (1));
seq__27328_27416 = G__27425;
chunk__27329_27417 = G__27426;
count__27330_27418 = G__27427;
i__27331_27419 = G__27428;
continue;
} else {
var temp__4425__auto___27429__$1 = cljs.core.seq.call(null,seq__27328_27416);
if(temp__4425__auto___27429__$1){
var seq__27328_27430__$1 = temp__4425__auto___27429__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27328_27430__$1)){
var c__17266__auto___27431 = cljs.core.chunk_first.call(null,seq__27328_27430__$1);
var G__27432 = cljs.core.chunk_rest.call(null,seq__27328_27430__$1);
var G__27433 = c__17266__auto___27431;
var G__27434 = cljs.core.count.call(null,c__17266__auto___27431);
var G__27435 = (0);
seq__27328_27416 = G__27432;
chunk__27329_27417 = G__27433;
count__27330_27418 = G__27434;
i__27331_27419 = G__27435;
continue;
} else {
var map__27334_27436 = cljs.core.first.call(null,seq__27328_27430__$1);
var map__27334_27437__$1 = ((((!((map__27334_27436 == null)))?((((map__27334_27436.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27334_27436.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27334_27436):map__27334_27436);
var gline_27438 = cljs.core.get.call(null,map__27334_27437__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27439 = cljs.core.get.call(null,map__27334_27437__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27440 = cljs.core.get.call(null,map__27334_27437__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27438], null),cljs.core.fnil.call(null,((function (seq__27328_27416,chunk__27329_27417,count__27330_27418,i__27331_27419,seq__27314_27366,chunk__27315_27367,count__27316_27368,i__27317_27369,seq__27309_27359,chunk__27310_27360,count__27311_27361,i__27312_27362,map__27334_27436,map__27334_27437__$1,gline_27438,gcol_27439,name_27440,seq__27328_27430__$1,temp__4425__auto___27429__$1,vec__27327_27413,column_27414,column_info_27415,seq__27314_27407__$1,temp__4425__auto___27406,vec__27313_27363,line_27364,columns_27365,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_27414], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27364,new cljs.core.Keyword(null,"col","col",-1959363084),column_27414,new cljs.core.Keyword(null,"name","name",1843675177),name_27440], null));
});})(seq__27328_27416,chunk__27329_27417,count__27330_27418,i__27331_27419,seq__27314_27366,chunk__27315_27367,count__27316_27368,i__27317_27369,seq__27309_27359,chunk__27310_27360,count__27311_27361,i__27312_27362,map__27334_27436,map__27334_27437__$1,gline_27438,gcol_27439,name_27440,seq__27328_27430__$1,temp__4425__auto___27429__$1,vec__27327_27413,column_27414,column_info_27415,seq__27314_27407__$1,temp__4425__auto___27406,vec__27313_27363,line_27364,columns_27365,inverted))
,cljs.core.sorted_map.call(null)));

var G__27441 = cljs.core.next.call(null,seq__27328_27430__$1);
var G__27442 = null;
var G__27443 = (0);
var G__27444 = (0);
seq__27328_27416 = G__27441;
chunk__27329_27417 = G__27442;
count__27330_27418 = G__27443;
i__27331_27419 = G__27444;
continue;
}
} else {
}
}
break;
}

var G__27445 = cljs.core.next.call(null,seq__27314_27407__$1);
var G__27446 = null;
var G__27447 = (0);
var G__27448 = (0);
seq__27314_27366 = G__27445;
chunk__27315_27367 = G__27446;
count__27316_27368 = G__27447;
i__27317_27369 = G__27448;
continue;
}
} else {
}
}
break;
}

var G__27449 = seq__27309_27359;
var G__27450 = chunk__27310_27360;
var G__27451 = count__27311_27361;
var G__27452 = (i__27312_27362 + (1));
seq__27309_27359 = G__27449;
chunk__27310_27360 = G__27450;
count__27311_27361 = G__27451;
i__27312_27362 = G__27452;
continue;
} else {
var temp__4425__auto___27453 = cljs.core.seq.call(null,seq__27309_27359);
if(temp__4425__auto___27453){
var seq__27309_27454__$1 = temp__4425__auto___27453;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27309_27454__$1)){
var c__17266__auto___27455 = cljs.core.chunk_first.call(null,seq__27309_27454__$1);
var G__27456 = cljs.core.chunk_rest.call(null,seq__27309_27454__$1);
var G__27457 = c__17266__auto___27455;
var G__27458 = cljs.core.count.call(null,c__17266__auto___27455);
var G__27459 = (0);
seq__27309_27359 = G__27456;
chunk__27310_27360 = G__27457;
count__27311_27361 = G__27458;
i__27312_27362 = G__27459;
continue;
} else {
var vec__27336_27460 = cljs.core.first.call(null,seq__27309_27454__$1);
var line_27461 = cljs.core.nth.call(null,vec__27336_27460,(0),null);
var columns_27462 = cljs.core.nth.call(null,vec__27336_27460,(1),null);
var seq__27337_27463 = cljs.core.seq.call(null,columns_27462);
var chunk__27338_27464 = null;
var count__27339_27465 = (0);
var i__27340_27466 = (0);
while(true){
if((i__27340_27466 < count__27339_27465)){
var vec__27341_27467 = cljs.core._nth.call(null,chunk__27338_27464,i__27340_27466);
var column_27468 = cljs.core.nth.call(null,vec__27341_27467,(0),null);
var column_info_27469 = cljs.core.nth.call(null,vec__27341_27467,(1),null);
var seq__27342_27470 = cljs.core.seq.call(null,column_info_27469);
var chunk__27343_27471 = null;
var count__27344_27472 = (0);
var i__27345_27473 = (0);
while(true){
if((i__27345_27473 < count__27344_27472)){
var map__27346_27474 = cljs.core._nth.call(null,chunk__27343_27471,i__27345_27473);
var map__27346_27475__$1 = ((((!((map__27346_27474 == null)))?((((map__27346_27474.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27346_27474.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27346_27474):map__27346_27474);
var gline_27476 = cljs.core.get.call(null,map__27346_27475__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27477 = cljs.core.get.call(null,map__27346_27475__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27478 = cljs.core.get.call(null,map__27346_27475__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27476], null),cljs.core.fnil.call(null,((function (seq__27342_27470,chunk__27343_27471,count__27344_27472,i__27345_27473,seq__27337_27463,chunk__27338_27464,count__27339_27465,i__27340_27466,seq__27309_27359,chunk__27310_27360,count__27311_27361,i__27312_27362,map__27346_27474,map__27346_27475__$1,gline_27476,gcol_27477,name_27478,vec__27341_27467,column_27468,column_info_27469,vec__27336_27460,line_27461,columns_27462,seq__27309_27454__$1,temp__4425__auto___27453,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_27468], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27461,new cljs.core.Keyword(null,"col","col",-1959363084),column_27468,new cljs.core.Keyword(null,"name","name",1843675177),name_27478], null));
});})(seq__27342_27470,chunk__27343_27471,count__27344_27472,i__27345_27473,seq__27337_27463,chunk__27338_27464,count__27339_27465,i__27340_27466,seq__27309_27359,chunk__27310_27360,count__27311_27361,i__27312_27362,map__27346_27474,map__27346_27475__$1,gline_27476,gcol_27477,name_27478,vec__27341_27467,column_27468,column_info_27469,vec__27336_27460,line_27461,columns_27462,seq__27309_27454__$1,temp__4425__auto___27453,inverted))
,cljs.core.sorted_map.call(null)));

var G__27479 = seq__27342_27470;
var G__27480 = chunk__27343_27471;
var G__27481 = count__27344_27472;
var G__27482 = (i__27345_27473 + (1));
seq__27342_27470 = G__27479;
chunk__27343_27471 = G__27480;
count__27344_27472 = G__27481;
i__27345_27473 = G__27482;
continue;
} else {
var temp__4425__auto___27483__$1 = cljs.core.seq.call(null,seq__27342_27470);
if(temp__4425__auto___27483__$1){
var seq__27342_27484__$1 = temp__4425__auto___27483__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27342_27484__$1)){
var c__17266__auto___27485 = cljs.core.chunk_first.call(null,seq__27342_27484__$1);
var G__27486 = cljs.core.chunk_rest.call(null,seq__27342_27484__$1);
var G__27487 = c__17266__auto___27485;
var G__27488 = cljs.core.count.call(null,c__17266__auto___27485);
var G__27489 = (0);
seq__27342_27470 = G__27486;
chunk__27343_27471 = G__27487;
count__27344_27472 = G__27488;
i__27345_27473 = G__27489;
continue;
} else {
var map__27348_27490 = cljs.core.first.call(null,seq__27342_27484__$1);
var map__27348_27491__$1 = ((((!((map__27348_27490 == null)))?((((map__27348_27490.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27348_27490.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27348_27490):map__27348_27490);
var gline_27492 = cljs.core.get.call(null,map__27348_27491__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27493 = cljs.core.get.call(null,map__27348_27491__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27494 = cljs.core.get.call(null,map__27348_27491__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27492], null),cljs.core.fnil.call(null,((function (seq__27342_27470,chunk__27343_27471,count__27344_27472,i__27345_27473,seq__27337_27463,chunk__27338_27464,count__27339_27465,i__27340_27466,seq__27309_27359,chunk__27310_27360,count__27311_27361,i__27312_27362,map__27348_27490,map__27348_27491__$1,gline_27492,gcol_27493,name_27494,seq__27342_27484__$1,temp__4425__auto___27483__$1,vec__27341_27467,column_27468,column_info_27469,vec__27336_27460,line_27461,columns_27462,seq__27309_27454__$1,temp__4425__auto___27453,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_27468], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27461,new cljs.core.Keyword(null,"col","col",-1959363084),column_27468,new cljs.core.Keyword(null,"name","name",1843675177),name_27494], null));
});})(seq__27342_27470,chunk__27343_27471,count__27344_27472,i__27345_27473,seq__27337_27463,chunk__27338_27464,count__27339_27465,i__27340_27466,seq__27309_27359,chunk__27310_27360,count__27311_27361,i__27312_27362,map__27348_27490,map__27348_27491__$1,gline_27492,gcol_27493,name_27494,seq__27342_27484__$1,temp__4425__auto___27483__$1,vec__27341_27467,column_27468,column_info_27469,vec__27336_27460,line_27461,columns_27462,seq__27309_27454__$1,temp__4425__auto___27453,inverted))
,cljs.core.sorted_map.call(null)));

var G__27495 = cljs.core.next.call(null,seq__27342_27484__$1);
var G__27496 = null;
var G__27497 = (0);
var G__27498 = (0);
seq__27342_27470 = G__27495;
chunk__27343_27471 = G__27496;
count__27344_27472 = G__27497;
i__27345_27473 = G__27498;
continue;
}
} else {
}
}
break;
}

var G__27499 = seq__27337_27463;
var G__27500 = chunk__27338_27464;
var G__27501 = count__27339_27465;
var G__27502 = (i__27340_27466 + (1));
seq__27337_27463 = G__27499;
chunk__27338_27464 = G__27500;
count__27339_27465 = G__27501;
i__27340_27466 = G__27502;
continue;
} else {
var temp__4425__auto___27503__$1 = cljs.core.seq.call(null,seq__27337_27463);
if(temp__4425__auto___27503__$1){
var seq__27337_27504__$1 = temp__4425__auto___27503__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27337_27504__$1)){
var c__17266__auto___27505 = cljs.core.chunk_first.call(null,seq__27337_27504__$1);
var G__27506 = cljs.core.chunk_rest.call(null,seq__27337_27504__$1);
var G__27507 = c__17266__auto___27505;
var G__27508 = cljs.core.count.call(null,c__17266__auto___27505);
var G__27509 = (0);
seq__27337_27463 = G__27506;
chunk__27338_27464 = G__27507;
count__27339_27465 = G__27508;
i__27340_27466 = G__27509;
continue;
} else {
var vec__27350_27510 = cljs.core.first.call(null,seq__27337_27504__$1);
var column_27511 = cljs.core.nth.call(null,vec__27350_27510,(0),null);
var column_info_27512 = cljs.core.nth.call(null,vec__27350_27510,(1),null);
var seq__27351_27513 = cljs.core.seq.call(null,column_info_27512);
var chunk__27352_27514 = null;
var count__27353_27515 = (0);
var i__27354_27516 = (0);
while(true){
if((i__27354_27516 < count__27353_27515)){
var map__27355_27517 = cljs.core._nth.call(null,chunk__27352_27514,i__27354_27516);
var map__27355_27518__$1 = ((((!((map__27355_27517 == null)))?((((map__27355_27517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27355_27517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27355_27517):map__27355_27517);
var gline_27519 = cljs.core.get.call(null,map__27355_27518__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27520 = cljs.core.get.call(null,map__27355_27518__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27521 = cljs.core.get.call(null,map__27355_27518__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27519], null),cljs.core.fnil.call(null,((function (seq__27351_27513,chunk__27352_27514,count__27353_27515,i__27354_27516,seq__27337_27463,chunk__27338_27464,count__27339_27465,i__27340_27466,seq__27309_27359,chunk__27310_27360,count__27311_27361,i__27312_27362,map__27355_27517,map__27355_27518__$1,gline_27519,gcol_27520,name_27521,vec__27350_27510,column_27511,column_info_27512,seq__27337_27504__$1,temp__4425__auto___27503__$1,vec__27336_27460,line_27461,columns_27462,seq__27309_27454__$1,temp__4425__auto___27453,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_27511], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27461,new cljs.core.Keyword(null,"col","col",-1959363084),column_27511,new cljs.core.Keyword(null,"name","name",1843675177),name_27521], null));
});})(seq__27351_27513,chunk__27352_27514,count__27353_27515,i__27354_27516,seq__27337_27463,chunk__27338_27464,count__27339_27465,i__27340_27466,seq__27309_27359,chunk__27310_27360,count__27311_27361,i__27312_27362,map__27355_27517,map__27355_27518__$1,gline_27519,gcol_27520,name_27521,vec__27350_27510,column_27511,column_info_27512,seq__27337_27504__$1,temp__4425__auto___27503__$1,vec__27336_27460,line_27461,columns_27462,seq__27309_27454__$1,temp__4425__auto___27453,inverted))
,cljs.core.sorted_map.call(null)));

var G__27522 = seq__27351_27513;
var G__27523 = chunk__27352_27514;
var G__27524 = count__27353_27515;
var G__27525 = (i__27354_27516 + (1));
seq__27351_27513 = G__27522;
chunk__27352_27514 = G__27523;
count__27353_27515 = G__27524;
i__27354_27516 = G__27525;
continue;
} else {
var temp__4425__auto___27526__$2 = cljs.core.seq.call(null,seq__27351_27513);
if(temp__4425__auto___27526__$2){
var seq__27351_27527__$1 = temp__4425__auto___27526__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27351_27527__$1)){
var c__17266__auto___27528 = cljs.core.chunk_first.call(null,seq__27351_27527__$1);
var G__27529 = cljs.core.chunk_rest.call(null,seq__27351_27527__$1);
var G__27530 = c__17266__auto___27528;
var G__27531 = cljs.core.count.call(null,c__17266__auto___27528);
var G__27532 = (0);
seq__27351_27513 = G__27529;
chunk__27352_27514 = G__27530;
count__27353_27515 = G__27531;
i__27354_27516 = G__27532;
continue;
} else {
var map__27357_27533 = cljs.core.first.call(null,seq__27351_27527__$1);
var map__27357_27534__$1 = ((((!((map__27357_27533 == null)))?((((map__27357_27533.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27357_27533.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27357_27533):map__27357_27533);
var gline_27535 = cljs.core.get.call(null,map__27357_27534__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27536 = cljs.core.get.call(null,map__27357_27534__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27537 = cljs.core.get.call(null,map__27357_27534__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27535], null),cljs.core.fnil.call(null,((function (seq__27351_27513,chunk__27352_27514,count__27353_27515,i__27354_27516,seq__27337_27463,chunk__27338_27464,count__27339_27465,i__27340_27466,seq__27309_27359,chunk__27310_27360,count__27311_27361,i__27312_27362,map__27357_27533,map__27357_27534__$1,gline_27535,gcol_27536,name_27537,seq__27351_27527__$1,temp__4425__auto___27526__$2,vec__27350_27510,column_27511,column_info_27512,seq__27337_27504__$1,temp__4425__auto___27503__$1,vec__27336_27460,line_27461,columns_27462,seq__27309_27454__$1,temp__4425__auto___27453,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_27511], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27461,new cljs.core.Keyword(null,"col","col",-1959363084),column_27511,new cljs.core.Keyword(null,"name","name",1843675177),name_27537], null));
});})(seq__27351_27513,chunk__27352_27514,count__27353_27515,i__27354_27516,seq__27337_27463,chunk__27338_27464,count__27339_27465,i__27340_27466,seq__27309_27359,chunk__27310_27360,count__27311_27361,i__27312_27362,map__27357_27533,map__27357_27534__$1,gline_27535,gcol_27536,name_27537,seq__27351_27527__$1,temp__4425__auto___27526__$2,vec__27350_27510,column_27511,column_info_27512,seq__27337_27504__$1,temp__4425__auto___27503__$1,vec__27336_27460,line_27461,columns_27462,seq__27309_27454__$1,temp__4425__auto___27453,inverted))
,cljs.core.sorted_map.call(null)));

var G__27538 = cljs.core.next.call(null,seq__27351_27527__$1);
var G__27539 = null;
var G__27540 = (0);
var G__27541 = (0);
seq__27351_27513 = G__27538;
chunk__27352_27514 = G__27539;
count__27353_27515 = G__27540;
i__27354_27516 = G__27541;
continue;
}
} else {
}
}
break;
}

var G__27542 = cljs.core.next.call(null,seq__27337_27504__$1);
var G__27543 = null;
var G__27544 = (0);
var G__27545 = (0);
seq__27337_27463 = G__27542;
chunk__27338_27464 = G__27543;
count__27339_27465 = G__27544;
i__27340_27466 = G__27545;
continue;
}
} else {
}
}
break;
}

var G__27546 = cljs.core.next.call(null,seq__27309_27454__$1);
var G__27547 = null;
var G__27548 = (0);
var G__27549 = (0);
seq__27309_27359 = G__27546;
chunk__27310_27360 = G__27547;
count__27311_27361 = G__27548;
i__27312_27362 = G__27549;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map