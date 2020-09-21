// Compiled by ClojureScript 1.10.238 {}
goog.provide('mranderson048.re_frame.v0v10v2.re_frame.fx');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.router');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.db');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.interceptor');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.events');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.registrar');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.loggers');
mranderson048.re_frame.v0v10v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(mranderson048.re_frame.v0v10v2.re_frame.registrar.kinds.call(null,mranderson048.re_frame.v0v10v2.re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (mranderson048.re-frame.v0v10v2.re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx = (function mranderson048$re_frame$v0v10v2$re_frame$fx$reg_fx(id,handler){
return mranderson048.re_frame.v0v10v2.re_frame.registrar.register_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
mranderson048.re_frame.v0v10v2.re_frame.fx.do_fx = mranderson048.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function mranderson048$re_frame$v0v10v2$re_frame$fx$do_fx_after(context){
var seq__60703 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__60704 = null;
var count__60705 = (0);
var i__60706 = (0);
while(true){
if((i__60706 < count__60705)){
var vec__60707 = cljs.core._nth.call(null,chunk__60704,i__60706);
var effect_key = cljs.core.nth.call(null,vec__60707,(0),null);
var effect_value = cljs.core.nth.call(null,vec__60707,(1),null);
var temp__4655__auto___60713 = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___60713)){
var effect_fn_60714 = temp__4655__auto___60713;
effect_fn_60714.call(null,effect_value);
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}


var G__60715 = seq__60703;
var G__60716 = chunk__60704;
var G__60717 = count__60705;
var G__60718 = (i__60706 + (1));
seq__60703 = G__60715;
chunk__60704 = G__60716;
count__60705 = G__60717;
i__60706 = G__60718;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__60703);
if(temp__4657__auto__){
var seq__60703__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60703__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__60703__$1);
var G__60719 = cljs.core.chunk_rest.call(null,seq__60703__$1);
var G__60720 = c__4319__auto__;
var G__60721 = cljs.core.count.call(null,c__4319__auto__);
var G__60722 = (0);
seq__60703 = G__60719;
chunk__60704 = G__60720;
count__60705 = G__60721;
i__60706 = G__60722;
continue;
} else {
var vec__60710 = cljs.core.first.call(null,seq__60703__$1);
var effect_key = cljs.core.nth.call(null,vec__60710,(0),null);
var effect_value = cljs.core.nth.call(null,vec__60710,(1),null);
var temp__4655__auto___60723 = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___60723)){
var effect_fn_60724 = temp__4655__auto___60723;
effect_fn_60724.call(null,effect_value);
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}


var G__60725 = cljs.core.next.call(null,seq__60703__$1);
var G__60726 = null;
var G__60727 = (0);
var G__60728 = (0);
seq__60703 = G__60725;
chunk__60704 = G__60726;
count__60705 = G__60727;
i__60706 = G__60728;
continue;
}
} else {
return null;
}
}
break;
}
}));
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__60729 = cljs.core.seq.call(null,value);
var chunk__60730 = null;
var count__60731 = (0);
var i__60732 = (0);
while(true){
if((i__60732 < count__60731)){
var map__60733 = cljs.core._nth.call(null,chunk__60730,i__60732);
var map__60733__$1 = ((((!((map__60733 == null)))?(((((map__60733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60733):map__60733);
var effect = map__60733__$1;
var ms = cljs.core.get.call(null,map__60733__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__60733__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson048.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__60729,chunk__60730,count__60731,i__60732,map__60733,map__60733__$1,effect,ms,dispatch){
return (function (){
return mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__60729,chunk__60730,count__60731,i__60732,map__60733,map__60733__$1,effect,ms,dispatch))
,ms);
}


var G__60737 = seq__60729;
var G__60738 = chunk__60730;
var G__60739 = count__60731;
var G__60740 = (i__60732 + (1));
seq__60729 = G__60737;
chunk__60730 = G__60738;
count__60731 = G__60739;
i__60732 = G__60740;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__60729);
if(temp__4657__auto__){
var seq__60729__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60729__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__60729__$1);
var G__60741 = cljs.core.chunk_rest.call(null,seq__60729__$1);
var G__60742 = c__4319__auto__;
var G__60743 = cljs.core.count.call(null,c__4319__auto__);
var G__60744 = (0);
seq__60729 = G__60741;
chunk__60730 = G__60742;
count__60731 = G__60743;
i__60732 = G__60744;
continue;
} else {
var map__60735 = cljs.core.first.call(null,seq__60729__$1);
var map__60735__$1 = ((((!((map__60735 == null)))?(((((map__60735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60735):map__60735);
var effect = map__60735__$1;
var ms = cljs.core.get.call(null,map__60735__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__60735__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson048.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__60729,chunk__60730,count__60731,i__60732,map__60735,map__60735__$1,effect,ms,dispatch,seq__60729__$1,temp__4657__auto__){
return (function (){
return mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__60729,chunk__60730,count__60731,i__60732,map__60735,map__60735__$1,effect,ms,dispatch,seq__60729__$1,temp__4657__auto__))
,ms);
}


var G__60745 = cljs.core.next.call(null,seq__60729__$1);
var G__60746 = null;
var G__60747 = (0);
var G__60748 = (0);
seq__60729 = G__60745;
chunk__60730 = G__60746;
count__60731 = G__60747;
i__60732 = G__60748;
continue;
}
} else {
return null;
}
}
break;
}
}));
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,value);
}
}));
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__60749 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__60750 = null;
var count__60751 = (0);
var i__60752 = (0);
while(true){
if((i__60752 < count__60751)){
var event = cljs.core._nth.call(null,chunk__60750,i__60752);
mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);


var G__60753 = seq__60749;
var G__60754 = chunk__60750;
var G__60755 = count__60751;
var G__60756 = (i__60752 + (1));
seq__60749 = G__60753;
chunk__60750 = G__60754;
count__60751 = G__60755;
i__60752 = G__60756;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__60749);
if(temp__4657__auto__){
var seq__60749__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60749__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__60749__$1);
var G__60757 = cljs.core.chunk_rest.call(null,seq__60749__$1);
var G__60758 = c__4319__auto__;
var G__60759 = cljs.core.count.call(null,c__4319__auto__);
var G__60760 = (0);
seq__60749 = G__60757;
chunk__60750 = G__60758;
count__60751 = G__60759;
i__60752 = G__60760;
continue;
} else {
var event = cljs.core.first.call(null,seq__60749__$1);
mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);


