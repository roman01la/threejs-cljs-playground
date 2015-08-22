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
var G__28366__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28366 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28367__i = 0, G__28367__a = new Array(arguments.length -  0);
while (G__28367__i < G__28367__a.length) {G__28367__a[G__28367__i] = arguments[G__28367__i + 0]; ++G__28367__i;}
  args = new cljs.core.IndexedSeq(G__28367__a,0);
} 
return G__28366__delegate.call(this,args);};
G__28366.cljs$lang$maxFixedArity = 0;
G__28366.cljs$lang$applyTo = (function (arglist__28368){
var args = cljs.core.seq(arglist__28368);
return G__28366__delegate(args);
});
G__28366.cljs$core$IFn$_invoke$arity$variadic = G__28366__delegate;
return G__28366;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28369){
var map__28372 = p__28369;
var map__28372__$1 = ((((!((map__28372 == null)))?((((map__28372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28372):map__28372);
var message = cljs.core.get.call(null,map__28372__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28372__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__20234__auto___28502 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20234__auto___28502,ch){
return (function (){
var f__20235__auto__ = (function (){var switch__20169__auto__ = ((function (c__20234__auto___28502,ch){
return (function (state_28476){
var state_val_28477 = (state_28476[(1)]);
if((state_val_28477 === (7))){
var inst_28472 = (state_28476[(2)]);
var state_28476__$1 = state_28476;
var statearr_28478_28503 = state_28476__$1;
(statearr_28478_28503[(2)] = inst_28472);

(statearr_28478_28503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28477 === (1))){
var state_28476__$1 = state_28476;
var statearr_28479_28504 = state_28476__$1;
(statearr_28479_28504[(2)] = null);

(statearr_28479_28504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28477 === (4))){
var inst_28440 = (state_28476[(7)]);
var inst_28440__$1 = (state_28476[(2)]);
var state_28476__$1 = (function (){var statearr_28480 = state_28476;
(statearr_28480[(7)] = inst_28440__$1);

return statearr_28480;
})();
if(cljs.core.truth_(inst_28440__$1)){
var statearr_28481_28505 = state_28476__$1;
(statearr_28481_28505[(1)] = (5));

} else {
var statearr_28482_28506 = state_28476__$1;
(statearr_28482_28506[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28477 === (13))){
var state_28476__$1 = state_28476;
var statearr_28483_28507 = state_28476__$1;
(statearr_28483_28507[(2)] = null);

(statearr_28483_28507[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28477 === (6))){
var state_28476__$1 = state_28476;
var statearr_28484_28508 = state_28476__$1;
(statearr_28484_28508[(2)] = null);

(statearr_28484_28508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28477 === (3))){
var inst_28474 = (state_28476[(2)]);
var state_28476__$1 = state_28476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28476__$1,inst_28474);
} else {
if((state_val_28477 === (12))){
var inst_28447 = (state_28476[(8)]);
var inst_28460 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28447);
var inst_28461 = cljs.core.first.call(null,inst_28460);
var inst_28462 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28461);
var inst_28463 = console.warn("Figwheel: Not loading code with warnings - ",inst_28462);
var state_28476__$1 = state_28476;
var statearr_28485_28509 = state_28476__$1;
(statearr_28485_28509[(2)] = inst_28463);

(statearr_28485_28509[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28477 === (2))){
var state_28476__$1 = state_28476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28476__$1,(4),ch);
} else {
if((state_val_28477 === (11))){
var inst_28456 = (state_28476[(2)]);
var state_28476__$1 = state_28476;
var statearr_28486_28510 = state_28476__$1;
(statearr_28486_28510[(2)] = inst_28456);

(statearr_28486_28510[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28477 === (9))){
var inst_28446 = (state_28476[(9)]);
var inst_28458 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28446,opts);
var state_28476__$1 = state_28476;
if(cljs.core.truth_(inst_28458)){
var statearr_28487_28511 = state_28476__$1;
(statearr_28487_28511[(1)] = (12));

} else {
var statearr_28488_28512 = state_28476__$1;
(statearr_28488_28512[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28477 === (5))){
var inst_28440 = (state_28476[(7)]);
var inst_28446 = (state_28476[(9)]);
var inst_28442 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28443 = (new cljs.core.PersistentArrayMap(null,2,inst_28442,null));
var inst_28444 = (new cljs.core.PersistentHashSet(null,inst_28443,null));
var inst_28445 = figwheel.client.focus_msgs.call(null,inst_28444,inst_28440);
var inst_28446__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28445);
var inst_28447 = cljs.core.first.call(null,inst_28445);
var inst_28448 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28446__$1,opts);
var state_28476__$1 = (function (){var statearr_28489 = state_28476;
(statearr_28489[(9)] = inst_28446__$1);

(statearr_28489[(8)] = inst_28447);

return statearr_28489;
})();
if(cljs.core.truth_(inst_28448)){
var statearr_28490_28513 = state_28476__$1;
(statearr_28490_28513[(1)] = (8));

} else {
var statearr_28491_28514 = state_28476__$1;
(statearr_28491_28514[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28477 === (14))){
var inst_28466 = (state_28476[(2)]);
var state_28476__$1 = state_28476;
var statearr_28492_28515 = state_28476__$1;
(statearr_28492_28515[(2)] = inst_28466);

(statearr_28492_28515[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28477 === (10))){
var inst_28468 = (state_28476[(2)]);
var state_28476__$1 = (function (){var statearr_28493 = state_28476;
(statearr_28493[(10)] = inst_28468);

return statearr_28493;
})();
var statearr_28494_28516 = state_28476__$1;
(statearr_28494_28516[(2)] = null);

(statearr_28494_28516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28477 === (8))){
var inst_28447 = (state_28476[(8)]);
var inst_28450 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28451 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28447);
var inst_28452 = cljs.core.async.timeout.call(null,(1000));
var inst_28453 = [inst_28451,inst_28452];
var inst_28454 = (new cljs.core.PersistentVector(null,2,(5),inst_28450,inst_28453,null));
var state_28476__$1 = state_28476;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28476__$1,(11),inst_28454);
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
});})(c__20234__auto___28502,ch))
;
return ((function (switch__20169__auto__,c__20234__auto___28502,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20170__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20170__auto____0 = (function (){
var statearr_28498 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28498[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20170__auto__);

(statearr_28498[(1)] = (1));

return statearr_28498;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20170__auto____1 = (function (state_28476){
while(true){
var ret_value__20171__auto__ = (function (){try{while(true){
var result__20172__auto__ = switch__20169__auto__.call(null,state_28476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20172__auto__;
}
break;
}
}catch (e28499){if((e28499 instanceof Object)){
var ex__20173__auto__ = e28499;
var statearr_28500_28517 = state_28476;
(statearr_28500_28517[(5)] = ex__20173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28518 = state_28476;
state_28476 = G__28518;
continue;
} else {
return ret_value__20171__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20170__auto__ = function(state_28476){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20170__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20170__auto____1.call(this,state_28476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20170__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20170__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20170__auto__;
})()
;})(switch__20169__auto__,c__20234__auto___28502,ch))
})();
var state__20236__auto__ = (function (){var statearr_28501 = f__20235__auto__.call(null);
(statearr_28501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20234__auto___28502);

return statearr_28501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20236__auto__);
});})(c__20234__auto___28502,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28519_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28519_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_28526 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28526){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_28524 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28525 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_28524,_STAR_print_newline_STAR_28525,base_path_28526){
return (function() { 
var G__28527__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28527 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28528__i = 0, G__28528__a = new Array(arguments.length -  0);
while (G__28528__i < G__28528__a.length) {G__28528__a[G__28528__i] = arguments[G__28528__i + 0]; ++G__28528__i;}
  args = new cljs.core.IndexedSeq(G__28528__a,0);
} 
return G__28527__delegate.call(this,args);};
G__28527.cljs$lang$maxFixedArity = 0;
G__28527.cljs$lang$applyTo = (function (arglist__28529){
var args = cljs.core.seq(arglist__28529);
return G__28527__delegate(args);
});
G__28527.cljs$core$IFn$_invoke$arity$variadic = G__28527__delegate;
return G__28527;
})()
;})(_STAR_print_fn_STAR_28524,_STAR_print_newline_STAR_28525,base_path_28526))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28525;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28524;
}}catch (e28523){if((e28523 instanceof Error)){
var e = e28523;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28526], null));
} else {
var e = e28523;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28526))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28530){
var map__28537 = p__28530;
var map__28537__$1 = ((((!((map__28537 == null)))?((((map__28537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28537):map__28537);
var opts = map__28537__$1;
var build_id = cljs.core.get.call(null,map__28537__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28537,map__28537__$1,opts,build_id){
return (function (p__28539){
var vec__28540 = p__28539;
var map__28541 = cljs.core.nth.call(null,vec__28540,(0),null);
var map__28541__$1 = ((((!((map__28541 == null)))?((((map__28541.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28541.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28541):map__28541);
var msg = map__28541__$1;
var msg_name = cljs.core.get.call(null,map__28541__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28540,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28540,map__28541,map__28541__$1,msg,msg_name,_,map__28537,map__28537__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28540,map__28541,map__28541__$1,msg,msg_name,_,map__28537,map__28537__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28537,map__28537__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28547){
var vec__28548 = p__28547;
var map__28549 = cljs.core.nth.call(null,vec__28548,(0),null);
var map__28549__$1 = ((((!((map__28549 == null)))?((((map__28549.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28549.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28549):map__28549);
var msg = map__28549__$1;
var msg_name = cljs.core.get.call(null,map__28549__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28548,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28551){
var map__28561 = p__28551;
var map__28561__$1 = ((((!((map__28561 == null)))?((((map__28561.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28561.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28561):map__28561);
var on_compile_warning = cljs.core.get.call(null,map__28561__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28561__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28561,map__28561__$1,on_compile_warning,on_compile_fail){
return (function (p__28563){
var vec__28564 = p__28563;
var map__28565 = cljs.core.nth.call(null,vec__28564,(0),null);
var map__28565__$1 = ((((!((map__28565 == null)))?((((map__28565.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28565.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28565):map__28565);
var msg = map__28565__$1;
var msg_name = cljs.core.get.call(null,map__28565__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28564,(1));
var pred__28567 = cljs.core._EQ_;
var expr__28568 = msg_name;
if(cljs.core.truth_(pred__28567.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28568))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28567.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28568))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28561,map__28561__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20234__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20235__auto__ = (function (){var switch__20169__auto__ = ((function (c__20234__auto__,msg_hist,msg_names,msg){
return (function (state_28769){
var state_val_28770 = (state_28769[(1)]);
if((state_val_28770 === (7))){
var inst_28703 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
var statearr_28771_28812 = state_28769__$1;
(statearr_28771_28812[(2)] = inst_28703);

(statearr_28771_28812[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (20))){
var inst_28731 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28769__$1 = state_28769;
if(cljs.core.truth_(inst_28731)){
var statearr_28772_28813 = state_28769__$1;
(statearr_28772_28813[(1)] = (22));

} else {
var statearr_28773_28814 = state_28769__$1;
(statearr_28773_28814[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (27))){
var inst_28743 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28744 = figwheel.client.heads_up.display_warning.call(null,inst_28743);
var state_28769__$1 = state_28769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28769__$1,(30),inst_28744);
} else {
if((state_val_28770 === (1))){
var inst_28691 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28769__$1 = state_28769;
if(cljs.core.truth_(inst_28691)){
var statearr_28774_28815 = state_28769__$1;
(statearr_28774_28815[(1)] = (2));

} else {
var statearr_28775_28816 = state_28769__$1;
(statearr_28775_28816[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (24))){
var inst_28759 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
var statearr_28776_28817 = state_28769__$1;
(statearr_28776_28817[(2)] = inst_28759);

(statearr_28776_28817[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (4))){
var inst_28767 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28769__$1,inst_28767);
} else {
if((state_val_28770 === (15))){
var inst_28719 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28720 = figwheel.client.format_messages.call(null,inst_28719);
var inst_28721 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28722 = figwheel.client.heads_up.display_error.call(null,inst_28720,inst_28721);
var state_28769__$1 = state_28769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28769__$1,(18),inst_28722);
} else {
if((state_val_28770 === (21))){
var inst_28761 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
var statearr_28777_28818 = state_28769__$1;
(statearr_28777_28818[(2)] = inst_28761);

(statearr_28777_28818[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (31))){
var inst_28750 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28769__$1 = state_28769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28769__$1,(34),inst_28750);
} else {
if((state_val_28770 === (32))){
var state_28769__$1 = state_28769;
var statearr_28778_28819 = state_28769__$1;
(statearr_28778_28819[(2)] = null);

(statearr_28778_28819[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (33))){
var inst_28755 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
var statearr_28779_28820 = state_28769__$1;
(statearr_28779_28820[(2)] = inst_28755);

(statearr_28779_28820[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (13))){
var inst_28709 = (state_28769[(2)]);
var inst_28710 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28711 = figwheel.client.format_messages.call(null,inst_28710);
var inst_28712 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28713 = figwheel.client.heads_up.display_error.call(null,inst_28711,inst_28712);
var state_28769__$1 = (function (){var statearr_28780 = state_28769;
(statearr_28780[(7)] = inst_28709);

return statearr_28780;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28769__$1,(14),inst_28713);
} else {
if((state_val_28770 === (22))){
var inst_28733 = figwheel.client.heads_up.clear.call(null);
var state_28769__$1 = state_28769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28769__$1,(25),inst_28733);
} else {
if((state_val_28770 === (29))){
var inst_28757 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
var statearr_28781_28821 = state_28769__$1;
(statearr_28781_28821[(2)] = inst_28757);

(statearr_28781_28821[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (6))){
var inst_28699 = figwheel.client.heads_up.clear.call(null);
var state_28769__$1 = state_28769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28769__$1,(9),inst_28699);
} else {
if((state_val_28770 === (28))){
var inst_28748 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28769__$1 = state_28769;
if(cljs.core.truth_(inst_28748)){
var statearr_28782_28822 = state_28769__$1;
(statearr_28782_28822[(1)] = (31));

} else {
var statearr_28783_28823 = state_28769__$1;
(statearr_28783_28823[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (25))){
var inst_28735 = (state_28769[(2)]);
var inst_28736 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28737 = figwheel.client.heads_up.display_warning.call(null,inst_28736);
var state_28769__$1 = (function (){var statearr_28784 = state_28769;
(statearr_28784[(8)] = inst_28735);

return statearr_28784;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28769__$1,(26),inst_28737);
} else {
if((state_val_28770 === (34))){
var inst_28752 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
var statearr_28785_28824 = state_28769__$1;
(statearr_28785_28824[(2)] = inst_28752);

(statearr_28785_28824[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (17))){
var inst_28763 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
var statearr_28786_28825 = state_28769__$1;
(statearr_28786_28825[(2)] = inst_28763);

(statearr_28786_28825[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (3))){
var inst_28705 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28769__$1 = state_28769;
if(cljs.core.truth_(inst_28705)){
var statearr_28787_28826 = state_28769__$1;
(statearr_28787_28826[(1)] = (10));

} else {
var statearr_28788_28827 = state_28769__$1;
(statearr_28788_28827[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (12))){
var inst_28765 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
var statearr_28789_28828 = state_28769__$1;
(statearr_28789_28828[(2)] = inst_28765);

(statearr_28789_28828[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (2))){
var inst_28693 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28769__$1 = state_28769;
if(cljs.core.truth_(inst_28693)){
var statearr_28790_28829 = state_28769__$1;
(statearr_28790_28829[(1)] = (5));

} else {
var statearr_28791_28830 = state_28769__$1;
(statearr_28791_28830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (23))){
var inst_28741 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28769__$1 = state_28769;
if(cljs.core.truth_(inst_28741)){
var statearr_28792_28831 = state_28769__$1;
(statearr_28792_28831[(1)] = (27));

} else {
var statearr_28793_28832 = state_28769__$1;
(statearr_28793_28832[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (19))){
var inst_28728 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28729 = figwheel.client.heads_up.append_message.call(null,inst_28728);
var state_28769__$1 = state_28769;
var statearr_28794_28833 = state_28769__$1;
(statearr_28794_28833[(2)] = inst_28729);

(statearr_28794_28833[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (11))){
var inst_28717 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28769__$1 = state_28769;
if(cljs.core.truth_(inst_28717)){
var statearr_28795_28834 = state_28769__$1;
(statearr_28795_28834[(1)] = (15));

} else {
var statearr_28796_28835 = state_28769__$1;
(statearr_28796_28835[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (9))){
var inst_28701 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
var statearr_28797_28836 = state_28769__$1;
(statearr_28797_28836[(2)] = inst_28701);

(statearr_28797_28836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (5))){
var inst_28695 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28769__$1 = state_28769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28769__$1,(8),inst_28695);
} else {
if((state_val_28770 === (14))){
var inst_28715 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
var statearr_28798_28837 = state_28769__$1;
(statearr_28798_28837[(2)] = inst_28715);

(statearr_28798_28837[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (26))){
var inst_28739 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
var statearr_28799_28838 = state_28769__$1;
(statearr_28799_28838[(2)] = inst_28739);

(statearr_28799_28838[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (16))){
var inst_28726 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28769__$1 = state_28769;
if(cljs.core.truth_(inst_28726)){
var statearr_28800_28839 = state_28769__$1;
(statearr_28800_28839[(1)] = (19));

} else {
var statearr_28801_28840 = state_28769__$1;
(statearr_28801_28840[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (30))){
var inst_28746 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
var statearr_28802_28841 = state_28769__$1;
(statearr_28802_28841[(2)] = inst_28746);

(statearr_28802_28841[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (10))){
var inst_28707 = figwheel.client.heads_up.clear.call(null);
var state_28769__$1 = state_28769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28769__$1,(13),inst_28707);
} else {
if((state_val_28770 === (18))){
var inst_28724 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
var statearr_28803_28842 = state_28769__$1;
(statearr_28803_28842[(2)] = inst_28724);

(statearr_28803_28842[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (8))){
var inst_28697 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
var statearr_28804_28843 = state_28769__$1;
(statearr_28804_28843[(2)] = inst_28697);

(statearr_28804_28843[(1)] = (7));


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
});})(c__20234__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20169__auto__,c__20234__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20170__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20170__auto____0 = (function (){
var statearr_28808 = [null,null,null,null,null,null,null,null,null];
(statearr_28808[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20170__auto__);

(statearr_28808[(1)] = (1));

return statearr_28808;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20170__auto____1 = (function (state_28769){
while(true){
var ret_value__20171__auto__ = (function (){try{while(true){
var result__20172__auto__ = switch__20169__auto__.call(null,state_28769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20172__auto__;
}
break;
}
}catch (e28809){if((e28809 instanceof Object)){
var ex__20173__auto__ = e28809;
var statearr_28810_28844 = state_28769;
(statearr_28810_28844[(5)] = ex__20173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28845 = state_28769;
state_28769 = G__28845;
continue;
} else {
return ret_value__20171__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20170__auto__ = function(state_28769){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20170__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20170__auto____1.call(this,state_28769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20170__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20170__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20170__auto__;
})()
;})(switch__20169__auto__,c__20234__auto__,msg_hist,msg_names,msg))
})();
var state__20236__auto__ = (function (){var statearr_28811 = f__20235__auto__.call(null);
(statearr_28811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20234__auto__);

return statearr_28811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20236__auto__);
});})(c__20234__auto__,msg_hist,msg_names,msg))
);

return c__20234__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20234__auto___28908 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20234__auto___28908,ch){
return (function (){
var f__20235__auto__ = (function (){var switch__20169__auto__ = ((function (c__20234__auto___28908,ch){
return (function (state_28891){
var state_val_28892 = (state_28891[(1)]);
if((state_val_28892 === (1))){
var state_28891__$1 = state_28891;
var statearr_28893_28909 = state_28891__$1;
(statearr_28893_28909[(2)] = null);

(statearr_28893_28909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (2))){
var state_28891__$1 = state_28891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28891__$1,(4),ch);
} else {
if((state_val_28892 === (3))){
var inst_28889 = (state_28891[(2)]);
var state_28891__$1 = state_28891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28891__$1,inst_28889);
} else {
if((state_val_28892 === (4))){
var inst_28879 = (state_28891[(7)]);
var inst_28879__$1 = (state_28891[(2)]);
var state_28891__$1 = (function (){var statearr_28894 = state_28891;
(statearr_28894[(7)] = inst_28879__$1);

return statearr_28894;
})();
if(cljs.core.truth_(inst_28879__$1)){
var statearr_28895_28910 = state_28891__$1;
(statearr_28895_28910[(1)] = (5));

} else {
var statearr_28896_28911 = state_28891__$1;
(statearr_28896_28911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (5))){
var inst_28879 = (state_28891[(7)]);
var inst_28881 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28879);
var state_28891__$1 = state_28891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28891__$1,(8),inst_28881);
} else {
if((state_val_28892 === (6))){
var state_28891__$1 = state_28891;
var statearr_28897_28912 = state_28891__$1;
(statearr_28897_28912[(2)] = null);

(statearr_28897_28912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (7))){
var inst_28887 = (state_28891[(2)]);
var state_28891__$1 = state_28891;
var statearr_28898_28913 = state_28891__$1;
(statearr_28898_28913[(2)] = inst_28887);

(statearr_28898_28913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28892 === (8))){
var inst_28883 = (state_28891[(2)]);
var state_28891__$1 = (function (){var statearr_28899 = state_28891;
(statearr_28899[(8)] = inst_28883);

return statearr_28899;
})();
var statearr_28900_28914 = state_28891__$1;
(statearr_28900_28914[(2)] = null);

(statearr_28900_28914[(1)] = (2));


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
});})(c__20234__auto___28908,ch))
;
return ((function (switch__20169__auto__,c__20234__auto___28908,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20170__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20170__auto____0 = (function (){
var statearr_28904 = [null,null,null,null,null,null,null,null,null];
(statearr_28904[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20170__auto__);

(statearr_28904[(1)] = (1));

return statearr_28904;
});
var figwheel$client$heads_up_plugin_$_state_machine__20170__auto____1 = (function (state_28891){
while(true){
var ret_value__20171__auto__ = (function (){try{while(true){
var result__20172__auto__ = switch__20169__auto__.call(null,state_28891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20172__auto__;
}
break;
}
}catch (e28905){if((e28905 instanceof Object)){
var ex__20173__auto__ = e28905;
var statearr_28906_28915 = state_28891;
(statearr_28906_28915[(5)] = ex__20173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28916 = state_28891;
state_28891 = G__28916;
continue;
} else {
return ret_value__20171__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20170__auto__ = function(state_28891){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20170__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20170__auto____1.call(this,state_28891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20170__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20170__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20170__auto__;
})()
;})(switch__20169__auto__,c__20234__auto___28908,ch))
})();
var state__20236__auto__ = (function (){var statearr_28907 = f__20235__auto__.call(null);
(statearr_28907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20234__auto___28908);

return statearr_28907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20236__auto__);
});})(c__20234__auto___28908,ch))
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
var c__20234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20234__auto__){
return (function (){
var f__20235__auto__ = (function (){var switch__20169__auto__ = ((function (c__20234__auto__){
return (function (state_28937){
var state_val_28938 = (state_28937[(1)]);
if((state_val_28938 === (1))){
var inst_28932 = cljs.core.async.timeout.call(null,(3000));
var state_28937__$1 = state_28937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28937__$1,(2),inst_28932);
} else {
if((state_val_28938 === (2))){
var inst_28934 = (state_28937[(2)]);
var inst_28935 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28937__$1 = (function (){var statearr_28939 = state_28937;
(statearr_28939[(7)] = inst_28934);

return statearr_28939;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28937__$1,inst_28935);
} else {
return null;
}
}
});})(c__20234__auto__))
;
return ((function (switch__20169__auto__,c__20234__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20170__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20170__auto____0 = (function (){
var statearr_28943 = [null,null,null,null,null,null,null,null];
(statearr_28943[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20170__auto__);

(statearr_28943[(1)] = (1));

return statearr_28943;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20170__auto____1 = (function (state_28937){
while(true){
var ret_value__20171__auto__ = (function (){try{while(true){
var result__20172__auto__ = switch__20169__auto__.call(null,state_28937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20172__auto__;
}
break;
}
}catch (e28944){if((e28944 instanceof Object)){
var ex__20173__auto__ = e28944;
var statearr_28945_28947 = state_28937;
(statearr_28945_28947[(5)] = ex__20173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28948 = state_28937;
state_28937 = G__28948;
continue;
} else {
return ret_value__20171__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20170__auto__ = function(state_28937){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20170__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20170__auto____1.call(this,state_28937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20170__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20170__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20170__auto__;
})()
;})(switch__20169__auto__,c__20234__auto__))
})();
var state__20236__auto__ = (function (){var statearr_28946 = f__20235__auto__.call(null);
(statearr_28946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20234__auto__);

return statearr_28946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20236__auto__);
});})(c__20234__auto__))
);

return c__20234__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28949){
var map__28956 = p__28949;
var map__28956__$1 = ((((!((map__28956 == null)))?((((map__28956.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28956.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28956):map__28956);
var ed = map__28956__$1;
var formatted_exception = cljs.core.get.call(null,map__28956__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28956__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28956__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28958_28962 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28959_28963 = null;
var count__28960_28964 = (0);
var i__28961_28965 = (0);
while(true){
if((i__28961_28965 < count__28960_28964)){
var msg_28966 = cljs.core._nth.call(null,chunk__28959_28963,i__28961_28965);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28966);

var G__28967 = seq__28958_28962;
var G__28968 = chunk__28959_28963;
var G__28969 = count__28960_28964;
var G__28970 = (i__28961_28965 + (1));
seq__28958_28962 = G__28967;
chunk__28959_28963 = G__28968;
count__28960_28964 = G__28969;
i__28961_28965 = G__28970;
continue;
} else {
var temp__4425__auto___28971 = cljs.core.seq.call(null,seq__28958_28962);
if(temp__4425__auto___28971){
var seq__28958_28972__$1 = temp__4425__auto___28971;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28958_28972__$1)){
var c__17266__auto___28973 = cljs.core.chunk_first.call(null,seq__28958_28972__$1);
var G__28974 = cljs.core.chunk_rest.call(null,seq__28958_28972__$1);
var G__28975 = c__17266__auto___28973;
var G__28976 = cljs.core.count.call(null,c__17266__auto___28973);
var G__28977 = (0);
seq__28958_28962 = G__28974;
chunk__28959_28963 = G__28975;
count__28960_28964 = G__28976;
i__28961_28965 = G__28977;
continue;
} else {
var msg_28978 = cljs.core.first.call(null,seq__28958_28972__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28978);

var G__28979 = cljs.core.next.call(null,seq__28958_28972__$1);
var G__28980 = null;
var G__28981 = (0);
var G__28982 = (0);
seq__28958_28962 = G__28979;
chunk__28959_28963 = G__28980;
count__28960_28964 = G__28981;
i__28961_28965 = G__28982;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28983){
var map__28986 = p__28983;
var map__28986__$1 = ((((!((map__28986 == null)))?((((map__28986.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28986.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28986):map__28986);
var w = map__28986__$1;
var message = cljs.core.get.call(null,map__28986__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__28994 = cljs.core.seq.call(null,plugins);
var chunk__28995 = null;
var count__28996 = (0);
var i__28997 = (0);
while(true){
if((i__28997 < count__28996)){
var vec__28998 = cljs.core._nth.call(null,chunk__28995,i__28997);
var k = cljs.core.nth.call(null,vec__28998,(0),null);
var plugin = cljs.core.nth.call(null,vec__28998,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29000 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28994,chunk__28995,count__28996,i__28997,pl_29000,vec__28998,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29000.call(null,msg_hist);
});})(seq__28994,chunk__28995,count__28996,i__28997,pl_29000,vec__28998,k,plugin))
);
} else {
}

var G__29001 = seq__28994;
var G__29002 = chunk__28995;
var G__29003 = count__28996;
var G__29004 = (i__28997 + (1));
seq__28994 = G__29001;
chunk__28995 = G__29002;
count__28996 = G__29003;
i__28997 = G__29004;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28994);
if(temp__4425__auto__){
var seq__28994__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28994__$1)){
var c__17266__auto__ = cljs.core.chunk_first.call(null,seq__28994__$1);
var G__29005 = cljs.core.chunk_rest.call(null,seq__28994__$1);
var G__29006 = c__17266__auto__;
var G__29007 = cljs.core.count.call(null,c__17266__auto__);
var G__29008 = (0);
seq__28994 = G__29005;
chunk__28995 = G__29006;
count__28996 = G__29007;
i__28997 = G__29008;
continue;
} else {
var vec__28999 = cljs.core.first.call(null,seq__28994__$1);
var k = cljs.core.nth.call(null,vec__28999,(0),null);
var plugin = cljs.core.nth.call(null,vec__28999,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29009 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28994,chunk__28995,count__28996,i__28997,pl_29009,vec__28999,k,plugin,seq__28994__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29009.call(null,msg_hist);
});})(seq__28994,chunk__28995,count__28996,i__28997,pl_29009,vec__28999,k,plugin,seq__28994__$1,temp__4425__auto__))
);
} else {
}

var G__29010 = cljs.core.next.call(null,seq__28994__$1);
var G__29011 = null;
var G__29012 = (0);
var G__29013 = (0);
seq__28994 = G__29010;
chunk__28995 = G__29011;
count__28996 = G__29012;
i__28997 = G__29013;
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
var args29014 = [];
var len__17521__auto___29017 = arguments.length;
var i__17522__auto___29018 = (0);
while(true){
if((i__17522__auto___29018 < len__17521__auto___29017)){
args29014.push((arguments[i__17522__auto___29018]));

var G__29019 = (i__17522__auto___29018 + (1));
i__17522__auto___29018 = G__29019;
continue;
} else {
}
break;
}

var G__29016 = args29014.length;
switch (G__29016) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29014.length)].join('')));

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
var len__17521__auto___29025 = arguments.length;
var i__17522__auto___29026 = (0);
while(true){
if((i__17522__auto___29026 < len__17521__auto___29025)){
args__17528__auto__.push((arguments[i__17522__auto___29026]));

var G__29027 = (i__17522__auto___29026 + (1));
i__17522__auto___29026 = G__29027;
continue;
} else {
}
break;
}

var argseq__17529__auto__ = ((((0) < args__17528__auto__.length))?(new cljs.core.IndexedSeq(args__17528__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17529__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29022){
var map__29023 = p__29022;
var map__29023__$1 = ((((!((map__29023 == null)))?((((map__29023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29023):map__29023);
var opts = map__29023__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29021){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29021));
});

//# sourceMappingURL=client.js.map?rel=1440195220428