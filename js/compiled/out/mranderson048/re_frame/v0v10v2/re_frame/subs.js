// Compiled by ClojureScript 1.10.238 {}
goog.provide('mranderson048.re_frame.v0v10v2.re_frame.subs');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.db');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.loggers');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.utils');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.registrar');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.trace');
mranderson048.re_frame.v0v10v2.re_frame.subs.kind = new cljs.core.Keyword(null,"sub","sub",-2093760025);
if(cljs.core.truth_(mranderson048.re_frame.v0v10v2.re_frame.registrar.kinds.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.kind))){
} else {
throw (new Error("Assert failed: (mranderson048.re-frame.v0v10v2.re-frame.registrar/kinds kind)"));
}
mranderson048.re_frame.v0v10v2.re_frame.subs.query__GT_reaction = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Causes all subscriptions to be removed from the cache.
 *   Does this by:
 *   1. running on-dispose on all cached subscriptions
 *   2. These on-dispose will then do the removal of themselves.
 * 
 *   This is a development time tool. Useful when reloading Figwheel code
 *   after a React exception, because React components won't have been
 *   cleaned up properly. And this, in turn, means the subscriptions within those
 *   components won't have been cleaned up correctly. So this forces the issue.
 */
mranderson048.re_frame.v0v10v2.re_frame.subs.clear_subscription_cache_BANG_ = (function mranderson048$re_frame$v0v10v2$re_frame$subs$clear_subscription_cache_BANG_(){
var seq__60413_60423 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.query__GT_reaction));
var chunk__60414_60424 = null;
var count__60415_60425 = (0);
var i__60416_60426 = (0);
while(true){
if((i__60416_60426 < count__60415_60425)){
var vec__60417_60427 = cljs.core._nth.call(null,chunk__60414_60424,i__60416_60426);
var k_60428 = cljs.core.nth.call(null,vec__60417_60427,(0),null);
var rxn_60429 = cljs.core.nth.call(null,vec__60417_60427,(1),null);
mranderson048.re_frame.v0v10v2.re_frame.interop.dispose_BANG_.call(null,rxn_60429);


var G__60430 = seq__60413_60423;
var G__60431 = chunk__60414_60424;
var G__60432 = count__60415_60425;
var G__60433 = (i__60416_60426 + (1));
seq__60413_60423 = G__60430;
chunk__60414_60424 = G__60431;
count__60415_60425 = G__60432;
i__60416_60426 = G__60433;
continue;
} else {
var temp__4657__auto___60434 = cljs.core.seq.call(null,seq__60413_60423);
if(temp__4657__auto___60434){
var seq__60413_60435__$1 = temp__4657__auto___60434;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60413_60435__$1)){
var c__4319__auto___60436 = cljs.core.chunk_first.call(null,seq__60413_60435__$1);
var G__60437 = cljs.core.chunk_rest.call(null,seq__60413_60435__$1);
var G__60438 = c__4319__auto___60436;
var G__60439 = cljs.core.count.call(null,c__4319__auto___60436);
var G__60440 = (0);
seq__60413_60423 = G__60437;
chunk__60414_60424 = G__60438;
count__60415_60425 = G__60439;
i__60416_60426 = G__60440;
continue;
} else {
var vec__60420_60441 = cljs.core.first.call(null,seq__60413_60435__$1);
var k_60442 = cljs.core.nth.call(null,vec__60420_60441,(0),null);
var rxn_60443 = cljs.core.nth.call(null,vec__60420_60441,(1),null);
mranderson048.re_frame.v0v10v2.re_frame.interop.dispose_BANG_.call(null,rxn_60443);


var G__60444 = cljs.core.next.call(null,seq__60413_60435__$1);
var G__60445 = null;
var G__60446 = (0);
var G__60447 = (0);
seq__60413_60423 = G__60444;
chunk__60414_60424 = G__60445;
count__60415_60425 = G__60446;
i__60416_60426 = G__60447;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.query__GT_reaction)))){
return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Subscription cache should be empty after clearing it.");
} else {
return null;
}
});
/**
 * Unregisters all existing subscription handlers
 */
mranderson048.re_frame.v0v10v2.re_frame.subs.clear_all_handlers_BANG_ = (function mranderson048$re_frame$v0v10v2$re_frame$subs$clear_all_handlers_BANG_(){
mranderson048.re_frame.v0v10v2.re_frame.registrar.clear_handlers.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.kind);

return mranderson048.re_frame.v0v10v2.re_frame.subs.clear_subscription_cache_BANG_.call(null);
});
/**
 * cache the reaction r
 */
