// Compiled by ClojureScript 1.7.28 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var args__17528__auto__ = [];
var len__17521__auto___29050 = arguments.length;
var i__17522__auto___29051 = (0);
while(true){
if((i__17522__auto___29051 < len__17521__auto___29050)){
args__17528__auto__.push((arguments[i__17522__auto___29051]));

var G__29052 = (i__17522__auto___29051 + (1));
i__17522__auto___29051 = G__29052;
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
var seq__29042_29053 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__29043_29054 = null;
var count__29044_29055 = (0);
var i__29045_29056 = (0);
while(true){
if((i__29045_29056 < count__29044_29055)){
var k_29057 = cljs.core._nth.call(null,chunk__29043_29054,i__29045_29056);
e.setAttribute(cljs.core.name.call(null,k_29057),cljs.core.get.call(null,attrs,k_29057));

var G__29058 = seq__29042_29053;
var G__29059 = chunk__29043_29054;
var G__29060 = count__29044_29055;
var G__29061 = (i__29045_29056 + (1));
seq__29042_29053 = G__29058;
chunk__29043_29054 = G__29059;
count__29044_29055 = G__29060;
i__29045_29056 = G__29061;
continue;
} else {
var temp__4425__auto___29062 = cljs.core.seq.call(null,seq__29042_29053);
if(temp__4425__auto___29062){
var seq__29042_29063__$1 = temp__4425__auto___29062;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29042_29063__$1)){
var c__17266__auto___29064 = cljs.core.chunk_first.call(null,seq__29042_29063__$1);
var G__29065 = cljs.core.chunk_rest.call(null,seq__29042_29063__$1);
var G__29066 = c__17266__auto___29064;
var G__29067 = cljs.core.count.call(null,c__17266__auto___29064);
var G__29068 = (0);
seq__29042_29053 = G__29065;
chunk__29043_29054 = G__29066;
count__29044_29055 = G__29067;
i__29045_29056 = G__29068;
continue;
} else {
var k_29069 = cljs.core.first.call(null,seq__29042_29063__$1);
e.setAttribute(cljs.core.name.call(null,k_29069),cljs.core.get.call(null,attrs,k_29069));

var G__29070 = cljs.core.next.call(null,seq__29042_29063__$1);
var G__29071 = null;
var G__29072 = (0);
var G__29073 = (0);
seq__29042_29053 = G__29070;
chunk__29043_29054 = G__29071;
count__29044_29055 = G__29072;
i__29045_29056 = G__29073;
continue;
}
} else {
}
}
break;
}

