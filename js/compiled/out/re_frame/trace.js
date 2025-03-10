// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if(typeof re_frame.trace.traces !== 'undefined'){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof re_frame.trace.next_delivery !== 'undefined'){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__54475){
var map__54476 = p__54475;
var map__54476__$1 = ((((!((map__54476 == null)))?(((((map__54476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54476):map__54476);
var operation = cljs.core.get.call(null,map__54476__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__54476__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__54476__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__54476__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__3922__auto__ = child_of;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__54478_54490 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__54479_54491 = null;
var count__54480_54492 = (0);
var i__54481_54493 = (0);
while(true){
if((i__54481_54493 < count__54480_54492)){
var vec__54482_54494 = cljs.core._nth.call(null,chunk__54479_54491,i__54481_54493);
var k_54495 = cljs.core.nth.call(null,vec__54482_54494,(0),null);
var cb_54496 = cljs.core.nth.call(null,vec__54482_54494,(1),null);
try{cb_54496.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e54485){var e_54497 = e54485;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_54495,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_54497);
}

var G__54498 = seq__54478_54490;
var G__54499 = chunk__54479_54491;
var G__54500 = count__54480_54492;
var G__54501 = (i__54481_54493 + (1));
seq__54478_54490 = G__54498;
chunk__54479_54491 = G__54499;
count__54480_54492 = G__54500;
i__54481_54493 = G__54501;
continue;
} else {
var temp__4657__auto___54502 = cljs.core.seq.call(null,seq__54478_54490);
if(temp__4657__auto___54502){
var seq__54478_54503__$1 = temp__4657__auto___54502;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54478_54503__$1)){
var c__4319__auto___54504 = cljs.core.chunk_first.call(null,seq__54478_54503__$1);
var G__54505 = cljs.core.chunk_rest.call(null,seq__54478_54503__$1);
var G__54506 = c__4319__auto___54504;
var G__54507 = cljs.core.count.call(null,c__4319__auto___54504);
var G__54508 = (0);
seq__54478_54490 = G__54505;
chunk__54479_54491 = G__54506;
count__54480_54492 = G__54507;
i__54481_54493 = G__54508;
continue;
} else {
var vec__54486_54509 = cljs.core.first.call(null,seq__54478_54503__$1);
var k_54510 = cljs.core.nth.call(null,vec__54486_54509,(0),null);
var cb_54511 = cljs.core.nth.call(null,vec__54486_54509,(1),null);
try{cb_54511.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e54489){var e_54512 = e54489;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_54510,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_54512);
}

var G__54513 = cljs.core.next.call(null,seq__54478_54503__$1);
var G__54514 = null;
var G__54515 = (0);
var G__54516 = (0);
seq__54478_54490 = G__54513;
chunk__54479_54491 = G__54514;
count__54480_54492 = G__54515;
i__54481_54493 = G__54516;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (10)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map?rel=1600694553834
