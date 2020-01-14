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
var action__17560__auto___17710 = (function (params__17561__auto__){
if(cljs.core.map_QMARK_(params__17561__auto__)){
var map__17705 = params__17561__auto__;
var map__17705__$1 = ((((!((map__17705 == null)))?(((((map__17705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17705):map__17705);
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.core.main_page);
} else {
if(cljs.core.vector_QMARK_(params__17561__auto__)){
var vec__17707 = params__17561__auto__;
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.core.main_page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__17560__auto___17710);

var action__17560__auto___17716 = (function (params__17561__auto__){
if(cljs.core.map_QMARK_(params__17561__auto__)){
var map__17711 = params__17561__auto__;
var map__17711__$1 = ((((!((map__17711 == null)))?(((((map__17711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17711):map__17711);
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.ilmomasiina);
} else {
if(cljs.core.vector_QMARK_(params__17561__auto__)){
var vec__17713 = params__17561__auto__;
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.ilmomasiina);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/portfolio/ilmomasiina",action__17560__auto___17716);

var action__17560__auto___17722 = (function (params__17561__auto__){
if(cljs.core.map_QMARK_(params__17561__auto__)){
var map__17717 = params__17561__auto__;
var map__17717__$1 = ((((!((map__17717 == null)))?(((((map__17717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17717):map__17717);
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.kaspernurminen);
} else {
if(cljs.core.vector_QMARK_(params__17561__auto__)){
var vec__17719 = params__17561__auto__;
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.kaspernurminen);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/portfolio/kaspernurminen",action__17560__auto___17722);

var action__17560__auto___17728 = (function (params__17561__auto__){
if(cljs.core.map_QMARK_(params__17561__auto__)){
var map__17723 = params__17561__auto__;
var map__17723__$1 = ((((!((map__17723 == null)))?(((((map__17723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17723):map__17723);
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.oloscreen);
} else {
if(cljs.core.vector_QMARK_(params__17561__auto__)){
var vec__17725 = params__17561__auto__;
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.oloscreen);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/portfolio/oloscreen",action__17560__auto___17728);

var action__17560__auto___17734 = (function (params__17561__auto__){
if(cljs.core.map_QMARK_(params__17561__auto__)){
var map__17729 = params__17561__auto__;
var map__17729__$1 = ((((!((map__17729 == null)))?(((((map__17729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17729):map__17729);
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.infodisplay);
} else {
if(cljs.core.vector_QMARK_(params__17561__auto__)){
var vec__17731 = params__17561__auto__;
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.infodisplay);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/portfolio/infodisplay",action__17560__auto___17734);

clojure_cv.core.hook_browser_navigation_BANG_ = (function clojure_cv$core$hook_browser_navigation_BANG_(){
var G__17735 = (new goog.History());
var G__17736_17739 = G__17735;
var G__17737_17740 = goog.history.EventType.NAVIGATE;
var G__17738_17741 = ((function (G__17736_17739,G__17737_17740,G__17735){
return (function (event){
return secretary.core.dispatch_BANG_(event.token);
});})(G__17736_17739,G__17737_17740,G__17735))
;
goog.events.listen(G__17736_17739,G__17737_17740,G__17738_17741);

G__17735.setEnabled(true);

return G__17735;
});
clojure_cv.core.init = (function clojure_cv$core$init(){
var G__17742_17743 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clojure_DASH_cv$events_SLASH_initialize_DASH_db], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__17742_17743) : re_frame.core.dispatch_sync.call(null,G__17742_17743));

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