mranderson048.re_frame.v0v10v2.re_frame.subs.cache_and_return = (function mranderson048$re_frame$v0v10v2$re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
mranderson048.re_frame.v0v10v2.re_frame.interop.add_on_dispose_BANG_.call(null,r,((function (cache_key){
return (function (){
cljs.core.swap_BANG_.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.query__GT_reaction,cljs.core.dissoc,cache_key);

if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_60448 = mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson048.re_frame.v0v10v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,r)], null)], null));

try{try{return null;
}finally {if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__41456__auto___60461 = mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null);
var duration__41457__auto___60462 = (end__41456__auto___60461 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__60449_60463 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__60450_60464 = null;
var count__60451_60465 = (0);
var i__60452_60466 = (0);
while(true){
if((i__60452_60466 < count__60451_60465)){
var vec__60453_60467 = cljs.core._nth.call(null,chunk__60450_60464,i__60452_60466);
var k__41458__auto___60468 = cljs.core.nth.call(null,vec__60453_60467,(0),null);
var cb__41459__auto___60469 = cljs.core.nth.call(null,vec__60453_60467,(1),null);
try{cb__41459__auto___60469.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__41457__auto___60462,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e60456){if((e60456 instanceof java.lang.Exception)){
var e__41460__auto___60470 = e60456;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__41458__auto___60468,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__41460__auto___60470);
} else {
throw e60456;

}
}

var G__60471 = seq__60449_60463;
var G__60472 = chunk__60450_60464;
var G__60473 = count__60451_60465;
var G__60474 = (i__60452_60466 + (1));
seq__60449_60463 = G__60471;
chunk__60450_60464 = G__60472;
count__60451_60465 = G__60473;
i__60452_60466 = G__60474;
continue;
} else {
var temp__4657__auto___60475 = cljs.core.seq.call(null,seq__60449_60463);
if(temp__4657__auto___60475){
var seq__60449_60476__$1 = temp__4657__auto___60475;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60449_60476__$1)){
var c__4319__auto___60477 = cljs.core.chunk_first.call(null,seq__60449_60476__$1);
var G__60478 = cljs.core.chunk_rest.call(null,seq__60449_60476__$1);
var G__60479 = c__4319__auto___60477;
var G__60480 = cljs.core.count.call(null,c__4319__auto___60477);
var G__60481 = (0);
seq__60449_60463 = G__60478;
chunk__60450_60464 = G__60479;
count__60451_60465 = G__60480;
i__60452_60466 = G__60481;
continue;
} else {
var vec__60457_60482 = cljs.core.first.call(null,seq__60449_60476__$1);
var k__41458__auto___60483 = cljs.core.nth.call(null,vec__60457_60482,(0),null);
var cb__41459__auto___60484 = cljs.core.nth.call(null,vec__60457_60482,(1),null);
try{cb__41459__auto___60484.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__41457__auto___60462,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e60460){if((e60460 instanceof java.lang.Exception)){
var e__41460__auto___60485 = e60460;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__41458__auto___60483,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__41460__auto___60485);
} else {
throw e60460;

}
}

var G__60486 = cljs.core.next.call(null,seq__60449_60476__$1);
var G__60487 = null;
var G__60488 = (0);
var G__60489 = (0);
seq__60449_60463 = G__60486;
chunk__60450_60464 = G__60487;
count__60451_60465 = G__60488;
i__60452_60466 = G__60489;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_60448;
}} else {
return null;
}
});})(cache_key))
);

cljs.core.swap_BANG_.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__41461__auto___60490 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,r)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,r)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__41461__auto___60490;

} else {
}

return r;
});
mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup = (function mranderson048$re_frame$v0v10v2$re_frame$subs$cache_lookup(var_args){
var G__60492 = arguments.length;
switch (G__60492) {
case 1:
return mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup.call(null,query_v,cljs.core.PersistentVector.EMPTY);
});

mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.query__GT_reaction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
});

mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2;

