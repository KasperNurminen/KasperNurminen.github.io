// Compiled by ClojureScript 1.10.238 {}
goog.provide('clojure_cv.core');
goog.require('cljs.core');
goog.require('cljsjs.material_ui');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('cljsjs.react_tooltip');
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
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
clojure_cv.core.selected_page = reagent.core.atom.call(null,clojure_cv.views.core.main_page);
clojure_cv.core.page = (function clojure_cv$core$page(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,clojure_cv.core.selected_page)], null);
});
clojure_cv.core.mount_root = (function clojure_cv$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.core.main_panel,clojure_cv.core.page], null),document.getElementById("app"));
});
var action__28574__auto___58544 = (function (params__28575__auto__){
if(cljs.core.map_QMARK_.call(null,params__28575__auto__)){
var map__58539 = params__28575__auto__;
var map__58539__$1 = ((((!((map__58539 == null)))?(((((map__58539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58539):map__58539);
return cljs.core.reset_BANG_.call(null,clojure_cv.core.selected_page,clojure_cv.views.core.main_page);
} else {
if(cljs.core.vector_QMARK_.call(null,params__28575__auto__)){
var vec__58541 = params__28575__auto__;
return cljs.core.reset_BANG_.call(null,clojure_cv.core.selected_page,clojure_cv.views.core.main_page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__28574__auto___58544);

var action__28574__auto___58550 = (function (params__28575__auto__){
if(cljs.core.map_QMARK_.call(null,params__28575__auto__)){
var map__58545 = params__28575__auto__;
var map__58545__$1 = ((((!((map__58545 == null)))?(((((map__58545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58545):map__58545);
return cljs.core.reset_BANG_.call(null,clojure_cv.core.selected_page,clojure_cv.views.portfolio.ilmomasiina);
} else {
if(cljs.core.vector_QMARK_.call(null,params__28575__auto__)){
var vec__58547 = params__28575__auto__;
return cljs.core.reset_BANG_.call(null,clojure_cv.core.selected_page,clojure_cv.views.portfolio.ilmomasiina);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/portfolio/ilmomasiina",action__28574__auto___58550);

var action__28574__auto___58556 = (function (params__28575__auto__){
if(cljs.core.map_QMARK_.call(null,params__28575__auto__)){
var map__58551 = params__28575__auto__;
var map__58551__$1 = ((((!((map__58551 == null)))?(((((map__58551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58551):map__58551);
return cljs.core.reset_BANG_.call(null,clojure_cv.core.selected_page,clojure_cv.views.portfolio.kaspernurminen);
} else {
if(cljs.core.vector_QMARK_.call(null,params__28575__auto__)){
var vec__58553 = params__28575__auto__;
return cljs.core.reset_BANG_.call(null,clojure_cv.core.selected_page,clojure_cv.views.portfolio.kaspernurminen);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/portfolio/kaspernurminen",action__28574__auto___58556);

var action__28574__auto___58562 = (function (params__28575__auto__){
if(cljs.core.map_QMARK_.call(null,params__28575__auto__)){
var map__58557 = params__28575__auto__;
var map__58557__$1 = ((((!((map__58557 == null)))?(((((map__58557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58557):map__58557);
return cljs.core.reset_BANG_.call(null,clojure_cv.core.selected_page,clojure_cv.views.portfolio.oloscreen);
} else {
if(cljs.core.vector_QMARK_.call(null,params__28575__auto__)){
var vec__58559 = params__28575__auto__;
return cljs.core.reset_BANG_.call(null,clojure_cv.core.selected_page,clojure_cv.views.portfolio.oloscreen);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/portfolio/oloscreen",action__28574__auto___58562);

var action__28574__auto___58568 = (function (params__28575__auto__){
if(cljs.core.map_QMARK_.call(null,params__28575__auto__)){
var map__58563 = params__28575__auto__;
var map__58563__$1 = ((((!((map__58563 == null)))?(((((map__58563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58563):map__58563);
return cljs.core.reset_BANG_.call(null,clojure_cv.core.selected_page,clojure_cv.views.portfolio.infodisplay);
} else {
if(cljs.core.vector_QMARK_.call(null,params__28575__auto__)){
var vec__58565 = params__28575__auto__;
return cljs.core.reset_BANG_.call(null,clojure_cv.core.selected_page,clojure_cv.views.portfolio.infodisplay);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/portfolio/infodisplay",action__28574__auto___58568);

var action__28574__auto___58574 = (function (params__28575__auto__){
if(cljs.core.map_QMARK_.call(null,params__28575__auto__)){
var map__58569 = params__28575__auto__;
var map__58569__$1 = ((((!((map__58569 == null)))?(((((map__58569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58569):map__58569);
return cljs.core.reset_BANG_.call(null,clojure_cv.core.selected_page,clojure_cv.views.portfolio.asumistukilaskuri);
} else {
if(cljs.core.vector_QMARK_.call(null,params__28575__auto__)){
var vec__58571 = params__28575__auto__;
return cljs.core.reset_BANG_.call(null,clojure_cv.core.selected_page,clojure_cv.views.portfolio.asumistukilaskuri);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/portfolio/asumistukilaskuri",action__28574__auto___58574);

var action__28574__auto___58580 = (function (params__28575__auto__){
if(cljs.core.map_QMARK_.call(null,params__28575__auto__)){
var map__58575 = params__28575__auto__;
var map__58575__$1 = ((((!((map__58575 == null)))?(((((map__58575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58575):map__58575);
return cljs.core.reset_BANG_.call(null,clojure_cv.core.selected_page,clojure_cv.views.portfolio.gameservice);
} else {
if(cljs.core.vector_QMARK_.call(null,params__28575__auto__)){
var vec__58577 = params__28575__auto__;
return cljs.core.reset_BANG_.call(null,clojure_cv.core.selected_page,clojure_cv.views.portfolio.gameservice);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/portfolio/gameservice",action__28574__auto___58580);

var action__28574__auto___58586 = (function (params__28575__auto__){
if(cljs.core.map_QMARK_.call(null,params__28575__auto__)){
var map__58581 = params__28575__auto__;
var map__58581__$1 = ((((!((map__58581 == null)))?(((((map__58581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58581):map__58581);
return cljs.core.reset_BANG_.call(null,clojure_cv.core.selected_page,clojure_cv.views.portfolio.ydinbook);
} else {
if(cljs.core.vector_QMARK_.call(null,params__28575__auto__)){
var vec__58583 = params__28575__auto__;
return cljs.core.reset_BANG_.call(null,clojure_cv.core.selected_page,clojure_cv.views.portfolio.ydinbook);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/portfolio/ydinbook",action__28574__auto___58586);

clojure_cv.core.hook_browser_navigation_BANG_ = (function clojure_cv$core$hook_browser_navigation_BANG_(){
var G__58587 = (new goog.History());
goog.events.listen(G__58587,goog.history.EventType.NAVIGATE,((function (G__58587){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__58587))
);

G__58587.setEnabled(true);

return G__58587;
});
clojure_cv.core.init = (function clojure_cv$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("clojure-cv.events","initialize-db","clojure-cv.events/initialize-db",1606821089)], null));

accountant.core.configure_navigation_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
return secretary.core.dispatch_BANG_.call(null,path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return secretary.core.locate_route.call(null,path);
})], null));

accountant.core.dispatch_current_BANG_.call(null);

clojure_cv.core.dev_setup.call(null);

return clojure_cv.core.mount_root.call(null);
});
goog.exportSymbol('clojure_cv.core.init', clojure_cv.core.init);

//# sourceMappingURL=core.js.map?rel=1600694563725
