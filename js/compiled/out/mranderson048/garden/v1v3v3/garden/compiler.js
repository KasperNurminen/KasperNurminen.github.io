// Compiled by ClojureScript 1.10.238 {}
goog.provide('mranderson048.garden.v1v3v3.garden.compiler');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('mranderson048.garden.v1v3v3.garden.color');
goog.require('mranderson048.garden.v1v3v3.garden.compression');
goog.require('mranderson048.garden.v1v3v3.garden.selectors');
goog.require('mranderson048.garden.v1v3v3.garden.units');
goog.require('mranderson048.garden.v1v3v3.garden.util');
goog.require('mranderson048.garden.v1v3v3.garden.types');
/**
 * The current compiler flags.
 */
mranderson048.garden.v1v3v3.garden.compiler._STAR_flags_STAR_ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"pretty-print?","pretty-print?",1932217158),true,new cljs.core.Keyword(null,"preamble","preamble",1641040241),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"output-to","output-to",-965533968),null,new cljs.core.Keyword(null,"vendors","vendors",-153040496),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"auto-prefix","auto-prefix",1484803466),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"media-expressions","media-expressions",1920421643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nesting-behavior","nesting-behavior",-1555995755),new cljs.core.Keyword(null,"default","default",-1987822328)], null)], null);
/**
 * Retun a function to call when rendering a media expression.
 *   The returned function accepts two arguments: the media
 *   expression being evaluated and the current media expression context.
 *   Both arguments are maps. This is used to provide semantics for nested
 *   media queries.
 */
mranderson048.garden.v1v3v3.garden.compiler.media_expression_behavior = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"merge","merge",-1804319409),(function (expr,context){
return cljs.core.merge.call(null,context,expr);
}),new cljs.core.Keyword(null,"default","default",-1987822328),(function (expr,_){
return expr;
})], null);
/**
 * The current parent selector context.
 */
mranderson048.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_ = null;
/**
 * The current media query context.
 */
mranderson048.garden.v1v3v3.garden.compiler._STAR_media_query_context_STAR_ = null;
var ret__4533__auto___62436 = (function (){
mranderson048.garden.v1v3v3.garden.compiler.with_selector_context = (function mranderson048$garden$v1v3v3$garden$compiler$with_selector_context(var_args){
var args__4502__auto__ = [];
var len__4499__auto___62437 = arguments.length;
var i__4500__auto___62438 = (0);
while(true){
if((i__4500__auto___62438 < len__4499__auto___62437)){
args__4502__auto__.push((arguments[i__4500__auto___62438]));

var G__62439 = (i__4500__auto___62438 + (1));
i__4500__auto___62438 = G__62439;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.compiler.with_selector_context.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

mranderson048.garden.v1v3v3.garden.compiler.with_selector_context.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,selector_context,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("mranderson048.garden.v1v3v3.garden.compiler","*selector-context*","mranderson048.garden.v1v3v3.garden.compiler/*selector-context*",-1354038551,null),null,(1),null)),(new cljs.core.List(null,selector_context,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)))));
});

mranderson048.garden.v1v3v3.garden.compiler.with_selector_context.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.compiler.with_selector_context.cljs$lang$applyTo = (function (seq62432){
var G__62433 = cljs.core.first.call(null,seq62432);
var seq62432__$1 = cljs.core.next.call(null,seq62432);
var G__62434 = cljs.core.first.call(null,seq62432__$1);
var seq62432__$2 = cljs.core.next.call(null,seq62432__$1);
var G__62435 = cljs.core.first.call(null,seq62432__$2);
var seq62432__$3 = cljs.core.next.call(null,seq62432__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62433,G__62434,G__62435,seq62432__$3);
});

return null;
})()
;
mranderson048.garden.v1v3v3.garden.compiler.with_selector_context.cljs$lang$macro = true;

var ret__4533__auto___62444 = (function (){
mranderson048.garden.v1v3v3.garden.compiler.with_media_query_context = (function mranderson048$garden$v1v3v3$garden$compiler$with_media_query_context(var_args){
var args__4502__auto__ = [];
var len__4499__auto___62445 = arguments.length;
var i__4500__auto___62446 = (0);
while(true){
if((i__4500__auto___62446 < len__4499__auto___62445)){
args__4502__auto__.push((arguments[i__4500__auto___62446]));

var G__62447 = (i__4500__auto___62446 + (1));
i__4500__auto___62446 = G__62447;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.compiler.with_media_query_context.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

mranderson048.garden.v1v3v3.garden.compiler.with_media_query_context.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,selector_context,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("mranderson048.garden.v1v3v3.garden.compiler","*media-query-context*","mranderson048.garden.v1v3v3.garden.compiler/*media-query-context*",667685639,null),null,(1),null)),(new cljs.core.List(null,selector_context,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)))));
});

mranderson048.garden.v1v3v3.garden.compiler.with_media_query_context.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.compiler.with_media_query_context.cljs$lang$applyTo = (function (seq62440){
var G__62441 = cljs.core.first.call(null,seq62440);
var seq62440__$1 = cljs.core.next.call(null,seq62440);
var G__62442 = cljs.core.first.call(null,seq62440__$1);
var seq62440__$2 = cljs.core.next.call(null,seq62440__$1);
var G__62443 = cljs.core.first.call(null,seq62440__$2);
var seq62440__$3 = cljs.core.next.call(null,seq62440__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62441,G__62442,G__62443,seq62440__$3);
});

return null;
})()
;
mranderson048.garden.v1v3v3.garden.compiler.with_media_query_context.cljs$lang$macro = true;

/**
 * Return the current list of browser vendors specified in `*flags*`.
 */
mranderson048.garden.v1v3v3.garden.compiler.vendors = (function mranderson048$garden$v1v3v3$garden$compiler$vendors(){
return cljs.core.seq.call(null,new cljs.core.Keyword(null,"vendors","vendors",-153040496).cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.compiler._STAR_flags_STAR_));
});
/**
 * Return the current list of auto-prefixed properties specified in `*flags*`.
 */
