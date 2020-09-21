// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__58186){
var map__58187 = p__58186;
var map__58187__$1 = ((((!((map__58187 == null)))?(((((map__58187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58187):map__58187);
var m = map__58187__$1;
var n = cljs.core.get.call(null,map__58187__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__58187__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__58189_58211 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__58190_58212 = null;
var count__58191_58213 = (0);
var i__58192_58214 = (0);
while(true){
if((i__58192_58214 < count__58191_58213)){
var f_58215 = cljs.core._nth.call(null,chunk__58190_58212,i__58192_58214);
cljs.core.println.call(null,"  ",f_58215);


var G__58216 = seq__58189_58211;
var G__58217 = chunk__58190_58212;
var G__58218 = count__58191_58213;
var G__58219 = (i__58192_58214 + (1));
seq__58189_58211 = G__58216;
chunk__58190_58212 = G__58217;
count__58191_58213 = G__58218;
i__58192_58214 = G__58219;
continue;
} else {
var temp__4657__auto___58220 = cljs.core.seq.call(null,seq__58189_58211);
if(temp__4657__auto___58220){
var seq__58189_58221__$1 = temp__4657__auto___58220;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58189_58221__$1)){
var c__4319__auto___58222 = cljs.core.chunk_first.call(null,seq__58189_58221__$1);
var G__58223 = cljs.core.chunk_rest.call(null,seq__58189_58221__$1);
var G__58224 = c__4319__auto___58222;
var G__58225 = cljs.core.count.call(null,c__4319__auto___58222);
var G__58226 = (0);
seq__58189_58211 = G__58223;
chunk__58190_58212 = G__58224;
count__58191_58213 = G__58225;
i__58192_58214 = G__58226;
continue;
} else {
var f_58227 = cljs.core.first.call(null,seq__58189_58221__$1);
cljs.core.println.call(null,"  ",f_58227);


var G__58228 = cljs.core.next.call(null,seq__58189_58221__$1);
var G__58229 = null;
var G__58230 = (0);
var G__58231 = (0);
seq__58189_58211 = G__58228;
chunk__58190_58212 = G__58229;
count__58191_58213 = G__58230;
i__58192_58214 = G__58231;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_58232 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_58232);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_58232)))?cljs.core.second.call(null,arglists_58232):arglists_58232));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__58193_58233 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__58194_58234 = null;
var count__58195_58235 = (0);
var i__58196_58236 = (0);
while(true){
if((i__58196_58236 < count__58195_58235)){
var vec__58197_58237 = cljs.core._nth.call(null,chunk__58194_58234,i__58196_58236);
var name_58238 = cljs.core.nth.call(null,vec__58197_58237,(0),null);
var map__58200_58239 = cljs.core.nth.call(null,vec__58197_58237,(1),null);
var map__58200_58240__$1 = ((((!((map__58200_58239 == null)))?(((((map__58200_58239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58200_58239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58200_58239):map__58200_58239);
var doc_58241 = cljs.core.get.call(null,map__58200_58240__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_58242 = cljs.core.get.call(null,map__58200_58240__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_58238);

cljs.core.println.call(null," ",arglists_58242);

if(cljs.core.truth_(doc_58241)){
cljs.core.println.call(null," ",doc_58241);
} else {
}


var G__58243 = seq__58193_58233;
var G__58244 = chunk__58194_58234;
var G__58245 = count__58195_58235;
var G__58246 = (i__58196_58236 + (1));
seq__58193_58233 = G__58243;
chunk__58194_58234 = G__58244;
count__58195_58235 = G__58245;
i__58196_58236 = G__58246;
continue;
} else {
var temp__4657__auto___58247 = cljs.core.seq.call(null,seq__58193_58233);
if(temp__4657__auto___58247){
var seq__58193_58248__$1 = temp__4657__auto___58247;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58193_58248__$1)){
var c__4319__auto___58249 = cljs.core.chunk_first.call(null,seq__58193_58248__$1);
var G__58250 = cljs.core.chunk_rest.call(null,seq__58193_58248__$1);
var G__58251 = c__4319__auto___58249;
var G__58252 = cljs.core.count.call(null,c__4319__auto___58249);
var G__58253 = (0);
seq__58193_58233 = G__58250;
chunk__58194_58234 = G__58251;
count__58195_58235 = G__58252;
i__58196_58236 = G__58253;
continue;
} else {
var vec__58202_58254 = cljs.core.first.call(null,seq__58193_58248__$1);
var name_58255 = cljs.core.nth.call(null,vec__58202_58254,(0),null);
var map__58205_58256 = cljs.core.nth.call(null,vec__58202_58254,(1),null);
var map__58205_58257__$1 = ((((!((map__58205_58256 == null)))?(((((map__58205_58256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58205_58256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58205_58256):map__58205_58256);
var doc_58258 = cljs.core.get.call(null,map__58205_58257__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_58259 = cljs.core.get.call(null,map__58205_58257__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_58255);

cljs.core.println.call(null," ",arglists_58259);

if(cljs.core.truth_(doc_58258)){
cljs.core.println.call(null," ",doc_58258);
} else {
}


var G__58260 = cljs.core.next.call(null,seq__58193_58248__$1);
var G__58261 = null;
var G__58262 = (0);
var G__58263 = (0);
seq__58193_58233 = G__58260;
chunk__58194_58234 = G__58261;
count__58195_58235 = G__58262;
i__58196_58236 = G__58263;
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
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__58207 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__58208 = null;
var count__58209 = (0);
var i__58210 = (0);
while(true){
if((i__58210 < count__58209)){
var role = cljs.core._nth.call(null,chunk__58208,i__58210);
var temp__4657__auto___58264__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___58264__$1)){
var spec_58265 = temp__4657__auto___58264__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_58265));
} else {
}


var G__58266 = seq__58207;
var G__58267 = chunk__58208;
var G__58268 = count__58209;
var G__58269 = (i__58210 + (1));
seq__58207 = G__58266;
chunk__58208 = G__58267;
count__58209 = G__58268;
i__58210 = G__58269;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__58207);
if(temp__4657__auto____$1){
var seq__58207__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58207__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__58207__$1);
var G__58270 = cljs.core.chunk_rest.call(null,seq__58207__$1);
var G__58271 = c__4319__auto__;
var G__58272 = cljs.core.count.call(null,c__4319__auto__);
var G__58273 = (0);
seq__58207 = G__58270;
chunk__58208 = G__58271;
count__58209 = G__58272;
i__58210 = G__58273;
continue;
} else {
var role = cljs.core.first.call(null,seq__58207__$1);
var temp__4657__auto___58274__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___58274__$2)){
var spec_58275 = temp__4657__auto___58274__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_58275));
} else {
}


var G__58276 = cljs.core.next.call(null,seq__58207__$1);
var G__58277 = null;
var G__58278 = (0);
var G__58279 = (0);
seq__58207 = G__58276;
chunk__58208 = G__58277;
count__58209 = G__58278;
i__58210 = G__58279;
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

//# sourceMappingURL=repl.js.map?rel=1600694563015