/**
 * Given a `query`, returns a Reagent `reaction` which, over
 *   time, reactively delivers a stream of values. So in FRP-ish terms,
 *   it returns a Signal.
 * 
 *   To obtain the returned Signal/Stream's current value, it must be `deref`ed.
 * 
 *   `query` is a vector of at least one element. The first element is the
 *   `query-id`, typically a namespaced keyword. The rest of the vector's
 *   elements are optional, additional values which parameterise the query
 *   performed.
 * 
 *   `dynv` is an optional 3rd argument, `which is a vector of further input
 *   signals (atoms, reactions, etc), NOT values. This argument exists for
 *   historical reasons and is borderline deprecated these days.
 * 
 *   Example Usage:
 *   --------------
 * 
 *  (subscribe [:items])
 *  (subscribe [:items "blue" :small])
 *  (subscribe [:items {:colour "blue"  :size :small}])
 * 
 *   Note: for any given call to `subscribe` there must have been a previous call
 *   to `reg-sub`, registering the query handler (function) for the `query-id` given.
 * 
 *   Hint
 *   ----
 * 
 *   When used in a view function BE SURE to `deref` the returned value.
 *   In fact, to avoid any mistakes, some prefer to define:
 * 
 *   (def <sub  (comp deref mranderson048.re-frame.v0v10v2.re-frame.core/subscribe))
 * 
 *   And then, within their views, they call  `(<sub [:items :small])` rather
 *   than using `subscribe` directly.
 * 
 *   De-duplication
 *   --------------
 * 
 *   XXX
 *   
 */
mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe = (function mranderson048$re_frame$v0v10v2$re_frame$subs$subscribe(var_args){
var G__60495 = arguments.length;
switch (G__60495) {
case 1:
return mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query){
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_60496 = mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson048.re_frame.v0v10v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query], null)], null));

try{try{var temp__4655__auto__ = mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup.call(null,query);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__41461__auto___60523 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__41461__auto___60523;

} else {
}

return cached;
} else {
var query_id = mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query);
var handler_fn = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.kind,query_id);
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__41461__auto___60524 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__41461__auto___60524;

} else {
}

if((handler_fn == null)){
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__41461__auto___60525 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__41461__auto___60525;

} else {
}

return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join(''));
} else {
return mranderson048.re_frame.v0v10v2.re_frame.subs.cache_and_return.call(null,query,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,mranderson048.re_frame.v0v10v2.re_frame.db.app_db,query));
}
}
}finally {if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__41456__auto___60526 = mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null);
var duration__41457__auto___60527 = (end__41456__auto___60526 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__60497_60528 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__60498_60529 = null;
var count__60499_60530 = (0);
var i__60500_60531 = (0);
while(true){
if((i__60500_60531 < count__60499_60530)){
var vec__60501_60532 = cljs.core._nth.call(null,chunk__60498_60529,i__60500_60531);
var k__41458__auto___60533 = cljs.core.nth.call(null,vec__60501_60532,(0),null);
var cb__41459__auto___60534 = cljs.core.nth.call(null,vec__60501_60532,(1),null);
try{cb__41459__auto___60534.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__41457__auto___60527,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e60504){if((e60504 instanceof java.lang.Exception)){
var e__41460__auto___60535 = e60504;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__41458__auto___60533,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__41460__auto___60535);
} else {
throw e60504;

}
}

var G__60536 = seq__60497_60528;
var G__60537 = chunk__60498_60529;
var G__60538 = count__60499_60530;
var G__60539 = (i__60500_60531 + (1));
seq__60497_60528 = G__60536;
chunk__60498_60529 = G__60537;
count__60499_60530 = G__60538;
i__60500_60531 = G__60539;
continue;
} else {
var temp__4657__auto___60540 = cljs.core.seq.call(null,seq__60497_60528);
if(temp__4657__auto___60540){
var seq__60497_60541__$1 = temp__4657__auto___60540;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60497_60541__$1)){
var c__4319__auto___60542 = cljs.core.chunk_first.call(null,seq__60497_60541__$1);
var G__60543 = cljs.core.chunk_rest.call(null,seq__60497_60541__$1);
var G__60544 = c__4319__auto___60542;
var G__60545 = cljs.core.count.call(null,c__4319__auto___60542);
var G__60546 = (0);
seq__60497_60528 = G__60543;
chunk__60498_60529 = G__60544;
count__60499_60530 = G__60545;
i__60500_60531 = G__60546;
continue;
} else {
var vec__60505_60547 = cljs.core.first.call(null,seq__60497_60541__$1);
var k__41458__auto___60548 = cljs.core.nth.call(null,vec__60505_60547,(0),null);
var cb__41459__auto___60549 = cljs.core.nth.call(null,vec__60505_60547,(1),null);
try{cb__41459__auto___60549.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__41457__auto___60527,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e60508){if((e60508 instanceof java.lang.Exception)){
var e__41460__auto___60550 = e60508;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__41458__auto___60548,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__41460__auto___60550);
} else {
throw e60508;

}
}

var G__60551 = cljs.core.next.call(null,seq__60497_60541__$1);
var G__60552 = null;
var G__60553 = (0);
var G__60554 = (0);
seq__60497_60528 = G__60551;
chunk__60498_60529 = G__60552;
count__60499_60530 = G__60553;
i__60500_60531 = G__60554;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_60496;
}} else {
var temp__4655__auto__ = mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup.call(null,query);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__41461__auto___60555 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__41461__auto___60555;

} else {
}

