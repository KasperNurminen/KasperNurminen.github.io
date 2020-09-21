// Compiled by ClojureScript 1.10.238 {}
goog.provide('clojure_cv.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('clojure_cv.db');
goog.require('accountant.core');
goog.require('day8.re_frame.tracing');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("clojure-cv.events","initialize-db","clojure-cv.events/initialize-db",1606821089),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null));

var opts__28486__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__28487__auto__ = clojure_cv.db.default_db;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__28487__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__28487__auto__;
}catch (e58395){var e = e58395;
throw e;
}}):(function (_,___$1){
return clojure_cv.db.default_db;
})));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"modal","modal",-1031880850),(function (db,p__58396){
var vec__58397 = p__58396;
var _ = cljs.core.nth.call(null,vec__58397,(0),null);
var val = cljs.core.nth.call(null,vec__58397,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"modal-open","modal-open",-845881300),val);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-current-section","set-current-section",942818627),(function (db,p__58400){
var vec__58401 = p__58400;
var _ = cljs.core.nth.call(null,vec__58401,(0),null);
var val = cljs.core.nth.call(null,vec__58401,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-section","current-section",1519906460),val);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"scroll-is-at-beginning","scroll-is-at-beginning",881196327),(function (db,p__58404){
var vec__58405 = p__58404;
var _ = cljs.core.nth.call(null,vec__58405,(0),null);
var val = cljs.core.nth.call(null,vec__58405,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"scroll-is-at-beginning","scroll-is-at-beginning",881196327),val);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"toggle-menu","toggle-menu",-1127424735),(function (db,_){
var menu_state = cljs.core.get.call(null,db,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),cljs.core.not.call(null,menu_state));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"scroll-into-view","scroll-into-view",-549713383),(function (_,p__58408){
var vec__58409 = p__58408;
var ___$1 = cljs.core.nth.call(null,vec__58409,(0),null);
var id = cljs.core.nth.call(null,vec__58409,(1),null);
var instant_QMARK_ = cljs.core.nth.call(null,vec__58409,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scroll-into-view","scroll-into-view",-549713383),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,instant_QMARK_], null)], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"navigate-to-home","navigate-to-home",519585018),(function (){
return accountant.core.navigate_BANG_.call(null,"/");
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"navigate-to-portfolio","navigate-to-portfolio",-144572198),(function (_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"navigate-to-home","navigate-to-home",519585018),null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scroll-into-view","scroll-into-view",-549713383),"portfolio",true], null),new cljs.core.Keyword(null,"ms","ms",-1152709733),(150)], null)], null)], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"navigate-to-page","navigate-to-page",-1590174363),(function (page){
return accountant.core.navigate_BANG_.call(null,page);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"navigate-to-portfolio-page","navigate-to-portfolio-page",772478711),(function (_,p__58412){
var vec__58413 = p__58412;
var ___$1 = cljs.core.nth.call(null,vec__58413,(0),null);
var page = cljs.core.nth.call(null,vec__58413,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"navigate-to-page","navigate-to-page",-1590174363),["/portfolio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,page))].join(''),new cljs.core.Keyword(null,"scroll-to-top","scroll-to-top",-1074685909),null], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"scroll-into-view","scroll-into-view",-549713383),(function (p__58416){
var vec__58417 = p__58416;
var id = cljs.core.nth.call(null,vec__58417,(0),null);
var instant_QMARK_ = cljs.core.nth.call(null,vec__58417,(1),null);
return document.querySelector(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')).scrollIntoView(cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,((cljs.core.not.call(null,instant_QMARK_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),"smooth"], null):null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block","block",664686210),"start"], null))));
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"scroll-to-top","scroll-to-top",-1074685909),(function (){
return window.scrollTo((0),(0));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"toggle-image-enlargement","toggle-image-enlargement",-1709845865),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"image-enlarged","image-enlarged",-1374926525),cljs.core.not.call(null,new cljs.core.Keyword(null,"image-enlarged","image-enlarged",-1374926525).cljs$core$IFn$_invoke$arity$1(db)));
}));

//# sourceMappingURL=events.js.map?rel=1600694563443
