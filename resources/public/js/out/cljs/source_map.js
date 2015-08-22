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
return cljs.core.reduce.call(null,(function (m,p__25796){
var vec__25797 = p__25796;
var i = cljs.core.nth.call(null,vec__25797,(0),null);
var v = cljs.core.nth.call(null,vec__25797,(1),null);
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
var vec__25799 = seg;
var gcol = cljs.core.nth.call(null,vec__25799,(0),null);
var source = cljs.core.nth.call(null,vec__25799,(1),null);
var line = cljs.core.nth.call(null,vec__25799,(2),null);
var col = cljs.core.nth.call(null,vec__25799,(3),null);
var name = cljs.core.nth.call(null,vec__25799,(4),null);
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
var vec__25802 = seg;
var gcol = cljs.core.nth.call(null,vec__25802,(0),null);
var source = cljs.core.nth.call(null,vec__25802,(1),null);
var line = cljs.core.nth.call(null,vec__25802,(2),null);
var col = cljs.core.nth.call(null,vec__25802,(3),null);
var name = cljs.core.nth.call(null,vec__25802,(4),null);
var vec__25803 = relseg;
var rgcol = cljs.core.nth.call(null,vec__25803,(0),null);
var rsource = cljs.core.nth.call(null,vec__25803,(1),null);
var rline = cljs.core.nth.call(null,vec__25803,(2),null);
var rcol = cljs.core.nth.call(null,vec__25803,(3),null);
var rname = cljs.core.nth.call(null,vec__25803,(4),null);
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
var map__25806 = segmap;
var map__25806__$1 = ((((!((map__25806 == null)))?((((map__25806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25806):map__25806);
var gcol = cljs.core.get.call(null,map__25806__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__25806__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__25806__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__25806__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__25806__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__25806,map__25806__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__25806,map__25806__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__25806,map__25806__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__25806,map__25806__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__25806,map__25806__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__25806,map__25806__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 * mapping original ClojureScript source locations to the generated
 * JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(){
var args25808 = [];
var len__17521__auto___25812 = arguments.length;
var i__17522__auto___25813 = (0);
while(true){
if((i__17522__auto___25813 < len__17521__auto___25812)){
args25808.push((arguments[i__17522__auto___25813]));

var G__25814 = (i__17522__auto___25813 + (1));
i__17522__auto___25813 = G__25814;
continue;
} else {
}
break;
}

var G__25810 = args25808.length;
switch (G__25810) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25808.length)].join('')));

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
var vec__25811 = (cljs.core.truth_(clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__25816 = cljs.core.next.call(null,segs__$1);
var G__25817 = nrelseg;
var G__25818 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__25816;
relseg__$1 = G__25817;
result__$1 = G__25818;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__25811,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__25811,(1),null);
var G__25819 = (gline + (1));
var G__25820 = cljs.core.next.call(null,lines__$1);
var G__25821 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__25822 = result__$1;
gline = G__25819;
lines__$1 = G__25820;
relseg = G__25821;
result = G__25822;
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
var map__25826 = segmap;
var map__25826__$1 = ((((!((map__25826 == null)))?((((map__25826.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25826.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25826):map__25826);
var gcol = cljs.core.get.call(null,map__25826__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__25826__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__25826__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__25826__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__25826__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__25826,map__25826__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__25826,map__25826__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__25823_SHARP_){
return cljs.core.conj.call(null,p1__25823_SHARP_,d__$1);
});})(map__25826,map__25826__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__25826,map__25826__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 * generated JavaScript source locations to the original
 * ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(){
var args25828 = [];
var len__17521__auto___25832 = arguments.length;
var i__17522__auto___25833 = (0);
while(true){
if((i__17522__auto___25833 < len__17521__auto___25832)){
args25828.push((arguments[i__17522__auto___25833]));

var G__25834 = (i__17522__auto___25833 + (1));
i__17522__auto___25833 = G__25834;
continue;
} else {
}
break;
}

var G__25830 = args25828.length;
switch (G__25830) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25828.length)].join('')));

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
var vec__25831 = (cljs.core.truth_(clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__25836 = cljs.core.next.call(null,segs__$1);
var G__25837 = nrelseg;
var G__25838 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__25836;
relseg__$1 = G__25837;
result__$1 = G__25838;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__25831,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__25831,(1),null);
var G__25839 = (gline + (1));
var G__25840 = cljs.core.next.call(null,lines__$1);
var G__25841 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__25842 = result__$1;
gline = G__25839;
lines__$1 = G__25840;
relseg = G__25841;
result = G__25842;
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
return (function (p__25849){
var vec__25850 = p__25849;
var _ = cljs.core.nth.call(null,vec__25850,(0),null);
var source = cljs.core.nth.call(null,vec__25850,(1),null);
var line = cljs.core.nth.call(null,vec__25850,(2),null);
var col = cljs.core.nth.call(null,vec__25850,(3),null);
var name = cljs.core.nth.call(null,vec__25850,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__25851){
var vec__25852 = p__25851;
var gcol = cljs.core.nth.call(null,vec__25852,(0),null);
var sidx = cljs.core.nth.call(null,vec__25852,(1),null);
var line = cljs.core.nth.call(null,vec__25852,(2),null);
var col = cljs.core.nth.call(null,vec__25852,(3),null);
var name = cljs.core.nth.call(null,vec__25852,(4),null);
var seg = vec__25852;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__25852,gcol,sidx,line,col,name,seg,relseg){
return (function (p__25853){
var vec__25854 = p__25853;
var _ = cljs.core.nth.call(null,vec__25854,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__25854,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__25854,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__25854,(3),null);
var lname = cljs.core.nth.call(null,vec__25854,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__16482__auto__ = name;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__25852,gcol,sidx,line,col,name,seg,relseg))
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
var seq__25908 = cljs.core.seq.call(null,infos);
var chunk__25909 = null;
var count__25910 = (0);
var i__25911 = (0);
while(true){
if((i__25911 < count__25910)){
var info = cljs.core._nth.call(null,chunk__25909,i__25911);
var segv_25958 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_25959 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_25960 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_25959 > (lc_25960 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__25908,chunk__25909,count__25910,i__25911,segv_25958,gline_25959,lc_25960,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_25959 - (lc_25960 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_25958], null));
});})(seq__25908,chunk__25909,count__25910,i__25911,segv_25958,gline_25959,lc_25960,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__25908,chunk__25909,count__25910,i__25911,segv_25958,gline_25959,lc_25960,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_25959], null),cljs.core.conj,segv_25958);
});})(seq__25908,chunk__25909,count__25910,i__25911,segv_25958,gline_25959,lc_25960,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__25961 = seq__25908;
var G__25962 = chunk__25909;
var G__25963 = count__25910;
var G__25964 = (i__25911 + (1));
seq__25908 = G__25961;
chunk__25909 = G__25962;
count__25910 = G__25963;
i__25911 = G__25964;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25908);
if(temp__4425__auto__){
var seq__25908__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25908__$1)){
var c__17266__auto__ = cljs.core.chunk_first.call(null,seq__25908__$1);
var G__25965 = cljs.core.chunk_rest.call(null,seq__25908__$1);
var G__25966 = c__17266__auto__;
var G__25967 = cljs.core.count.call(null,c__17266__auto__);
var G__25968 = (0);
seq__25908 = G__25965;
chunk__25909 = G__25966;
count__25910 = G__25967;
i__25911 = G__25968;
continue;
} else {
var info = cljs.core.first.call(null,seq__25908__$1);
var segv_25969 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_25970 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_25971 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_25970 > (lc_25971 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__25908,chunk__25909,count__25910,i__25911,segv_25969,gline_25970,lc_25971,info,seq__25908__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_25970 - (lc_25971 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_25969], null));
});})(seq__25908,chunk__25909,count__25910,i__25911,segv_25969,gline_25970,lc_25971,info,seq__25908__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__25908,chunk__25909,count__25910,i__25911,segv_25969,gline_25970,lc_25971,info,seq__25908__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_25970], null),cljs.core.conj,segv_25969);
});})(seq__25908,chunk__25909,count__25910,i__25911,segv_25969,gline_25970,lc_25971,info,seq__25908__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__25972 = cljs.core.next.call(null,seq__25908__$1);
var G__25973 = null;
var G__25974 = (0);
var G__25975 = (0);
seq__25908 = G__25972;
chunk__25909 = G__25973;
count__25910 = G__25974;
i__25911 = G__25975;
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
var seq__25912_25976 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__25913_25977 = null;
var count__25914_25978 = (0);
var i__25915_25979 = (0);
while(true){
if((i__25915_25979 < count__25914_25978)){
var vec__25916_25980 = cljs.core._nth.call(null,chunk__25913_25977,i__25915_25979);
var source_idx_25981 = cljs.core.nth.call(null,vec__25916_25980,(0),null);
var vec__25917_25982 = cljs.core.nth.call(null,vec__25916_25980,(1),null);
var __25983 = cljs.core.nth.call(null,vec__25917_25982,(0),null);
var lines_25984__$1 = cljs.core.nth.call(null,vec__25917_25982,(1),null);
var seq__25918_25985 = cljs.core.seq.call(null,lines_25984__$1);
var chunk__25919_25986 = null;
var count__25920_25987 = (0);
var i__25921_25988 = (0);
while(true){
if((i__25921_25988 < count__25920_25987)){
var vec__25922_25989 = cljs.core._nth.call(null,chunk__25919_25986,i__25921_25988);
var line_25990 = cljs.core.nth.call(null,vec__25922_25989,(0),null);
var cols_25991 = cljs.core.nth.call(null,vec__25922_25989,(1),null);
var seq__25923_25992 = cljs.core.seq.call(null,cols_25991);
var chunk__25924_25993 = null;
var count__25925_25994 = (0);
var i__25926_25995 = (0);
while(true){
if((i__25926_25995 < count__25925_25994)){
var vec__25927_25996 = cljs.core._nth.call(null,chunk__25924_25993,i__25926_25995);
var col_25997 = cljs.core.nth.call(null,vec__25927_25996,(0),null);
var infos_25998 = cljs.core.nth.call(null,vec__25927_25996,(1),null);
encode_cols.call(null,infos_25998,source_idx_25981,line_25990,col_25997);

var G__25999 = seq__25923_25992;
var G__26000 = chunk__25924_25993;
var G__26001 = count__25925_25994;
var G__26002 = (i__25926_25995 + (1));
seq__25923_25992 = G__25999;
chunk__25924_25993 = G__26000;
count__25925_25994 = G__26001;
i__25926_25995 = G__26002;
continue;
} else {
var temp__4425__auto___26003 = cljs.core.seq.call(null,seq__25923_25992);
if(temp__4425__auto___26003){
var seq__25923_26004__$1 = temp__4425__auto___26003;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25923_26004__$1)){
var c__17266__auto___26005 = cljs.core.chunk_first.call(null,seq__25923_26004__$1);
var G__26006 = cljs.core.chunk_rest.call(null,seq__25923_26004__$1);
var G__26007 = c__17266__auto___26005;
var G__26008 = cljs.core.count.call(null,c__17266__auto___26005);
var G__26009 = (0);
seq__25923_25992 = G__26006;
chunk__25924_25993 = G__26007;
count__25925_25994 = G__26008;
i__25926_25995 = G__26009;
continue;
} else {
var vec__25928_26010 = cljs.core.first.call(null,seq__25923_26004__$1);
var col_26011 = cljs.core.nth.call(null,vec__25928_26010,(0),null);
var infos_26012 = cljs.core.nth.call(null,vec__25928_26010,(1),null);
encode_cols.call(null,infos_26012,source_idx_25981,line_25990,col_26011);

var G__26013 = cljs.core.next.call(null,seq__25923_26004__$1);
var G__26014 = null;
var G__26015 = (0);
var G__26016 = (0);
seq__25923_25992 = G__26013;
chunk__25924_25993 = G__26014;
count__25925_25994 = G__26015;
i__25926_25995 = G__26016;
continue;
}
} else {
}
}
break;
}

var G__26017 = seq__25918_25985;
var G__26018 = chunk__25919_25986;
var G__26019 = count__25920_25987;
var G__26020 = (i__25921_25988 + (1));
seq__25918_25985 = G__26017;
chunk__25919_25986 = G__26018;
count__25920_25987 = G__26019;
i__25921_25988 = G__26020;
continue;
} else {
var temp__4425__auto___26021 = cljs.core.seq.call(null,seq__25918_25985);
if(temp__4425__auto___26021){
var seq__25918_26022__$1 = temp__4425__auto___26021;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25918_26022__$1)){
var c__17266__auto___26023 = cljs.core.chunk_first.call(null,seq__25918_26022__$1);
var G__26024 = cljs.core.chunk_rest.call(null,seq__25918_26022__$1);
var G__26025 = c__17266__auto___26023;
var G__26026 = cljs.core.count.call(null,c__17266__auto___26023);
var G__26027 = (0);
seq__25918_25985 = G__26024;
chunk__25919_25986 = G__26025;
count__25920_25987 = G__26026;
i__25921_25988 = G__26027;
continue;
} else {
var vec__25929_26028 = cljs.core.first.call(null,seq__25918_26022__$1);
var line_26029 = cljs.core.nth.call(null,vec__25929_26028,(0),null);
var cols_26030 = cljs.core.nth.call(null,vec__25929_26028,(1),null);
var seq__25930_26031 = cljs.core.seq.call(null,cols_26030);
var chunk__25931_26032 = null;
var count__25932_26033 = (0);
var i__25933_26034 = (0);
while(true){
if((i__25933_26034 < count__25932_26033)){
var vec__25934_26035 = cljs.core._nth.call(null,chunk__25931_26032,i__25933_26034);
var col_26036 = cljs.core.nth.call(null,vec__25934_26035,(0),null);
var infos_26037 = cljs.core.nth.call(null,vec__25934_26035,(1),null);
encode_cols.call(null,infos_26037,source_idx_25981,line_26029,col_26036);

var G__26038 = seq__25930_26031;
var G__26039 = chunk__25931_26032;
var G__26040 = count__25932_26033;
var G__26041 = (i__25933_26034 + (1));
seq__25930_26031 = G__26038;
chunk__25931_26032 = G__26039;
count__25932_26033 = G__26040;
i__25933_26034 = G__26041;
continue;
} else {
var temp__4425__auto___26042__$1 = cljs.core.seq.call(null,seq__25930_26031);
if(temp__4425__auto___26042__$1){
var seq__25930_26043__$1 = temp__4425__auto___26042__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25930_26043__$1)){
var c__17266__auto___26044 = cljs.core.chunk_first.call(null,seq__25930_26043__$1);
var G__26045 = cljs.core.chunk_rest.call(null,seq__25930_26043__$1);
var G__26046 = c__17266__auto___26044;
var G__26047 = cljs.core.count.call(null,c__17266__auto___26044);
var G__26048 = (0);
seq__25930_26031 = G__26045;
chunk__25931_26032 = G__26046;
count__25932_26033 = G__26047;
i__25933_26034 = G__26048;
continue;
} else {
var vec__25935_26049 = cljs.core.first.call(null,seq__25930_26043__$1);
var col_26050 = cljs.core.nth.call(null,vec__25935_26049,(0),null);
var infos_26051 = cljs.core.nth.call(null,vec__25935_26049,(1),null);
encode_cols.call(null,infos_26051,source_idx_25981,line_26029,col_26050);

var G__26052 = cljs.core.next.call(null,seq__25930_26043__$1);
var G__26053 = null;
var G__26054 = (0);
var G__26055 = (0);
seq__25930_26031 = G__26052;
chunk__25931_26032 = G__26053;
count__25932_26033 = G__26054;
i__25933_26034 = G__26055;
continue;
}
} else {
}
}
break;
}

var G__26056 = cljs.core.next.call(null,seq__25918_26022__$1);
var G__26057 = null;
var G__26058 = (0);
var G__26059 = (0);
seq__25918_25985 = G__26056;
chunk__25919_25986 = G__26057;
count__25920_25987 = G__26058;
i__25921_25988 = G__26059;
continue;
}
} else {
}
}
break;
}

