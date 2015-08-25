// Compiled by ClojureScript 1.7.28 {:static-fns true, :optimize-constants true}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var args__17528__auto__ = [];
var len__17521__auto___30066 = arguments.length;
var i__17522__auto___30067 = (0);
while(true){
if((i__17522__auto___30067 < len__17521__auto___30066)){
args__17528__auto__.push((arguments[i__17522__auto___30067]));

var G__30068 = (i__17522__auto___30067 + (1));
i__17522__auto___30067 = G__30068;
continue;
} else {
}
break;
}

var argseq__17529__auto__ = ((((2) < args__17528__auto__.length))?(new cljs.core.IndexedSeq(args__17528__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17529__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name(t));
var seq__30058_30069 = cljs.core.seq(cljs.core.keys(attrs));
var chunk__30059_30070 = null;
var count__30060_30071 = (0);
var i__30061_30072 = (0);
while(true){
if((i__30061_30072 < count__30060_30071)){
var k_30073 = chunk__30059_30070.cljs$core$IIndexed$_nth$arity$2(null,i__30061_30072);
e.setAttribute(cljs.core.name(k_30073),cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,k_30073));

var G__30074 = seq__30058_30069;
var G__30075 = chunk__30059_30070;
var G__30076 = count__30060_30071;
var G__30077 = (i__30061_30072 + (1));
seq__30058_30069 = G__30074;
chunk__30059_30070 = G__30075;
count__30060_30071 = G__30076;
i__30061_30072 = G__30077;
continue;
} else {
var temp__4425__auto___30078 = cljs.core.seq(seq__30058_30069);
if(temp__4425__auto___30078){
var seq__30058_30079__$1 = temp__4425__auto___30078;
if(cljs.core.chunked_seq_QMARK_(seq__30058_30079__$1)){
var c__17266__auto___30080 = cljs.core.chunk_first(seq__30058_30079__$1);
var G__30081 = cljs.core.chunk_rest(seq__30058_30079__$1);
var G__30082 = c__17266__auto___30080;
var G__30083 = cljs.core.count(c__17266__auto___30080);
var G__30084 = (0);
seq__30058_30069 = G__30081;
chunk__30059_30070 = G__30082;
count__30060_30071 = G__30083;
i__30061_30072 = G__30084;
continue;
} else {
var k_30085 = cljs.core.first(seq__30058_30079__$1);
e.setAttribute(cljs.core.name(k_30085),cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,k_30085));

var G__30086 = cljs.core.next(seq__30058_30079__$1);
var G__30087 = null;
var G__30088 = (0);
var G__30089 = (0);
seq__30058_30069 = G__30086;
chunk__30059_30070 = G__30087;
count__30060_30071 = G__30088;
i__30061_30072 = G__30089;
continue;
}
} else {
}
}
break;
}

