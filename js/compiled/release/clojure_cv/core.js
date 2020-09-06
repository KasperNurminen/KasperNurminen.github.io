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
var action__9629__auto___9759 = (function (params__9630__auto__){
if(cljs.core.map_QMARK_(params__9630__auto__)){
var map__9754 = params__9630__auto__;
var map__9754__$1 = ((((!((map__9754 == null)))?(((((map__9754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9754):map__9754);
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.core.main_page);
} else {
if(cljs.core.vector_QMARK_(params__9630__auto__)){
var vec__9756 = params__9630__auto__;
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.core.main_page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__9629__auto___9759);

var action__9629__auto___9765 = (function (params__9630__auto__){
if(cljs.core.map_QMARK_(params__9630__auto__)){
var map__9760 = params__9630__auto__;
var map__9760__$1 = ((((!((map__9760 == null)))?(((((map__9760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9760):map__9760);
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.ilmomasiina);
} else {
if(cljs.core.vector_QMARK_(params__9630__auto__)){
var vec__9762 = params__9630__auto__;
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.ilmomasiina);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/portfolio/ilmomasiina",action__9629__auto___9765);

var action__9629__auto___9771 = (function (params__9630__auto__){
if(cljs.core.map_QMARK_(params__9630__auto__)){
var map__9766 = params__9630__auto__;
var map__9766__$1 = ((((!((map__9766 == null)))?(((((map__9766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9766):map__9766);
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.kaspernurminen);
} else {
if(cljs.core.vector_QMARK_(params__9630__auto__)){
var vec__9768 = params__9630__auto__;
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.kaspernurminen);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/portfolio/kaspernurminen",action__9629__auto___9771);

var action__9629__auto___9777 = (function (params__9630__auto__){
if(cljs.core.map_QMARK_(params__9630__auto__)){
var map__9772 = params__9630__auto__;
var map__9772__$1 = ((((!((map__9772 == null)))?(((((map__9772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9772):map__9772);
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.oloscreen);
} else {
if(cljs.core.vector_QMARK_(params__9630__auto__)){
var vec__9774 = params__9630__auto__;
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.oloscreen);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/portfolio/oloscreen",action__9629__auto___9777);

var action__9629__auto___9783 = (function (params__9630__auto__){
if(cljs.core.map_QMARK_(params__9630__auto__)){
var map__9778 = params__9630__auto__;
var map__9778__$1 = ((((!((map__9778 == null)))?(((((map__9778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9778):map__9778);
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.infodisplay);
} else {
if(cljs.core.vector_QMARK_(params__9630__auto__)){
var vec__9780 = params__9630__auto__;
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.infodisplay);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/portfolio/infodisplay",action__9629__auto___9783);

clojure_cv.core.hook_browser_navigation_BANG_ = (function clojure_cv$core$hook_browser_navigation_BANG_(){
var G__9784 = (new goog.History());
var G__9785_9788 = G__9784;
var G__9786_9789 = goog.history.EventType.NAVIGATE;
var G__9787_9790 = ((function (G__9785_9788,G__9786_9789,G__9784){
return (function (event){
return secretary.core.dispatch_BANG_(event.token);
});})(G__9785_9788,G__9786_9789,G__9784))
;
goog.events.listen(G__9785_9788,G__9786_9789,G__9787_9790);

G__9784.setEnabled(true);

return G__9784;
});
clojure_cv.core.init = (function clojure_cv$core$init(){
var G__9791_9792 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clojure_DASH_cv$events_SLASH_initialize_DASH_db], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__9791_9792) : re_frame.core.dispatch_sync.call(null,G__9791_9792));

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