var G__26060 = seq__25912_25976;
var G__26061 = chunk__25913_25977;
var G__26062 = count__25914_25978;
var G__26063 = (i__25915_25979 + (1));
seq__25912_25976 = G__26060;
chunk__25913_25977 = G__26061;
count__25914_25978 = G__26062;
i__25915_25979 = G__26063;
continue;
} else {
var temp__4425__auto___26064 = cljs.core.seq.call(null,seq__25912_25976);
if(temp__4425__auto___26064){
var seq__25912_26065__$1 = temp__4425__auto___26064;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25912_26065__$1)){
var c__17266__auto___26066 = cljs.core.chunk_first.call(null,seq__25912_26065__$1);
var G__26067 = cljs.core.chunk_rest.call(null,seq__25912_26065__$1);
var G__26068 = c__17266__auto___26066;
var G__26069 = cljs.core.count.call(null,c__17266__auto___26066);
var G__26070 = (0);
seq__25912_25976 = G__26067;
chunk__25913_25977 = G__26068;
count__25914_25978 = G__26069;
i__25915_25979 = G__26070;
continue;
} else {
var vec__25936_26071 = cljs.core.first.call(null,seq__25912_26065__$1);
var source_idx_26072 = cljs.core.nth.call(null,vec__25936_26071,(0),null);
var vec__25937_26073 = cljs.core.nth.call(null,vec__25936_26071,(1),null);
var __26074 = cljs.core.nth.call(null,vec__25937_26073,(0),null);
var lines_26075__$1 = cljs.core.nth.call(null,vec__25937_26073,(1),null);
var seq__25938_26076 = cljs.core.seq.call(null,lines_26075__$1);
var chunk__25939_26077 = null;
var count__25940_26078 = (0);
var i__25941_26079 = (0);
while(true){
if((i__25941_26079 < count__25940_26078)){
var vec__25942_26080 = cljs.core._nth.call(null,chunk__25939_26077,i__25941_26079);
var line_26081 = cljs.core.nth.call(null,vec__25942_26080,(0),null);
var cols_26082 = cljs.core.nth.call(null,vec__25942_26080,(1),null);
var seq__25943_26083 = cljs.core.seq.call(null,cols_26082);
var chunk__25944_26084 = null;
var count__25945_26085 = (0);
var i__25946_26086 = (0);
while(true){
if((i__25946_26086 < count__25945_26085)){
var vec__25947_26087 = cljs.core._nth.call(null,chunk__25944_26084,i__25946_26086);
var col_26088 = cljs.core.nth.call(null,vec__25947_26087,(0),null);
var infos_26089 = cljs.core.nth.call(null,vec__25947_26087,(1),null);
encode_cols.call(null,infos_26089,source_idx_26072,line_26081,col_26088);

var G__26090 = seq__25943_26083;
var G__26091 = chunk__25944_26084;
var G__26092 = count__25945_26085;
var G__26093 = (i__25946_26086 + (1));
seq__25943_26083 = G__26090;
chunk__25944_26084 = G__26091;
count__25945_26085 = G__26092;
i__25946_26086 = G__26093;
continue;
} else {
var temp__4425__auto___26094__$1 = cljs.core.seq.call(null,seq__25943_26083);
if(temp__4425__auto___26094__$1){
var seq__25943_26095__$1 = temp__4425__auto___26094__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25943_26095__$1)){
var c__17266__auto___26096 = cljs.core.chunk_first.call(null,seq__25943_26095__$1);
var G__26097 = cljs.core.chunk_rest.call(null,seq__25943_26095__$1);
var G__26098 = c__17266__auto___26096;
var G__26099 = cljs.core.count.call(null,c__17266__auto___26096);
var G__26100 = (0);
seq__25943_26083 = G__26097;
chunk__25944_26084 = G__26098;
count__25945_26085 = G__26099;
i__25946_26086 = G__26100;
continue;
} else {
var vec__25948_26101 = cljs.core.first.call(null,seq__25943_26095__$1);
var col_26102 = cljs.core.nth.call(null,vec__25948_26101,(0),null);
var infos_26103 = cljs.core.nth.call(null,vec__25948_26101,(1),null);
encode_cols.call(null,infos_26103,source_idx_26072,line_26081,col_26102);

var G__26104 = cljs.core.next.call(null,seq__25943_26095__$1);
var G__26105 = null;
var G__26106 = (0);
var G__26107 = (0);
seq__25943_26083 = G__26104;
chunk__25944_26084 = G__26105;
count__25945_26085 = G__26106;
i__25946_26086 = G__26107;
continue;
}
} else {
}
}
break;
}

var G__26108 = seq__25938_26076;
var G__26109 = chunk__25939_26077;
var G__26110 = count__25940_26078;
var G__26111 = (i__25941_26079 + (1));
seq__25938_26076 = G__26108;
chunk__25939_26077 = G__26109;
count__25940_26078 = G__26110;
i__25941_26079 = G__26111;
continue;
} else {
var temp__4425__auto___26112__$1 = cljs.core.seq.call(null,seq__25938_26076);
if(temp__4425__auto___26112__$1){
var seq__25938_26113__$1 = temp__4425__auto___26112__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25938_26113__$1)){
var c__17266__auto___26114 = cljs.core.chunk_first.call(null,seq__25938_26113__$1);
var G__26115 = cljs.core.chunk_rest.call(null,seq__25938_26113__$1);
var G__26116 = c__17266__auto___26114;
var G__26117 = cljs.core.count.call(null,c__17266__auto___26114);
var G__26118 = (0);
seq__25938_26076 = G__26115;
chunk__25939_26077 = G__26116;
count__25940_26078 = G__26117;
i__25941_26079 = G__26118;
continue;
} else {
var vec__25949_26119 = cljs.core.first.call(null,seq__25938_26113__$1);
var line_26120 = cljs.core.nth.call(null,vec__25949_26119,(0),null);
var cols_26121 = cljs.core.nth.call(null,vec__25949_26119,(1),null);
var seq__25950_26122 = cljs.core.seq.call(null,cols_26121);
var chunk__25951_26123 = null;
var count__25952_26124 = (0);
var i__25953_26125 = (0);
while(true){
if((i__25953_26125 < count__25952_26124)){
var vec__25954_26126 = cljs.core._nth.call(null,chunk__25951_26123,i__25953_26125);
var col_26127 = cljs.core.nth.call(null,vec__25954_26126,(0),null);
var infos_26128 = cljs.core.nth.call(null,vec__25954_26126,(1),null);
encode_cols.call(null,infos_26128,source_idx_26072,line_26120,col_26127);

var G__26129 = seq__25950_26122;
var G__26130 = chunk__25951_26123;
var G__26131 = count__25952_26124;
var G__26132 = (i__25953_26125 + (1));
seq__25950_26122 = G__26129;
chunk__25951_26123 = G__26130;
count__25952_26124 = G__26131;
i__25953_26125 = G__26132;
continue;
} else {
var temp__4425__auto___26133__$2 = cljs.core.seq.call(null,seq__25950_26122);
if(temp__4425__auto___26133__$2){
var seq__25950_26134__$1 = temp__4425__auto___26133__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25950_26134__$1)){
var c__17266__auto___26135 = cljs.core.chunk_first.call(null,seq__25950_26134__$1);
var G__26136 = cljs.core.chunk_rest.call(null,seq__25950_26134__$1);
var G__26137 = c__17266__auto___26135;
var G__26138 = cljs.core.count.call(null,c__17266__auto___26135);
var G__26139 = (0);
seq__25950_26122 = G__26136;
chunk__25951_26123 = G__26137;
count__25952_26124 = G__26138;
i__25953_26125 = G__26139;
continue;
} else {
var vec__25955_26140 = cljs.core.first.call(null,seq__25950_26134__$1);
var col_26141 = cljs.core.nth.call(null,vec__25955_26140,(0),null);
var infos_26142 = cljs.core.nth.call(null,vec__25955_26140,(1),null);
encode_cols.call(null,infos_26142,source_idx_26072,line_26120,col_26141);

var G__26143 = cljs.core.next.call(null,seq__25950_26134__$1);
var G__26144 = null;
var G__26145 = (0);
var G__26146 = (0);
seq__25950_26122 = G__26143;
chunk__25951_26123 = G__26144;
count__25952_26124 = G__26145;
i__25953_26125 = G__26146;
continue;
}
} else {
}
}
break;
}