mranderson048.garden.v1v3v3.garden.compiler.auto_prefixed_properties = (function mranderson048$garden$v1v3v3$garden$compiler$auto_prefixed_properties(){
return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.name,new cljs.core.Keyword(null,"auto-prefix","auto-prefix",1484803466).cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.compiler._STAR_flags_STAR_)));
});
mranderson048.garden.v1v3v3.garden.compiler.auto_prefix_QMARK_ = (function mranderson048$garden$v1v3v3$garden$compiler$auto_prefix_QMARK_(property){
return cljs.core.contains_QMARK_.call(null,mranderson048.garden.v1v3v3.garden.compiler.auto_prefixed_properties.call(null),property);
});
mranderson048.garden.v1v3v3.garden.compiler.top_level_expression_QMARK_ = (function mranderson048$garden$v1v3v3$garden$compiler$top_level_expression_QMARK_(x){
var or__3922__auto__ = mranderson048.garden.v1v3v3.garden.util.rule_QMARK_.call(null,x);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = mranderson048.garden.v1v3v3.garden.util.at_import_QMARK_.call(null,x);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = mranderson048.garden.v1v3v3.garden.util.at_media_QMARK_.call(null,x);
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return mranderson048.garden.v1v3v3.garden.util.at_keyframes_QMARK_.call(null,x);
}
}
}
});
/**
 * Return a vector of [(filter pred coll) (remove pred coll)].
 */
mranderson048.garden.v1v3v3.garden.compiler.divide_vec = (function mranderson048$garden$v1v3v3$garden$compiler$divide_vec(pred,coll){
return cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,pred,coll);
});

/**
 * @interface
 */
mranderson048.garden.v1v3v3.garden.compiler.IExpandable = function(){};

/**
 * Return a list containing the expanded form of `this`.
 */
mranderson048.garden.v1v3v3.garden.compiler.expand = (function mranderson048$garden$v1v3v3$garden$compiler$expand(this$){
if(((!((this$ == null))) && (!((this$.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 == null))))){
return this$.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (mranderson048.garden.v1v3v3.garden.compiler.expand[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$);
} else {
var m__4212__auto____$1 = (mranderson048.garden.v1v3v3.garden.compiler.expand["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IExpandable.expand",this$);
}
}
}
});

/**
 * Like flatten but only affects seqs.
 */
mranderson048.garden.v1v3v3.garden.compiler.expand_seqs = (function mranderson048$garden$v1v3v3$garden$compiler$expand_seqs(coll){
return cljs.core.mapcat.call(null,(function (x){
if(cljs.core.seq_QMARK_.call(null,x)){
return mranderson048.garden.v1v3v3.garden.compiler.expand_seqs.call(null,x);
} else {
return (new cljs.core.List(null,x,null,(1),null));
}
}),coll);
});
mranderson048.garden.v1v3v3.garden.compiler.expand_declaration_1 = (function mranderson048$garden$v1v3v3$garden$compiler$expand_declaration_1(declaration){
if(cljs.core.map_QMARK_.call(null,declaration)){
} else {
throw (new Error("Assert failed: (map? declaration)"));
}

var prefix = (function (p1__62448_SHARP_,p2__62449_SHARP_){
return mranderson048.garden.v1v3v3.garden.util.as_str.call(null,p1__62448_SHARP_,"-",p2__62449_SHARP_);
});
return cljs.core.reduce.call(null,((function (prefix){
return (function (m,p__62450){
var vec__62451 = p__62450;
var k = cljs.core.nth.call(null,vec__62451,(0),null);
var v = cljs.core.nth.call(null,vec__62451,(1),null);
if(cljs.core.truth_(mranderson048.garden.v1v3v3.garden.util.hash_map_QMARK_.call(null,v))){
return cljs.core.reduce.call(null,((function (vec__62451,k,v,prefix){
return (function (m1,p__62454){
var vec__62455 = p__62454;
var k1 = cljs.core.nth.call(null,vec__62455,(0),null);
var v1 = cljs.core.nth.call(null,vec__62455,(1),null);
return cljs.core.assoc.call(null,m1,prefix.call(null,k,k1),v1);
});})(vec__62451,k,v,prefix))
,m,mranderson048.garden.v1v3v3.garden.compiler.expand_declaration_1.call(null,v));
} else {
return cljs.core.assoc.call(null,m,mranderson048.garden.v1v3v3.garden.util.to_str.call(null,k),v);
}
});})(prefix))
,cljs.core.empty.call(null,declaration),declaration);
});
mranderson048.garden.v1v3v3.garden.compiler.expand_declaration = (function mranderson048$garden$v1v3v3$garden$compiler$expand_declaration(declaration){
if(cljs.core.empty_QMARK_.call(null,declaration)){
return declaration;
} else {
return cljs.core.with_meta.call(null,mranderson048.garden.v1v3v3.garden.compiler.expand_declaration_1.call(null,declaration),cljs.core.meta.call(null,declaration));
}
});
/**
 * Matches a single "&" or "&" follow by one or more
 *   non-whitespace characters.
 */
mranderson048.garden.v1v3v3.garden.compiler.parent_selector_re = /^&(?:\S+)?$/;
/**
 * Extract the selector portion of a parent selector reference.
 */