return cached;
} else {
var query_id = mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query);
var handler_fn = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.kind,query_id);
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__41461__auto___60556 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__41461__auto___60556;

} else {
}

if((handler_fn == null)){
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__41461__auto___60557 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__41461__auto___60557;

} else {
}

return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join(''));
} else {
return mranderson048.re_frame.v0v10v2.re_frame.subs.cache_and_return.call(null,query,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,mranderson048.re_frame.v0v10v2.re_frame.db.app_db,query));
}
}
}
});

mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (query,dynv){
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_60509 = mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson048.re_frame.v0v10v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dynv], null)], null));

try{try{var temp__4655__auto__ = mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup.call(null,query,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__41461__auto___60558 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__41461__auto___60558;

} else {
}

return cached;
} else {
var query_id = mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query);
var handler_fn = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.kind,query_id);
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__41461__auto___60559 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__41461__auto___60559;

} else {
}

if(mranderson048.re_frame.v0v10v2.re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___60560 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,mranderson048.re_frame.v0v10v2.re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___60560)){
var not_reactive_60561 = temp__4657__auto___60560;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_60561);
} else {
}
} else {
}

if((handler_fn == null)){
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__41461__auto___60562 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__41461__auto___60562;

} else {
}

return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join(''));
} else {
var dyn_vals = mranderson048.re_frame.v0v10v2.re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_60509){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_60509))
);
var sub = mranderson048.re_frame.v0v10v2.re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_60509){
return (function (){
return handler_fn.call(null,mranderson048.re_frame.v0v10v2.re_frame.db.app_db,query,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_60509))
);
return mranderson048.re_frame.v0v10v2.re_frame.subs.cache_and_return.call(null,query,dynv,mranderson048.re_frame.v0v10v2.re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_60509){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_60509))
));
}
}
}finally {if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__41456__auto___60563 = mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null);
var duration__41457__auto___60564 = (end__41456__auto___60563 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__60510_60565 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__60511_60566 = null;
var count__60512_60567 = (0);
var i__60513_60568 = (0);
while(true){
if((i__60513_60568 < count__60512_60567)){
var vec__60514_60569 = cljs.core._nth.call(null,chunk__60511_60566,i__60513_60568);
var k__41458__auto___60570 = cljs.core.nth.call(null,vec__60514_60569,(0),null);
var cb__41459__auto___60571 = cljs.core.nth.call(null,vec__60514_60569,(1),null);
try{cb__41459__auto___60571.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__41457__auto___60564,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e60517){if((e60517 instanceof java.lang.Exception)){
var e__41460__auto___60572 = e60517;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__41458__auto___60570,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__41460__auto___60572);
} else {
throw e60517;

}
}

var G__60573 = seq__60510_60565;
var G__60574 = chunk__60511_60566;
var G__60575 = count__60512_60567;
var G__60576 = (i__60513_60568 + (1));
seq__60510_60565 = G__60573;
chunk__60511_60566 = G__60574;
count__60512_60567 = G__60575;
i__60513_60568 = G__60576;
continue;
} else {
var temp__4657__auto___60577 = cljs.core.seq.call(null,seq__60510_60565);
if(temp__4657__auto___60577){
var seq__60510_60578__$1 = temp__4657__auto___60577;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60510_60578__$1)){
var c__4319__auto___60579 = cljs.core.chunk_first.call(null,seq__60510_60578__$1);
var G__60580 = cljs.core.chunk_rest.call(null,seq__60510_60578__$1);
var G__60581 = c__4319__auto___60579;
var G__60582 = cljs.core.count.call(null,c__4319__auto___60579);
var G__60583 = (0);
seq__60510_60565 = G__60580;
chunk__60511_60566 = G__60581;
count__60512_60567 = G__60582;
i__60513_60568 = G__60583;
continue;
} else {
var vec__60518_60584 = cljs.core.first.call(null,seq__60510_60578__$1);
var k__41458__auto___60585 = cljs.core.nth.call(null,vec__60518_60584,(0),null);
var cb__41459__auto___60586 = cljs.core.nth.call(null,vec__60518_60584,(1),null);
try{cb__41459__auto___60586.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__41457__auto___60564,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e60521){if((e60521 instanceof java.lang.Exception)){
var e__41460__auto___60587 = e60521;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__41458__auto___60585,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__41460__auto___60587);
} else {
throw e60521;

}
}

var G__60588 = cljs.core.next.call(null,seq__60510_60578__$1);
var G__60589 = null;
var G__60590 = (0);
var G__60591 = (0);
seq__60510_60565 = G__60588;
chunk__60511_60566 = G__60589;
count__60512_60567 = G__60590;
i__60513_60568 = G__60591;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_60509;
}} else {
var temp__4655__auto__ = mranderson048.re_frame.v0v10v2.re_frame.subs.cache_lookup.call(null,query,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__41461__auto___60592 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__41461__auto___60592;

} else {
}

return cached;
} else {
var query_id = mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query);
var handler_fn = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.kind,query_id);
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__41461__auto___60593 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__41461__auto___60593;

} else {
}