var seq__29046_29074 = cljs.core.seq.call(null,children);
var chunk__29047_29075 = null;
var count__29048_29076 = (0);
var i__29049_29077 = (0);
while(true){
if((i__29049_29077 < count__29048_29076)){
var ch_29078 = cljs.core._nth.call(null,chunk__29047_29075,i__29049_29077);
e.appendChild(ch_29078);

var G__29079 = seq__29046_29074;
var G__29080 = chunk__29047_29075;
var G__29081 = count__29048_29076;
var G__29082 = (i__29049_29077 + (1));
seq__29046_29074 = G__29079;
chunk__29047_29075 = G__29080;
count__29048_29076 = G__29081;
i__29049_29077 = G__29082;
continue;
} else {
var temp__4425__auto___29083 = cljs.core.seq.call(null,seq__29046_29074);
if(temp__4425__auto___29083){
var seq__29046_29084__$1 = temp__4425__auto___29083;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29046_29084__$1)){
var c__17266__auto___29085 = cljs.core.chunk_first.call(null,seq__29046_29084__$1);
var G__29086 = cljs.core.chunk_rest.call(null,seq__29046_29084__$1);
var G__29087 = c__17266__auto___29085;
var G__29088 = cljs.core.count.call(null,c__17266__auto___29085);
var G__29089 = (0);
seq__29046_29074 = G__29086;
chunk__29047_29075 = G__29087;
count__29048_29076 = G__29088;
i__29049_29077 = G__29089;
continue;
} else {
var ch_29090 = cljs.core.first.call(null,seq__29046_29084__$1);
e.appendChild(ch_29090);

var G__29091 = cljs.core.next.call(null,seq__29046_29084__$1);
var G__29092 = null;
var G__29093 = (0);
var G__29094 = (0);
seq__29046_29074 = G__29091;
chunk__29047_29075 = G__29092;
count__29048_29076 = G__29093;
i__29049_29077 = G__29094;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq29039){
var G__29040 = cljs.core.first.call(null,seq29039);
var seq29039__$1 = cljs.core.next.call(null,seq29039);
var G__29041 = cljs.core.first.call(null,seq29039__$1);
var seq29039__$2 = cljs.core.next.call(null,seq29039__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__29040,G__29041,seq29039__$2);
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
var el_29095 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_29095.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_29095.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_29095.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_29095);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__29096,st_map){
var map__29101 = p__29096;
var map__29101__$1 = ((((!((map__29101 == null)))?((((map__29101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29101):map__29101);
var container_el = cljs.core.get.call(null,map__29101__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__29101,map__29101__$1,container_el){
return (function (p__29103){
var vec__29104 = p__29103;
var k = cljs.core.nth.call(null,vec__29104,(0),null);
var v = cljs.core.nth.call(null,vec__29104,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__29101,map__29101__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__29105,dom_str){
var map__29108 = p__29105;
var map__29108__$1 = ((((!((map__29108 == null)))?((((map__29108.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29108.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29108):map__29108);
var c = map__29108__$1;
var content_area_el = cljs.core.get.call(null,map__29108__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__29110){
var map__29113 = p__29110;
var map__29113__$1 = ((((!((map__29113 == null)))?((((map__29113.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29113.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29113):map__29113);
var content_area_el = cljs.core.get.call(null,map__29113__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__20234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20234__auto__){
return (function (){
var f__20235__auto__ = (function (){var switch__20169__auto__ = ((function (c__20234__auto__){
return (function (state_29156){
var state_val_29157 = (state_29156[(1)]);
if((state_val_29157 === (1))){
var inst_29141 = (state_29156[(7)]);
var inst_29141__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29142 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29143 = ["10px","10px","100%","68px","1.0"];
var inst_29144 = cljs.core.PersistentHashMap.fromArrays(inst_29142,inst_29143);
var inst_29145 = cljs.core.merge.call(null,inst_29144,style);
var inst_29146 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29141__$1,inst_29145);
var inst_29147 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29141__$1,msg);
var inst_29148 = cljs.core.async.timeout.call(null,(300));
var state_29156__$1 = (function (){var statearr_29158 = state_29156;
(statearr_29158[(8)] = inst_29147);

(statearr_29158[(7)] = inst_29141__$1);

(statearr_29158[(9)] = inst_29146);

return statearr_29158;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29156__$1,(2),inst_29148);
} else {
if((state_val_29157 === (2))){
var inst_29141 = (state_29156[(7)]);
var inst_29150 = (state_29156[(2)]);
var inst_29151 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_29152 = ["auto"];
var inst_29153 = cljs.core.PersistentHashMap.fromArrays(inst_29151,inst_29152);
var inst_29154 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29141,inst_29153);
var state_29156__$1 = (function (){var statearr_29159 = state_29156;
(statearr_29159[(10)] = inst_29150);

return statearr_29159;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29156__$1,inst_29154);
} else {
return null;
}
}
});})(c__20234__auto__))
;
return ((function (switch__20169__auto__,c__20234__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__20170__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__20170__auto____0 = (function (){
var statearr_29163 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29163[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__20170__auto__);

(statearr_29163[(1)] = (1));

return statearr_29163;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__20170__auto____1 = (function (state_29156){
while(true){
var ret_value__20171__auto__ = (function (){try{while(true){
var result__20172__auto__ = switch__20169__auto__.call(null,state_29156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20172__auto__;
}
break;
}
}catch (e29164){if((e29164 instanceof Object)){
var ex__20173__auto__ = e29164;
var statearr_29165_29167 = state_29156;
(statearr_29165_29167[(5)] = ex__20173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29168 = state_29156;
state_29156 = G__29168;
continue;
} else {
return ret_value__20171__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__20170__auto__ = function(state_29156){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20170__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20170__auto____1.call(this,state_29156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__20170__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__20170__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__20170__auto__;
})()
;})(switch__20169__auto__,c__20234__auto__))
})();
var state__20236__auto__ = (function (){var statearr_29166 = f__20235__auto__.call(null);
(statearr_29166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20234__auto__);

return statearr_29166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20236__auto__);
});})(c__20234__auto__))
);

return c__20234__auto__;
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
var vec__29170 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__29170,(0),null);
var ln = cljs.core.nth.call(null,vec__29170,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__29173 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__29173,(0),null);
var file_line = cljs.core.nth.call(null,vec__29173,(1),null);
var file_column = cljs.core.nth.call(null,vec__29173,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__29173,file_name,file_line,file_column){
return (function (p1__29171_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__29171_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__29173,file_name,file_line,file_column))
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
var map__29176 = figwheel.client.heads_up.ensure_container.call(null);
var map__29176__$1 = ((((!((map__29176 == null)))?((((map__29176.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29176.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29176):map__29176);
var content_area_el = cljs.core.get.call(null,map__29176__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__20234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20234__auto__){
return (function (){
var f__20235__auto__ = (function (){var switch__20169__auto__ = ((function (c__20234__auto__){
return (function (state_29224){
var state_val_29225 = (state_29224[(1)]);
if((state_val_29225 === (1))){
var inst_29207 = (state_29224[(7)]);
var inst_29207__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29208 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29209 = ["0.0"];
var inst_29210 = cljs.core.PersistentHashMap.fromArrays(inst_29208,inst_29209);
var inst_29211 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29207__$1,inst_29210);
var inst_29212 = cljs.core.async.timeout.call(null,(300));
var state_29224__$1 = (function (){var statearr_29226 = state_29224;
(statearr_29226[(7)] = inst_29207__$1);

(statearr_29226[(8)] = inst_29211);

return statearr_29226;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29224__$1,(2),inst_29212);
} else {
if((state_val_29225 === (2))){
var inst_29207 = (state_29224[(7)]);
var inst_29214 = (state_29224[(2)]);
var inst_29215 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_29216 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_29217 = cljs.core.PersistentHashMap.fromArrays(inst_29215,inst_29216);
var inst_29218 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29207,inst_29217);
var inst_29219 = cljs.core.async.timeout.call(null,(200));
var state_29224__$1 = (function (){var statearr_29227 = state_29224;
(statearr_29227[(9)] = inst_29218);

(statearr_29227[(10)] = inst_29214);

return statearr_29227;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29224__$1,(3),inst_29219);
} else {
if((state_val_29225 === (3))){
var inst_29207 = (state_29224[(7)]);
var inst_29221 = (state_29224[(2)]);
var inst_29222 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29207,"");
var state_29224__$1 = (function (){var statearr_29228 = state_29224;
(statearr_29228[(11)] = inst_29221);

return statearr_29228;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29224__$1,inst_29222);
} else {
return null;
}
}
}
});})(c__20234__auto__))
;
return ((function (switch__20169__auto__,c__20234__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__20170__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__20170__auto____0 = (function (){
var statearr_29232 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29232[(0)] = figwheel$client$heads_up$clear_$_state_machine__20170__auto__);

(statearr_29232[(1)] = (1));

return statearr_29232;
});
var figwheel$client$heads_up$clear_$_state_machine__20170__auto____1 = (function (state_29224){
while(true){
var ret_value__20171__auto__ = (function (){try{while(true){
var result__20172__auto__ = switch__20169__auto__.call(null,state_29224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20172__auto__;
}
break;
}
}catch (e29233){if((e29233 instanceof Object)){
var ex__20173__auto__ = e29233;
var statearr_29234_29236 = state_29224;
(statearr_29234_29236[(5)] = ex__20173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29237 = state_29224;
state_29224 = G__29237;
continue;
} else {
return ret_value__20171__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__20170__auto__ = function(state_29224){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__20170__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__20170__auto____1.call(this,state_29224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__20170__auto____0;
figwheel$client$heads_up$clear_$_state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__20170__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__20170__auto__;
})()
;})(switch__20169__auto__,c__20234__auto__))
})();
var state__20236__auto__ = (function (){var statearr_29235 = f__20235__auto__.call(null);
(statearr_29235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20234__auto__);

return statearr_29235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20236__auto__);
});})(c__20234__auto__))
);

return c__20234__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__20234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20234__auto__){
return (function (){
var f__20235__auto__ = (function (){var switch__20169__auto__ = ((function (c__20234__auto__){
return (function (state_29269){
var state_val_29270 = (state_29269[(1)]);
if((state_val_29270 === (1))){
var inst_29259 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_29269__$1 = state_29269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29269__$1,(2),inst_29259);
} else {
if((state_val_29270 === (2))){
var inst_29261 = (state_29269[(2)]);
var inst_29262 = cljs.core.async.timeout.call(null,(400));
var state_29269__$1 = (function (){var statearr_29271 = state_29269;
(statearr_29271[(7)] = inst_29261);

return statearr_29271;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29269__$1,(3),inst_29262);
} else {
if((state_val_29270 === (3))){
var inst_29264 = (state_29269[(2)]);
var inst_29265 = figwheel.client.heads_up.clear.call(null);
var state_29269__$1 = (function (){var statearr_29272 = state_29269;
(statearr_29272[(8)] = inst_29264);

return statearr_29272;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29269__$1,(4),inst_29265);
} else {
if((state_val_29270 === (4))){
var inst_29267 = (state_29269[(2)]);
var state_29269__$1 = state_29269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29269__$1,inst_29267);
} else {
return null;
}
}
}
}
});})(c__20234__auto__))
;
return ((function (switch__20169__auto__,c__20234__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__20170__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__20170__auto____0 = (function (){
var statearr_29276 = [null,null,null,null,null,null,null,null,null];
(statearr_29276[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__20170__auto__);

(statearr_29276[(1)] = (1));

return statearr_29276;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__20170__auto____1 = (function (state_29269){
while(true){
var ret_value__20171__auto__ = (function (){try{while(true){
var result__20172__auto__ = switch__20169__auto__.call(null,state_29269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20172__auto__;
}
break;
}
}catch (e29277){if((e29277 instanceof Object)){
var ex__20173__auto__ = e29277;
var statearr_29278_29280 = state_29269;
(statearr_29278_29280[(5)] = ex__20173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29281 = state_29269;
state_29269 = G__29281;
continue;
} else {
return ret_value__20171__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__20170__auto__ = function(state_29269){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20170__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20170__auto____1.call(this,state_29269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__20170__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__20170__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__20170__auto__;
})()
;})(switch__20169__auto__,c__20234__auto__))
})();
var state__20236__auto__ = (function (){var statearr_29279 = f__20235__auto__.call(null);
(statearr_29279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20234__auto__);

return statearr_29279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20236__auto__);
});})(c__20234__auto__))
);

return c__20234__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1440195220601