mranderson048.garden.v1v3v3.garden.compiler.extract_reference = (function mranderson048$garden$v1v3v3$garden$compiler$extract_reference(selector){
var temp__4657__auto__ = cljs.core.re_find.call(null,mranderson048.garden.v1v3v3.garden.compiler.parent_selector_re,mranderson048.garden.v1v3v3.garden.util.to_str.call(null,cljs.core.last.call(null,selector)));
if(cljs.core.truth_(temp__4657__auto__)){
var reference = temp__4657__auto__;
return cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,reference));
} else {
return null;
}
});
mranderson048.garden.v1v3v3.garden.compiler.expand_selector_reference = (function mranderson048$garden$v1v3v3$garden$compiler$expand_selector_reference(selector){
var temp__4655__auto__ = mranderson048.garden.v1v3v3.garden.compiler.extract_reference.call(null,selector);
if(cljs.core.truth_(temp__4655__auto__)){
var reference = temp__4655__auto__;
var parent = cljs.core.butlast.call(null,selector);
return cljs.core.concat.call(null,cljs.core.butlast.call(null,parent),(new cljs.core.List(null,mranderson048.garden.v1v3v3.garden.util.as_str.call(null,cljs.core.last.call(null,parent),reference),null,(1),null)));
} else {
return selector;
}
});
mranderson048.garden.v1v3v3.garden.compiler.expand_selector = (function mranderson048$garden$v1v3v3$garden$compiler$expand_selector(selector,parent){
var selector__$1 = cljs.core.map.call(null,mranderson048.garden.v1v3v3.garden.selectors.css_selector,selector);
var selector__$2 = ((cljs.core.seq.call(null,parent))?cljs.core.map.call(null,cljs.core.flatten,mranderson048.garden.v1v3v3.garden.util.cartesian_product.call(null,parent,selector__$1)):cljs.core.map.call(null,cljs.core.list,selector__$1));
return cljs.core.map.call(null,mranderson048.garden.v1v3v3.garden.compiler.expand_selector_reference,selector__$2);
});
mranderson048.garden.v1v3v3.garden.compiler.expand_rule = (function mranderson048$garden$v1v3v3$garden$compiler$expand_rule(rule){
var vec__62458 = cljs.core.split_with.call(null,mranderson048.garden.v1v3v3.garden.selectors.selector_QMARK_,rule);
var selector = cljs.core.nth.call(null,vec__62458,(0),null);
var children = cljs.core.nth.call(null,vec__62458,(1),null);
var selector__$1 = mranderson048.garden.v1v3v3.garden.compiler.expand_selector.call(null,selector,mranderson048.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_);
var children__$1 = mranderson048.garden.v1v3v3.garden.compiler.expand.call(null,children);
var vec__62461 = mranderson048.garden.v1v3v3.garden.compiler.divide_vec.call(null,mranderson048.garden.v1v3v3.garden.util.declaration_QMARK_,children__$1);
var declarations = cljs.core.nth.call(null,vec__62461,(0),null);
var xs = cljs.core.nth.call(null,vec__62461,(1),null);
var ys = (function (){var _STAR_selector_context_STAR_62464 = mranderson048.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_;
mranderson048.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_ = ((cljs.core.seq.call(null,selector__$1))?selector__$1:mranderson048.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_);

try{return cljs.core.doall.call(null,cljs.core.mapcat.call(null,mranderson048.garden.v1v3v3.garden.compiler.expand,xs));
}finally {mranderson048.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_ = _STAR_selector_context_STAR_62464;
}})();
return cljs.core.conj.call(null,ys,cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector__$1], null),cljs.core.mapcat.call(null,mranderson048.garden.v1v3v3.garden.compiler.expand,declarations)));
});
if(typeof mranderson048.garden.v1v3v3.garden.compiler.expand_at_rule !== 'undefined'){
} else {
mranderson048.garden.v1v3v3.garden.compiler.expand_at_rule = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"mranderson048.garden.v1v3v3.garden.compiler","expand-at-rule"),new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.core._add_method.call(null,mranderson048.garden.v1v3v3.garden.compiler.expand_at_rule,new cljs.core.Keyword(null,"default","default",-1987822328),(function (at_rule){
return (new cljs.core.List(null,at_rule,null,(1),null));
}));
cljs.core._add_method.call(null,mranderson048.garden.v1v3v3.garden.compiler.expand_at_rule,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),(function (p__62465){
var map__62466 = p__62465;
var map__62466__$1 = ((((!((map__62466 == null)))?(((((map__62466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62466):map__62466);
var value = cljs.core.get.call(null,map__62466__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__62468 = value;
var map__62468__$1 = ((((!((map__62468 == null)))?(((((map__62468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62468):map__62468);
var identifier = cljs.core.get.call(null,map__62468__$1,new cljs.core.Keyword(null,"identifier","identifier",-805503498));
var frames = cljs.core.get.call(null,map__62468__$1,new cljs.core.Keyword(null,"frames","frames",1765687497));
return (new cljs.core.List(null,(new mranderson048.garden.v1v3v3.garden.types.CSSAtRule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),mranderson048.garden.v1v3v3.garden.util.to_str.call(null,identifier),new cljs.core.Keyword(null,"frames","frames",1765687497),cljs.core.mapcat.call(null,mranderson048.garden.v1v3v3.garden.compiler.expand,frames)], null),null,null,null)),null,(1),null));
}));
mranderson048.garden.v1v3v3.garden.compiler.expand_media_query_expression = (function mranderson048$garden$v1v3v3$garden$compiler$expand_media_query_expression(expression){
var temp__4655__auto__ = mranderson048.garden.v1v3v3.garden.compiler.media_expression_behavior.call(null,cljs.core.get_in.call(null,mranderson048.garden.v1v3v3.garden.compiler._STAR_flags_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"media-expressions","media-expressions",1920421643),new cljs.core.Keyword(null,"nesting-behavior","nesting-behavior",-1555995755)], null)));
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,expression,mranderson048.garden.v1v3v3.garden.compiler._STAR_media_query_context_STAR_);
} else {
return expression;
}
});
cljs.core._add_method.call(null,mranderson048.garden.v1v3v3.garden.compiler.expand_at_rule,new cljs.core.Keyword(null,"media","media",-1066138403),(function (p__62470){
var map__62471 = p__62470;
var map__62471__$1 = ((((!((map__62471 == null)))?(((((map__62471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62471):map__62471);
var value = cljs.core.get.call(null,map__62471__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__62473 = value;
var map__62473__$1 = ((((!((map__62473 == null)))?(((((map__62473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62473):map__62473);
var media_queries = cljs.core.get.call(null,map__62473__$1,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678));
var rules = cljs.core.get.call(null,map__62473__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
var media_queries__$1 = mranderson048.garden.v1v3v3.garden.compiler.expand_media_query_expression.call(null,media_queries);
var xs = (function (){var _STAR_media_query_context_STAR_62478 = mranderson048.garden.v1v3v3.garden.compiler._STAR_media_query_context_STAR_;
mranderson048.garden.v1v3v3.garden.compiler._STAR_media_query_context_STAR_ = media_queries__$1;

try{return cljs.core.doall.call(null,cljs.core.mapcat.call(null,mranderson048.garden.v1v3v3.garden.compiler.expand,mranderson048.garden.v1v3v3.garden.compiler.expand.call(null,rules)));
}finally {mranderson048.garden.v1v3v3.garden.compiler._STAR_media_query_context_STAR_ = _STAR_media_query_context_STAR_62478;
}})();
var vec__62474 = mranderson048.garden.v1v3v3.garden.compiler.divide_vec.call(null,mranderson048.garden.v1v3v3.garden.util.at_media_QMARK_,xs);
var subqueries = cljs.core.nth.call(null,vec__62474,(0),null);
var rules__$1 = cljs.core.nth.call(null,vec__62474,(1),null);
return cljs.core.cons.call(null,(new mranderson048.garden.v1v3v3.garden.types.CSSAtRule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries__$1,new cljs.core.Keyword(null,"rules","rules",1198912366),rules__$1], null),null,null,null)),subqueries);
}));
mranderson048.garden.v1v3v3.garden.compiler.expand_stylesheet = (function mranderson048$garden$v1v3v3$garden$compiler$expand_stylesheet(xs){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,mranderson048.garden.v1v3v3.garden.compiler.expand,mranderson048.garden.v1v3v3.garden.compiler.expand.call(null,xs)));
});
goog.object.set(mranderson048.garden.v1v3v3.garden.compiler.IExpandable,"null",true);

goog.object.set(mranderson048.garden.v1v3v3.garden.compiler.expand,"null",(function (this$){
return null;
}));

cljs.core.IndexedSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IndexedSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.LazySeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.NodeSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.NodeSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.BlackNode.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.BlackNode.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.expand_rule.call(null,this$__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMapSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.ChunkedSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.Cons.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.RSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.RSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.expand_seqs.call(null,this$__$1);
});

mranderson048.garden.v1v3v3.garden.types.CSSFunction.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

mranderson048.garden.v1v3v3.garden.types.CSSFunction.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,this$__$1,null,(1),null));
});

cljs.core.PersistentHashMap.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,mranderson048.garden.v1v3v3.garden.compiler.expand_declaration.call(null,this$__$1),null,(1),null));
});

cljs.core.ArrayNodeSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ArrayNodeSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.Subvec.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Subvec.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.expand_rule.call(null,this$__$1);
});