var seq__30062_30090 = cljs.core.seq(children);
var chunk__30063_30091 = null;
var count__30064_30092 = (0);
var i__30065_30093 = (0);
while(true){
if((i__30065_30093 < count__30064_30092)){
var ch_30094 = chunk__30063_30091.cljs$core$IIndexed$_nth$arity$2(null,i__30065_30093);
e.appendChild(ch_30094);

var G__30095 = seq__30062_30090;
var G__30096 = chunk__30063_30091;
var G__30097 = count__30064_30092;
var G__30098 = (i__30065_30093 + (1));
seq__30062_30090 = G__30095;
chunk__30063_30091 = G__30096;
count__30064_30092 = G__30097;
i__30065_30093 = G__30098;
continue;
} else {
var temp__4425__auto___30099 = cljs.core.seq(seq__30062_30090);
if(temp__4425__auto___30099){
var seq__30062_30100__$1 = temp__4425__auto___30099;
if(cljs.core.chunked_seq_QMARK_(seq__30062_30100__$1)){
var c__17266__auto___30101 = cljs.core.chunk_first(seq__30062_30100__$1);
var G__30102 = cljs.core.chunk_rest(seq__30062_30100__$1);
var G__30103 = c__17266__auto___30101;
var G__30104 = cljs.core.count(c__17266__auto___30101);
var G__30105 = (0);
seq__30062_30090 = G__30102;
chunk__30063_30091 = G__30103;
count__30064_30092 = G__30104;
i__30065_30093 = G__30105;
continue;
} else {
var ch_30106 = cljs.core.first(seq__30062_30100__$1);
e.appendChild(ch_30106);

var G__30107 = cljs.core.next(seq__30062_30100__$1);
var G__30108 = null;
var G__30109 = (0);
var G__30110 = (0);
seq__30062_30090 = G__30107;
chunk__30063_30091 = G__30108;
count__30064_30092 = G__30109;
i__30065_30093 = G__30110;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq30055){
var G__30056 = cljs.core.first(seq30055);
var seq30055__$1 = cljs.core.next(seq30055);
var G__30057 = cljs.core.first(seq30055__$1);
var seq30055__$2 = cljs.core.next(seq30055__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__30056,G__30057,seq30055__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17376__auto__ = (function (){var G__30111 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30111) : cljs.core.atom.call(null,G__30111));
})();
var prefer_table__17377__auto__ = (function (){var G__30112 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30112) : cljs.core.atom.call(null,G__30112));
})();
var method_cache__17378__auto__ = (function (){var G__30113 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30113) : cljs.core.atom.call(null,G__30113));
})();
var cached_hierarchy__17379__auto__ = (function (){var G__30114 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30114) : cljs.core.atom.call(null,G__30114));
})();
var hierarchy__17380__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17376__auto__,prefer_table__17377__auto__,method_cache__17378__auto__,cached_hierarchy__17379__auto__,hierarchy__17380__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17376__auto__,prefer_table__17377__auto__,method_cache__17378__auto__,cached_hierarchy__17379__auto__,hierarchy__17380__auto__))
,cljs.core.constant$keyword$default,hierarchy__17380__auto__,method_table__17376__auto__,prefer_table__17377__auto__,method_cache__17378__auto__,cached_hierarchy__17379__auto__));
})();
}
figwheel.client.heads_up.heads_up_event_dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$default,(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
figwheel.client.heads_up.heads_up_event_dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$figwheel_DASH_event,"file-selected",cljs.core.constant$keyword$file_DASH_name,dataset.fileName,cljs.core.constant$keyword$file_DASH_line,dataset.fileLine], null));
}));
figwheel.client.heads_up.heads_up_event_dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,"close-heads-up",(function (dataset){
return (figwheel.client.heads_up.clear.cljs$core$IFn$_invoke$arity$0 ? figwheel.client.heads_up.clear.cljs$core$IFn$_invoke$arity$0() : figwheel.client.heads_up.clear.call(null));
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate((function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),figwheel.client.heads_up.ancestor_nodes(el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset(event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return (figwheel.client.heads_up.heads_up_event_dispatch.cljs$core$IFn$_invoke$arity$1 ? figwheel.client.heads_up.heads_up_event_dispatch.cljs$core$IFn$_invoke$arity$1(dataset) : figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset));
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not(document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_30115 = figwheel.client.heads_up.node(cljs.core.constant$keyword$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$id,cont_id,cljs.core.constant$keyword$style,[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_30115.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_30115.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_30115.appendChild(figwheel.client.heads_up.node(cljs.core.constant$keyword$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$id,content_id], null)));

document.body.appendChild(el_30115);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$container_DASH_el,document.getElementById(cont_id),cljs.core.constant$keyword$content_DASH_area_DASH_el,document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__30116,st_map){
var map__30121 = p__30116;
var map__30121__$1 = ((((!((map__30121 == null)))?((((map__30121.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30121.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30121):map__30121);
var container_el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30121__$1,cljs.core.constant$keyword$container_DASH_el);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__30121,map__30121__$1,container_el){
return (function (p__30123){
var vec__30124 = p__30123;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30124,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30124,(1),null);
return (container_el.style[cljs.core.name(k)] = v);
});})(map__30121,map__30121__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__30125,dom_str){
var map__30128 = p__30125;
var map__30128__$1 = ((((!((map__30128 == null)))?((((map__30128.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30128.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30128):map__30128);
var c = map__30128__$1;
var content_area_el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30128__$1,cljs.core.constant$keyword$content_DASH_area_DASH_el);
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__30130){
var map__30133 = p__30130;
var map__30133__$1 = ((((!((map__30133 == null)))?((((map__30133.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30133.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30133):map__30133);
var content_area_el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30133__$1,cljs.core.constant$keyword$content_DASH_area_DASH_el);
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__20550__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20550__auto__){
return (function (){
var f__20551__auto__ = (function (){var switch__20483__auto__ = ((function (c__20550__auto__){
return (function (state_30176){
var state_val_30177 = (state_30176[(1)]);
if((state_val_30177 === (1))){
var inst_30161 = (state_30176[(7)]);
var inst_30161__$1 = figwheel.client.heads_up.ensure_container();
var inst_30162 = [cljs.core.constant$keyword$paddingTop,cljs.core.constant$keyword$paddingBottom,cljs.core.constant$keyword$width,cljs.core.constant$keyword$minHeight,cljs.core.constant$keyword$opacity];
var inst_30163 = ["10px","10px","100%","68px","1.0"];
var inst_30164 = cljs.core.PersistentHashMap.fromArrays(inst_30162,inst_30163);
var inst_30165 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_30164,style], 0));
var inst_30166 = figwheel.client.heads_up.set_style_BANG_(inst_30161__$1,inst_30165);
var inst_30167 = figwheel.client.heads_up.set_content_BANG_(inst_30161__$1,msg);
var inst_30168 = cljs.core.async.timeout((300));
var state_30176__$1 = (function (){var statearr_30178 = state_30176;
(statearr_30178[(8)] = inst_30166);

(statearr_30178[(9)] = inst_30167);

(statearr_30178[(7)] = inst_30161__$1);

return statearr_30178;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30176__$1,(2),inst_30168);
} else {
if((state_val_30177 === (2))){
var inst_30161 = (state_30176[(7)]);
var inst_30170 = (state_30176[(2)]);
var inst_30171 = [cljs.core.constant$keyword$height];
var inst_30172 = ["auto"];
var inst_30173 = cljs.core.PersistentHashMap.fromArrays(inst_30171,inst_30172);
var inst_30174 = figwheel.client.heads_up.set_style_BANG_(inst_30161,inst_30173);
var state_30176__$1 = (function (){var statearr_30179 = state_30176;
(statearr_30179[(10)] = inst_30170);

return statearr_30179;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30176__$1,inst_30174);
} else {
return null;
}
}
});})(c__20550__auto__))
;
return ((function (switch__20483__auto__,c__20550__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__20484__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__20484__auto____0 = (function (){
var statearr_30183 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30183[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__20484__auto__);

(statearr_30183[(1)] = (1));

return statearr_30183;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__20484__auto____1 = (function (state_30176){
while(true){
var ret_value__20485__auto__ = (function (){try{while(true){
var result__20486__auto__ = switch__20483__auto__(state_30176);
if(cljs.core.keyword_identical_QMARK_(result__20486__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__20486__auto__;
}
break;
}
}catch (e30184){if((e30184 instanceof Object)){
var ex__20487__auto__ = e30184;
var statearr_30185_30187 = state_30176;
(statearr_30185_30187[(5)] = ex__20487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30176);

return cljs.core.constant$keyword$recur;
} else {
throw e30184;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20485__auto__,cljs.core.constant$keyword$recur)){
var G__30188 = state_30176;
state_30176 = G__30188;
continue;
} else {
return ret_value__20485__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__20484__auto__ = function(state_30176){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20484__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20484__auto____1.call(this,state_30176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__20484__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__20484__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__20484__auto__;
})()
;})(switch__20483__auto__,c__20550__auto__))
})();
var state__20552__auto__ = (function (){var statearr_30186 = (f__20551__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20551__auto__.cljs$core$IFn$_invoke$arity$0() : f__20551__auto__.call(null));
(statearr_30186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20550__auto__);

return statearr_30186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20552__auto__);
});})(c__20550__auto__))
);

return c__20550__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches(/.*at\sline.*/,msg))){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number(msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__30190 = temp__4423__auto__;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30190,(0),null);
var ln = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30190,(1),null);
return figwheel.client.heads_up.file_selector_div(f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__30194 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$file.cljs$core$IFn$_invoke$arity$1(cause),cljs.core.constant$keyword$line.cljs$core$IFn$_invoke$arity$1(cause),cljs.core.constant$keyword$column.cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30194,(0),null);
var file_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30194,(1),null);
var file_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30194,(2),null);
var msg = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__30194,file_name,file_line,file_column){
return (function (p1__30191_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__30191_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__30194,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$backgroundColor,"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link()),cljs.core.str(figwheel.client.heads_up.heading("Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div(file_name,(function (){var or__16482__auto__ = file_line;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
var and__16470__auto__ = cause;
if(cljs.core.truth_(and__16470__auto__)){
return cljs.core.constant$keyword$line.cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16470__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str((function (){var G__30195 = cljs.core.constant$keyword$file.cljs$core$IFn$_invoke$arity$1(cause);
return goog.string.htmlEscape(G__30195);
})()),cljs.core.str(", line "),cljs.core.str(cljs.core.constant$keyword$line.cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(cljs.core.constant$keyword$column.cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$backgroundColor,"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link()),cljs.core.str(figwheel.client.heads_up.heading(header)),cljs.core.str(figwheel.client.heads_up.format_line(msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning("Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__30198 = figwheel.client.heads_up.ensure_container();
var map__30198__$1 = ((((!((map__30198 == null)))?((((map__30198.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30198.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30198):map__30198);
var content_area_el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30198__$1,cljs.core.constant$keyword$content_DASH_area_DASH_el);
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line(message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__20550__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20550__auto__){
return (function (){
var f__20551__auto__ = (function (){var switch__20483__auto__ = ((function (c__20550__auto__){
return (function (state_30246){
var state_val_30247 = (state_30246[(1)]);
if((state_val_30247 === (1))){
var inst_30229 = (state_30246[(7)]);
var inst_30229__$1 = figwheel.client.heads_up.ensure_container();
var inst_30230 = [cljs.core.constant$keyword$opacity];
var inst_30231 = ["0.0"];
var inst_30232 = cljs.core.PersistentHashMap.fromArrays(inst_30230,inst_30231);
var inst_30233 = figwheel.client.heads_up.set_style_BANG_(inst_30229__$1,inst_30232);
var inst_30234 = cljs.core.async.timeout((300));
var state_30246__$1 = (function (){var statearr_30248 = state_30246;
(statearr_30248[(7)] = inst_30229__$1);

(statearr_30248[(8)] = inst_30233);

return statearr_30248;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30246__$1,(2),inst_30234);
} else {
if((state_val_30247 === (2))){
var inst_30229 = (state_30246[(7)]);
var inst_30236 = (state_30246[(2)]);
var inst_30237 = [cljs.core.constant$keyword$width,cljs.core.constant$keyword$height,cljs.core.constant$keyword$minHeight,cljs.core.constant$keyword$padding,cljs.core.constant$keyword$borderRadius,cljs.core.constant$keyword$backgroundColor];
var inst_30238 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_30239 = cljs.core.PersistentHashMap.fromArrays(inst_30237,inst_30238);
var inst_30240 = figwheel.client.heads_up.set_style_BANG_(inst_30229,inst_30239);
var inst_30241 = cljs.core.async.timeout((200));
var state_30246__$1 = (function (){var statearr_30249 = state_30246;
(statearr_30249[(9)] = inst_30240);

(statearr_30249[(10)] = inst_30236);

return statearr_30249;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30246__$1,(3),inst_30241);
} else {
if((state_val_30247 === (3))){
var inst_30229 = (state_30246[(7)]);
var inst_30243 = (state_30246[(2)]);
var inst_30244 = figwheel.client.heads_up.set_content_BANG_(inst_30229,"");
var state_30246__$1 = (function (){var statearr_30250 = state_30246;
(statearr_30250[(11)] = inst_30243);

return statearr_30250;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30246__$1,inst_30244);
} else {
return null;
}
}
}
});})(c__20550__auto__))
;
return ((function (switch__20483__auto__,c__20550__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__20484__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__20484__auto____0 = (function (){
var statearr_30254 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30254[(0)] = figwheel$client$heads_up$clear_$_state_machine__20484__auto__);

(statearr_30254[(1)] = (1));

return statearr_30254;
});
var figwheel$client$heads_up$clear_$_state_machine__20484__auto____1 = (function (state_30246){
while(true){
var ret_value__20485__auto__ = (function (){try{while(true){
var result__20486__auto__ = switch__20483__auto__(state_30246);
if(cljs.core.keyword_identical_QMARK_(result__20486__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__20486__auto__;
}
break;
}
}catch (e30255){if((e30255 instanceof Object)){
var ex__20487__auto__ = e30255;
var statearr_30256_30258 = state_30246;
(statearr_30256_30258[(5)] = ex__20487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30246);

return cljs.core.constant$keyword$recur;
} else {
throw e30255;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20485__auto__,cljs.core.constant$keyword$recur)){
var G__30259 = state_30246;
state_30246 = G__30259;
continue;
} else {
return ret_value__20485__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__20484__auto__ = function(state_30246){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__20484__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__20484__auto____1.call(this,state_30246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__20484__auto____0;
figwheel$client$heads_up$clear_$_state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__20484__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__20484__auto__;
})()
;})(switch__20483__auto__,c__20550__auto__))
})();
var state__20552__auto__ = (function (){var statearr_30257 = (f__20551__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20551__auto__.cljs$core$IFn$_invoke$arity$0() : f__20551__auto__.call(null));
(statearr_30257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20550__auto__);

return statearr_30257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20552__auto__);
});})(c__20550__auto__))
);

return c__20550__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$backgroundColor,"rgba(211,234,172,1.0)",cljs.core.constant$keyword$width,"68px",cljs.core.constant$keyword$height,"68px",cljs.core.constant$keyword$paddingLeft,"0px",cljs.core.constant$keyword$paddingRight,"0px",cljs.core.constant$keyword$borderRadius,"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__20550__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20550__auto__){
return (function (){
var f__20551__auto__ = (function (){var switch__20483__auto__ = ((function (c__20550__auto__){
return (function (state_30291){
var state_val_30292 = (state_30291[(1)]);
if((state_val_30292 === (1))){
var inst_30281 = figwheel.client.heads_up.display_loaded_start();
var state_30291__$1 = state_30291;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30291__$1,(2),inst_30281);
} else {
if((state_val_30292 === (2))){
var inst_30283 = (state_30291[(2)]);
var inst_30284 = cljs.core.async.timeout((400));
var state_30291__$1 = (function (){var statearr_30293 = state_30291;
(statearr_30293[(7)] = inst_30283);

return statearr_30293;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30291__$1,(3),inst_30284);
} else {
if((state_val_30292 === (3))){
var inst_30286 = (state_30291[(2)]);
var inst_30287 = figwheel.client.heads_up.clear();
var state_30291__$1 = (function (){var statearr_30294 = state_30291;
(statearr_30294[(8)] = inst_30286);

return statearr_30294;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30291__$1,(4),inst_30287);
} else {
if((state_val_30292 === (4))){
var inst_30289 = (state_30291[(2)]);
var state_30291__$1 = state_30291;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30291__$1,inst_30289);
} else {
return null;
}
}
}
}
});})(c__20550__auto__))
;
return ((function (switch__20483__auto__,c__20550__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__20484__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__20484__auto____0 = (function (){
var statearr_30298 = [null,null,null,null,null,null,null,null,null];
(statearr_30298[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__20484__auto__);

(statearr_30298[(1)] = (1));

return statearr_30298;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__20484__auto____1 = (function (state_30291){
while(true){
var ret_value__20485__auto__ = (function (){try{while(true){
var result__20486__auto__ = switch__20483__auto__(state_30291);
if(cljs.core.keyword_identical_QMARK_(result__20486__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__20486__auto__;
}
break;
}
}catch (e30299){if((e30299 instanceof Object)){
var ex__20487__auto__ = e30299;
var statearr_30300_30302 = state_30291;
(statearr_30300_30302[(5)] = ex__20487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30291);

return cljs.core.constant$keyword$recur;
} else {
throw e30299;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20485__auto__,cljs.core.constant$keyword$recur)){
var G__30303 = state_30291;
state_30291 = G__30303;
continue;
} else {
return ret_value__20485__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__20484__auto__ = function(state_30291){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20484__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20484__auto____1.call(this,state_30291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__20484__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__20484__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__20484__auto__;
})()
;})(switch__20483__auto__,c__20550__auto__))
})();
var state__20552__auto__ = (function (){var statearr_30301 = (f__20551__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20551__auto__.cljs$core$IFn$_invoke$arity$0() : f__20551__auto__.call(null));
(statearr_30301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20550__auto__);

return statearr_30301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20552__auto__);
});})(c__20550__auto__))
);

return c__20550__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1440458059726