if(mranderson048.re_frame.v0v10v2.re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___60594 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,mranderson048.re_frame.v0v10v2.re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___60594)){
var not_reactive_60595 = temp__4657__auto___60594;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_60595);
} else {
}
} else {
}

if((handler_fn == null)){
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__41461__auto___60596 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__41461__auto___60596;

} else {
}

return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join(''));
} else {
var dyn_vals = mranderson048.re_frame.v0v10v2.re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__))
);
var sub = mranderson048.re_frame.v0v10v2.re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__4655__auto__){
return (function (){
return handler_fn.call(null,mranderson048.re_frame.v0v10v2.re_frame.db.app_db,query,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__))
);
return mranderson048.re_frame.v0v10v2.re_frame.subs.cache_and_return.call(null,query,dynv,mranderson048.re_frame.v0v10v2.re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__))
));
}
}
}
});

mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
mranderson048.re_frame.v0v10v2.re_frame.subs.map_vals = (function mranderson048$re_frame$v0v10v2$re_frame$subs$map_vals(f,m){
return cljs.core.into.call(null,cljs.core.empty.call(null,m),cljs.core.map.call(null,(function (p__60597){
var vec__60598 = p__60597;
var k = cljs.core.nth.call(null,vec__60598,(0),null);
var v = cljs.core.nth.call(null,vec__60598,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
})),m);
});
mranderson048.re_frame.v0v10v2.re_frame.subs.deref_input_signals = (function mranderson048$re_frame$v0v10v2$re_frame$subs$deref_input_signals(signals,query_id){
var signals__$1 = ((cljs.core.sequential_QMARK_.call(null,signals))?cljs.core.map.call(null,cljs.core.deref,signals):((cljs.core.map_QMARK_.call(null,signals))?mranderson048.re_frame.v0v10v2.re_frame.subs.map_vals.call(null,cljs.core.deref,signals):(cljs.core.truth_(mranderson048.re_frame.v0v10v2.re_frame.interop.deref_QMARK_.call(null,signals))?cljs.core.deref.call(null,signals):mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: in the reg-sub for ",query_id,", the input-signals function returns: ",signals)
)));
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__41461__auto___60601 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id,signals__$1)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id,signals__$1)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__41461__auto___60601;

} else {
}