goog.object.set(mranderson048.garden.v1v3v3.garden.compiler.IExpandable,"_",true);

goog.object.set(mranderson048.garden.v1v3v3.garden.compiler.expand,"_",(function (this$){
return (new cljs.core.List(null,this$,null,(1),null));
}));

cljs.core.PersistentTreeMap.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeMap.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,mranderson048.garden.v1v3v3.garden.compiler.expand_declaration.call(null,this$__$1),null,(1),null));
});

cljs.core.ChunkedCons.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedCons.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.expand_seqs.call(null,this$__$1);
});

mranderson048.garden.v1v3v3.garden.types.CSSAtRule.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

mranderson048.garden.v1v3v3.garden.types.CSSAtRule.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.expand_at_rule.call(null,this$__$1);
});

cljs.core.RedNode.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.RedNode.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.expand_rule.call(null,this$__$1);
});

cljs.core.PersistentVector.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.expand_rule.call(null,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,mranderson048.garden.v1v3v3.garden.compiler.expand_declaration.call(null,this$__$1),null,(1),null));
});

mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,this$__$1,null,(1),null));
});

cljs.core.List.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.mranderson048$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.expand_seqs.call(null,this$__$1);
});

/**
 * @interface
 */
mranderson048.garden.v1v3v3.garden.compiler.CSSRenderer = function(){};

/**
 * Convert a Clojure data type in to a string of CSS.
 */
mranderson048.garden.v1v3v3.garden.compiler.render_css = (function mranderson048$garden$v1v3v3$garden$compiler$render_css(this$){
if(((!((this$ == null))) && (!((this$.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 == null))))){
return this$.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (mranderson048.garden.v1v3v3.garden.compiler.render_css[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$);
} else {
var m__4212__auto____$1 = (mranderson048.garden.v1v3v3.garden.compiler.render_css["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"CSSRenderer.render-css",this$);
}
}
}
});

mranderson048.garden.v1v3v3.garden.compiler.comma = ", ";
mranderson048.garden.v1v3v3.garden.compiler.colon = ": ";
mranderson048.garden.v1v3v3.garden.compiler.semicolon = ";";
mranderson048.garden.v1v3v3.garden.compiler.l_brace = " {\n";
mranderson048.garden.v1v3v3.garden.compiler.r_brace = "\n}";
mranderson048.garden.v1v3v3.garden.compiler.l_brace_1 = " {\n\n";
mranderson048.garden.v1v3v3.garden.compiler.r_brace_1 = "\n\n}";
mranderson048.garden.v1v3v3.garden.compiler.rule_sep = "\n\n";
mranderson048.garden.v1v3v3.garden.compiler.indent = "  ";
/**
 * Return a space separated list of values.
 */
mranderson048.garden.v1v3v3.garden.compiler.space_separated_list = (function mranderson048$garden$v1v3v3$garden$compiler$space_separated_list(var_args){
var G__62480 = arguments.length;
switch (G__62480) {
case 1:
return mranderson048.garden.v1v3v3.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson048.garden.v1v3v3.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.garden.v1v3v3.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return mranderson048.garden.v1v3v3.garden.compiler.space_separated_list.call(null,mranderson048.garden.v1v3v3.garden.compiler.render_css,xs);
});

mranderson048.garden.v1v3v3.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return clojure.string.join.call(null," ",cljs.core.map.call(null,f,xs));
});

mranderson048.garden.v1v3v3.garden.compiler.space_separated_list.cljs$lang$maxFixedArity = 2;

