// Compiled by ClojureScript 1.10.238 {}
goog.provide('rewrite_clj.zip.utils');
goog.require('cljs.core');
goog.require('clojure.zip');
rewrite_clj.zip.utils.update_in_path = (function rewrite_clj$zip$utils$update_in_path(p__61264,k,f){
var vec__61265 = p__61264;
var node = cljs.core.nth.call(null,vec__61265,(0),null);
var path = cljs.core.nth.call(null,vec__61265,(1),null);
var loc = vec__61265;
var v = cljs.core.get.call(null,path,k);
if(cljs.core.seq.call(null,v)){
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.call(null,path,k,f.call(null,v),new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta.call(null,loc));
} else {
return loc;
}
});
/**
 * Remove right sibling of the current node (if there is one).
 */
rewrite_clj.zip.utils.remove_right = (function rewrite_clj$zip$utils$remove_right(loc){
return rewrite_clj.zip.utils.update_in_path.call(null,loc,new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.next);
});
/**
 * Remove left sibling of the current node (if there is one).
 */
rewrite_clj.zip.utils.remove_left = (function rewrite_clj$zip$utils$remove_left(loc){
return rewrite_clj.zip.utils.update_in_path.call(null,loc,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.pop);
});
rewrite_clj.zip.utils.remove_while = (function rewrite_clj$zip$utils$remove_while(zloc,p_QMARK_){

var zloc__$1 = zloc;
while(true){
var ploc = clojure.zip.prev.call(null,zloc__$1);
if(cljs.core.not.call(null,(function (){var and__3911__auto__ = ploc;
if(cljs.core.truth_(and__3911__auto__)){
return p_QMARK_.call(null,ploc);
} else {
return and__3911__auto__;
}
})())){
return zloc__$1;
} else {
var G__61268 = clojure.zip.remove.call(null,zloc__$1);
zloc__$1 = G__61268;
continue;
}
break;
}
});
/**
 * Remove elements to the right of the current zipper location as long as
 * the given predicate matches.
 */
rewrite_clj.zip.utils.remove_right_while = (function rewrite_clj$zip$utils$remove_right_while(zloc,p_QMARK_){
var zloc__$1 = zloc;
while(true){
var temp__4655__auto__ = clojure.zip.right.call(null,zloc__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var rloc = temp__4655__auto__;
if(cljs.core.truth_(p_QMARK_.call(null,rloc))){
var G__61269 = rewrite_clj.zip.utils.remove_right.call(null,zloc__$1);
zloc__$1 = G__61269;
continue;
} else {
return zloc__$1;
}
} else {
return zloc__$1;
}
break;
}
});
/**
 * Remove elements to the left of the current zipper location as long as
 * the given predicate matches.
 */
rewrite_clj.zip.utils.remove_left_while = (function rewrite_clj$zip$utils$remove_left_while(zloc,p_QMARK_){
var zloc__$1 = zloc;
while(true){
var temp__4655__auto__ = clojure.zip.left.call(null,zloc__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var lloc = temp__4655__auto__;
if(cljs.core.truth_(p_QMARK_.call(null,lloc))){
var G__61270 = rewrite_clj.zip.utils.remove_left.call(null,zloc__$1);
zloc__$1 = G__61270;
continue;
} else {
return zloc__$1;
}
} else {
return zloc__$1;
}
break;
}
});
/**
 * Remove current node and move left. If current node is at the leftmost
 * location, returns `nil`.
 */
rewrite_clj.zip.utils.remove_and_move_left = (function rewrite_clj$zip$utils$remove_and_move_left(p__61271){
var vec__61272 = p__61271;
var _ = cljs.core.nth.call(null,vec__61272,(0),null);
var map__61275 = cljs.core.nth.call(null,vec__61272,(1),null);
var map__61275__$1 = ((((!((map__61275 == null)))?(((((map__61275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61275):map__61275);
var path = map__61275__$1;
var l = cljs.core.get.call(null,map__61275__$1,new cljs.core.Keyword(null,"l","l",1395893423));
var loc = vec__61272;
if(cljs.core.seq.call(null,l)){
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,l),cljs.core.assoc.call(null,cljs.core.update_in.call(null,path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"l","l",1395893423)], null),cljs.core.pop),new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta.call(null,loc));
} else {
return null;
}
});
/**
 * Remove current node and move right. If current node is at the rightmost
 * location, returns `nil`.
 */
rewrite_clj.zip.utils.remove_and_move_right = (function rewrite_clj$zip$utils$remove_and_move_right(p__61277){
var vec__61278 = p__61277;
var _ = cljs.core.nth.call(null,vec__61278,(0),null);
var map__61281 = cljs.core.nth.call(null,vec__61278,(1),null);
var map__61281__$1 = ((((!((map__61281 == null)))?(((((map__61281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61281):map__61281);
var path = map__61281__$1;
var r = cljs.core.get.call(null,map__61281__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var loc = vec__61278;
if(cljs.core.seq.call(null,r)){
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,r),cljs.core.assoc.call(null,cljs.core.update_in.call(null,path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190)], null),cljs.core.next),new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta.call(null,loc));
} else {
return null;
}
});
rewrite_clj.zip.utils.remove_and_move_up = (function rewrite_clj$zip$utils$remove_and_move_up(loc){
var vec__61283 = loc;
var node = cljs.core.nth.call(null,vec__61283,(0),null);
var map__61286 = cljs.core.nth.call(null,vec__61283,(1),null);
var map__61286__$1 = ((((!((map__61286 == null)))?(((((map__61286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61286):map__61286);
var path = map__61286__$1;
var l = cljs.core.get.call(null,map__61286__$1,new cljs.core.Keyword(null,"l","l",1395893423));
var ppath = cljs.core.get.call(null,map__61286__$1,new cljs.core.Keyword(null,"ppath","ppath",-1758182784));
var pnodes = cljs.core.get.call(null,map__61286__$1,new cljs.core.Keyword(null,"pnodes","pnodes",1739080565));
var rs = cljs.core.get.call(null,map__61286__$1,new cljs.core.Keyword(null,"r","r",-471384190));
if((path == null)){
throw (new Error("Remove at top"));
} else {
if((cljs.core.count.call(null,l) > (0))){
return clojure.zip.up.call(null,cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,l),cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.pop.call(null,l),new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta.call(null,loc)));
} else {
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.make_node.call(null,loc,cljs.core.peek.call(null,pnodes),rs),(function (){var and__3911__auto__ = ppath;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.assoc.call(null,ppath,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true);
} else {
return and__3911__auto__;
}
})()], null),cljs.core.meta.call(null,loc));
}
}
});

//# sourceMappingURL=utils.js.map?rel=1600694571688
