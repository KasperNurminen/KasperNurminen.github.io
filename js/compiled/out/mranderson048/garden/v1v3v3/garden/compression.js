// Compiled by ClojureScript 1.10.238 {}
goog.provide('mranderson048.garden.v1v3v3.garden.compression');
goog.require('cljs.core');
/**
 * Return a function which when given a string will return a map
 *   containing the chunk of text matched by re, it's size, and tag.
 */
mranderson048.garden.v1v3v3.garden.compression.token_fn = (function mranderson048$garden$v1v3v3$garden$compression$token_fn(p__62415){
var vec__62416 = p__62415;
var tag = cljs.core.nth.call(null,vec__62416,(0),null);
var re = cljs.core.nth.call(null,vec__62416,(1),null);
return ((function (vec__62416,tag,re){
return (function (s){
var temp__4657__auto__ = cljs.core.re_find.call(null,re,s);
if(cljs.core.truth_(temp__4657__auto__)){
var chunk = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"chunk","chunk",-1191159620),chunk,new cljs.core.Keyword(null,"size","size",1098693007),cljs.core.count.call(null,chunk)], null);
} else {
return null;
}
});
;})(vec__62416,tag,re))
});
/**
 * Given an arbitrary number of [tag regex] pairs, return a function
 *   which when given a string s will return the first matching token of s.
 *   Token precedence is determined by the order of the pairs. The first
 *   and last pairs have the highest and lowest precedence respectively.
 */
mranderson048.garden.v1v3v3.garden.compression.tokenizer = (function mranderson048$garden$v1v3v3$garden$compression$tokenizer(var_args){
var args__4502__auto__ = [];
var len__4499__auto___62421 = arguments.length;
var i__4500__auto___62422 = (0);
while(true){
if((i__4500__auto___62422 < len__4499__auto___62421)){
args__4502__auto__.push((arguments[i__4500__auto___62422]));

var G__62423 = (i__4500__auto___62422 + (1));
i__4500__auto___62422 = G__62423;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.compression.tokenizer.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

mranderson048.garden.v1v3v3.garden.compression.tokenizer.cljs$core$IFn$_invoke$arity$variadic = (function (tags_PLUS_regexes){
var fs = cljs.core.map.call(null,mranderson048.garden.v1v3v3.garden.compression.token_fn,tags_PLUS_regexes);
return ((function (fs){
return (function (s){
return cljs.core.some.call(null,((function (fs){
return (function (p1__62419_SHARP_){
return p1__62419_SHARP_.call(null,s);
});})(fs))
,fs);
});
;})(fs))
});

mranderson048.garden.v1v3v3.garden.compression.tokenizer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.compression.tokenizer.cljs$lang$applyTo = (function (seq62420){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62420));
});

/**
 * Tokenizer used during stylesheet compression.
 */
mranderson048.garden.v1v3v3.garden.compression.stylesheet_tokenizer = mranderson048.garden.v1v3v3.garden.compression.tokenizer.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),/^\"(?:\\.|[^\"])*\"/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r-brace","r-brace",-1335738887),/^\s*\{\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"l-brace","l-brace",613286657),/^;?\s*}/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r-paren","r-paren",-1688338021),/^\s*\(\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"l-paren","l-paren",2052672514),/^\s*\)/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comma","comma",1699024745),/^,\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"colon","colon",-965200945),/^:\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"semicolon","semicolon",797086549),/^;/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space+","space+",378127624),/^ +/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"white-space+","white-space+",1452157162),/^\s+/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"any","any",1705907423),/^./], null));
/**
 * Compress a string of CSS using a basic compressor.
 */
mranderson048.garden.v1v3v3.garden.compression.compress_stylesheet = (function mranderson048$garden$v1v3v3$garden$compression$compress_stylesheet(stylesheet){
var s1 = stylesheet;
var s2 = "";
while(true){
var temp__4655__auto__ = mranderson048.garden.v1v3v3.garden.compression.stylesheet_tokenizer.call(null,s1);
if(cljs.core.truth_(temp__4655__auto__)){
var map__62424 = temp__4655__auto__;
var map__62424__$1 = ((((!((map__62424 == null)))?(((((map__62424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62424):map__62424);
var tag = cljs.core.get.call(null,map__62424__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var chunk = cljs.core.get.call(null,map__62424__$1,new cljs.core.Keyword(null,"chunk","chunk",-1191159620));
var size = cljs.core.get.call(null,map__62424__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var G__62427 = cljs.core.subs.call(null,s1,size);
var G__62428 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s2),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__62426 = tag;
var G__62426__$1 = (((G__62426 instanceof cljs.core.Keyword))?G__62426.fqn:null);
switch (G__62426__$1) {
case "string":
return chunk;

break;
case "r-brace":
return "{";

break;
case "l-brace":
return "}";

break;
case "r-paren":
return "(";

break;
case "l-paren":
return ")";

break;
case "comma":
return ",";

break;
case "semi-comma":
return ";";

break;
case "colon":
return ":";

break;
case "space+":
return " ";

break;
case "white-space+":
return "";

break;
default:
return chunk;

}
})())].join('');
s1 = G__62427;
s2 = G__62428;
continue;
} else {
return s2;
}
break;
}
});

//# sourceMappingURL=compression.js.map?rel=1600694575833