/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
mranderson048.garden.v1v3v3.garden.compiler.comma_separated_list = (function mranderson048$garden$v1v3v3$garden$compiler$comma_separated_list(var_args){
var G__62483 = arguments.length;
switch (G__62483) {
case 1:
return mranderson048.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson048.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return mranderson048.garden.v1v3v3.garden.compiler.comma_separated_list.call(null,mranderson048.garden.v1v3v3.garden.compiler.render_css,xs);
});

mranderson048.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
var ys = (function (){var iter__4292__auto__ = (function mranderson048$garden$v1v3v3$garden$compiler$iter__62484(s__62485){
return (new cljs.core.LazySeq(null,(function (){
var s__62485__$1 = s__62485;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__62485__$1);
if(temp__4657__auto__){
var s__62485__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__62485__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__62485__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__62487 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__62486 = (0);
while(true){
if((i__62486 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__62486);
cljs.core.chunk_append.call(null,b__62487,((cljs.core.sequential_QMARK_.call(null,x))?mranderson048.garden.v1v3v3.garden.compiler.space_separated_list.call(null,f,x):f.call(null,x)));

var G__62489 = (i__62486 + (1));
i__62486 = G__62489;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62487),mranderson048$garden$v1v3v3$garden$compiler$iter__62484.call(null,cljs.core.chunk_rest.call(null,s__62485__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62487),null);
}
} else {
var x = cljs.core.first.call(null,s__62485__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?mranderson048.garden.v1v3v3.garden.compiler.space_separated_list.call(null,f,x):f.call(null,x)),mranderson048$garden$v1v3v3$garden$compiler$iter__62484.call(null,cljs.core.rest.call(null,s__62485__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,xs);
})();
return clojure.string.join.call(null,mranderson048.garden.v1v3v3.garden.compiler.comma,ys);
});

mranderson048.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$lang$maxFixedArity = 2;

mranderson048.garden.v1v3v3.garden.compiler.rule_join = (function mranderson048$garden$v1v3v3$garden$compiler$rule_join(xs){
return clojure.string.join.call(null,mranderson048.garden.v1v3v3.garden.compiler.rule_sep,xs);
});
/**
 * Match the start of a line if the characters immediately
 *   after it are spaces or used in a CSS id (#), class (.), or tag name.
 */
mranderson048.garden.v1v3v3.garden.compiler.indent_loc_re = (new RegExp("(?=[ A-Za-z#.}-]+)^","gm"));
mranderson048.garden.v1v3v3.garden.compiler.indent_str = (function mranderson048$garden$v1v3v3$garden$compiler$indent_str(s){
return s.replace(mranderson048.garden.v1v3v3.garden.compiler.indent_loc_re,mranderson048.garden.v1v3v3.garden.compiler.indent);
});
/**
 * Render the value portion of a declaration.
 */
mranderson048.garden.v1v3v3.garden.compiler.render_value = (function mranderson048$garden$v1v3v3$garden$compiler$render_value(x){
if(cljs.core.truth_(mranderson048.garden.v1v3v3.garden.util.at_keyframes_QMARK_.call(null,x))){
return mranderson048.garden.v1v3v3.garden.util.to_str.call(null,cljs.core.get_in.call(null,x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"identifier","identifier",-805503498)], null)));
} else {
return mranderson048.garden.v1v3v3.garden.compiler.render_css.call(null,x);
}
});
mranderson048.garden.v1v3v3.garden.compiler.render_property_and_value = (function mranderson048$garden$v1v3v3$garden$compiler$render_property_and_value(p__62490){
var vec__62491 = p__62490;
var prop = cljs.core.nth.call(null,vec__62491,(0),null);
var val = cljs.core.nth.call(null,vec__62491,(1),null);
if(cljs.core.set_QMARK_.call(null,val)){
return clojure.string.join.call(null,"\n",cljs.core.map.call(null,mranderson048.garden.v1v3v3.garden.compiler.render_property_and_value,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,cljs.core.repeat.call(null,prop),val))));
} else {
var val__$1 = ((cljs.core.sequential_QMARK_.call(null,val))?mranderson048.garden.v1v3v3.garden.compiler.comma_separated_list.call(null,mranderson048.garden.v1v3v3.garden.compiler.render_value,val):mranderson048.garden.v1v3v3.garden.compiler.render_value.call(null,val));
return mranderson048.garden.v1v3v3.garden.util.as_str.call(null,prop,mranderson048.garden.v1v3v3.garden.compiler.colon,val__$1,mranderson048.garden.v1v3v3.garden.compiler.semicolon);
}
});
/**
 * For each block in `declaration`, add sequence of blocks
 * returned from calling `f` on the block.
 */
mranderson048.garden.v1v3v3.garden.compiler.add_blocks = (function mranderson048$garden$v1v3v3$garden$compiler$add_blocks(f,declaration){
return cljs.core.mapcat.call(null,(function (p1__62494_SHARP_){
return cljs.core.cons.call(null,p1__62494_SHARP_,f.call(null,p1__62494_SHARP_));
}),declaration);
});
/**
 * Sequence of blocks with their properties prefixed by
 * each vendor in `vendors`.
 */
mranderson048.garden.v1v3v3.garden.compiler.prefixed_blocks = (function mranderson048$garden$v1v3v3$garden$compiler$prefixed_blocks(vendors,p__62495){
var vec__62496 = p__62495;
var p = cljs.core.nth.call(null,vec__62496,(0),null);
var v = cljs.core.nth.call(null,vec__62496,(1),null);
var iter__4292__auto__ = ((function (vec__62496,p,v){
return (function mranderson048$garden$v1v3v3$garden$compiler$prefixed_blocks_$_iter__62499(s__62500){
return (new cljs.core.LazySeq(null,((function (vec__62496,p,v){
return (function (){
var s__62500__$1 = s__62500;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__62500__$1);
if(temp__4657__auto__){
var s__62500__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__62500__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__62500__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__62502 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__62501 = (0);
while(true){
if((i__62501 < size__4291__auto__)){
var vendor = cljs.core._nth.call(null,c__4290__auto__,i__62501);
cljs.core.chunk_append.call(null,b__62502,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.garden.v1v3v3.garden.util.vendor_prefix.call(null,vendor,cljs.core.name.call(null,p)),v], null));

var G__62503 = (i__62501 + (1));
i__62501 = G__62503;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62502),mranderson048$garden$v1v3v3$garden$compiler$prefixed_blocks_$_iter__62499.call(null,cljs.core.chunk_rest.call(null,s__62500__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62502),null);
}
} else {
var vendor = cljs.core.first.call(null,s__62500__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.garden.v1v3v3.garden.util.vendor_prefix.call(null,vendor,cljs.core.name.call(null,p)),v], null),mranderson048$garden$v1v3v3$garden$compiler$prefixed_blocks_$_iter__62499.call(null,cljs.core.rest.call(null,s__62500__$2)));
}
} else {
return null;
}
break;
}
});})(vec__62496,p,v))
,null,null));
});})(vec__62496,p,v))
;
return iter__4292__auto__.call(null,vendors);
});
/**
 * Add prefixes to all blocks in `declaration` using
 * vendor prefixes in `vendors`.
 */
mranderson048.garden.v1v3v3.garden.compiler.prefix_all_properties = (function mranderson048$garden$v1v3v3$garden$compiler$prefix_all_properties(vendors,declaration){
return mranderson048.garden.v1v3v3.garden.compiler.add_blocks.call(null,cljs.core.partial.call(null,mranderson048.garden.v1v3v3.garden.compiler.prefixed_blocks,vendors),declaration);
});
/**
 * Add prefixes to all blocks in `declaration` when property
 * is in the `:auto-prefix` set.
 */
mranderson048.garden.v1v3v3.garden.compiler.prefix_auto_properties = (function mranderson048$garden$v1v3v3$garden$compiler$prefix_auto_properties(vendors,declaration){
return mranderson048.garden.v1v3v3.garden.compiler.add_blocks.call(null,(function (block){
var vec__62504 = block;
var p = cljs.core.nth.call(null,vec__62504,(0),null);
var _ = cljs.core.nth.call(null,vec__62504,(1),null);
if(cljs.core.truth_(mranderson048.garden.v1v3v3.garden.compiler.auto_prefix_QMARK_.call(null,cljs.core.name.call(null,p)))){
return mranderson048.garden.v1v3v3.garden.compiler.prefixed_blocks.call(null,vendors,block);
} else {
return null;
}
}),declaration);
});
/**
 * Prefix properties within a `declaration` if `{:prefix true}` is
 * set in its meta, or if a property is in the `:auto-prefix` set.
 */
