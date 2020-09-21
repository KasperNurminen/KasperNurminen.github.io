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
var action__9622__auto___9752 = (function (params__9623__auto__){
if(cljs.core.map_QMARK_(params__9623__auto__)){
var map__9747 = params__9623__auto__;
var map__9747__$1 = ((((!((map__9747 == null)))?(((((map__9747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9747):map__9747);
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.core.main_page);
} else {
if(cljs.core.vector_QMARK_(params__9623__auto__)){
var vec__9749 = params__9623__auto__;
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.core.main_page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__9622__auto___9752);

var action__9622__auto___9758 = (function (params__9623__auto__){
if(cljs.core.map_QMARK_(params__9623__auto__)){
var map__9753 = params__9623__auto__;
var map__9753__$1 = ((((!((map__9753 == null)))?(((((map__9753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9753):map__9753);
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.ilmomasiina);
} else {
if(cljs.core.vector_QMARK_(params__9623__auto__)){
var vec__9755 = params__9623__auto__;
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.ilmomasiina);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/portfolio/ilmomasiina",action__9622__auto___9758);

var action__9622__auto___9764 = (function (params__9623__auto__){
if(cljs.core.map_QMARK_(params__9623__auto__)){
var map__9759 = params__9623__auto__;
var map__9759__$1 = ((((!((map__9759 == null)))?(((((map__9759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9759):map__9759);
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.kaspernurminen);
} else {
if(cljs.core.vector_QMARK_(params__9623__auto__)){
var vec__9761 = params__9623__auto__;
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.kaspernurminen);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/portfolio/kaspernurminen",action__9622__auto___9764);

var action__9622__auto___9770 = (function (params__9623__auto__){
if(cljs.core.map_QMARK_(params__9623__auto__)){
var map__9765 = params__9623__auto__;
var map__9765__$1 = ((((!((map__9765 == null)))?(((((map__9765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9765):map__9765);
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.oloscreen);
} else {
if(cljs.core.vector_QMARK_(params__9623__auto__)){
var vec__9767 = params__9623__auto__;
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.oloscreen);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/portfolio/oloscreen",action__9622__auto___9770);

var action__9622__auto___9776 = (function (params__9623__auto__){
if(cljs.core.map_QMARK_(params__9623__auto__)){
var map__9771 = params__9623__auto__;
var map__9771__$1 = ((((!((map__9771 == null)))?(((((map__9771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9771):map__9771);
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.infodisplay);
} else {
if(cljs.core.vector_QMARK_(params__9623__auto__)){
var vec__9773 = params__9623__auto__;
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.infodisplay);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/portfolio/infodisplay",action__9622__auto___9776);

var action__9622__auto___9782 = (function (params__9623__auto__){
if(cljs.core.map_QMARK_(params__9623__auto__)){
var map__9777 = params__9623__auto__;
var map__9777__$1 = ((((!((map__9777 == null)))?(((((map__9777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9777):map__9777);
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.asumistukilaskuri);
} else {
if(cljs.core.vector_QMARK_(params__9623__auto__)){
var vec__9779 = params__9623__auto__;
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.asumistukilaskuri);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/portfolio/asumistukilaskuri",action__9622__auto___9782);

var action__9622__auto___9788 = (function (params__9623__auto__){
if(cljs.core.map_QMARK_(params__9623__auto__)){
var map__9783 = params__9623__auto__;
var map__9783__$1 = ((((!((map__9783 == null)))?(((((map__9783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9783):map__9783);
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.gameservice);
} else {
if(cljs.core.vector_QMARK_(params__9623__auto__)){
var vec__9785 = params__9623__auto__;
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.gameservice);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/portfolio/gameservice",action__9622__auto___9788);

var action__9622__auto___9794 = (function (params__9623__auto__){
if(cljs.core.map_QMARK_(params__9623__auto__)){
var map__9789 = params__9623__auto__;
var map__9789__$1 = ((((!((map__9789 == null)))?(((((map__9789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9789):map__9789);
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.ydinbook);
} else {
if(cljs.core.vector_QMARK_(params__9623__auto__)){
var vec__9791 = params__9623__auto__;
return cljs.core.reset_BANG_(clojure_cv.core.selected_page,clojure_cv.views.portfolio.ydinbook);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/portfolio/ydinbook",action__9622__auto___9794);

clojure_cv.core.hook_browser_navigation_BANG_ = (function clojure_cv$core$hook_browser_navigation_BANG_(){
var G__9795 = (new goog.History());
var G__9796_9799 = G__9795;
var G__9797_9800 = goog.history.EventType.NAVIGATE;
var G__9798_9801 = ((function (G__9796_9799,G__9797_9800,G__9795){
return (function (event){
return secretary.core.dispatch_BANG_(event.token);
});})(G__9796_9799,G__9797_9800,G__9795))
;
goog.events.listen(G__9796_9799,G__9797_9800,G__9798_9801);

G__9795.setEnabled(true);

return G__9795;
});
clojure_cv.core.init = (function clojure_cv$core$init(){
var G__9802_9803 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clojure_DASH_cv$events_SLASH_initialize_DASH_db], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__9802_9803) : re_frame.core.dispatch_sync.call(null,G__9802_9803));

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
