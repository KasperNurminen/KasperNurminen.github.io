// Compiled by ClojureScript 1.10.238 {}
goog.provide('mranderson048.re_frame.v0v10v2.re_frame.trace');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.loggers');
mranderson048.re_frame.v0v10v2.re_frame.trace.id = cljs.core.atom.call(null,(0));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = null;
mranderson048.re_frame.v0v10v2.re_frame.trace.reset_tracing_BANG_ = (function mranderson048$re_frame$v0v10v2$re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("mranderson048.re_frame.v0v10v2.re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_ = (function mranderson048$re_frame$v0v10v2$re_frame$trace$is_trace_enabled_QMARK_(){
return mranderson048.re_frame.v0v10v2.re_frame.trace.trace_enabled_QMARK_;
});
mranderson048.re_frame.v0v10v2.re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
mranderson048.re_frame.v0v10v2.re_frame.trace.register_trace_cb = (function mranderson048$re_frame$v0v10v2$re_frame$trace$register_trace_cb(key,f){
if(mranderson048.re_frame.v0v10v2.re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation.");
}
});
mranderson048.re_frame.v0v10v2.re_frame.trace.remove_trace_cb = (function mranderson048$re_frame$v0v10v2$re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
mranderson048.re_frame.v0v10v2.re_frame.trace.next_id = (function mranderson048$re_frame$v0v10v2$re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace.id,cljs.core.inc);
});
mranderson048.re_frame.v0v10v2.re_frame.trace.start_trace = (function mranderson048$re_frame$v0v10v2$re_frame$trace$start_trace(p__60282){
var map__60283 = p__60282;
var map__60283__$1 = ((((!((map__60283 == null)))?(((((map__60283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60283):map__60283);
var operation = cljs.core.get.call(null,map__60283__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__60283__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__60283__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__60283__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),mranderson048.re_frame.v0v10v2.re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__3922__auto__ = child_of;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null)], null);
});

//# sourceMappingURL=trace.js.map?rel=1600694569235