mranderson048.garden.v1v3v3.garden.compiler.prefix_declaration = (function mranderson048$garden$v1v3v3$garden$compiler$prefix_declaration(declaration){
var vendors = (function (){var or__3922__auto__ = new cljs.core.Keyword(null,"vendors","vendors",-153040496).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,declaration));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return mranderson048.garden.v1v3v3.garden.compiler.vendors.call(null);
}
})();
var prefix_fn = (cljs.core.truth_(new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,declaration)))?mranderson048.garden.v1v3v3.garden.compiler.prefix_all_properties:mranderson048.garden.v1v3v3.garden.compiler.prefix_auto_properties);
return prefix_fn.call(null,vendors,declaration);
});
mranderson048.garden.v1v3v3.garden.compiler.render_declaration = (function mranderson048$garden$v1v3v3$garden$compiler$render_declaration(declaration){
return clojure.string.join.call(null,"\n",cljs.core.map.call(null,mranderson048.garden.v1v3v3.garden.compiler.render_property_and_value,mranderson048.garden.v1v3v3.garden.compiler.prefix_declaration.call(null,declaration)));
});
mranderson048.garden.v1v3v3.garden.compiler.render_selector = (function mranderson048$garden$v1v3v3$garden$compiler$render_selector(selector){
return mranderson048.garden.v1v3v3.garden.compiler.comma_separated_list.call(null,selector);
});
/**
 * Convert a vector to a CSS rule string. The vector is expected to be
 *   fully expanded.
 */
mranderson048.garden.v1v3v3.garden.compiler.render_rule = (function mranderson048$garden$v1v3v3$garden$compiler$render_rule(p__62507){
var vec__62508 = p__62507;
var selector = cljs.core.nth.call(null,vec__62508,(0),null);
var declarations = cljs.core.nth.call(null,vec__62508,(1),null);
var rule = vec__62508;
if(((cljs.core.seq.call(null,rule)) && (cljs.core.every_QMARK_.call(null,cljs.core.seq,rule)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.compiler.render_selector.call(null,selector)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.compiler.l_brace),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.compiler.indent_str.call(null,clojure.string.join.call(null,"\n",cljs.core.map.call(null,mranderson048.garden.v1v3v3.garden.compiler.render_css,declarations)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.compiler.r_brace)].join('');
} else {
return null;
}
});
/**
 * Render the individual components of a media expression.
 */
mranderson048.garden.v1v3v3.garden.compiler.render_media_expr_part = (function mranderson048$garden$v1v3v3$garden$compiler$render_media_expr_part(p__62511){
var vec__62512 = p__62511;
var k = cljs.core.nth.call(null,vec__62512,(0),null);
var v = cljs.core.nth.call(null,vec__62512,(1),null);
var vec__62515 = cljs.core.map.call(null,mranderson048.garden.v1v3v3.garden.compiler.render_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
var sk = cljs.core.nth.call(null,vec__62515,(0),null);
var sv = cljs.core.nth.call(null,vec__62515,(1),null);
if(v === true){
return sk;
} else {
if(v === false){
return ["not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk)].join('');
} else {
if(cljs.core._EQ_.call(null,"only",sv)){
return ["only ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk)].join('');
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.seq.call(null,sv);
} else {
return and__3911__auto__;
}
})())){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.compiler.colon),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sv),")"].join('');
} else {
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk),")"].join('');
}

}
}
}
});
/**
 * Make a media query expession from one or more maps. Keys are not
 *   validated but values have the following semantics:
 * 
 *  `true`  as in `{:screen true}`  == "screen"
 *  `false` as in `{:screen false}` == "not screen"
 *  `:only` as in `{:screen :only}  == "only screen"
 */
mranderson048.garden.v1v3v3.garden.compiler.render_media_expr = (function mranderson048$garden$v1v3v3$garden$compiler$render_media_expr(expr){
if(cljs.core.sequential_QMARK_.call(null,expr)){
return mranderson048.garden.v1v3v3.garden.compiler.comma_separated_list.call(null,cljs.core.map.call(null,mranderson048.garden.v1v3v3.garden.compiler.render_media_expr,expr));
} else {
return clojure.string.join.call(null," and ",cljs.core.map.call(null,mranderson048.garden.v1v3v3.garden.compiler.render_media_expr_part,expr));
}
});
/**
 * Render a CSSUnit.
 */