return signals__$1;
});
/**
 * For a given `query-id`, register a `computation` function and input `signals`.
 * 
 *   At an abstract level, a call to this function allows you to register 'the mechanism'
 *   to later fulfil a call to `(subscribe [query-id ...])`.
 * 
 *   To say that another way, reg-sub allows you to create a template for a node
 *   in the signal graph. But note: reg-sub does not cause a node to be created.
 *   It simply allows you to register the template from which such a
 *   node could be created, if it were needed, sometime later, when the call
 *   to `subscribe` is made.
 * 
 *   reg-sub needs three things:
 *  - a `query-id`
 *  - the required inputs for this node
 *  - a computation function for this node
 * 
 *   The `query-id` is always the 1st argument to reg-sub and it is typically
 *   a namespaced keyword.
 * 
 *   A computation function is always the last argument and it has this general form:
 *  `(input-signals, query-vector) -> a-value`
 * 
 *   What goes in between the 1st and last args can vary, but whatever is there will
 *   define the input signals part of the template, and, as a result, it will control
 *   what values the computation functions gets as a first argument.
 * 
 *   There's 3 ways this function can be called - 3 ways to supply input signals:
 * 
 *   1. No input signals given:
 * 
 *   (reg-sub
 *     :query-id
 *     a-computation-fn)   ;; (fn [db v]  ... a-value)
 * 
 *   The node's input signal defaults to `app-db`, and the value within `app-db` is
 *   is given as the 1st argument to the computation function.
 * 
 *   2. A signal function is supplied:
 * 
 *   (reg-sub
 *     :query-id
 *     signal-fn     ;; <-- here
 *     computation-fn)
 * 
 *   When a node is created from the template, the `signal-fn` will be called and it
 *   is expected to return the input signal(s) as either a singleton, if there is only
 *   one, or a sequence if there are many, or a map with the signals as the values.
 * 
 *   The values from the nominated signals will be supplied as the 1st argument to the
 *   computation function - either a singleton, sequence or map of them, paralleling
 *   the structure returned by the signal function.
 * 
 *   Here, is an example signal-fn, which returns a vector of input signals.
 * 
 *     (fn [query-vec dynamic-vec]
 *       [(subscribe [:a-sub])
 *        (subscribe [:b-sub])])
 * 
 *   For that signal function, the computation function must be written
 *   to expect a vector of values for its first argument.
 *     (fn [[a b] _] ....)
 * 
 *   If the signal function was simpler and returned a singleton, like this:
 *      (fn [query-vec dynamic-vec]
 *        (subscribe [:a-sub]))
 * 
 *   then the computation function must be written to expect a single value
 *   as the 1st argument:
 * 
 *      (fn [a _] ...)
 * 
 *   3. Syntax Sugar
 * 
 *   (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   This 3rd variation is syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. Each pair starts with a `:<-` and a subscription
 *   vector follows.
 * 
 *   For further understanding, read `/docs`, and look at the detailed comments in
 *   /examples/todomvc/src/subs.cljs
 *   
 */
