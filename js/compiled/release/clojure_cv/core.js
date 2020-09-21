// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('clojure_cv.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('clojure_cv.events');
goog.require('clojure_cv.config');
goog.require('clojure_cv.views.core');
goog.require('clojure_cv.views.portfolio');
goog.require('secretary.core');
goog.require('accountant.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('goog.History');
clojure_cv.core.dev_setup = (function clojure_cv$core$dev_setup(){
if(clojure_cv.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_();

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
clojure_cv.core.selected_page = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(clojure_cv.views.core.main_page);
clojure_cv.core.page = (function clojure_cv$core$page(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(clojure_cv.core.selected_page)], null);
});
clojure_cv.core.mount_root = (function clojure_cv$core$mount_root(){
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.core.main_panel,clojure_cv.core.page], null),document.getElementById("app"));
});
var action__9632__auto___9762 = (function (params__9633__auto__){
if(cljs.core.map_QMARK_(params__9633__auto__)){
var map__9757 = params__9633__auto__;
var map__9757__$1 = ((((!((map__9757 == null)))?(((((map__9757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9757):map__9757);
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.core.main_page);
} else {
if(cljs.core.vector_QMARK_(params__9633__auto__)){
var vec__9759 = params__9633__auto__;
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.core.main_page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__9632__auto___9762);

var action__9632__auto___9768 = (function (params__9633__auto__){
if(cljs.core.map_QMARK_(params__9633__auto__)){
var map__9763 = params__9633__auto__;
var map__9763__$1 = ((((!((map__9763 == null)))?(((((map__9763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9763):map__9763);
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.ilmomasiina);
} else {
if(cljs.core.vector_QMARK_(params__9633__auto__)){
var vec__9765 = params__9633__auto__;
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.ilmomasiina);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/portfolio/ilmomasiina",action__9632__auto___9768);

var action__9632__auto___9774 = (function (params__9633__auto__){
if(cljs.core.map_QMARK_(params__9633__auto__)){
var map__9769 = params__9633__auto__;
var map__9769__$1 = ((((!((map__9769 == null)))?(((((map__9769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9769):map__9769);
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.kaspernurminen);
} else {
if(cljs.core.vector_QMARK_(params__9633__auto__)){
var vec__9771 = params__9633__auto__;
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.kaspernurminen);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/portfolio/kaspernurminen",action__9632__auto___9774);

var action__9632__auto___9780 = (function (params__9633__auto__){
if(cljs.core.map_QMARK_(params__9633__auto__)){
var map__9775 = params__9633__auto__;
var map__9775__$1 = ((((!((map__9775 == null)))?(((((map__9775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9775):map__9775);
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.oloscreen);
} else {
if(cljs.core.vector_QMARK_(params__9633__auto__)){
var vec__9777 = params__9633__auto__;
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.oloscreen);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/portfolio/oloscreen",action__9632__auto___9780);

var action__9632__auto___9786 = (function (params__9633__auto__){
if(cljs.core.map_QMARK_(params__9633__auto__)){
var map__9781 = params__9633__auto__;
var map__9781__$1 = ((((!((map__9781 == null)))?(((((map__9781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9781):map__9781);
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.infodisplay);
} else {
if(cljs.core.vector_QMARK_(params__9633__auto__)){
var vec__9783 = params__9633__auto__;
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.infodisplay);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/portfolio/infodisplay",action__9632__auto___9786);

var action__9632__auto___9792 = (function (params__9633__auto__){
if(cljs.core.map_QMARK_(params__9633__auto__)){
var map__9787 = params__9633__auto__;
var map__9787__$1 = ((((!((map__9787 == null)))?(((((map__9787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9787):map__9787);
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.asumistukilaskuri);
} else {
if(cljs.core.vector_QMARK_(params__9633__auto__)){
var vec__9789 = params__9633__auto__;
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.asumistukilaskuri);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/portfolio/asumistukilaskuri",action__9632__auto___9792);

var action__9632__auto___9798 = (function (params__9633__auto__){
if(cljs.core.map_QMARK_(params__9633__auto__)){
var map__9793 = params__9633__auto__;
var map__9793__$1 = ((((!((map__9793 == null)))?(((((map__9793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9793):map__9793);
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.gameservice);
} else {
if(cljs.core.vector_QMARK_(params__9633__auto__)){
var vec__9795 = params__9633__auto__;
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.gameservice);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/portfolio/gameservice",action__9632__auto___9798);

var action__9632__auto___9804 = (function (params__9633__auto__){
if(cljs.core.map_QMARK_(params__9633__auto__)){
var map__9799 = params__9633__auto__;
var map__9799__$1 = ((((!((map__9799 == null)))?(((((map__9799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9799):map__9799);
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.ydinbook);
} else {
if(cljs.core.vector_QMARK_(params__9633__auto__)){
var vec__9801 = params__9633__auto__;
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.ydinbook);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/portfolio/ydinbook",action__9632__auto___9804);

clojure_cv.core.hook_browser_navigation_BANG_ = (function clojure_cv$core$hook_browser_navigation_BANG_(){
var G__9805 = (new goog.History());
var G__9806_9809 = G__9805;
var G__9807_9810 = goog.history.EventType.NAVIGATE;
var G__9808_9811 = ((function (G__9806_9809,G__9807_9810,G__9805){
return (function (event){
return secretary.core.dispatch_BANG_(event.token);
});})(G__9806_9809,G__9807_9810,G__9805))
;
goog.events.listen(G__9806_9809,G__9807_9810,G__9808_9811);

G__9805.setEnabled(true);

return G__9805;
});
clojure_cv.core.init = (function clojure_cv$core$init(){
var G__9812_9813 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clojure_DASH_cv$events_SLASH_initialize_DASH_db], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__9812_9813) : re_frame.core.dispatch_sync.call(null,G__9812_9813));

accountant.core.configure_navigation_BANG_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$nav_DASH_handler,(function (path){
return secretary.core.dispatch_BANG_(path);
}),cljs.core.cst$kw$path_DASH_exists_QMARK_,(function (path){
return secretary.core.locate_route(path);
})], null));

accountant.core.dispatch_current_BANG_();

clojure_cv.core.dev_setup();

return clojure_cv.core.mount_root();
});
goog.exportSymbol('clojure_cv.core.init', clojure_cv.core.init);