mranderson048.garden.v1v3v3.garden.compiler.render_unit = (function mranderson048$garden$v1v3v3$garden$compiler$render_unit(css_unit){
var map__62518 = css_unit;
var map__62518__$1 = ((((!((map__62518 == null)))?(((((map__62518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62518):map__62518);
var magnitude = cljs.core.get.call(null,map__62518__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var unit = cljs.core.get.call(null,map__62518__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var magnitude__$1 = magnitude;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(magnitude__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,unit))].join('');
});
/**
 * Render a CSS function.
 */
mranderson048.garden.v1v3v3.garden.compiler.render_function = (function mranderson048$garden$v1v3v3$garden$compiler$render_function(css_function){
var map__62520 = css_function;
var map__62520__$1 = ((((!((map__62520 == null)))?(((((map__62520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62520):map__62520);
var function$ = cljs.core.get.call(null,map__62520__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var args = cljs.core.get.call(null,map__62520__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var args__$1 = ((cljs.core.sequential_QMARK_.call(null,args))?mranderson048.garden.v1v3v3.garden.compiler.comma_separated_list.call(null,args):mranderson048.garden.v1v3v3.garden.util.to_str.call(null,args));
return mranderson048.garden.v1v3v3.garden.util.format.call(null,"%s(%s)",mranderson048.garden.v1v3v3.garden.util.to_str.call(null,function$),args__$1);
});
mranderson048.garden.v1v3v3.garden.compiler.render_color = (function mranderson048$garden$v1v3v3$garden$compiler$render_color(c){
var temp__4655__auto__ = new cljs.core.Keyword(null,"alpha","alpha",-1574982441).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(temp__4655__auto__)){
var a = temp__4655__auto__;
var map__62522 = mranderson048.garden.v1v3v3.garden.color.as_hsl.call(null,c);
var map__62522__$1 = ((((!((map__62522 == null)))?(((((map__62522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62522):map__62522);
var hue = cljs.core.get.call(null,map__62522__$1,new cljs.core.Keyword(null,"hue","hue",-508078848));
var saturation = cljs.core.get.call(null,map__62522__$1,new cljs.core.Keyword(null,"saturation","saturation",-14247929));
var lightness = cljs.core.get.call(null,map__62522__$1,new cljs.core.Keyword(null,"lightness","lightness",-2040901930));
var vec__62523 = cljs.core.map.call(null,mranderson048.garden.v1v3v3.garden.units.percent,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [saturation,lightness], null));
var s = cljs.core.nth.call(null,vec__62523,(0),null);
var l = cljs.core.nth.call(null,vec__62523,(1),null);
return mranderson048.garden.v1v3v3.garden.util.format.call(null,"hsla(%s)",mranderson048.garden.v1v3v3.garden.compiler.comma_separated_list.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [hue,s,l,a], null)));
} else {
return mranderson048.garden.v1v3v3.garden.color.as_hex.call(null,c);
}
});
if(typeof mranderson048.garden.v1v3v3.garden.compiler.render_at_rule !== 'undefined'){
} else {
/**
 * Render a CSS at-rule
 */
mranderson048.garden.v1v3v3.garden.compiler.render_at_rule = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"mranderson048.garden.v1v3v3.garden.compiler","render-at-rule"),new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.core._add_method.call(null,mranderson048.garden.v1v3v3.garden.compiler.render_at_rule,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return null;
}));
cljs.core._add_method.call(null,mranderson048.garden.v1v3v3.garden.compiler.render_at_rule,new cljs.core.Keyword(null,"import","import",-1399500709),(function (p__62527){
var map__62528 = p__62527;
var map__62528__$1 = ((((!((map__62528 == null)))?(((((map__62528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62528):map__62528);
var value = cljs.core.get.call(null,map__62528__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__62530 = value;
var map__62530__$1 = ((((!((map__62530 == null)))?(((((map__62530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62530):map__62530);
var url = cljs.core.get.call(null,map__62530__$1,new cljs.core.Keyword(null,"url","url",276297046));
var media_queries = cljs.core.get.call(null,map__62530__$1,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678));
var url__$1 = ((typeof url === 'string')?mranderson048.garden.v1v3v3.garden.util.wrap_quotes.call(null,url):mranderson048.garden.v1v3v3.garden.compiler.render_css.call(null,url));
var queries = (cljs.core.truth_(media_queries)?mranderson048.garden.v1v3v3.garden.compiler.render_media_expr.call(null,media_queries):null);
return ["@import ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(queries)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(url__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(queries)].join(''):url__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.compiler.semicolon)].join('');
}));
cljs.core._add_method.call(null,mranderson048.garden.v1v3v3.garden.compiler.render_at_rule,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),(function (p__62533){
var map__62534 = p__62533;
var map__62534__$1 = ((((!((map__62534 == null)))?(((((map__62534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62534):map__62534);
var value = cljs.core.get.call(null,map__62534__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__62536 = value;
var map__62536__$1 = ((((!((map__62536 == null)))?(((((map__62536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62536):map__62536);
var identifier = cljs.core.get.call(null,map__62536__$1,new cljs.core.Keyword(null,"identifier","identifier",-805503498));
var frames = cljs.core.get.call(null,map__62536__$1,new cljs.core.Keyword(null,"frames","frames",1765687497));
if(cljs.core.seq.call(null,frames)){
var body = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.util.to_str.call(null,identifier)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.compiler.l_brace_1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.compiler.indent_str.call(null,mranderson048.garden.v1v3v3.garden.compiler.rule_join.call(null,cljs.core.map.call(null,mranderson048.garden.v1v3v3.garden.compiler.render_css,frames)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.compiler.r_brace_1)].join('');
var prefix = ((function (body,map__62536,map__62536__$1,identifier,frames,map__62534,map__62534__$1,value){
return (function (vendor){
return ["@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.util.vendor_prefix.call(null,vendor,"keyframes "))].join('');
});})(body,map__62536,map__62536__$1,identifier,frames,map__62534,map__62534__$1,value))
;
return mranderson048.garden.v1v3v3.garden.compiler.rule_join.call(null,cljs.core.map.call(null,((function (body,prefix,map__62536,map__62536__$1,identifier,frames,map__62534,map__62534__$1,value){
return (function (p1__62532_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__62532_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(body)].join('');
});})(body,prefix,map__62536,map__62536__$1,identifier,frames,map__62534,map__62534__$1,value))
,cljs.core.cons.call(null,"@keyframes ",cljs.core.map.call(null,prefix,mranderson048.garden.v1v3v3.garden.compiler.vendors.call(null)))));
} else {
return null;
}
}));
cljs.core._add_method.call(null,mranderson048.garden.v1v3v3.garden.compiler.render_at_rule,new cljs.core.Keyword(null,"media","media",-1066138403),(function (p__62538){
var map__62539 = p__62538;
var map__62539__$1 = ((((!((map__62539 == null)))?(((((map__62539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62539):map__62539);
var value = cljs.core.get.call(null,map__62539__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__62541 = value;
var map__62541__$1 = ((((!((map__62541 == null)))?(((((map__62541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62541):map__62541);
var media_queries = cljs.core.get.call(null,map__62541__$1,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678));
var rules = cljs.core.get.call(null,map__62541__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
if(cljs.core.seq.call(null,rules)){
return ["@media ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.compiler.render_media_expr.call(null,media_queries)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.compiler.l_brace_1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.compiler.indent_str.call(null,mranderson048.garden.v1v3v3.garden.compiler.rule_join.call(null,cljs.core.map.call(null,mranderson048.garden.v1v3v3.garden.compiler.render_css,rules)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.compiler.r_brace_1)].join('');
} else {
return null;
}
}));
goog.object.set(mranderson048.garden.v1v3v3.garden.compiler.CSSRenderer,"null",true);

goog.object.set(mranderson048.garden.v1v3v3.garden.compiler.render_css,"null",(function (this$){
return "";
}));

mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.render_color.call(null,this$__$1);
});

cljs.core.IndexedSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IndexedSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,mranderson048.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

cljs.core.LazySeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,mranderson048.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

cljs.core.NodeSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.NodeSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,mranderson048.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

cljs.core.BlackNode.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.BlackNode.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.render_rule.call(null,this$__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMapSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,mranderson048.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

mranderson048.garden.v1v3v3.garden.types.CSSUnit.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

mranderson048.garden.v1v3v3.garden.types.CSSUnit.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.render_unit.call(null,this$__$1);
});

cljs.core.ChunkedSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,mranderson048.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

cljs.core.Cons.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,mranderson048.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

cljs.core.RSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.RSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,mranderson048.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

goog.object.set(mranderson048.garden.v1v3v3.garden.compiler.CSSRenderer,"number",true);

goog.object.set(mranderson048.garden.v1v3v3.garden.compiler.render_css,"number",(function (this$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
}));

mranderson048.garden.v1v3v3.garden.types.CSSFunction.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

mranderson048.garden.v1v3v3.garden.types.CSSFunction.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.render_function.call(null,this$__$1);
});

cljs.core.PersistentHashMap.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.render_declaration.call(null,this$__$1);
});

cljs.core.ArrayNodeSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ArrayNodeSeq.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,mranderson048.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

cljs.core.Subvec.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Subvec.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.render_rule.call(null,this$__$1);
});

goog.object.set(mranderson048.garden.v1v3v3.garden.compiler.CSSRenderer,"_",true);

goog.object.set(mranderson048.garden.v1v3v3.garden.compiler.render_css,"_",(function (this$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
}));

cljs.core.PersistentTreeMap.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeMap.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.render_declaration.call(null,this$__$1);
});

cljs.core.ChunkedCons.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedCons.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,mranderson048.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

mranderson048.garden.v1v3v3.garden.types.CSSAtRule.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

mranderson048.garden.v1v3v3.garden.types.CSSAtRule.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.render_at_rule.call(null,this$__$1);
});

cljs.core.RedNode.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.RedNode.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.render_rule.call(null,this$__$1);
});

cljs.core.PersistentVector.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.render_rule.call(null,this$__$1);
});

cljs.core.Keyword.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name.call(null,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.compiler.render_declaration.call(null,this$__$1);
});

cljs.core.List.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.mranderson048$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,mranderson048.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});
/**
 * Convert a sequence of maps into CSS for use with the HTML style
 * attribute.
 */
mranderson048.garden.v1v3v3.garden.compiler.compile_style = (function mranderson048$garden$v1v3v3$garden$compiler$compile_style(ms){
return cljs.core.first.call(null,mranderson048.garden.v1v3v3.garden.compiler.render_css.call(null,mranderson048.garden.v1v3v3.garden.compiler.expand.call(null,cljs.core.reduce.call(null,cljs.core.merge,cljs.core.filter.call(null,mranderson048.garden.v1v3v3.garden.util.declaration_QMARK_,ms)))));
});
/**
 * Return a string of CSS.
 */
mranderson048.garden.v1v3v3.garden.compiler.do_compile = (function mranderson048$garden$v1v3v3$garden$compiler$do_compile(flags,rules){
var _STAR_flags_STAR_62543 = mranderson048.garden.v1v3v3.garden.compiler._STAR_flags_STAR_;
mranderson048.garden.v1v3v3.garden.compiler._STAR_flags_STAR_ = flags;

try{return mranderson048.garden.v1v3v3.garden.compiler.rule_join.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,mranderson048.garden.v1v3v3.garden.compiler.render_css,cljs.core.filter.call(null,mranderson048.garden.v1v3v3.garden.compiler.top_level_expression_QMARK_,mranderson048.garden.v1v3v3.garden.compiler.expand_stylesheet.call(null,rules)))));
}finally {mranderson048.garden.v1v3v3.garden.compiler._STAR_flags_STAR_ = _STAR_flags_STAR_62543;
}});
/**
 * Prefix stylesheet with files in preamble. Not available in
 *   ClojureScript.
 */
mranderson048.garden.v1v3v3.garden.compiler.do_preamble = (function mranderson048$garden$v1v3v3$garden$compiler$do_preamble(p__62544,stylesheet){
var map__62545 = p__62544;
var map__62545__$1 = ((((!((map__62545 == null)))?(((((map__62545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62545):map__62545);
var preamble = cljs.core.get.call(null,map__62545__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
return stylesheet;
});
/**
 * Compress CSS if the pretty-print(?) flag is true.
 */
mranderson048.garden.v1v3v3.garden.compiler.do_compression = (function mranderson048$garden$v1v3v3$garden$compiler$do_compression(p__62547,stylesheet){
var map__62548 = p__62547;
var map__62548__$1 = ((((!((map__62548 == null)))?(((((map__62548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62548):map__62548);
var pretty_print_QMARK_ = cljs.core.get.call(null,map__62548__$1,new cljs.core.Keyword(null,"pretty-print?","pretty-print?",1932217158));
var pretty_print = cljs.core.get.call(null,map__62548__$1,new cljs.core.Keyword(null,"pretty-print","pretty-print",-1314067013));
if(cljs.core.truth_((function (){var or__3922__auto__ = pretty_print_QMARK_;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return pretty_print;
}
})())){
return stylesheet;
} else {
return mranderson048.garden.v1v3v3.garden.compression.compress_stylesheet.call(null,stylesheet);
}
});
/**
 * Write contents of stylesheet to disk.
 */
mranderson048.garden.v1v3v3.garden.compiler.do_output_to = (function mranderson048$garden$v1v3v3$garden$compiler$do_output_to(p__62550,stylesheet){
var map__62551 = p__62550;
var map__62551__$1 = ((((!((map__62551 == null)))?(((((map__62551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62551):map__62551);
var output_to = cljs.core.get.call(null,map__62551__$1,new cljs.core.Keyword(null,"output-to","output-to",-965533968));
return stylesheet;
});
/**
 * Convert any number of Clojure data structures to CSS.
 */
mranderson048.garden.v1v3v3.garden.compiler.compile_css = (function mranderson048$garden$v1v3v3$garden$compiler$compile_css(var_args){
var args__4502__auto__ = [];
var len__4499__auto___62558 = arguments.length;
var i__4500__auto___62559 = (0);
while(true){
if((i__4500__auto___62559 < len__4499__auto___62558)){
args__4502__auto__.push((arguments[i__4500__auto___62559]));

var G__62560 = (i__4500__auto___62559 + (1));
i__4500__auto___62559 = G__62560;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.compiler.compile_css.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

mranderson048.garden.v1v3v3.garden.compiler.compile_css.cljs$core$IFn$_invoke$arity$variadic = (function (flags,rules){
var vec__62555 = (cljs.core.truth_((function (){var and__3911__auto__ = mranderson048.garden.v1v3v3.garden.util.hash_map_QMARK_.call(null,flags);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.some.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,flags)),cljs.core.keys.call(null,mranderson048.garden.v1v3v3.garden.compiler._STAR_flags_STAR_));
} else {
return and__3911__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,mranderson048.garden.v1v3v3.garden.compiler._STAR_flags_STAR_,flags),rules], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.garden.v1v3v3.garden.compiler._STAR_flags_STAR_,cljs.core.cons.call(null,flags,rules)], null));
var flags__$1 = cljs.core.nth.call(null,vec__62555,(0),null);
var rules__$1 = cljs.core.nth.call(null,vec__62555,(1),null);
return mranderson048.garden.v1v3v3.garden.compiler.do_output_to.call(null,flags__$1,mranderson048.garden.v1v3v3.garden.compiler.do_compression.call(null,flags__$1,mranderson048.garden.v1v3v3.garden.compiler.do_preamble.call(null,flags__$1,mranderson048.garden.v1v3v3.garden.compiler.do_compile.call(null,flags__$1,rules__$1))));
});

mranderson048.garden.v1v3v3.garden.compiler.compile_css.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.compiler.compile_css.cljs$lang$applyTo = (function (seq62553){
var G__62554 = cljs.core.first.call(null,seq62553);
var seq62553__$1 = cljs.core.next.call(null,seq62553);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62554,seq62553__$1);
});


//# sourceMappingURL=compiler.js.map?rel=1600694576185