mranderson048.re_frame.v0v10v2.re_frame.subs.reg_sub = (function mranderson048$re_frame$v0v10v2$re_frame$subs$reg_sub(var_args){
var args__4502__auto__ = [];
var len__4499__auto___60634 = arguments.length;
var i__4500__auto___60635 = (0);
while(true){
if((i__4500__auto___60635 < len__4499__auto___60634)){
args__4502__auto__.push((arguments[i__4500__auto___60635]));

var G__60636 = (i__4500__auto___60635 + (1));
i__4500__auto___60635 = G__60636;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return mranderson048.re_frame.v0v10v2.re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

mranderson048.re_frame.v0v10v2.re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last.call(null,args);
var input_args = cljs.core.butlast.call(null,args);
var err_header = ["re-frame: reg-sub for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),", "].join('');
var inputs_fn = (function (){var G__60604 = cljs.core.count.call(null,input_args);
switch (G__60604) {
case (0):
return ((function (G__60604,computation_fn,input_args,err_header){
return (function() {
var G__60638 = null;
var G__60638__1 = (function (_){
return mranderson048.re_frame.v0v10v2.re_frame.db.app_db;
});
var G__60638__2 = (function (_,___$1){
return mranderson048.re_frame.v0v10v2.re_frame.db.app_db;
});
G__60638 = function(_,___$1){
switch(arguments.length){
case 1:
return G__60638__1.call(this,_);
case 2:
return G__60638__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__60638.cljs$core$IFn$_invoke$arity$1 = G__60638__1;
G__60638.cljs$core$IFn$_invoke$arity$2 = G__60638__2;
return G__60638;
})()
;})(G__60604,computation_fn,input_args,err_header))

break;
case (1):
var f = cljs.core.first.call(null,input_args);
if(cljs.core.fn_QMARK_.call(null,f)){
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"2nd argument expected to be an inputs function, got:",f);
}

return f;

break;
case (2):
var vec__60605 = input_args;
var marker = cljs.core.nth.call(null,vec__60605,(0),null);
var vec = cljs.core.nth.call(null,vec__60605,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"<-","<-",760412998),marker)){
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected :<-, got:",marker);
}

return ((function (vec__60605,marker,vec,G__60604,computation_fn,input_args,err_header){
return (function() {
var mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn = null;
var mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__1 = (function (_){
return mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe.call(null,vec);
});
var mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__2 = (function (_,___$1){
return mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe.call(null,vec);
});
mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__1.call(this,_);
case 2:
return mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__1;
mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__2;
return mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn;
})()
;})(vec__60605,marker,vec,G__60604,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.call(null,(2),input_args);
var markers = cljs.core.map.call(null,cljs.core.first,pairs);
var vecs = cljs.core.map.call(null,cljs.core.last,pairs);
if(((cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"<-","<-",760412998),null], null), null),markers)) && (cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,vecs)))){
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected pairs of :<- and vectors, got:",pairs);
}

return ((function (pairs,markers,vecs,G__60604,computation_fn,input_args,err_header){
return (function() {
var mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn = null;
var mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__1 = (function (_){
return cljs.core.map.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe,vecs);
});
var mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe,vecs);
});
mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__1.call(this,_);
case 2:
return mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__1;
mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn__2;
return mranderson048$re_frame$v0v10v2$re_frame$subs$inp_fn;
})()
;})(pairs,markers,vecs,G__60604,computation_fn,input_args,err_header))

}
})();
return mranderson048.re_frame.v0v10v2.re_frame.registrar.register_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.kind,query_id,((function (computation_fn,input_args,err_header,inputs_fn){
return (function() {
var mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn = null;
var mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = inputs_fn.call(null,query_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = mranderson048.re_frame.v0v10v2.re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_60608 = mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson048.re_frame.v0v10v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{var subscription = computation_fn.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__41461__auto___60639 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__41461__auto___60639;

} else {
}

return subscription;
}finally {if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__41456__auto___60640 = mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null);
var duration__41457__auto___60641 = (end__41456__auto___60640 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__60609_60642 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__60610_60643 = null;
var count__60611_60644 = (0);
var i__60612_60645 = (0);
while(true){
if((i__60612_60645 < count__60611_60644)){
var vec__60613_60646 = cljs.core._nth.call(null,chunk__60610_60643,i__60612_60645);
var k__41458__auto___60647 = cljs.core.nth.call(null,vec__60613_60646,(0),null);
var cb__41459__auto___60648 = cljs.core.nth.call(null,vec__60613_60646,(1),null);
try{cb__41459__auto___60648.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__41457__auto___60641,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e60616){if((e60616 instanceof java.lang.Exception)){
var e__41460__auto___60649 = e60616;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__41458__auto___60647,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__41460__auto___60649);
} else {
throw e60616;

}
}

var G__60650 = seq__60609_60642;
var G__60651 = chunk__60610_60643;
var G__60652 = count__60611_60644;
var G__60653 = (i__60612_60645 + (1));
seq__60609_60642 = G__60650;
chunk__60610_60643 = G__60651;
count__60611_60644 = G__60652;
i__60612_60645 = G__60653;
continue;
} else {
var temp__4657__auto___60654 = cljs.core.seq.call(null,seq__60609_60642);
if(temp__4657__auto___60654){
var seq__60609_60655__$1 = temp__4657__auto___60654;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60609_60655__$1)){
var c__4319__auto___60656 = cljs.core.chunk_first.call(null,seq__60609_60655__$1);
var G__60657 = cljs.core.chunk_rest.call(null,seq__60609_60655__$1);
var G__60658 = c__4319__auto___60656;
var G__60659 = cljs.core.count.call(null,c__4319__auto___60656);
var G__60660 = (0);
seq__60609_60642 = G__60657;
chunk__60610_60643 = G__60658;
count__60611_60644 = G__60659;
i__60612_60645 = G__60660;
continue;
} else {
var vec__60617_60661 = cljs.core.first.call(null,seq__60609_60655__$1);
var k__41458__auto___60662 = cljs.core.nth.call(null,vec__60617_60661,(0),null);
var cb__41459__auto___60663 = cljs.core.nth.call(null,vec__60617_60661,(1),null);
try{cb__41459__auto___60663.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__41457__auto___60641,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e60620){if((e60620 instanceof java.lang.Exception)){
var e__41460__auto___60664 = e60620;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__41458__auto___60662,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__41460__auto___60664);
} else {
throw e60620;

}
}

var G__60665 = cljs.core.next.call(null,seq__60609_60655__$1);
var G__60666 = null;
var G__60667 = (0);
var G__60668 = (0);
seq__60609_60642 = G__60665;
chunk__60610_60643 = G__60666;
count__60611_60644 = G__60667;
i__60612_60645 = G__60668;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_60608;
}} else {
var subscription = computation_fn.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__41461__auto___60669 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__41461__auto___60669;

} else {
}

return subscription;
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
var mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = inputs_fn.call(null,query_vec,dyn_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = mranderson048.re_frame.v0v10v2.re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_60621 = mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson048.re_frame.v0v10v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dyn_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{var subscription = computation_fn.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__41461__auto___60670 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__41461__auto___60670;

} else {
}

return subscription;
}finally {if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__41456__auto___60671 = mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null);
var duration__41457__auto___60672 = (end__41456__auto___60671 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__60622_60673 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__60623_60674 = null;
var count__60624_60675 = (0);
var i__60625_60676 = (0);
while(true){
if((i__60625_60676 < count__60624_60675)){
var vec__60626_60677 = cljs.core._nth.call(null,chunk__60623_60674,i__60625_60676);
var k__41458__auto___60678 = cljs.core.nth.call(null,vec__60626_60677,(0),null);
var cb__41459__auto___60679 = cljs.core.nth.call(null,vec__60626_60677,(1),null);
try{cb__41459__auto___60679.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__41457__auto___60672,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e60629){if((e60629 instanceof java.lang.Exception)){
var e__41460__auto___60680 = e60629;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__41458__auto___60678,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__41460__auto___60680);
} else {
throw e60629;

}
}

var G__60681 = seq__60622_60673;
var G__60682 = chunk__60623_60674;
var G__60683 = count__60624_60675;
var G__60684 = (i__60625_60676 + (1));
seq__60622_60673 = G__60681;
chunk__60623_60674 = G__60682;
count__60624_60675 = G__60683;
i__60625_60676 = G__60684;
continue;
} else {
var temp__4657__auto___60685 = cljs.core.seq.call(null,seq__60622_60673);
if(temp__4657__auto___60685){
var seq__60622_60686__$1 = temp__4657__auto___60685;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60622_60686__$1)){
var c__4319__auto___60687 = cljs.core.chunk_first.call(null,seq__60622_60686__$1);
var G__60688 = cljs.core.chunk_rest.call(null,seq__60622_60686__$1);
var G__60689 = c__4319__auto___60687;
var G__60690 = cljs.core.count.call(null,c__4319__auto___60687);
var G__60691 = (0);
seq__60622_60673 = G__60688;
chunk__60623_60674 = G__60689;
count__60624_60675 = G__60690;
i__60625_60676 = G__60691;
continue;
} else {
var vec__60630_60692 = cljs.core.first.call(null,seq__60622_60686__$1);
var k__41458__auto___60693 = cljs.core.nth.call(null,vec__60630_60692,(0),null);
var cb__41459__auto___60694 = cljs.core.nth.call(null,vec__60630_60692,(1),null);
try{cb__41459__auto___60694.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__41457__auto___60672,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e60633){if((e60633 instanceof java.lang.Exception)){
var e__41460__auto___60695 = e60633;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__41458__auto___60693,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__41460__auto___60695);
} else {
throw e60633;

}
}

var G__60696 = cljs.core.next.call(null,seq__60622_60686__$1);
var G__60697 = null;
var G__60698 = (0);
var G__60699 = (0);
seq__60622_60673 = G__60696;
chunk__60623_60674 = G__60697;
count__60624_60675 = G__60698;
i__60625_60676 = G__60699;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_60621;
}} else {
var subscription = computation_fn.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__41461__auto___60700 = cljs.core.merge.call(null,cljs.core.update.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__41461__auto___60700;

} else {
}

return subscription;
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,mranderson048.re_frame.v0v10v2.re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__2;
mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__3;
return mranderson048$re_frame$v0v10v2$re_frame$subs$subs_handler_fn;
})()
;})(computation_fn,input_args,err_header,inputs_fn))
);
});

mranderson048.re_frame.v0v10v2.re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson048.re_frame.v0v10v2.re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq60602){
var G__60603 = cljs.core.first.call(null,seq60602);
var seq60602__$1 = cljs.core.next.call(null,seq60602);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60603,seq60602__$1);
});


//# sourceMappingURL=subs.js.map?rel=1600694569788
