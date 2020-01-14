// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__10705){
var vec__10706 = p__10705;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10706,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10706,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__10709 = (clojure.data.diff.cljs$core$IFn$_invoke$arity$2 ? clojure.data.diff.cljs$core$IFn$_invoke$arity$2(va,vb) : clojure.data.diff.call(null,va,vb));
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10709,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10709,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10709,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__10713 = arguments.length;
switch (G__10713) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4006__auto__ = cljs.core.count(a);
var y__4007__auto__ = cljs.core.count(b);
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if(((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4211__auto__ = (((x == null))?null:x);
var m__4212__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4212__auto__.call(null,x));
} else {
var m__4212__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4212__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if(((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4211__auto__ = (((a == null))?null:a);
var m__4212__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4212__auto__.call(null,a,b));
} else {
var m__4212__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__4212__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__10715_10739 = clojure.data.equality_partition;
var G__10716_10740 = "null";
var G__10717_10741 = ((function (G__10715_10739,G__10716_10740){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__10715_10739,G__10716_10740))
;
goog.object.set(G__10715_10739,G__10716_10740,G__10717_10741);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__10718_10742 = clojure.data.equality_partition;
var G__10719_10743 = "string";
var G__10720_10744 = ((function (G__10718_10742,G__10719_10743){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__10718_10742,G__10719_10743))
;
goog.object.set(G__10718_10742,G__10719_10743,G__10720_10744);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__10721_10745 = clojure.data.equality_partition;
var G__10722_10746 = "number";
var G__10723_10747 = ((function (G__10721_10745,G__10722_10746){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__10721_10745,G__10722_10746))
;
goog.object.set(G__10721_10745,G__10722_10746,G__10723_10747);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__10724_10748 = clojure.data.equality_partition;
var G__10725_10749 = "array";
var G__10726_10750 = ((function (G__10724_10748,G__10725_10749){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__10724_10748,G__10725_10749))
;
goog.object.set(G__10724_10748,G__10725_10749,G__10726_10750);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__10727_10751 = clojure.data.equality_partition;
var G__10728_10752 = "function";
var G__10729_10753 = ((function (G__10727_10751,G__10728_10752){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__10727_10751,G__10728_10752))
;
goog.object.set(G__10727_10751,G__10728_10752,G__10729_10753);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__10730_10754 = clojure.data.equality_partition;
var G__10731_10755 = "boolean";
var G__10732_10756 = ((function (G__10730_10754,G__10731_10755){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__10730_10754,G__10731_10755))
;
goog.object.set(G__10730_10754,G__10731_10755,G__10732_10756);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__10733_10757 = clojure.data.equality_partition;
var G__10734_10758 = "_";
var G__10735_10759 = ((function (G__10733_10757,G__10734_10758){
return (function (x){
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return cljs.core.cst$kw$map;
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return cljs.core.cst$kw$set;
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return cljs.core.cst$kw$sequential;
} else {
return cljs.core.cst$kw$atom;

}
}
}
});})(G__10733_10757,G__10734_10758))
;
goog.object.set(G__10733_10757,G__10734_10758,G__10735_10759);
goog.object.set(clojure.data.Diff,"null",true);

var G__10760_10784 = clojure.data.diff_similar;
var G__10761_10785 = "null";
var G__10762_10786 = ((function (G__10760_10784,G__10761_10785){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__10760_10784,G__10761_10785))
;
goog.object.set(G__10760_10784,G__10761_10785,G__10762_10786);

goog.object.set(clojure.data.Diff,"string",true);

var G__10763_10787 = clojure.data.diff_similar;
var G__10764_10788 = "string";
var G__10765_10789 = ((function (G__10763_10787,G__10764_10788){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__10763_10787,G__10764_10788))
;
goog.object.set(G__10763_10787,G__10764_10788,G__10765_10789);

goog.object.set(clojure.data.Diff,"number",true);

var G__10766_10790 = clojure.data.diff_similar;
var G__10767_10791 = "number";
var G__10768_10792 = ((function (G__10766_10790,G__10767_10791){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__10766_10790,G__10767_10791))
;
goog.object.set(G__10766_10790,G__10767_10791,G__10768_10792);

goog.object.set(clojure.data.Diff,"array",true);

var G__10769_10793 = clojure.data.diff_similar;
var G__10770_10794 = "array";
var G__10771_10795 = ((function (G__10769_10793,G__10770_10794){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__10769_10793,G__10770_10794))
;
goog.object.set(G__10769_10793,G__10770_10794,G__10771_10795);

goog.object.set(clojure.data.Diff,"function",true);

var G__10772_10796 = clojure.data.diff_similar;
var G__10773_10797 = "function";
var G__10774_10798 = ((function (G__10772_10796,G__10773_10797){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__10772_10796,G__10773_10797))
;
goog.object.set(G__10772_10796,G__10773_10797,G__10774_10798);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__10775_10799 = clojure.data.diff_similar;
var G__10776_10800 = "boolean";
var G__10777_10801 = ((function (G__10775_10799,G__10776_10800){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__10775_10799,G__10776_10800))
;
goog.object.set(G__10775_10799,G__10776_10800,G__10777_10801);

goog.object.set(clojure.data.Diff,"_",true);

var G__10778_10802 = clojure.data.diff_similar;
var G__10779_10803 = "_";
var G__10780_10804 = ((function (G__10778_10802,G__10779_10803){
return (function (a,b){
var fexpr__10782 = (function (){var G__10783 = clojure.data.equality_partition(a);
var G__10783__$1 = (((G__10783 instanceof cljs.core.Keyword))?G__10783.fqn:null);
switch (G__10783__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10783__$1)].join('')));

}
})();
return (fexpr__10782.cljs$core$IFn$_invoke$arity$2 ? fexpr__10782.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__10782.call(null,a,b));
});})(G__10778_10802,G__10779_10803))
;
goog.object.set(G__10778_10802,G__10779_10803,G__10780_10804);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
