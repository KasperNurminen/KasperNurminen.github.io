// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__15372){
var map__15373 = p__15372;
var map__15373__$1 = ((((!((map__15373 == null)))?(((((map__15373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15373):map__15373);
var m = map__15373__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15373__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15373__$1,cljs.core.cst$kw$name);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m))){
var seq__15375_15397 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__15376_15398 = null;
var count__15377_15399 = (0);
var i__15378_15400 = (0);
while(true){
if((i__15378_15400 < count__15377_15399)){
var f_15401 = chunk__15376_15398.cljs$core$IIndexed$_nth$arity$2(null,i__15378_15400);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_15401], 0));


var G__15402 = seq__15375_15397;
var G__15403 = chunk__15376_15398;
var G__15404 = count__15377_15399;
var G__15405 = (i__15378_15400 + (1));
seq__15375_15397 = G__15402;
chunk__15376_15398 = G__15403;
count__15377_15399 = G__15404;
i__15378_15400 = G__15405;
continue;
} else {
var temp__4657__auto___15406 = cljs.core.seq(seq__15375_15397);
if(temp__4657__auto___15406){
var seq__15375_15407__$1 = temp__4657__auto___15406;
if(cljs.core.chunked_seq_QMARK_(seq__15375_15407__$1)){
var c__4319__auto___15408 = cljs.core.chunk_first(seq__15375_15407__$1);
var G__15409 = cljs.core.chunk_rest(seq__15375_15407__$1);
var G__15410 = c__4319__auto___15408;
var G__15411 = cljs.core.count(c__4319__auto___15408);
var G__15412 = (0);
seq__15375_15397 = G__15409;
chunk__15376_15398 = G__15410;
count__15377_15399 = G__15411;
i__15378_15400 = G__15412;
continue;
} else {
var f_15413 = cljs.core.first(seq__15375_15407__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_15413], 0));


var G__15414 = cljs.core.next(seq__15375_15407__$1);
var G__15415 = null;
var G__15416 = (0);
var G__15417 = (0);
seq__15375_15397 = G__15414;
chunk__15376_15398 = G__15415;
count__15377_15399 = G__15416;
i__15378_15400 = G__15417;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_15418 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_15418], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_15418)))?cljs.core.second(arglists_15418):arglists_15418)], 0));
}
} else {
}
}

if(cljs.core.truth_(cljs.core.cst$kw$special_DASH_form.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,cljs.core.cst$kw$url)){
if(cljs.core.truth_(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
var seq__15379_15419 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__15380_15420 = null;
var count__15381_15421 = (0);
var i__15382_15422 = (0);
while(true){
if((i__15382_15422 < count__15381_15421)){
var vec__15383_15423 = chunk__15380_15420.cljs$core$IIndexed$_nth$arity$2(null,i__15382_15422);
var name_15424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15383_15423,(0),null);
var map__15386_15425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15383_15423,(1),null);
var map__15386_15426__$1 = ((((!((map__15386_15425 == null)))?(((((map__15386_15425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15386_15425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15386_15425):map__15386_15425);
var doc_15427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15386_15426__$1,cljs.core.cst$kw$doc);
var arglists_15428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15386_15426__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_15424], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_15428], 0));

if(cljs.core.truth_(doc_15427)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_15427], 0));
} else {
}


var G__15429 = seq__15379_15419;
var G__15430 = chunk__15380_15420;
var G__15431 = count__15381_15421;
var G__15432 = (i__15382_15422 + (1));
seq__15379_15419 = G__15429;
chunk__15380_15420 = G__15430;
count__15381_15421 = G__15431;
i__15382_15422 = G__15432;
continue;
} else {
var temp__4657__auto___15433 = cljs.core.seq(seq__15379_15419);
if(temp__4657__auto___15433){
var seq__15379_15434__$1 = temp__4657__auto___15433;
if(cljs.core.chunked_seq_QMARK_(seq__15379_15434__$1)){
var c__4319__auto___15435 = cljs.core.chunk_first(seq__15379_15434__$1);
var G__15436 = cljs.core.chunk_rest(seq__15379_15434__$1);
var G__15437 = c__4319__auto___15435;
var G__15438 = cljs.core.count(c__4319__auto___15435);
var G__15439 = (0);
seq__15379_15419 = G__15436;
chunk__15380_15420 = G__15437;
count__15381_15421 = G__15438;
i__15382_15422 = G__15439;
continue;
} else {
var vec__15388_15440 = cljs.core.first(seq__15379_15434__$1);
var name_15441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15388_15440,(0),null);
var map__15391_15442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15388_15440,(1),null);
var map__15391_15443__$1 = ((((!((map__15391_15442 == null)))?(((((map__15391_15442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15391_15442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15391_15442):map__15391_15442);
var doc_15444 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15391_15443__$1,cljs.core.cst$kw$doc);
var arglists_15445 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15391_15443__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_15441], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_15445], 0));

if(cljs.core.truth_(doc_15444)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_15444], 0));
} else {
}


var G__15446 = cljs.core.next(seq__15379_15434__$1);
var G__15447 = null;
var G__15448 = (0);
var G__15449 = (0);
seq__15379_15419 = G__15446;
chunk__15380_15420 = G__15447;
count__15381_15421 = G__15448;
i__15382_15422 = G__15449;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__15393 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__15394 = null;
var count__15395 = (0);
var i__15396 = (0);
while(true){
if((i__15396 < count__15395)){
var role = chunk__15394.cljs$core$IIndexed$_nth$arity$2(null,i__15396);
var temp__4657__auto___15450__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__4657__auto___15450__$1)){
var spec_15451 = temp__4657__auto___15450__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_15451)], 0));
} else {
}


var G__15452 = seq__15393;
var G__15453 = chunk__15394;
var G__15454 = count__15395;
var G__15455 = (i__15396 + (1));
seq__15393 = G__15452;
chunk__15394 = G__15453;
count__15395 = G__15454;
i__15396 = G__15455;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq(seq__15393);
if(temp__4657__auto____$1){
var seq__15393__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__15393__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__15393__$1);
var G__15456 = cljs.core.chunk_rest(seq__15393__$1);
var G__15457 = c__4319__auto__;
var G__15458 = cljs.core.count(c__4319__auto__);
var G__15459 = (0);
seq__15393 = G__15456;
chunk__15394 = G__15457;
count__15395 = G__15458;
i__15396 = G__15459;
continue;
} else {
var role = cljs.core.first(seq__15393__$1);
var temp__4657__auto___15460__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__4657__auto___15460__$2)){
var spec_15461 = temp__4657__auto___15460__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_15461)], 0));
} else {
}


var G__15462 = cljs.core.next(seq__15393__$1);
var G__15463 = null;
var G__15464 = (0);
var G__15465 = (0);
seq__15393 = G__15462;
chunk__15394 = G__15463;
count__15395 = G__15464;
i__15396 = G__15465;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