var G__26147 = cljs.core.next.call(null,seq__25938_26113__$1);
var G__26148 = null;
var G__26149 = (0);
var G__26150 = (0);
seq__25938_26076 = G__26147;
chunk__25939_26077 = G__26148;
count__25940_26078 = G__26149;
i__25941_26079 = G__26150;
continue;
}
} else {
}
}
break;
}

var G__26151 = cljs.core.next.call(null,seq__25912_26065__$1);
var G__26152 = null;
var G__26153 = (0);
var G__26154 = (0);
seq__25912_25976 = G__26151;
chunk__25913_25977 = G__26152;
count__25914_25978 = G__26153;
i__25915_25979 = G__26154;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__25956 = {"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__25855_SHARP_){
return [cljs.core.str(p1__25855_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__25856_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__25856_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__25857_SHARP_){
return clojure.string.join.call(null,",",p1__25857_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))};
var G__25956__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))?(function (){var G__25957 = G__25956;
goog.object.set(G__25957,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__25957;
})():G__25956);
return G__25956__$1;
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
var vec__26160 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__26160,(0),null);
var col_map = cljs.core.nth.call(null,vec__26160,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__26161 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__26161,(0),null);
var infos = cljs.core.nth.call(null,vec__26161,(1),null);
var G__26165 = cljs.core.next.call(null,col_map_seq);
var G__26166 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__26161,col,infos,vec__26160,line,col_map){
return (function (v,p__26162){
var map__26163 = p__26162;
var map__26163__$1 = ((((!((map__26163 == null)))?((((map__26163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26163):map__26163);
var gline = cljs.core.get.call(null,map__26163__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__26163__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__26161,col,infos,vec__26160,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__26165;
new_cols = G__26166;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__26167 = cljs.core.next.call(null,line_map_seq);
var G__26168 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__26167;
new_lines = G__26168;
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
var seq__26219_26269 = cljs.core.seq.call(null,reverse_map);
var chunk__26220_26270 = null;
var count__26221_26271 = (0);
var i__26222_26272 = (0);
while(true){
if((i__26222_26272 < count__26221_26271)){
var vec__26223_26273 = cljs.core._nth.call(null,chunk__26220_26270,i__26222_26272);
var line_26274 = cljs.core.nth.call(null,vec__26223_26273,(0),null);
var columns_26275 = cljs.core.nth.call(null,vec__26223_26273,(1),null);
var seq__26224_26276 = cljs.core.seq.call(null,columns_26275);
var chunk__26225_26277 = null;
var count__26226_26278 = (0);
var i__26227_26279 = (0);
while(true){
if((i__26227_26279 < count__26226_26278)){
var vec__26228_26280 = cljs.core._nth.call(null,chunk__26225_26277,i__26227_26279);
var column_26281 = cljs.core.nth.call(null,vec__26228_26280,(0),null);
var column_info_26282 = cljs.core.nth.call(null,vec__26228_26280,(1),null);
var seq__26229_26283 = cljs.core.seq.call(null,column_info_26282);
var chunk__26230_26284 = null;
var count__26231_26285 = (0);
var i__26232_26286 = (0);
while(true){
if((i__26232_26286 < count__26231_26285)){
var map__26233_26287 = cljs.core._nth.call(null,chunk__26230_26284,i__26232_26286);
var map__26233_26288__$1 = ((((!((map__26233_26287 == null)))?((((map__26233_26287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26233_26287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26233_26287):map__26233_26287);
var gline_26289 = cljs.core.get.call(null,map__26233_26288__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26290 = cljs.core.get.call(null,map__26233_26288__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26291 = cljs.core.get.call(null,map__26233_26288__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26289], null),cljs.core.fnil.call(null,((function (seq__26229_26283,chunk__26230_26284,count__26231_26285,i__26232_26286,seq__26224_26276,chunk__26225_26277,count__26226_26278,i__26227_26279,seq__26219_26269,chunk__26220_26270,count__26221_26271,i__26222_26272,map__26233_26287,map__26233_26288__$1,gline_26289,gcol_26290,name_26291,vec__26228_26280,column_26281,column_info_26282,vec__26223_26273,line_26274,columns_26275,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_26281], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26274,new cljs.core.Keyword(null,"col","col",-1959363084),column_26281,new cljs.core.Keyword(null,"name","name",1843675177),name_26291], null));
});})(seq__26229_26283,chunk__26230_26284,count__26231_26285,i__26232_26286,seq__26224_26276,chunk__26225_26277,count__26226_26278,i__26227_26279,seq__26219_26269,chunk__26220_26270,count__26221_26271,i__26222_26272,map__26233_26287,map__26233_26288__$1,gline_26289,gcol_26290,name_26291,vec__26228_26280,column_26281,column_info_26282,vec__26223_26273,line_26274,columns_26275,inverted))
,cljs.core.sorted_map.call(null)));

var G__26292 = seq__26229_26283;
var G__26293 = chunk__26230_26284;
var G__26294 = count__26231_26285;
var G__26295 = (i__26232_26286 + (1));
seq__26229_26283 = G__26292;
chunk__26230_26284 = G__26293;
count__26231_26285 = G__26294;
i__26232_26286 = G__26295;
continue;
} else {
var temp__4425__auto___26296 = cljs.core.seq.call(null,seq__26229_26283);
if(temp__4425__auto___26296){
var seq__26229_26297__$1 = temp__4425__auto___26296;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26229_26297__$1)){
var c__17266__auto___26298 = cljs.core.chunk_first.call(null,seq__26229_26297__$1);
var G__26299 = cljs.core.chunk_rest.call(null,seq__26229_26297__$1);
var G__26300 = c__17266__auto___26298;
var G__26301 = cljs.core.count.call(null,c__17266__auto___26298);
var G__26302 = (0);
seq__26229_26283 = G__26299;
chunk__26230_26284 = G__26300;
count__26231_26285 = G__26301;
i__26232_26286 = G__26302;
continue;
} else {
var map__26235_26303 = cljs.core.first.call(null,seq__26229_26297__$1);
var map__26235_26304__$1 = ((((!((map__26235_26303 == null)))?((((map__26235_26303.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26235_26303.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26235_26303):map__26235_26303);
var gline_26305 = cljs.core.get.call(null,map__26235_26304__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26306 = cljs.core.get.call(null,map__26235_26304__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26307 = cljs.core.get.call(null,map__26235_26304__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26305], null),cljs.core.fnil.call(null,((function (seq__26229_26283,chunk__26230_26284,count__26231_26285,i__26232_26286,seq__26224_26276,chunk__26225_26277,count__26226_26278,i__26227_26279,seq__26219_26269,chunk__26220_26270,count__26221_26271,i__26222_26272,map__26235_26303,map__26235_26304__$1,gline_26305,gcol_26306,name_26307,seq__26229_26297__$1,temp__4425__auto___26296,vec__26228_26280,column_26281,column_info_26282,vec__26223_26273,line_26274,columns_26275,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_26281], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26274,new cljs.core.Keyword(null,"col","col",-1959363084),column_26281,new cljs.core.Keyword(null,"name","name",1843675177),name_26307], null));
});})(seq__26229_26283,chunk__26230_26284,count__26231_26285,i__26232_26286,seq__26224_26276,chunk__26225_26277,count__26226_26278,i__26227_26279,seq__26219_26269,chunk__26220_26270,count__26221_26271,i__26222_26272,map__26235_26303,map__26235_26304__$1,gline_26305,gcol_26306,name_26307,seq__26229_26297__$1,temp__4425__auto___26296,vec__26228_26280,column_26281,column_info_26282,vec__26223_26273,line_26274,columns_26275,inverted))
,cljs.core.sorted_map.call(null)));

var G__26308 = cljs.core.next.call(null,seq__26229_26297__$1);
var G__26309 = null;
var G__26310 = (0);
var G__26311 = (0);
seq__26229_26283 = G__26308;
chunk__26230_26284 = G__26309;
count__26231_26285 = G__26310;
i__26232_26286 = G__26311;
continue;
}
} else {
}
}
break;
}

var G__26312 = seq__26224_26276;
var G__26313 = chunk__26225_26277;
var G__26314 = count__26226_26278;
var G__26315 = (i__26227_26279 + (1));
seq__26224_26276 = G__26312;
chunk__26225_26277 = G__26313;
count__26226_26278 = G__26314;
i__26227_26279 = G__26315;
continue;
} else {
var temp__4425__auto___26316 = cljs.core.seq.call(null,seq__26224_26276);
if(temp__4425__auto___26316){
var seq__26224_26317__$1 = temp__4425__auto___26316;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26224_26317__$1)){
var c__17266__auto___26318 = cljs.core.chunk_first.call(null,seq__26224_26317__$1);
var G__26319 = cljs.core.chunk_rest.call(null,seq__26224_26317__$1);
var G__26320 = c__17266__auto___26318;
var G__26321 = cljs.core.count.call(null,c__17266__auto___26318);
var G__26322 = (0);
seq__26224_26276 = G__26319;
chunk__26225_26277 = G__26320;
count__26226_26278 = G__26321;
i__26227_26279 = G__26322;
continue;
} else {
var vec__26237_26323 = cljs.core.first.call(null,seq__26224_26317__$1);
var column_26324 = cljs.core.nth.call(null,vec__26237_26323,(0),null);
var column_info_26325 = cljs.core.nth.call(null,vec__26237_26323,(1),null);
var seq__26238_26326 = cljs.core.seq.call(null,column_info_26325);
var chunk__26239_26327 = null;
var count__26240_26328 = (0);
var i__26241_26329 = (0);
while(true){
if((i__26241_26329 < count__26240_26328)){
var map__26242_26330 = cljs.core._nth.call(null,chunk__26239_26327,i__26241_26329);
var map__26242_26331__$1 = ((((!((map__26242_26330 == null)))?((((map__26242_26330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26242_26330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26242_26330):map__26242_26330);
var gline_26332 = cljs.core.get.call(null,map__26242_26331__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26333 = cljs.core.get.call(null,map__26242_26331__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26334 = cljs.core.get.call(null,map__26242_26331__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26332], null),cljs.core.fnil.call(null,((function (seq__26238_26326,chunk__26239_26327,count__26240_26328,i__26241_26329,seq__26224_26276,chunk__26225_26277,count__26226_26278,i__26227_26279,seq__26219_26269,chunk__26220_26270,count__26221_26271,i__26222_26272,map__26242_26330,map__26242_26331__$1,gline_26332,gcol_26333,name_26334,vec__26237_26323,column_26324,column_info_26325,seq__26224_26317__$1,temp__4425__auto___26316,vec__26223_26273,line_26274,columns_26275,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_26324], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26274,new cljs.core.Keyword(null,"col","col",-1959363084),column_26324,new cljs.core.Keyword(null,"name","name",1843675177),name_26334], null));
});})(seq__26238_26326,chunk__26239_26327,count__26240_26328,i__26241_26329,seq__26224_26276,chunk__26225_26277,count__26226_26278,i__26227_26279,seq__26219_26269,chunk__26220_26270,count__26221_26271,i__26222_26272,map__26242_26330,map__26242_26331__$1,gline_26332,gcol_26333,name_26334,vec__26237_26323,column_26324,column_info_26325,seq__26224_26317__$1,temp__4425__auto___26316,vec__26223_26273,line_26274,columns_26275,inverted))
,cljs.core.sorted_map.call(null)));

var G__26335 = seq__26238_26326;
var G__26336 = chunk__26239_26327;
var G__26337 = count__26240_26328;
var G__26338 = (i__26241_26329 + (1));
seq__26238_26326 = G__26335;
chunk__26239_26327 = G__26336;
count__26240_26328 = G__26337;
i__26241_26329 = G__26338;
continue;
} else {
var temp__4425__auto___26339__$1 = cljs.core.seq.call(null,seq__26238_26326);
if(temp__4425__auto___26339__$1){
var seq__26238_26340__$1 = temp__4425__auto___26339__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26238_26340__$1)){
var c__17266__auto___26341 = cljs.core.chunk_first.call(null,seq__26238_26340__$1);
var G__26342 = cljs.core.chunk_rest.call(null,seq__26238_26340__$1);
var G__26343 = c__17266__auto___26341;
var G__26344 = cljs.core.count.call(null,c__17266__auto___26341);
var G__26345 = (0);
seq__26238_26326 = G__26342;
chunk__26239_26327 = G__26343;
count__26240_26328 = G__26344;
i__26241_26329 = G__26345;
continue;
} else {
var map__26244_26346 = cljs.core.first.call(null,seq__26238_26340__$1);
var map__26244_26347__$1 = ((((!((map__26244_26346 == null)))?((((map__26244_26346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26244_26346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26244_26346):map__26244_26346);
var gline_26348 = cljs.core.get.call(null,map__26244_26347__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26349 = cljs.core.get.call(null,map__26244_26347__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26350 = cljs.core.get.call(null,map__26244_26347__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26348], null),cljs.core.fnil.call(null,((function (seq__26238_26326,chunk__26239_26327,count__26240_26328,i__26241_26329,seq__26224_26276,chunk__26225_26277,count__26226_26278,i__26227_26279,seq__26219_26269,chunk__26220_26270,count__26221_26271,i__26222_26272,map__26244_26346,map__26244_26347__$1,gline_26348,gcol_26349,name_26350,seq__26238_26340__$1,temp__4425__auto___26339__$1,vec__26237_26323,column_26324,column_info_26325,seq__26224_26317__$1,temp__4425__auto___26316,vec__26223_26273,line_26274,columns_26275,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_26324], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26274,new cljs.core.Keyword(null,"col","col",-1959363084),column_26324,new cljs.core.Keyword(null,"name","name",1843675177),name_26350], null));
});})(seq__26238_26326,chunk__26239_26327,count__26240_26328,i__26241_26329,seq__26224_26276,chunk__26225_26277,count__26226_26278,i__26227_26279,seq__26219_26269,chunk__26220_26270,count__26221_26271,i__26222_26272,map__26244_26346,map__26244_26347__$1,gline_26348,gcol_26349,name_26350,seq__26238_26340__$1,temp__4425__auto___26339__$1,vec__26237_26323,column_26324,column_info_26325,seq__26224_26317__$1,temp__4425__auto___26316,vec__26223_26273,line_26274,columns_26275,inverted))
,cljs.core.sorted_map.call(null)));

var G__26351 = cljs.core.next.call(null,seq__26238_26340__$1);
var G__26352 = null;
var G__26353 = (0);
var G__26354 = (0);
seq__26238_26326 = G__26351;
chunk__26239_26327 = G__26352;
count__26240_26328 = G__26353;
i__26241_26329 = G__26354;
continue;
}
} else {
}
}
break;
}

var G__26355 = cljs.core.next.call(null,seq__26224_26317__$1);
var G__26356 = null;
var G__26357 = (0);
var G__26358 = (0);
seq__26224_26276 = G__26355;
chunk__26225_26277 = G__26356;
count__26226_26278 = G__26357;
i__26227_26279 = G__26358;
continue;
}
} else {
}
}
break;
}

var G__26359 = seq__26219_26269;
var G__26360 = chunk__26220_26270;
var G__26361 = count__26221_26271;
var G__26362 = (i__26222_26272 + (1));
seq__26219_26269 = G__26359;
chunk__26220_26270 = G__26360;
count__26221_26271 = G__26361;
i__26222_26272 = G__26362;
continue;
} else {
var temp__4425__auto___26363 = cljs.core.seq.call(null,seq__26219_26269);
if(temp__4425__auto___26363){
var seq__26219_26364__$1 = temp__4425__auto___26363;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26219_26364__$1)){
var c__17266__auto___26365 = cljs.core.chunk_first.call(null,seq__26219_26364__$1);
var G__26366 = cljs.core.chunk_rest.call(null,seq__26219_26364__$1);
var G__26367 = c__17266__auto___26365;
var G__26368 = cljs.core.count.call(null,c__17266__auto___26365);
var G__26369 = (0);
seq__26219_26269 = G__26366;
chunk__26220_26270 = G__26367;
count__26221_26271 = G__26368;
i__26222_26272 = G__26369;
continue;
} else {
var vec__26246_26370 = cljs.core.first.call(null,seq__26219_26364__$1);
var line_26371 = cljs.core.nth.call(null,vec__26246_26370,(0),null);
var columns_26372 = cljs.core.nth.call(null,vec__26246_26370,(1),null);
var seq__26247_26373 = cljs.core.seq.call(null,columns_26372);
var chunk__26248_26374 = null;
var count__26249_26375 = (0);
var i__26250_26376 = (0);
while(true){
if((i__26250_26376 < count__26249_26375)){
var vec__26251_26377 = cljs.core._nth.call(null,chunk__26248_26374,i__26250_26376);
var column_26378 = cljs.core.nth.call(null,vec__26251_26377,(0),null);
var column_info_26379 = cljs.core.nth.call(null,vec__26251_26377,(1),null);
var seq__26252_26380 = cljs.core.seq.call(null,column_info_26379);
var chunk__26253_26381 = null;
var count__26254_26382 = (0);
var i__26255_26383 = (0);
while(true){
if((i__26255_26383 < count__26254_26382)){
var map__26256_26384 = cljs.core._nth.call(null,chunk__26253_26381,i__26255_26383);
var map__26256_26385__$1 = ((((!((map__26256_26384 == null)))?((((map__26256_26384.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26256_26384.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26256_26384):map__26256_26384);
var gline_26386 = cljs.core.get.call(null,map__26256_26385__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26387 = cljs.core.get.call(null,map__26256_26385__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26388 = cljs.core.get.call(null,map__26256_26385__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26386], null),cljs.core.fnil.call(null,((function (seq__26252_26380,chunk__26253_26381,count__26254_26382,i__26255_26383,seq__26247_26373,chunk__26248_26374,count__26249_26375,i__26250_26376,seq__26219_26269,chunk__26220_26270,count__26221_26271,i__26222_26272,map__26256_26384,map__26256_26385__$1,gline_26386,gcol_26387,name_26388,vec__26251_26377,column_26378,column_info_26379,vec__26246_26370,line_26371,columns_26372,seq__26219_26364__$1,temp__4425__auto___26363,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_26378], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26371,new cljs.core.Keyword(null,"col","col",-1959363084),column_26378,new cljs.core.Keyword(null,"name","name",1843675177),name_26388], null));
});})(seq__26252_26380,chunk__26253_26381,count__26254_26382,i__26255_26383,seq__26247_26373,chunk__26248_26374,count__26249_26375,i__26250_26376,seq__26219_26269,chunk__26220_26270,count__26221_26271,i__26222_26272,map__26256_26384,map__26256_26385__$1,gline_26386,gcol_26387,name_26388,vec__26251_26377,column_26378,column_info_26379,vec__26246_26370,line_26371,columns_26372,seq__26219_26364__$1,temp__4425__auto___26363,inverted))
,cljs.core.sorted_map.call(null)));

var G__26389 = seq__26252_26380;
var G__26390 = chunk__26253_26381;
var G__26391 = count__26254_26382;
var G__26392 = (i__26255_26383 + (1));
seq__26252_26380 = G__26389;
chunk__26253_26381 = G__26390;
count__26254_26382 = G__26391;
i__26255_26383 = G__26392;
continue;
} else {
var temp__4425__auto___26393__$1 = cljs.core.seq.call(null,seq__26252_26380);
if(temp__4425__auto___26393__$1){
var seq__26252_26394__$1 = temp__4425__auto___26393__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26252_26394__$1)){
var c__17266__auto___26395 = cljs.core.chunk_first.call(null,seq__26252_26394__$1);
var G__26396 = cljs.core.chunk_rest.call(null,seq__26252_26394__$1);
var G__26397 = c__17266__auto___26395;
var G__26398 = cljs.core.count.call(null,c__17266__auto___26395);
var G__26399 = (0);
seq__26252_26380 = G__26396;
chunk__26253_26381 = G__26397;
count__26254_26382 = G__26398;
i__26255_26383 = G__26399;
continue;
} else {
var map__26258_26400 = cljs.core.first.call(null,seq__26252_26394__$1);
var map__26258_26401__$1 = ((((!((map__26258_26400 == null)))?((((map__26258_26400.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26258_26400.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26258_26400):map__26258_26400);
var gline_26402 = cljs.core.get.call(null,map__26258_26401__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26403 = cljs.core.get.call(null,map__26258_26401__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26404 = cljs.core.get.call(null,map__26258_26401__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26402], null),cljs.core.fnil.call(null,((function (seq__26252_26380,chunk__26253_26381,count__26254_26382,i__26255_26383,seq__26247_26373,chunk__26248_26374,count__26249_26375,i__26250_26376,seq__26219_26269,chunk__26220_26270,count__26221_26271,i__26222_26272,map__26258_26400,map__26258_26401__$1,gline_26402,gcol_26403,name_26404,seq__26252_26394__$1,temp__4425__auto___26393__$1,vec__26251_26377,column_26378,column_info_26379,vec__26246_26370,line_26371,columns_26372,seq__26219_26364__$1,temp__4425__auto___26363,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_26378], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26371,new cljs.core.Keyword(null,"col","col",-1959363084),column_26378,new cljs.core.Keyword(null,"name","name",1843675177),name_26404], null));
});})(seq__26252_26380,chunk__26253_26381,count__26254_26382,i__26255_26383,seq__26247_26373,chunk__26248_26374,count__26249_26375,i__26250_26376,seq__26219_26269,chunk__26220_26270,count__26221_26271,i__26222_26272,map__26258_26400,map__26258_26401__$1,gline_26402,gcol_26403,name_26404,seq__26252_26394__$1,temp__4425__auto___26393__$1,vec__26251_26377,column_26378,column_info_26379,vec__26246_26370,line_26371,columns_26372,seq__26219_26364__$1,temp__4425__auto___26363,inverted))
,cljs.core.sorted_map.call(null)));

var G__26405 = cljs.core.next.call(null,seq__26252_26394__$1);
var G__26406 = null;
var G__26407 = (0);
var G__26408 = (0);
seq__26252_26380 = G__26405;
chunk__26253_26381 = G__26406;
count__26254_26382 = G__26407;
i__26255_26383 = G__26408;
continue;
}
} else {
}
}
break;
}

