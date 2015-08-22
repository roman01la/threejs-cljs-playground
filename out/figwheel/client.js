// Compiled by ClojureScript 1.7.28 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29456__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__29456 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29457__i = 0, G__29457__a = new Array(arguments.length -  0);
while (G__29457__i < G__29457__a.length) {G__29457__a[G__29457__i] = arguments[G__29457__i + 0]; ++G__29457__i;}
  args = new cljs.core.IndexedSeq(G__29457__a,0);
} 
return G__29456__delegate.call(this,args);};
G__29456.cljs$lang$maxFixedArity = 0;
G__29456.cljs$lang$applyTo = (function (arglist__29458){
var args = cljs.core.seq(arglist__29458);
return G__29456__delegate(args);
});
G__29456.cljs$core$IFn$_invoke$arity$variadic = G__29456__delegate;
return G__29456;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29459){
var map__29462 = p__29459;
var map__29462__$1 = ((((!((map__29462 == null)))?((((map__29462.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29462.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29462):map__29462);
var message = cljs.core.get.call(null,map__29462__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29462__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16482__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16470__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16470__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16470__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21335__auto___29592 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21335__auto___29592,ch){
return (function (){
var f__21336__auto__ = (function (){var switch__21270__auto__ = ((function (c__21335__auto___29592,ch){
return (function (state_29566){
var state_val_29567 = (state_29566[(1)]);
if((state_val_29567 === (7))){
var inst_29562 = (state_29566[(2)]);
var state_29566__$1 = state_29566;
var statearr_29568_29593 = state_29566__$1;
(statearr_29568_29593[(2)] = inst_29562);

(statearr_29568_29593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29567 === (1))){
var state_29566__$1 = state_29566;
var statearr_29569_29594 = state_29566__$1;
(statearr_29569_29594[(2)] = null);

(statearr_29569_29594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29567 === (4))){
var inst_29530 = (state_29566[(7)]);
var inst_29530__$1 = (state_29566[(2)]);
var state_29566__$1 = (function (){var statearr_29570 = state_29566;
(statearr_29570[(7)] = inst_29530__$1);

return statearr_29570;
})();
if(cljs.core.truth_(inst_29530__$1)){
var statearr_29571_29595 = state_29566__$1;
(statearr_29571_29595[(1)] = (5));

} else {
var statearr_29572_29596 = state_29566__$1;
(statearr_29572_29596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29567 === (13))){
var state_29566__$1 = state_29566;
var statearr_29573_29597 = state_29566__$1;
(statearr_29573_29597[(2)] = null);

(statearr_29573_29597[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29567 === (6))){
var state_29566__$1 = state_29566;
var statearr_29574_29598 = state_29566__$1;
(statearr_29574_29598[(2)] = null);

(statearr_29574_29598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29567 === (3))){
var inst_29564 = (state_29566[(2)]);
var state_29566__$1 = state_29566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29566__$1,inst_29564);
} else {
if((state_val_29567 === (12))){
var inst_29537 = (state_29566[(8)]);
var inst_29550 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29537);
var inst_29551 = cljs.core.first.call(null,inst_29550);
var inst_29552 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29551);
var inst_29553 = console.warn("Figwheel: Not loading code with warnings - ",inst_29552);
var state_29566__$1 = state_29566;
var statearr_29575_29599 = state_29566__$1;
(statearr_29575_29599[(2)] = inst_29553);

(statearr_29575_29599[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29567 === (2))){
var state_29566__$1 = state_29566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29566__$1,(4),ch);
} else {
if((state_val_29567 === (11))){
var inst_29546 = (state_29566[(2)]);
var state_29566__$1 = state_29566;
var statearr_29576_29600 = state_29566__$1;
(statearr_29576_29600[(2)] = inst_29546);

(statearr_29576_29600[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29567 === (9))){
var inst_29536 = (state_29566[(9)]);
var inst_29548 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29536,opts);
var state_29566__$1 = state_29566;
if(cljs.core.truth_(inst_29548)){
var statearr_29577_29601 = state_29566__$1;
(statearr_29577_29601[(1)] = (12));

} else {
var statearr_29578_29602 = state_29566__$1;
(statearr_29578_29602[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29567 === (5))){
var inst_29530 = (state_29566[(7)]);
var inst_29536 = (state_29566[(9)]);
var inst_29532 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29533 = (new cljs.core.PersistentArrayMap(null,2,inst_29532,null));
var inst_29534 = (new cljs.core.PersistentHashSet(null,inst_29533,null));
var inst_29535 = figwheel.client.focus_msgs.call(null,inst_29534,inst_29530);
var inst_29536__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29535);
var inst_29537 = cljs.core.first.call(null,inst_29535);
var inst_29538 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29536__$1,opts);
var state_29566__$1 = (function (){var statearr_29579 = state_29566;
(statearr_29579[(8)] = inst_29537);

(statearr_29579[(9)] = inst_29536__$1);

return statearr_29579;
})();
if(cljs.core.truth_(inst_29538)){
var statearr_29580_29603 = state_29566__$1;
(statearr_29580_29603[(1)] = (8));

} else {
var statearr_29581_29604 = state_29566__$1;
(statearr_29581_29604[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29567 === (14))){
var inst_29556 = (state_29566[(2)]);
var state_29566__$1 = state_29566;
var statearr_29582_29605 = state_29566__$1;
(statearr_29582_29605[(2)] = inst_29556);

(statearr_29582_29605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29567 === (10))){
var inst_29558 = (state_29566[(2)]);
var state_29566__$1 = (function (){var statearr_29583 = state_29566;
(statearr_29583[(10)] = inst_29558);

return statearr_29583;
})();
var statearr_29584_29606 = state_29566__$1;
(statearr_29584_29606[(2)] = null);

(statearr_29584_29606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29567 === (8))){
var inst_29537 = (state_29566[(8)]);
var inst_29540 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29541 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29537);
var inst_29542 = cljs.core.async.timeout.call(null,(1000));
var inst_29543 = [inst_29541,inst_29542];
var inst_29544 = (new cljs.core.PersistentVector(null,2,(5),inst_29540,inst_29543,null));
var state_29566__$1 = state_29566;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29566__$1,(11),inst_29544);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21335__auto___29592,ch))
;
return ((function (switch__21270__auto__,c__21335__auto___29592,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21271__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21271__auto____0 = (function (){
var statearr_29588 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29588[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21271__auto__);

(statearr_29588[(1)] = (1));

return statearr_29588;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21271__auto____1 = (function (state_29566){
while(true){
var ret_value__21272__auto__ = (function (){try{while(true){
var result__21273__auto__ = switch__21270__auto__.call(null,state_29566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21273__auto__;
}
break;
}
}catch (e29589){if((e29589 instanceof Object)){
var ex__21274__auto__ = e29589;
var statearr_29590_29607 = state_29566;
(statearr_29590_29607[(5)] = ex__21274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29608 = state_29566;
state_29566 = G__29608;
continue;
} else {
return ret_value__21272__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21271__auto__ = function(state_29566){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21271__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21271__auto____1.call(this,state_29566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21271__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21271__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21271__auto__;
})()
;})(switch__21270__auto__,c__21335__auto___29592,ch))
})();
var state__21337__auto__ = (function (){var statearr_29591 = f__21336__auto__.call(null);
(statearr_29591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21335__auto___29592);

return statearr_29591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21337__auto__);
});})(c__21335__auto___29592,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29609_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29609_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_29616 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29616){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_29614 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_29615 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_29614,_STAR_print_newline_STAR_29615,base_path_29616){
return (function() { 
var G__29617__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__29617 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29618__i = 0, G__29618__a = new Array(arguments.length -  0);
while (G__29618__i < G__29618__a.length) {G__29618__a[G__29618__i] = arguments[G__29618__i + 0]; ++G__29618__i;}
  args = new cljs.core.IndexedSeq(G__29618__a,0);
} 
return G__29617__delegate.call(this,args);};
G__29617.cljs$lang$maxFixedArity = 0;
G__29617.cljs$lang$applyTo = (function (arglist__29619){
var args = cljs.core.seq(arglist__29619);
return G__29617__delegate(args);
});
G__29617.cljs$core$IFn$_invoke$arity$variadic = G__29617__delegate;
return G__29617;
})()
;})(_STAR_print_fn_STAR_29614,_STAR_print_newline_STAR_29615,base_path_29616))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29615;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29614;
}}catch (e29613){if((e29613 instanceof Error)){
var e = e29613;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29616], null));
} else {
var e = e29613;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29616))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29620){
var map__29627 = p__29620;
var map__29627__$1 = ((((!((map__29627 == null)))?((((map__29627.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29627.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29627):map__29627);
var opts = map__29627__$1;
var build_id = cljs.core.get.call(null,map__29627__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29627,map__29627__$1,opts,build_id){
return (function (p__29629){
var vec__29630 = p__29629;
var map__29631 = cljs.core.nth.call(null,vec__29630,(0),null);
var map__29631__$1 = ((((!((map__29631 == null)))?((((map__29631.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29631.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29631):map__29631);
var msg = map__29631__$1;
var msg_name = cljs.core.get.call(null,map__29631__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29630,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29630,map__29631,map__29631__$1,msg,msg_name,_,map__29627,map__29627__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29630,map__29631,map__29631__$1,msg,msg_name,_,map__29627,map__29627__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29627,map__29627__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29637){
var vec__29638 = p__29637;
var map__29639 = cljs.core.nth.call(null,vec__29638,(0),null);
var map__29639__$1 = ((((!((map__29639 == null)))?((((map__29639.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29639.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29639):map__29639);
var msg = map__29639__$1;
var msg_name = cljs.core.get.call(null,map__29639__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29638,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29641){
var map__29651 = p__29641;
var map__29651__$1 = ((((!((map__29651 == null)))?((((map__29651.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29651.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29651):map__29651);
var on_compile_warning = cljs.core.get.call(null,map__29651__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29651__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29651,map__29651__$1,on_compile_warning,on_compile_fail){
return (function (p__29653){
var vec__29654 = p__29653;
var map__29655 = cljs.core.nth.call(null,vec__29654,(0),null);
var map__29655__$1 = ((((!((map__29655 == null)))?((((map__29655.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29655.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29655):map__29655);
var msg = map__29655__$1;
var msg_name = cljs.core.get.call(null,map__29655__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29654,(1));
var pred__29657 = cljs.core._EQ_;
var expr__29658 = msg_name;
if(cljs.core.truth_(pred__29657.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29658))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29657.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29658))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29651,map__29651__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21335__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21335__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21336__auto__ = (function (){var switch__21270__auto__ = ((function (c__21335__auto__,msg_hist,msg_names,msg){
return (function (state_29859){
var state_val_29860 = (state_29859[(1)]);
if((state_val_29860 === (7))){
var inst_29793 = (state_29859[(2)]);
var state_29859__$1 = state_29859;
var statearr_29861_29902 = state_29859__$1;
(statearr_29861_29902[(2)] = inst_29793);

(statearr_29861_29902[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (20))){
var inst_29821 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29859__$1 = state_29859;
if(cljs.core.truth_(inst_29821)){
var statearr_29862_29903 = state_29859__$1;
(statearr_29862_29903[(1)] = (22));

} else {
var statearr_29863_29904 = state_29859__$1;
(statearr_29863_29904[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (27))){
var inst_29833 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29834 = figwheel.client.heads_up.display_warning.call(null,inst_29833);
var state_29859__$1 = state_29859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29859__$1,(30),inst_29834);
} else {
if((state_val_29860 === (1))){
var inst_29781 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29859__$1 = state_29859;
if(cljs.core.truth_(inst_29781)){
var statearr_29864_29905 = state_29859__$1;
(statearr_29864_29905[(1)] = (2));

} else {
var statearr_29865_29906 = state_29859__$1;
(statearr_29865_29906[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (24))){
var inst_29849 = (state_29859[(2)]);
var state_29859__$1 = state_29859;
var statearr_29866_29907 = state_29859__$1;
(statearr_29866_29907[(2)] = inst_29849);

(statearr_29866_29907[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (4))){
var inst_29857 = (state_29859[(2)]);
var state_29859__$1 = state_29859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29859__$1,inst_29857);
} else {
if((state_val_29860 === (15))){
var inst_29809 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29810 = figwheel.client.format_messages.call(null,inst_29809);
var inst_29811 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29812 = figwheel.client.heads_up.display_error.call(null,inst_29810,inst_29811);
var state_29859__$1 = state_29859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29859__$1,(18),inst_29812);
} else {
if((state_val_29860 === (21))){
var inst_29851 = (state_29859[(2)]);
var state_29859__$1 = state_29859;
var statearr_29867_29908 = state_29859__$1;
(statearr_29867_29908[(2)] = inst_29851);

(statearr_29867_29908[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (31))){
var inst_29840 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29859__$1 = state_29859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29859__$1,(34),inst_29840);
} else {
if((state_val_29860 === (32))){
var state_29859__$1 = state_29859;
var statearr_29868_29909 = state_29859__$1;
(statearr_29868_29909[(2)] = null);

(statearr_29868_29909[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (33))){
var inst_29845 = (state_29859[(2)]);
var state_29859__$1 = state_29859;
var statearr_29869_29910 = state_29859__$1;
(statearr_29869_29910[(2)] = inst_29845);

(statearr_29869_29910[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (13))){
var inst_29799 = (state_29859[(2)]);
var inst_29800 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29801 = figwheel.client.format_messages.call(null,inst_29800);
var inst_29802 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29803 = figwheel.client.heads_up.display_error.call(null,inst_29801,inst_29802);
var state_29859__$1 = (function (){var statearr_29870 = state_29859;
(statearr_29870[(7)] = inst_29799);

return statearr_29870;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29859__$1,(14),inst_29803);
} else {
if((state_val_29860 === (22))){
var inst_29823 = figwheel.client.heads_up.clear.call(null);
var state_29859__$1 = state_29859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29859__$1,(25),inst_29823);
} else {
if((state_val_29860 === (29))){
var inst_29847 = (state_29859[(2)]);
var state_29859__$1 = state_29859;
var statearr_29871_29911 = state_29859__$1;
(statearr_29871_29911[(2)] = inst_29847);

(statearr_29871_29911[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (6))){
var inst_29789 = figwheel.client.heads_up.clear.call(null);
var state_29859__$1 = state_29859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29859__$1,(9),inst_29789);
} else {
if((state_val_29860 === (28))){
var inst_29838 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29859__$1 = state_29859;
if(cljs.core.truth_(inst_29838)){
var statearr_29872_29912 = state_29859__$1;
(statearr_29872_29912[(1)] = (31));

} else {
var statearr_29873_29913 = state_29859__$1;
(statearr_29873_29913[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (25))){
var inst_29825 = (state_29859[(2)]);
var inst_29826 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29827 = figwheel.client.heads_up.display_warning.call(null,inst_29826);
var state_29859__$1 = (function (){var statearr_29874 = state_29859;
(statearr_29874[(8)] = inst_29825);

return statearr_29874;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29859__$1,(26),inst_29827);
} else {
if((state_val_29860 === (34))){
var inst_29842 = (state_29859[(2)]);
var state_29859__$1 = state_29859;
var statearr_29875_29914 = state_29859__$1;
(statearr_29875_29914[(2)] = inst_29842);

(statearr_29875_29914[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (17))){
var inst_29853 = (state_29859[(2)]);
var state_29859__$1 = state_29859;
var statearr_29876_29915 = state_29859__$1;
(statearr_29876_29915[(2)] = inst_29853);

(statearr_29876_29915[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (3))){
var inst_29795 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29859__$1 = state_29859;
if(cljs.core.truth_(inst_29795)){
var statearr_29877_29916 = state_29859__$1;
(statearr_29877_29916[(1)] = (10));

} else {
var statearr_29878_29917 = state_29859__$1;
(statearr_29878_29917[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (12))){
var inst_29855 = (state_29859[(2)]);
var state_29859__$1 = state_29859;
var statearr_29879_29918 = state_29859__$1;
(statearr_29879_29918[(2)] = inst_29855);

(statearr_29879_29918[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (2))){
var inst_29783 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29859__$1 = state_29859;
if(cljs.core.truth_(inst_29783)){
var statearr_29880_29919 = state_29859__$1;
(statearr_29880_29919[(1)] = (5));

} else {
var statearr_29881_29920 = state_29859__$1;
(statearr_29881_29920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (23))){
var inst_29831 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29859__$1 = state_29859;
if(cljs.core.truth_(inst_29831)){
var statearr_29882_29921 = state_29859__$1;
(statearr_29882_29921[(1)] = (27));

} else {
var statearr_29883_29922 = state_29859__$1;
(statearr_29883_29922[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (19))){
var inst_29818 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29819 = figwheel.client.heads_up.append_message.call(null,inst_29818);
var state_29859__$1 = state_29859;
var statearr_29884_29923 = state_29859__$1;
(statearr_29884_29923[(2)] = inst_29819);

(statearr_29884_29923[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (11))){
var inst_29807 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29859__$1 = state_29859;
if(cljs.core.truth_(inst_29807)){
var statearr_29885_29924 = state_29859__$1;
(statearr_29885_29924[(1)] = (15));

} else {
var statearr_29886_29925 = state_29859__$1;
(statearr_29886_29925[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (9))){
var inst_29791 = (state_29859[(2)]);
var state_29859__$1 = state_29859;
var statearr_29887_29926 = state_29859__$1;
(statearr_29887_29926[(2)] = inst_29791);

(statearr_29887_29926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (5))){
var inst_29785 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29859__$1 = state_29859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29859__$1,(8),inst_29785);
} else {
if((state_val_29860 === (14))){
var inst_29805 = (state_29859[(2)]);
var state_29859__$1 = state_29859;
var statearr_29888_29927 = state_29859__$1;
(statearr_29888_29927[(2)] = inst_29805);

(statearr_29888_29927[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (26))){
var inst_29829 = (state_29859[(2)]);
var state_29859__$1 = state_29859;
var statearr_29889_29928 = state_29859__$1;
(statearr_29889_29928[(2)] = inst_29829);

(statearr_29889_29928[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (16))){
var inst_29816 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29859__$1 = state_29859;
if(cljs.core.truth_(inst_29816)){
var statearr_29890_29929 = state_29859__$1;
(statearr_29890_29929[(1)] = (19));

} else {
var statearr_29891_29930 = state_29859__$1;
(statearr_29891_29930[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (30))){
var inst_29836 = (state_29859[(2)]);
var state_29859__$1 = state_29859;
var statearr_29892_29931 = state_29859__$1;
(statearr_29892_29931[(2)] = inst_29836);

(statearr_29892_29931[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (10))){
var inst_29797 = figwheel.client.heads_up.clear.call(null);
var state_29859__$1 = state_29859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29859__$1,(13),inst_29797);
} else {
if((state_val_29860 === (18))){
var inst_29814 = (state_29859[(2)]);
var state_29859__$1 = state_29859;
var statearr_29893_29932 = state_29859__$1;
(statearr_29893_29932[(2)] = inst_29814);

(statearr_29893_29932[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (8))){
var inst_29787 = (state_29859[(2)]);
var state_29859__$1 = state_29859;
var statearr_29894_29933 = state_29859__$1;
(statearr_29894_29933[(2)] = inst_29787);

(statearr_29894_29933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21335__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21270__auto__,c__21335__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21271__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21271__auto____0 = (function (){
var statearr_29898 = [null,null,null,null,null,null,null,null,null];
(statearr_29898[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21271__auto__);

(statearr_29898[(1)] = (1));

return statearr_29898;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21271__auto____1 = (function (state_29859){
while(true){
var ret_value__21272__auto__ = (function (){try{while(true){
var result__21273__auto__ = switch__21270__auto__.call(null,state_29859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21273__auto__;
}
break;
}
}catch (e29899){if((e29899 instanceof Object)){
var ex__21274__auto__ = e29899;
var statearr_29900_29934 = state_29859;
(statearr_29900_29934[(5)] = ex__21274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29935 = state_29859;
state_29859 = G__29935;
continue;
} else {
return ret_value__21272__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21271__auto__ = function(state_29859){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21271__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21271__auto____1.call(this,state_29859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21271__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21271__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21271__auto__;
})()
;})(switch__21270__auto__,c__21335__auto__,msg_hist,msg_names,msg))
})();
var state__21337__auto__ = (function (){var statearr_29901 = f__21336__auto__.call(null);
(statearr_29901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21335__auto__);

return statearr_29901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21337__auto__);
});})(c__21335__auto__,msg_hist,msg_names,msg))
);

return c__21335__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21335__auto___29998 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21335__auto___29998,ch){
return (function (){
var f__21336__auto__ = (function (){var switch__21270__auto__ = ((function (c__21335__auto___29998,ch){
return (function (state_29981){
var state_val_29982 = (state_29981[(1)]);
if((state_val_29982 === (1))){
var state_29981__$1 = state_29981;
var statearr_29983_29999 = state_29981__$1;
(statearr_29983_29999[(2)] = null);

(statearr_29983_29999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29982 === (2))){
var state_29981__$1 = state_29981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29981__$1,(4),ch);
} else {
if((state_val_29982 === (3))){
var inst_29979 = (state_29981[(2)]);
var state_29981__$1 = state_29981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29981__$1,inst_29979);
} else {
if((state_val_29982 === (4))){
var inst_29969 = (state_29981[(7)]);
var inst_29969__$1 = (state_29981[(2)]);
var state_29981__$1 = (function (){var statearr_29984 = state_29981;
(statearr_29984[(7)] = inst_29969__$1);

return statearr_29984;
})();
if(cljs.core.truth_(inst_29969__$1)){
var statearr_29985_30000 = state_29981__$1;
(statearr_29985_30000[(1)] = (5));

} else {
var statearr_29986_30001 = state_29981__$1;
(statearr_29986_30001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29982 === (5))){
var inst_29969 = (state_29981[(7)]);
var inst_29971 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29969);
var state_29981__$1 = state_29981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29981__$1,(8),inst_29971);
} else {
if((state_val_29982 === (6))){
var state_29981__$1 = state_29981;
var statearr_29987_30002 = state_29981__$1;
(statearr_29987_30002[(2)] = null);

(statearr_29987_30002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29982 === (7))){
var inst_29977 = (state_29981[(2)]);
var state_29981__$1 = state_29981;
var statearr_29988_30003 = state_29981__$1;
(statearr_29988_30003[(2)] = inst_29977);

(statearr_29988_30003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29982 === (8))){
var inst_29973 = (state_29981[(2)]);
var state_29981__$1 = (function (){var statearr_29989 = state_29981;
(statearr_29989[(8)] = inst_29973);

return statearr_29989;
})();
var statearr_29990_30004 = state_29981__$1;
(statearr_29990_30004[(2)] = null);

(statearr_29990_30004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__21335__auto___29998,ch))
;
return ((function (switch__21270__auto__,c__21335__auto___29998,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21271__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21271__auto____0 = (function (){
var statearr_29994 = [null,null,null,null,null,null,null,null,null];
(statearr_29994[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21271__auto__);

(statearr_29994[(1)] = (1));

return statearr_29994;
});
var figwheel$client$heads_up_plugin_$_state_machine__21271__auto____1 = (function (state_29981){
while(true){
var ret_value__21272__auto__ = (function (){try{while(true){
var result__21273__auto__ = switch__21270__auto__.call(null,state_29981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21273__auto__;
}
break;
}
}catch (e29995){if((e29995 instanceof Object)){
var ex__21274__auto__ = e29995;
var statearr_29996_30005 = state_29981;
(statearr_29996_30005[(5)] = ex__21274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30006 = state_29981;
state_29981 = G__30006;
continue;
} else {
return ret_value__21272__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21271__auto__ = function(state_29981){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21271__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21271__auto____1.call(this,state_29981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21271__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21271__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21271__auto__;
})()
;})(switch__21270__auto__,c__21335__auto___29998,ch))
})();
var state__21337__auto__ = (function (){var statearr_29997 = f__21336__auto__.call(null);
(statearr_29997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21335__auto___29998);

return statearr_29997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21337__auto__);
});})(c__21335__auto___29998,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21335__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21335__auto__){
return (function (){
var f__21336__auto__ = (function (){var switch__21270__auto__ = ((function (c__21335__auto__){
return (function (state_30027){
var state_val_30028 = (state_30027[(1)]);
if((state_val_30028 === (1))){
var inst_30022 = cljs.core.async.timeout.call(null,(3000));
var state_30027__$1 = state_30027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30027__$1,(2),inst_30022);
} else {
if((state_val_30028 === (2))){
var inst_30024 = (state_30027[(2)]);
var inst_30025 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30027__$1 = (function (){var statearr_30029 = state_30027;
(statearr_30029[(7)] = inst_30024);

return statearr_30029;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30027__$1,inst_30025);
} else {
return null;
}
}
});})(c__21335__auto__))
;
return ((function (switch__21270__auto__,c__21335__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21271__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21271__auto____0 = (function (){
var statearr_30033 = [null,null,null,null,null,null,null,null];
(statearr_30033[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21271__auto__);

(statearr_30033[(1)] = (1));

return statearr_30033;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21271__auto____1 = (function (state_30027){
while(true){
var ret_value__21272__auto__ = (function (){try{while(true){
var result__21273__auto__ = switch__21270__auto__.call(null,state_30027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21273__auto__;
}
break;
}
}catch (e30034){if((e30034 instanceof Object)){
var ex__21274__auto__ = e30034;
var statearr_30035_30037 = state_30027;
(statearr_30035_30037[(5)] = ex__21274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30038 = state_30027;
state_30027 = G__30038;
continue;
} else {
return ret_value__21272__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21271__auto__ = function(state_30027){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21271__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21271__auto____1.call(this,state_30027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21271__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21271__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21271__auto__;
})()
;})(switch__21270__auto__,c__21335__auto__))
})();
var state__21337__auto__ = (function (){var statearr_30036 = f__21336__auto__.call(null);
(statearr_30036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21335__auto__);

return statearr_30036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21337__auto__);
});})(c__21335__auto__))
);

return c__21335__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30039){
var map__30046 = p__30039;
var map__30046__$1 = ((((!((map__30046 == null)))?((((map__30046.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30046.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30046):map__30046);
var ed = map__30046__$1;
var formatted_exception = cljs.core.get.call(null,map__30046__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__30046__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30046__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30048_30052 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30049_30053 = null;
var count__30050_30054 = (0);
var i__30051_30055 = (0);
while(true){
if((i__30051_30055 < count__30050_30054)){
var msg_30056 = cljs.core._nth.call(null,chunk__30049_30053,i__30051_30055);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30056);

var G__30057 = seq__30048_30052;
var G__30058 = chunk__30049_30053;
var G__30059 = count__30050_30054;
var G__30060 = (i__30051_30055 + (1));
seq__30048_30052 = G__30057;
chunk__30049_30053 = G__30058;
count__30050_30054 = G__30059;
i__30051_30055 = G__30060;
continue;
} else {
var temp__4425__auto___30061 = cljs.core.seq.call(null,seq__30048_30052);
if(temp__4425__auto___30061){
var seq__30048_30062__$1 = temp__4425__auto___30061;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30048_30062__$1)){
var c__17266__auto___30063 = cljs.core.chunk_first.call(null,seq__30048_30062__$1);
var G__30064 = cljs.core.chunk_rest.call(null,seq__30048_30062__$1);
var G__30065 = c__17266__auto___30063;
var G__30066 = cljs.core.count.call(null,c__17266__auto___30063);
var G__30067 = (0);
seq__30048_30052 = G__30064;
chunk__30049_30053 = G__30065;
count__30050_30054 = G__30066;
i__30051_30055 = G__30067;
continue;
} else {
var msg_30068 = cljs.core.first.call(null,seq__30048_30062__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30068);

var G__30069 = cljs.core.next.call(null,seq__30048_30062__$1);
var G__30070 = null;
var G__30071 = (0);
var G__30072 = (0);
seq__30048_30052 = G__30069;
chunk__30049_30053 = G__30070;
count__30050_30054 = G__30071;
i__30051_30055 = G__30072;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30073){
var map__30076 = p__30073;
var map__30076__$1 = ((((!((map__30076 == null)))?((((map__30076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30076):map__30076);
var w = map__30076__$1;
var message = cljs.core.get.call(null,map__30076__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16470__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16470__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16470__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30084 = cljs.core.seq.call(null,plugins);
var chunk__30085 = null;
var count__30086 = (0);
var i__30087 = (0);
while(true){
if((i__30087 < count__30086)){
var vec__30088 = cljs.core._nth.call(null,chunk__30085,i__30087);
var k = cljs.core.nth.call(null,vec__30088,(0),null);
var plugin = cljs.core.nth.call(null,vec__30088,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30090 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30084,chunk__30085,count__30086,i__30087,pl_30090,vec__30088,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30090.call(null,msg_hist);
});})(seq__30084,chunk__30085,count__30086,i__30087,pl_30090,vec__30088,k,plugin))
);
} else {
}

var G__30091 = seq__30084;
var G__30092 = chunk__30085;
var G__30093 = count__30086;
var G__30094 = (i__30087 + (1));
seq__30084 = G__30091;
chunk__30085 = G__30092;
count__30086 = G__30093;
i__30087 = G__30094;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30084);
if(temp__4425__auto__){
var seq__30084__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30084__$1)){
var c__17266__auto__ = cljs.core.chunk_first.call(null,seq__30084__$1);
var G__30095 = cljs.core.chunk_rest.call(null,seq__30084__$1);
var G__30096 = c__17266__auto__;
var G__30097 = cljs.core.count.call(null,c__17266__auto__);
var G__30098 = (0);
seq__30084 = G__30095;
chunk__30085 = G__30096;
count__30086 = G__30097;
i__30087 = G__30098;
continue;
} else {
var vec__30089 = cljs.core.first.call(null,seq__30084__$1);
var k = cljs.core.nth.call(null,vec__30089,(0),null);
var plugin = cljs.core.nth.call(null,vec__30089,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30099 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30084,chunk__30085,count__30086,i__30087,pl_30099,vec__30089,k,plugin,seq__30084__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30099.call(null,msg_hist);
});})(seq__30084,chunk__30085,count__30086,i__30087,pl_30099,vec__30089,k,plugin,seq__30084__$1,temp__4425__auto__))
);
} else {
}

var G__30100 = cljs.core.next.call(null,seq__30084__$1);
var G__30101 = null;
var G__30102 = (0);
var G__30103 = (0);
seq__30084 = G__30100;
chunk__30085 = G__30101;
count__30086 = G__30102;
i__30087 = G__30103;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var args30104 = [];
var len__17521__auto___30107 = arguments.length;
var i__17522__auto___30108 = (0);
while(true){
if((i__17522__auto___30108 < len__17521__auto___30107)){
args30104.push((arguments[i__17522__auto___30108]));

var G__30109 = (i__17522__auto___30108 + (1));
i__17522__auto___30108 = G__30109;
continue;
} else {
}
break;
}

var G__30106 = args30104.length;
switch (G__30106) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30104.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var args__17528__auto__ = [];
var len__17521__auto___30115 = arguments.length;
var i__17522__auto___30116 = (0);
while(true){
if((i__17522__auto___30116 < len__17521__auto___30115)){
args__17528__auto__.push((arguments[i__17522__auto___30116]));

var G__30117 = (i__17522__auto___30116 + (1));
i__17522__auto___30116 = G__30117;
continue;
} else {
}
break;
}

var argseq__17529__auto__ = ((((0) < args__17528__auto__.length))?(new cljs.core.IndexedSeq(args__17528__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17529__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30112){
var map__30113 = p__30112;
var map__30113__$1 = ((((!((map__30113 == null)))?((((map__30113.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30113.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30113):map__30113);
var opts = map__30113__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30111){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30111));
});

//# sourceMappingURL=client.js.map