var G__60761 = cljs.core.next.call(null,seq__60749__$1);
var G__60762 = null;
var G__60763 = (0);
var G__60764 = (0);
seq__60749 = G__60761;
chunk__60750 = G__60762;
count__60751 = G__60763;
i__60752 = G__60764;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,mranderson048.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson048.re_frame.v0v10v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__60765 = cljs.core.seq.call(null,value);
var chunk__60766 = null;
var count__60767 = (0);
var i__60768 = (0);
while(true){
if((i__60768 < count__60767)){
var event = cljs.core._nth.call(null,chunk__60766,i__60768);
clear_event.call(null,event);


var G__60769 = seq__60765;
var G__60770 = chunk__60766;
var G__60771 = count__60767;
var G__60772 = (i__60768 + (1));
seq__60765 = G__60769;
chunk__60766 = G__60770;
count__60767 = G__60771;
i__60768 = G__60772;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__60765);
if(temp__4657__auto__){
var seq__60765__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60765__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__60765__$1);
var G__60773 = cljs.core.chunk_rest.call(null,seq__60765__$1);
var G__60774 = c__4319__auto__;
var G__60775 = cljs.core.count.call(null,c__4319__auto__);
var G__60776 = (0);
seq__60765 = G__60773;
chunk__60766 = G__60774;
count__60767 = G__60775;
i__60768 = G__60776;
continue;
} else {
var event = cljs.core.first.call(null,seq__60765__$1);
clear_event.call(null,event);


var G__60777 = cljs.core.next.call(null,seq__60765__$1);
var G__60778 = null;
var G__60779 = (0);
var G__60780 = (0);
seq__60765 = G__60777;
chunk__60766 = G__60778;
count__60767 = G__60779;
i__60768 = G__60780;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,mranderson048.re_frame.v0v10v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1600694569877