var G__26409 = seq__26247_26373;
var G__26410 = chunk__26248_26374;
var G__26411 = count__26249_26375;
var G__26412 = (i__26250_26376 + (1));
seq__26247_26373 = G__26409;
chunk__26248_26374 = G__26410;
count__26249_26375 = G__26411;
i__26250_26376 = G__26412;
continue;
} else {
var temp__4425__auto___26413__$1 = cljs.core.seq.call(null,seq__26247_26373);
if(temp__4425__auto___26413__$1){
var seq__26247_26414__$1 = temp__4425__auto___26413__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26247_26414__$1)){
var c__17266__auto___26415 = cljs.core.chunk_first.call(null,seq__26247_26414__$1);
var G__26416 = cljs.core.chunk_rest.call(null,seq__26247_26414__$1);
var G__26417 = c__17266__auto___26415;
var G__26418 = cljs.core.count.call(null,c__17266__auto___26415);
var G__26419 = (0);
seq__26247_26373 = G__26416;
chunk__26248_26374 = G__26417;
count__26249_26375 = G__26418;
i__26250_26376 = G__26419;
continue;
} else {
var vec__26260_26420 = cljs.core.first.call(null,seq__26247_26414__$1);
var column_26421 = cljs.core.nth.call(null,vec__26260_26420,(0),null);
var column_info_26422 = cljs.core.nth.call(null,vec__26260_26420,(1),null);
var seq__26261_26423 = cljs.core.seq.call(null,column_info_26422);
var chunk__26262_26424 = null;
var count__26263_26425 = (0);
var i__26264_26426 = (0);
while(true){
if((i__26264_26426 < count__26263_26425)){
var map__26265_26427 = cljs.core._nth.call(null,chunk__26262_26424,i__26264_26426);
var map__26265_26428__$1 = ((((!((map__26265_26427 == null)))?((((map__26265_26427.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26265_26427.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26265_26427):map__26265_26427);
var gline_26429 = cljs.core.get.call(null,map__26265_26428__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26430 = cljs.core.get.call(null,map__26265_26428__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26431 = cljs.core.get.call(null,map__26265_26428__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26429], null),cljs.core.fnil.call(null,((function (seq__26261_26423,chunk__26262_26424,count__26263_26425,i__26264_26426,seq__26247_26373,chunk__26248_26374,count__26249_26375,i__26250_26376,seq__26219_26269,chunk__26220_26270,count__26221_26271,i__26222_26272,map__26265_26427,map__26265_26428__$1,gline_26429,gcol_26430,name_26431,vec__26260_26420,column_26421,column_info_26422,seq__26247_26414__$1,temp__4425__auto___26413__$1,vec__26246_26370,line_26371,columns_26372,seq__26219_26364__$1,temp__4425__auto___26363,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_26421], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26371,new cljs.core.Keyword(null,"col","col",-1959363084),column_26421,new cljs.core.Keyword(null,"name","name",1843675177),name_26431], null));
});})(seq__26261_26423,chunk__26262_26424,count__26263_26425,i__26264_26426,seq__26247_26373,chunk__26248_26374,count__26249_26375,i__26250_26376,seq__26219_26269,chunk__26220_26270,count__26221_26271,i__26222_26272,map__26265_26427,map__26265_26428__$1,gline_26429,gcol_26430,name_26431,vec__26260_26420,column_26421,column_info_26422,seq__26247_26414__$1,temp__4425__auto___26413__$1,vec__26246_26370,line_26371,columns_26372,seq__26219_26364__$1,temp__4425__auto___26363,inverted))
,cljs.core.sorted_map.call(null)));

var G__26432 = seq__26261_26423;
var G__26433 = chunk__26262_26424;
var G__26434 = count__26263_26425;
var G__26435 = (i__26264_26426 + (1));
seq__26261_26423 = G__26432;
chunk__26262_26424 = G__26433;
count__26263_26425 = G__26434;
i__26264_26426 = G__26435;
continue;
} else {
var temp__4425__auto___26436__$2 = cljs.core.seq.call(null,seq__26261_26423);
if(temp__4425__auto___26436__$2){
var seq__26261_26437__$1 = temp__4425__auto___26436__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26261_26437__$1)){
var c__17266__auto___26438 = cljs.core.chunk_first.call(null,seq__26261_26437__$1);
var G__26439 = cljs.core.chunk_rest.call(null,seq__26261_26437__$1);
var G__26440 = c__17266__auto___26438;
var G__26441 = cljs.core.count.call(null,c__17266__auto___26438);
var G__26442 = (0);
seq__26261_26423 = G__26439;
chunk__26262_26424 = G__26440;
count__26263_26425 = G__26441;
i__26264_26426 = G__26442;
continue;
} else {
var map__26267_26443 = cljs.core.first.call(null,seq__26261_26437__$1);
var map__26267_26444__$1 = ((((!((map__26267_26443 == null)))?((((map__26267_26443.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26267_26443.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26267_26443):map__26267_26443);
var gline_26445 = cljs.core.get.call(null,map__26267_26444__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26446 = cljs.core.get.call(null,map__26267_26444__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26447 = cljs.core.get.call(null,map__26267_26444__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26445], null),cljs.core.fnil.call(null,((function (seq__26261_26423,chunk__26262_26424,count__26263_26425,i__26264_26426,seq__26247_26373,chunk__26248_26374,count__26249_26375,i__26250_26376,seq__26219_26269,chunk__26220_26270,count__26221_26271,i__26222_26272,map__26267_26443,map__26267_26444__$1,gline_26445,gcol_26446,name_26447,seq__26261_26437__$1,temp__4425__auto___26436__$2,vec__26260_26420,column_26421,column_info_26422,seq__26247_26414__$1,temp__4425__auto___26413__$1,vec__26246_26370,line_26371,columns_26372,seq__26219_26364__$1,temp__4425__auto___26363,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_26421], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26371,new cljs.core.Keyword(null,"col","col",-1959363084),column_26421,new cljs.core.Keyword(null,"name","name",1843675177),name_26447], null));
});})(seq__26261_26423,chunk__26262_26424,count__26263_26425,i__26264_26426,seq__26247_26373,chunk__26248_26374,count__26249_26375,i__26250_26376,seq__26219_26269,chunk__26220_26270,count__26221_26271,i__26222_26272,map__26267_26443,map__26267_26444__$1,gline_26445,gcol_26446,name_26447,seq__26261_26437__$1,temp__4425__auto___26436__$2,vec__26260_26420,column_26421,column_info_26422,seq__26247_26414__$1,temp__4425__auto___26413__$1,vec__26246_26370,line_26371,columns_26372,seq__26219_26364__$1,temp__4425__auto___26363,inverted))
,cljs.core.sorted_map.call(null)));

var G__26448 = cljs.core.next.call(null,seq__26261_26437__$1);
var G__26449 = null;
var G__26450 = (0);
var G__26451 = (0);
seq__26261_26423 = G__26448;
chunk__26262_26424 = G__26449;
count__26263_26425 = G__26450;
i__26264_26426 = G__26451;
continue;
}
} else {
}
}
break;
}

var G__26452 = cljs.core.next.call(null,seq__26247_26414__$1);
var G__26453 = null;
var G__26454 = (0);
var G__26455 = (0);
seq__26247_26373 = G__26452;
chunk__26248_26374 = G__26453;
count__26249_26375 = G__26454;
i__26250_26376 = G__26455;
continue;
}
} else {
}
}
break;
}

var G__26456 = cljs.core.next.call(null,seq__26219_26364__$1);
var G__26457 = null;
var G__26458 = (0);
var G__26459 = (0);
seq__26219_26269 = G__26456;
chunk__26220_26270 = G__26457;
count__26221_26271 = G__26458;
i__26222_26272 = G__26459;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map?rel=1440195217730