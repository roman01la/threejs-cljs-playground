// Compiled by ClojureScript 1.7.28 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var args__17528__auto__ = [];
var len__17521__auto___30140 = arguments.length;
var i__17522__auto___30141 = (0);
while(true){
if((i__17522__auto___30141 < len__17521__auto___30140)){
args__17528__auto__.push((arguments[i__17522__auto___30141]));

var G__30142 = (i__17522__auto___30141 + (1));
i__17522__auto___30141 = G__30142;
continue;
} else {
}
break;
}

var argseq__17529__auto__ = ((((2) < args__17528__auto__.length))?(new cljs.core.IndexedSeq(args__17528__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17529__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__30132_30143 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__30133_30144 = null;
var count__30134_30145 = (0);
var i__30135_30146 = (0);
while(true){
if((i__30135_30146 < count__30134_30145)){
var k_30147 = cljs.core._nth.call(null,chunk__30133_30144,i__30135_30146);
e.setAttribute(cljs.core.name.call(null,k_30147),cljs.core.get.call(null,attrs,k_30147));

var G__30148 = seq__30132_30143;
var G__30149 = chunk__30133_30144;
var G__30150 = count__30134_30145;
var G__30151 = (i__30135_30146 + (1));
seq__30132_30143 = G__30148;
chunk__30133_30144 = G__30149;
count__30134_30145 = G__30150;
i__30135_30146 = G__30151;
continue;
} else {
var temp__4425__auto___30152 = cljs.core.seq.call(null,seq__30132_30143);
if(temp__4425__auto___30152){
var seq__30132_30153__$1 = temp__4425__auto___30152;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30132_30153__$1)){
var c__17266__auto___30154 = cljs.core.chunk_first.call(null,seq__30132_30153__$1);
var G__30155 = cljs.core.chunk_rest.call(null,seq__30132_30153__$1);
var G__30156 = c__17266__auto___30154;
var G__30157 = cljs.core.count.call(null,c__17266__auto___30154);
var G__30158 = (0);
seq__30132_30143 = G__30155;
chunk__30133_30144 = G__30156;
count__30134_30145 = G__30157;
i__30135_30146 = G__30158;
continue;
} else {
var k_30159 = cljs.core.first.call(null,seq__30132_30153__$1);
e.setAttribute(cljs.core.name.call(null,k_30159),cljs.core.get.call(null,attrs,k_30159));

var G__30160 = cljs.core.next.call(null,seq__30132_30153__$1);
var G__30161 = null;
var G__30162 = (0);
var G__30163 = (0);
seq__30132_30143 = G__30160;
chunk__30133_30144 = G__30161;
count__30134_30145 = G__30162;
i__30135_30146 = G__30163;
continue;
}
} else {
}
}
break;
}

var seq__30136_30164 = cljs.core.seq.call(null,children);
var chunk__30137_30165 = null;
var count__30138_30166 = (0);
var i__30139_30167 = (0);
while(true){
if((i__30139_30167 < count__30138_30166)){
var ch_30168 = cljs.core._nth.call(null,chunk__30137_30165,i__30139_30167);
e.appendChild(ch_30168);

var G__30169 = seq__30136_30164;
var G__30170 = chunk__30137_30165;
var G__30171 = count__30138_30166;
var G__30172 = (i__30139_30167 + (1));
seq__30136_30164 = G__30169;
chunk__30137_30165 = G__30170;
count__30138_30166 = G__30171;
i__30139_30167 = G__30172;
continue;
} else {
var temp__4425__auto___30173 = cljs.core.seq.call(null,seq__30136_30164);
if(temp__4425__auto___30173){
var seq__30136_30174__$1 = temp__4425__auto___30173;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30136_30174__$1)){
var c__17266__auto___30175 = cljs.core.chunk_first.call(null,seq__30136_30174__$1);
var G__30176 = cljs.core.chunk_rest.call(null,seq__30136_30174__$1);
var G__30177 = c__17266__auto___30175;
var G__30178 = cljs.core.count.call(null,c__17266__auto___30175);
var G__30179 = (0);
seq__30136_30164 = G__30176;
chunk__30137_30165 = G__30177;
count__30138_30166 = G__30178;
i__30139_30167 = G__30179;
continue;
} else {
var ch_30180 = cljs.core.first.call(null,seq__30136_30174__$1);
e.appendChild(ch_30180);

var G__30181 = cljs.core.next.call(null,seq__30136_30174__$1);
var G__30182 = null;
var G__30183 = (0);
var G__30184 = (0);
seq__30136_30164 = G__30181;
chunk__30137_30165 = G__30182;
count__30138_30166 = G__30183;
i__30139_30167 = G__30184;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq30129){
var G__30130 = cljs.core.first.call(null,seq30129);
var seq30129__$1 = cljs.core.next.call(null,seq30129);
var G__30131 = cljs.core.first.call(null,seq30129__$1);
var seq30129__$2 = cljs.core.next.call(null,seq30129__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__30130,G__30131,seq30129__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17376__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17377__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17378__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17379__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17380__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17376__auto__,prefer_table__17377__auto__,method_cache__17378__auto__,cached_hierarchy__17379__auto__,hierarchy__17380__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17376__auto__,prefer_table__17377__auto__,method_cache__17378__auto__,cached_hierarchy__17379__auto__,hierarchy__17380__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17380__auto__,method_table__17376__auto__,prefer_table__17377__auto__,method_cache__17378__auto__,cached_hierarchy__17379__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_30185 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_30185.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_30185.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_30185.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_30185);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__30186,st_map){
var map__30191 = p__30186;
var map__30191__$1 = ((((!((map__30191 == null)))?((((map__30191.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30191.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30191):map__30191);
var container_el = cljs.core.get.call(null,map__30191__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__30191,map__30191__$1,container_el){
return (function (p__30193){
var vec__30194 = p__30193;
var k = cljs.core.nth.call(null,vec__30194,(0),null);
var v = cljs.core.nth.call(null,vec__30194,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__30191,map__30191__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__30195,dom_str){
var map__30198 = p__30195;
var map__30198__$1 = ((((!((map__30198 == null)))?((((map__30198.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30198.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30198):map__30198);
var c = map__30198__$1;
var content_area_el = cljs.core.get.call(null,map__30198__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__30200){
var map__30203 = p__30200;
var map__30203__$1 = ((((!((map__30203 == null)))?((((map__30203.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30203.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30203):map__30203);
var content_area_el = cljs.core.get.call(null,map__30203__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__21335__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21335__auto__){
return (function (){
var f__21336__auto__ = (function (){var switch__21270__auto__ = ((function (c__21335__auto__){
return (function (state_30246){
var state_val_30247 = (state_30246[(1)]);
if((state_val_30247 === (1))){
var inst_30231 = (state_30246[(7)]);
var inst_30231__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30232 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30233 = ["10px","10px","100%","68px","1.0"];
var inst_30234 = cljs.core.PersistentHashMap.fromArrays(inst_30232,inst_30233);
var inst_30235 = cljs.core.merge.call(null,inst_30234,style);
var inst_30236 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30231__$1,inst_30235);
var inst_30237 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30231__$1,msg);
var inst_30238 = cljs.core.async.timeout.call(null,(300));
var state_30246__$1 = (function (){var statearr_30248 = state_30246;
(statearr_30248[(8)] = inst_30236);

(statearr_30248[(7)] = inst_30231__$1);

(statearr_30248[(9)] = inst_30237);

return statearr_30248;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30246__$1,(2),inst_30238);
} else {
if((state_val_30247 === (2))){
var inst_30231 = (state_30246[(7)]);
var inst_30240 = (state_30246[(2)]);
var inst_30241 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_30242 = ["auto"];
var inst_30243 = cljs.core.PersistentHashMap.fromArrays(inst_30241,inst_30242);
var inst_30244 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30231,inst_30243);
var state_30246__$1 = (function (){var statearr_30249 = state_30246;
(statearr_30249[(10)] = inst_30240);

return statearr_30249;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30246__$1,inst_30244);
} else {
return null;
}
}
});})(c__21335__auto__))
;
return ((function (switch__21270__auto__,c__21335__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__21271__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__21271__auto____0 = (function (){
var statearr_30253 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30253[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21271__auto__);

(statearr_30253[(1)] = (1));

return statearr_30253;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21271__auto____1 = (function (state_30246){
while(true){
var ret_value__21272__auto__ = (function (){try{while(true){
var result__21273__auto__ = switch__21270__auto__.call(null,state_30246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21273__auto__;
}
break;
}
}catch (e30254){if((e30254 instanceof Object)){
var ex__21274__auto__ = e30254;
var statearr_30255_30257 = state_30246;
(statearr_30255_30257[(5)] = ex__21274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30258 = state_30246;
state_30246 = G__30258;
continue;
} else {
return ret_value__21272__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21271__auto__ = function(state_30246){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21271__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21271__auto____1.call(this,state_30246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21271__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21271__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21271__auto__;
})()
;})(switch__21270__auto__,c__21335__auto__))
})();
var state__21337__auto__ = (function (){var statearr_30256 = f__21336__auto__.call(null);
(statearr_30256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21335__auto__);

return statearr_30256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21337__auto__);
});})(c__21335__auto__))
);

return c__21335__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__30260 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__30260,(0),null);
var ln = cljs.core.nth.call(null,vec__30260,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__30263 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__30263,(0),null);
var file_line = cljs.core.nth.call(null,vec__30263,(1),null);
var file_column = cljs.core.nth.call(null,vec__30263,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__30263,file_name,file_line,file_column){
return (function (p1__30261_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__30261_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__30263,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16482__auto__ = file_line;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
var and__16470__auto__ = cause;
if(cljs.core.truth_(and__16470__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16470__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__30266 = figwheel.client.heads_up.ensure_container.call(null);
var map__30266__$1 = ((((!((map__30266 == null)))?((((map__30266.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30266.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30266):map__30266);
var content_area_el = cljs.core.get.call(null,map__30266__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21335__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21335__auto__){
return (function (){
var f__21336__auto__ = (function (){var switch__21270__auto__ = ((function (c__21335__auto__){
return (function (state_30314){
var state_val_30315 = (state_30314[(1)]);
if((state_val_30315 === (1))){
var inst_30297 = (state_30314[(7)]);
var inst_30297__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30298 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30299 = ["0.0"];
var inst_30300 = cljs.core.PersistentHashMap.fromArrays(inst_30298,inst_30299);
var inst_30301 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30297__$1,inst_30300);
var inst_30302 = cljs.core.async.timeout.call(null,(300));
var state_30314__$1 = (function (){var statearr_30316 = state_30314;
(statearr_30316[(8)] = inst_30301);

(statearr_30316[(7)] = inst_30297__$1);

return statearr_30316;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30314__$1,(2),inst_30302);
} else {
if((state_val_30315 === (2))){
var inst_30297 = (state_30314[(7)]);
var inst_30304 = (state_30314[(2)]);
var inst_30305 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_30306 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_30307 = cljs.core.PersistentHashMap.fromArrays(inst_30305,inst_30306);
var inst_30308 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30297,inst_30307);
var inst_30309 = cljs.core.async.timeout.call(null,(200));
var state_30314__$1 = (function (){var statearr_30317 = state_30314;
(statearr_30317[(9)] = inst_30308);

(statearr_30317[(10)] = inst_30304);

return statearr_30317;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30314__$1,(3),inst_30309);
} else {
if((state_val_30315 === (3))){
var inst_30297 = (state_30314[(7)]);
var inst_30311 = (state_30314[(2)]);
var inst_30312 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30297,"");
var state_30314__$1 = (function (){var statearr_30318 = state_30314;
(statearr_30318[(11)] = inst_30311);

return statearr_30318;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30314__$1,inst_30312);
} else {
return null;
}
}
}
});})(c__21335__auto__))
;
return ((function (switch__21270__auto__,c__21335__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__21271__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__21271__auto____0 = (function (){
var statearr_30322 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30322[(0)] = figwheel$client$heads_up$clear_$_state_machine__21271__auto__);

(statearr_30322[(1)] = (1));

return statearr_30322;
});
var figwheel$client$heads_up$clear_$_state_machine__21271__auto____1 = (function (state_30314){
while(true){
var ret_value__21272__auto__ = (function (){try{while(true){
var result__21273__auto__ = switch__21270__auto__.call(null,state_30314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21273__auto__;
}
break;
}
}catch (e30323){if((e30323 instanceof Object)){
var ex__21274__auto__ = e30323;
var statearr_30324_30326 = state_30314;
(statearr_30324_30326[(5)] = ex__21274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30327 = state_30314;
state_30314 = G__30327;
continue;
} else {
return ret_value__21272__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21271__auto__ = function(state_30314){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21271__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21271__auto____1.call(this,state_30314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21271__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21271__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21271__auto__;
})()
;})(switch__21270__auto__,c__21335__auto__))
})();
var state__21337__auto__ = (function (){var statearr_30325 = f__21336__auto__.call(null);
(statearr_30325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21335__auto__);

return statearr_30325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21337__auto__);
});})(c__21335__auto__))
);

return c__21335__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__21335__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21335__auto__){
return (function (){
var f__21336__auto__ = (function (){var switch__21270__auto__ = ((function (c__21335__auto__){
return (function (state_30359){
var state_val_30360 = (state_30359[(1)]);
if((state_val_30360 === (1))){
var inst_30349 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_30359__$1 = state_30359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30359__$1,(2),inst_30349);
} else {
if((state_val_30360 === (2))){
var inst_30351 = (state_30359[(2)]);
var inst_30352 = cljs.core.async.timeout.call(null,(400));
var state_30359__$1 = (function (){var statearr_30361 = state_30359;
(statearr_30361[(7)] = inst_30351);

return statearr_30361;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30359__$1,(3),inst_30352);
} else {
if((state_val_30360 === (3))){
var inst_30354 = (state_30359[(2)]);
var inst_30355 = figwheel.client.heads_up.clear.call(null);
var state_30359__$1 = (function (){var statearr_30362 = state_30359;
(statearr_30362[(8)] = inst_30354);

return statearr_30362;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30359__$1,(4),inst_30355);
} else {
if((state_val_30360 === (4))){
var inst_30357 = (state_30359[(2)]);
var state_30359__$1 = state_30359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30359__$1,inst_30357);
} else {
return null;
}
}
}
}
});})(c__21335__auto__))
;
return ((function (switch__21270__auto__,c__21335__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__21271__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__21271__auto____0 = (function (){
var statearr_30366 = [null,null,null,null,null,null,null,null,null];
(statearr_30366[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21271__auto__);

(statearr_30366[(1)] = (1));

return statearr_30366;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21271__auto____1 = (function (state_30359){
while(true){
var ret_value__21272__auto__ = (function (){try{while(true){
var result__21273__auto__ = switch__21270__auto__.call(null,state_30359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21273__auto__;
}
break;
}
}catch (e30367){if((e30367 instanceof Object)){
var ex__21274__auto__ = e30367;
var statearr_30368_30370 = state_30359;
(statearr_30368_30370[(5)] = ex__21274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30371 = state_30359;
state_30359 = G__30371;
continue;
} else {
return ret_value__21272__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21271__auto__ = function(state_30359){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21271__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21271__auto____1.call(this,state_30359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21271__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21271__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21271__auto__;
})()
;})(switch__21270__auto__,c__21335__auto__))
})();
var state__21337__auto__ = (function (){var statearr_30369 = f__21336__auto__.call(null);
(statearr_30369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21335__auto__);

return statearr_30369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21337__auto__);
});})(c__21335__auto__))
);

return c__21335__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map