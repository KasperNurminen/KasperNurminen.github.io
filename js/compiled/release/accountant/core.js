// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('accountant.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('goog.history.Event');
goog.require('goog.history.Html5History');
goog.require('goog.Uri');
accountant.core.transformer_create_url = (function accountant$core$transformer_create_url(token,path_prefix,location){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('');
});
accountant.core.transformer_retrieve_token = (function accountant$core$transformer_retrieve_token(path_prefix,location){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.pathname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.search),cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.hash)].join('');
});
if(typeof accountant.core.history !== 'undefined'){
} else {
accountant.core.history = (function (){var transformer = (new goog.history.Html5History.TokenTransformer());
transformer.retrieveToken = accountant.core.transformer_retrieve_token;

transformer.createUrl = accountant.core.transformer_create_url;

return (new goog.history.Html5History(window,transformer));
})();
}
accountant.core.dispatch_on_navigate = (function accountant$core$dispatch_on_navigate(history,nav_handler){
var G__11058 = history;
var G__11059 = goog.history.EventType.NAVIGATE;
var G__11060 = ((function (G__11058,G__11059){
return (function (e){
var token = e.token;
return (nav_handler.cljs$core$IFn$_invoke$arity$1 ? nav_handler.cljs$core$IFn$_invoke$arity$1(token) : nav_handler.call(null,token));
});})(G__11058,G__11059))
;
return goog.events.listen(G__11058,G__11059,G__11060);
});
/**
 * Given a DOM node, if it is an element node, return its href attribute.
 *   Otherwise, return nil.
 */
accountant.core.get_href_attribute = (function accountant$core$get_href_attribute(node){
if(cljs.core.truth_((function (){var and__3911__auto__ = node;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node.nodeType,Node.ELEMENT_NODE);
} else {
return and__3911__auto__;
}
})())){
return node.getAttribute("href");
} else {
return null;
}
});
/**
 * Given a DOM element that may or may not be a link, traverse up the DOM tree
 *   to see if any of its parents are links. If so, return the href content, if
 *   it does not have an explicit `data-trigger` attribute to signify a non-navigational
 *   link element.
 */
accountant.core.find_href_node = (function accountant$core$find_href_node(e){
while(true){
var href = accountant.core.get_href_attribute(e);
var attrs = e.attributes;
var navigation_link_QMARK_ = (function (){var and__3911__auto__ = href;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = attrs;
if(cljs.core.truth_(and__3911__auto____$1)){
return cljs.core.not((attrs["data-trigger"]));
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(navigation_link_QMARK_)){
return e;
} else {
var temp__4657__auto__ = e.parentNode;
if(cljs.core.truth_(temp__4657__auto__)){
var parent = temp__4657__auto__;
var G__11061 = parent;
e = G__11061;
continue;
} else {
return null;
}
}
break;
}
});
accountant.core.uri__GT_query = (function accountant$core$uri__GT_query(uri){
var query = uri.getQuery();
if(cljs.core.empty_QMARK_(query)){
return null;
} else {
return ["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join('');
}
});
accountant.core.uri__GT_fragment = (function accountant$core$uri__GT_fragment(uri){
var fragment = uri.getFragment();
if(cljs.core.empty_QMARK_(fragment)){
return null;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fragment)].join('');
}
});
/**
 * Create a click handler that blocks page reloads for known routes
 */
accountant.core.prevent_reload_on_known_path = (function accountant$core$prevent_reload_on_known_path(history,path_exists_QMARK_,reload_same_path_QMARK_){
var G__11062 = document;
var G__11063 = "click";
var G__11064 = ((function (G__11062,G__11063){
return (function (e){
var target = e.target;
var button = e.button;
var meta_key = e.metaKey;
var alt_key = e.altKey;
var ctrl_key = e.ctrlKey;
var shift_key = e.shiftKey;
var any_key = (function (){var or__3922__auto__ = meta_key;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = alt_key;
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = ctrl_key;
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return shift_key;
}
}
}
})();
var href_node = accountant.core.find_href_node(target);
var href = (cljs.core.truth_(href_node)?href_node.href:null);
var link_target = (cljs.core.truth_(href_node)?href_node.target:null);
var uri = goog.Uri.parse(href);
var path = uri.getPath();
var query = accountant.core.uri__GT_query(uri);
var fragment = accountant.core.uri__GT_fragment(uri);
var relative_href = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fragment)].join('');
var title = target.title;
var host = uri.getDomain();
var port = uri.getPort();
var current_host = window.location.hostname;
var current_port = window.location.port;
var loc = window.location;
var current_relative_href = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.pathname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.query),cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.hash)].join('');
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.not(any_key);
if(and__3911__auto__){
var and__3911__auto____$1 = (function (){var fexpr__11067 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["",null,"_self",null], null), null);
return (fexpr__11067.cljs$core$IFn$_invoke$arity$1 ? fexpr__11067.cljs$core$IFn$_invoke$arity$1(link_target) : fexpr__11067.call(null,link_target));
})();
if(cljs.core.truth_(and__3911__auto____$1)){
var and__3911__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(button,(0));
if(and__3911__auto____$2){
var and__3911__auto____$3 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(host,current_host);
if(and__3911__auto____$3){
var and__3911__auto____$4 = ((cljs.core.not(port)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(port)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_port)].join(''))));
if(and__3911__auto____$4){
return (path_exists_QMARK_.cljs$core$IFn$_invoke$arity$1 ? path_exists_QMARK_.cljs$core$IFn$_invoke$arity$1(path) : path_exists_QMARK_.call(null,path));
} else {
return and__3911__auto____$4;
}
} else {
return and__3911__auto____$3;
}
} else {
return and__3911__auto____$2;
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_relative_href,relative_href)){
history.setToken(relative_href,title);
} else {
}

