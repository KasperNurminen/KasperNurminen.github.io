// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('clojure_cv.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('clojure_cv.db');
goog.require('accountant.core');
goog.require('day8.re_frame.tracing');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$clojure_DASH_cv$events_SLASH_initialize_DASH_db,((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.cst$sym$db_SLASH_default_DASH_db);

var opts__17384__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__17385__auto__ = clojure_cv.db.default_db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result__17385__auto__,cljs.core.cst$kw$form,cljs.core.cst$sym$db_SLASH_default_DASH_db,cljs.core.cst$kw$indent_DASH_level,(0)], null));

return result__17385__auto__;
}catch (e17506){var e = e17506;
throw e;
}}):(function (_,___$1){
return clojure_cv.db.default_db;
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$modal,(function (db,p__17507){
var vec__17508 = p__17507;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17508,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17508,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$modal_DASH_open,val);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_current_DASH_section,(function (db,p__17511){
var vec__17512 = p__17511;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17512,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17512,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_section,val);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$scroll_DASH_is_DASH_at_DASH_beginning,(function (db,p__17515){
var vec__17516 = p__17515;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17516,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17516,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$scroll_DASH_is_DASH_at_DASH_beginning,val);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$toggle_DASH_menu,(function (db,_){
var menu_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$menu_DASH_open);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$menu_DASH_open,cljs.core.not(menu_state));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$scroll_DASH_into_DASH_view,(function (_,p__17519){
var vec__17520 = p__17519;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17520,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17520,(1),null);
var instant_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17520,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scroll_DASH_into_DASH_view,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,instant_QMARK_], null)], null);
}));
var G__17523_17525 = cljs.core.cst$kw$navigate_DASH_to_DASH_home;
var G__17524_17526 = ((function (G__17523_17525){
return (function (){
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/");
});})(G__17523_17525))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__17523_17525,G__17524_17526) : re_frame.core.reg_fx.call(null,G__17523_17525,G__17524_17526));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$navigate_DASH_to_DASH_portfolio,(function (_){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$navigate_DASH_to_DASH_home,null,cljs.core.cst$kw$dispatch_DASH_later,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scroll_DASH_into_DASH_view,"portfolio",true], null),cljs.core.cst$kw$ms,(150)], null)], null)], null);
}));
var G__17527_17529 = cljs.core.cst$kw$navigate_DASH_to_DASH_page;
var G__17528_17530 = ((function (G__17527_17529){
return (function (page){
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1(page);
});})(G__17527_17529))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__17527_17529,G__17528_17530) : re_frame.core.reg_fx.call(null,G__17527_17529,G__17528_17530));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$navigate_DASH_to_DASH_portfolio_DASH_page,(function (_,p__17531){
var vec__17532 = p__17531;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17532,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17532,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$navigate_DASH_to_DASH_page,["/portfolio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(page))].join(''),cljs.core.cst$kw$scroll_DASH_to_DASH_top,null], null);
}));
var G__17535_17541 = cljs.core.cst$kw$scroll_DASH_into_DASH_view;
var G__17536_17542 = ((function (G__17535_17541){
return (function (p__17537){
var vec__17538 = p__17537;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17538,(0),null);
var instant_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17538,(1),null);
return document.querySelector(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')).scrollIntoView(cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.not(instant_QMARK_))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$behavior,"smooth"], null):null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$block,"start"], null)], 0))));
});})(G__17535_17541))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__17535_17541,G__17536_17542) : re_frame.core.reg_fx.call(null,G__17535_17541,G__17536_17542));
var G__17543_17545 = cljs.core.cst$kw$scroll_DASH_to_DASH_top;
var G__17544_17546 = ((function (G__17543_17545){
return (function (){
return window.scrollTo((0),(0));
});})(G__17543_17545))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__17543_17545,G__17544_17546) : re_frame.core.reg_fx.call(null,G__17543_17545,G__17544_17546));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$toggle_DASH_image_DASH_enlargement,(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$image_DASH_enlarged,cljs.core.not(cljs.core.cst$kw$image_DASH_enlarged.cljs$core$IFn$_invoke$arity$1(db)));
}));