e.preventDefault();

if(cljs.core.truth_(reload_same_path_QMARK_)){
var G__11068 = history;
var G__11069 = (new goog.history.Event(path,true));
return goog.events.dispatchEvent(G__11068,G__11069);
} else {
return null;
}
} else {
return null;
}
});})(G__11062,G__11063))
;
return goog.events.listen(G__11062,G__11063,G__11064);
});
if(typeof accountant.core.nav_handler !== 'undefined'){
} else {
accountant.core.nav_handler = null;
}
if(typeof accountant.core.path_exists_QMARK_ !== 'undefined'){
} else {
accountant.core.path_exists_QMARK_ = null;
}
/**
 * Create and configure HTML5 history navigation.
 * 
 *   nav-handler: a fn of one argument, a path. Called when we've decided
 *   to navigate to another page. You'll want to make your app draw the
 *   new page here.
 * 
 *   path-exists?: a fn of one argument, a path. Return truthy if this path is handled by the SPA
 */
accountant.core.configure_navigation_BANG_ = (function accountant$core$configure_navigation_BANG_(p__11070){
var map__11071 = p__11070;
var map__11071__$1 = ((((!((map__11071 == null)))?(((((map__11071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11071):map__11071);
var nav_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11071__$1,cljs.core.cst$kw$nav_DASH_handler);
var path_exists_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11071__$1,cljs.core.cst$kw$path_DASH_exists_QMARK_);
var reload_same_path_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11071__$1,cljs.core.cst$kw$reload_DASH_same_DASH_path_QMARK_);
accountant.core.history.setUseFragment(false);

accountant.core.history.setPathPrefix("");

accountant.core.history.setEnabled(true);

accountant.core.nav_handler = nav_handler;

accountant.core.path_exists_QMARK_ = path_exists_QMARK_;

accountant.core.dispatch_on_navigate(accountant.core.history,nav_handler);

return accountant.core.prevent_reload_on_known_path(accountant.core.history,path_exists_QMARK_,reload_same_path_QMARK_);
});
accountant.core.map__GT_params = (function accountant$core$map__GT_params(query){
var params = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__11073_SHARP_){
return cljs.core.name(p1__11073_SHARP_);
}),cljs.core.keys(query));
var values = cljs.core.vals(query);
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(params,values));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (params,values,pairs){
return (function (p1__11074_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("=",p1__11074_SHARP_);
});})(params,values,pairs))
,pairs));
});
/**
 * add a browser history entry. updates window/location
 */
accountant.core.navigate_BANG_ = (function accountant$core$navigate_BANG_(var_args){
var G__11076 = arguments.length;
switch (G__11076) {
case 1:
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (route){
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2(route,cljs.core.PersistentArrayMap.EMPTY);
});

accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (route,query){
if(cljs.core.truth_(accountant.core.nav_handler)){
var token = accountant.core.history.getToken();
var old_route = cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(token,"?"));
var query_string = accountant.core.map__GT_params(cljs.core.reduce_kv(((function (token,old_route){
return (function (valid,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(valid,k,v);
} else {
return valid;
}
});})(token,old_route))
,cljs.core.PersistentArrayMap.EMPTY,query));
var with_params = ((cljs.core.empty_QMARK_(query_string))?route:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(route),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_string)].join(''));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_route,route)){
return accountant.core.history.replaceToken(with_params);
} else {
return accountant.core.history.setToken(with_params);
}
} else {
return console.error("can't navigate! until configure-navigation! called");
}
});

accountant.core.navigate_BANG_.cljs$lang$maxFixedArity = 2;

accountant.core.dispatch_current_BANG_ = (function accountant$core$dispatch_current_BANG_(){

var path = window.location.pathname;
var query = window.location.search;
var hash = window.location.hash;
if(cljs.core.truth_(accountant.core.nav_handler)){
var G__11078 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join('');
return (accountant.core.nav_handler.cljs$core$IFn$_invoke$arity$1 ? accountant.core.nav_handler.cljs$core$IFn$_invoke$arity$1(G__11078) : accountant.core.nav_handler.call(null,G__11078));
} else {
return console.error("can't dispatch-current until configure-navigation! called");
}
});
