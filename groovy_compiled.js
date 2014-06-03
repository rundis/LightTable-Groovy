if(!lt.util.load.provided_QMARK_('lt.plugins.groovy.graph')) {
goog.provide('lt.plugins.groovy.graph');
goog.require('cljs.core');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('lt.util.dom');
goog.require('lt.objs.files');
goog.require('lt.objs.plugins');
goog.require('lt.util.load');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.util.load');
goog.require('lt.objs.tabs');
lt.plugins.groovy.graph.plugin_dir = lt.objs.plugins.find_plugin.call(null,"Groovy");
lt.plugins.groovy.graph.dependency_graph_ui = (function dependency_graph_ui(this$){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph","div.graph",2030351651),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dependency-graph","div.dependency-graph",3039800187),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg:svg","svg:svg",3472817088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",1127031096),"650",new cljs.core.Keyword(null,"height","height",4087841945),"680"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg:g","svg:g",1123725379),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",2066570974),"translate(20,20)"], null)], null)], null)], null)], null));var seq__8309_8418 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8310_8419 = null;var count__8311_8420 = 0;var i__8312_8421 = 0;while(true){
if((i__8312_8421 < count__8311_8420))
{var vec__8313_8422 = cljs.core._nth.call(null,chunk__8310_8419,i__8312_8421);var ev__7756__auto___8423 = cljs.core.nth.call(null,vec__8313_8422,0,null);var func__7757__auto___8424 = cljs.core.nth.call(null,vec__8313_8422,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8423,func__7757__auto___8424);
{
var G__8425 = seq__8309_8418;
var G__8426 = chunk__8310_8419;
var G__8427 = count__8311_8420;
var G__8428 = (i__8312_8421 + 1);
seq__8309_8418 = G__8425;
chunk__8310_8419 = G__8426;
count__8311_8420 = G__8427;
i__8312_8421 = G__8428;
continue;
}
} else
{var temp__4092__auto___8429 = cljs.core.seq.call(null,seq__8309_8418);if(temp__4092__auto___8429)
{var seq__8309_8430__$1 = temp__4092__auto___8429;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8309_8430__$1))
{var c__7112__auto___8431 = cljs.core.chunk_first.call(null,seq__8309_8430__$1);{
var G__8432 = cljs.core.chunk_rest.call(null,seq__8309_8430__$1);
var G__8433 = c__7112__auto___8431;
var G__8434 = cljs.core.count.call(null,c__7112__auto___8431);
var G__8435 = 0;
seq__8309_8418 = G__8432;
chunk__8310_8419 = G__8433;
count__8311_8420 = G__8434;
i__8312_8421 = G__8435;
continue;
}
} else
{var vec__8314_8436 = cljs.core.first.call(null,seq__8309_8430__$1);var ev__7756__auto___8437 = cljs.core.nth.call(null,vec__8314_8436,0,null);var func__7757__auto___8438 = cljs.core.nth.call(null,vec__8314_8436,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8437,func__7757__auto___8438);
{
var G__8439 = cljs.core.next.call(null,seq__8309_8430__$1);
var G__8440 = null;
var G__8441 = 0;
var G__8442 = 0;
seq__8309_8418 = G__8439;
chunk__8310_8419 = G__8440;
count__8311_8420 = G__8441;
i__8312_8421 = G__8442;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy.graph","dependency-graph","lt.plugins.groovy.graph/dependency-graph",4128469128),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph.dependency","graph.dependency",3487754077)], null),new cljs.core.Keyword(null,"name","name",1017277949),"Dependency graph",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){lt.util.load.js.call(null,lt.objs.files.join.call(null,lt.plugins.groovy.graph.plugin_dir,"js/d3.v3.min.js"),new cljs.core.Keyword(null,"sync","sync",1017449997));
lt.util.load.js.call(null,lt.objs.files.join.call(null,lt.plugins.groovy.graph.plugin_dir,"js/dagre-d3.js"),new cljs.core.Keyword(null,"sync","sync",1017449997));
return lt.plugins.groovy.graph.dependency_graph_ui.call(null,this$);
}));
lt.plugins.groovy.graph.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___8443 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8443))
{var ts_8444 = temp__4092__auto___8443;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8444))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_8444);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy.graph","on-close-destroy","lt.plugins.groovy.graph/on-close-destroy",1885650739),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.graph.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.groovy.graph.select_values = (function select_values(map,ks){return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.reduce.call(null,(function (p1__8315_SHARP_,p2__8316_SHARP_){return cljs.core.conj.call(null,p1__8315_SHARP_,map.call(null,p2__8316_SHARP_));
}),cljs.core.PersistentVector.EMPTY,ks));
});
lt.plugins.groovy.graph.dep_id = (function dep_id(dep){return clojure.string.join.call(null,":",lt.plugins.groovy.graph.select_values.call(null,dep,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"group","group",1112533489),new cljs.core.Keyword(null,"version","version",1365512266)], null)));
});
lt.plugins.groovy.graph.sample_deps = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1017277949),"groovy-all",new cljs.core.Keyword(null,"group","group",1112533489),"org.codehaus.groovy",new cljs.core.Keyword(null,"version","version",1365512266),"2.2.2",new cljs.core.Keyword(null,"children","children",2673430897),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1017277949),"groovy-stream",new cljs.core.Keyword(null,"group","group",1112533489),"com.bloidonia",new cljs.core.Keyword(null,"version","version",1365512266),"0.8.1",new cljs.core.Keyword(null,"children","children",2673430897),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1017277949),"groovy-all",new cljs.core.Keyword(null,"group","group",1112533489),"org.codehaus.groovy",new cljs.core.Keyword(null,"version","version",1365512266),"2.2.2",new cljs.core.Keyword(null,"children","children",2673430897),cljs.core.PersistentVector.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1017277949),"spock-core",new cljs.core.Keyword(null,"group","group",1112533489),"org.spockframework",new cljs.core.Keyword(null,"version","version",1365512266),"0.7-groovy-2.0",new cljs.core.Keyword(null,"children","children",2673430897),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1017277949),"groovy-all",new cljs.core.Keyword(null,"group","group",1112533489),"org.codehaus.groovy",new cljs.core.Keyword(null,"version","version",1365512266),"2.2.2",new cljs.core.Keyword(null,"children","children",2673430897),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1017277949),"junit-dep",new cljs.core.Keyword(null,"group","group",1112533489),"junit",new cljs.core.Keyword(null,"version","version",1365512266),"4.10",new cljs.core.Keyword(null,"children","children",2673430897),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1017277949),"hamcrest-core",new cljs.core.Keyword(null,"group","group",1112533489),"org.hamcrest",new cljs.core.Keyword(null,"version","version",1365512266),"1.3",new cljs.core.Keyword(null,"children","children",2673430897),cljs.core.PersistentVector.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1017277949),"junit-dep",new cljs.core.Keyword(null,"group","group",1112533489),"junit",new cljs.core.Keyword(null,"version","version",1365512266),"4.10",new cljs.core.Keyword(null,"children","children",2673430897),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1017277949),"hamcrest-core",new cljs.core.Keyword(null,"group","group",1112533489),"org.hamcrest",new cljs.core.Keyword(null,"version","version",1365512266),"1.3",new cljs.core.Keyword(null,"children","children",2673430897),cljs.core.PersistentVector.EMPTY], null)], null)], null)], null);
lt.plugins.groovy.graph.unique_deps = (function unique_deps(deps){var gather_deps = (function gather_deps(xs){return cljs.core.map.call(null,(function (p1__8317_SHARP_){return cljs.core.concat.call(null,((cljs.core.seq.call(null,new cljs.core.Keyword(null,"children","children",2673430897).cljs$core$IFn$_invoke$arity$1(p1__8317_SHARP_)))?gather_deps.call(null,new cljs.core.Keyword(null,"children","children",2673430897).cljs$core$IFn$_invoke$arity$1(p1__8317_SHARP_)):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.dissoc.call(null,p1__8317_SHARP_,new cljs.core.Keyword(null,"children","children",2673430897))], null));
}),xs);
});
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.flatten.call(null,gather_deps.call(null,deps)));
});
lt.plugins.groovy.graph.unique_dep_edges = (function unique_dep_edges(deps){var gather_edges = (function gather_edges(xs){return cljs.core.map.call(null,(function (p1__8318_SHARP_){if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"children","children",2673430897).cljs$core$IFn$_invoke$arity$1(p1__8318_SHARP_)))
{return cljs.core.concat.call(null,gather_edges.call(null,new cljs.core.Keyword(null,"children","children",2673430897).cljs$core$IFn$_invoke$arity$1(p1__8318_SHARP_)),(function (){var iter__7081__auto__ = (function iter__8361(s__8362){return (new cljs.core.LazySeq(null,(function (){var s__8362__$1 = s__8362;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8362__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var x = cljs.core.first.call(null,xs__4579__auto__);var iterys__7077__auto__ = ((function (s__8362__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function iter__8363(s__8364){return (new cljs.core.LazySeq(null,((function (s__8362__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__8364__$1 = s__8364;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__8364__$1);if(temp__4092__auto____$1)
{var s__8364__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__8364__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__8364__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__8366 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__8365 = 0;while(true){
if((i__8365 < size__7080__auto__))
{var y = cljs.core._nth.call(null,c__7079__auto__,i__8365);cljs.core.chunk_append.call(null,b__8366,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",1013904339),lt.plugins.groovy.graph.dep_id.call(null,x),new cljs.core.Keyword(null,"b","b",1013904340),lt.plugins.groovy.graph.dep_id.call(null,y)], null));
{
var G__8445 = (i__8365 + 1);
i__8365 = G__8445;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8366),iter__8363.call(null,cljs.core.chunk_rest.call(null,s__8364__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8366),null);
}
} else
{var y = cljs.core.first.call(null,s__8364__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",1013904339),lt.plugins.groovy.graph.dep_id.call(null,x),new cljs.core.Keyword(null,"b","b",1013904340),lt.plugins.groovy.graph.dep_id.call(null,y)], null),iter__8363.call(null,cljs.core.rest.call(null,s__8364__$2)));
}
} else
{return null;
}
break;
}
});})(s__8362__$1,x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__8362__$1,x,xs__4579__auto__,temp__4092__auto__))
;var fs__7078__auto__ = cljs.core.seq.call(null,iterys__7077__auto__.call(null,new cljs.core.Keyword(null,"children","children",2673430897).cljs$core$IFn$_invoke$arity$1(p1__8318_SHARP_)));if(fs__7078__auto__)
{return cljs.core.concat.call(null,fs__7078__auto__,iter__8361.call(null,cljs.core.rest.call(null,s__8362__$1)));
} else
{{
var G__8446 = cljs.core.rest.call(null,s__8362__$1);
s__8362__$1 = G__8446;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7081__auto__.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8318_SHARP_], null));
})());
} else
{return null;
}
}),xs);
});
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,gather_edges.call(null,deps))));
});
lt.plugins.groovy.graph.create_graph = (function create_graph(deps,conf_name){var g = (new dagreD3.Digraph());g.addNode("configuration",{"label": conf_name});
var seq__8379_8447 = cljs.core.seq.call(null,lt.plugins.groovy.graph.unique_deps.call(null,deps));var chunk__8380_8448 = null;var count__8381_8449 = 0;var i__8382_8450 = 0;while(true){
if((i__8382_8450 < count__8381_8449))
{var x_8451 = cljs.core._nth.call(null,chunk__8380_8448,i__8382_8450);g.addNode(lt.plugins.groovy.graph.dep_id.call(null,x_8451),{"label": [cljs.core.str("<div class='graph-label' title='"),cljs.core.str(lt.plugins.groovy.graph.dep_id.call(null,x_8451)),cljs.core.str("'>"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(x_8451)),cljs.core.str("<br/>"),cljs.core.str(new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(x_8451)),cljs.core.str("</div>")].join('')});
{
var G__8452 = seq__8379_8447;
var G__8453 = chunk__8380_8448;
var G__8454 = count__8381_8449;
var G__8455 = (i__8382_8450 + 1);
seq__8379_8447 = G__8452;
chunk__8380_8448 = G__8453;
count__8381_8449 = G__8454;
i__8382_8450 = G__8455;
continue;
}
} else
{var temp__4092__auto___8456 = cljs.core.seq.call(null,seq__8379_8447);if(temp__4092__auto___8456)
{var seq__8379_8457__$1 = temp__4092__auto___8456;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8379_8457__$1))
{var c__7112__auto___8458 = cljs.core.chunk_first.call(null,seq__8379_8457__$1);{
var G__8459 = cljs.core.chunk_rest.call(null,seq__8379_8457__$1);
var G__8460 = c__7112__auto___8458;
var G__8461 = cljs.core.count.call(null,c__7112__auto___8458);
var G__8462 = 0;
seq__8379_8447 = G__8459;
chunk__8380_8448 = G__8460;
count__8381_8449 = G__8461;
i__8382_8450 = G__8462;
continue;
}
} else
{var x_8463 = cljs.core.first.call(null,seq__8379_8457__$1);g.addNode(lt.plugins.groovy.graph.dep_id.call(null,x_8463),{"label": [cljs.core.str("<div class='graph-label' title='"),cljs.core.str(lt.plugins.groovy.graph.dep_id.call(null,x_8463)),cljs.core.str("'>"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(x_8463)),cljs.core.str("<br/>"),cljs.core.str(new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(x_8463)),cljs.core.str("</div>")].join('')});
{
var G__8464 = cljs.core.next.call(null,seq__8379_8457__$1);
var G__8465 = null;
var G__8466 = 0;
var G__8467 = 0;
seq__8379_8447 = G__8464;
chunk__8380_8448 = G__8465;
count__8381_8449 = G__8466;
i__8382_8450 = G__8467;
continue;
}
}
} else
{}
}
break;
}
var seq__8383_8468 = cljs.core.seq.call(null,lt.plugins.groovy.graph.unique_dep_edges.call(null,deps));var chunk__8384_8469 = null;var count__8385_8470 = 0;var i__8386_8471 = 0;while(true){
if((i__8386_8471 < count__8385_8470))
{var x_8472 = cljs.core._nth.call(null,chunk__8384_8469,i__8386_8471);g.addEdge(null,new cljs.core.Keyword(null,"a","a",1013904339).cljs$core$IFn$_invoke$arity$1(x_8472),new cljs.core.Keyword(null,"b","b",1013904340).cljs$core$IFn$_invoke$arity$1(x_8472),{"label": ""});
{
var G__8473 = seq__8383_8468;
var G__8474 = chunk__8384_8469;
var G__8475 = count__8385_8470;
var G__8476 = (i__8386_8471 + 1);
seq__8383_8468 = G__8473;
chunk__8384_8469 = G__8474;
count__8385_8470 = G__8475;
i__8386_8471 = G__8476;
continue;
}
} else
{var temp__4092__auto___8477 = cljs.core.seq.call(null,seq__8383_8468);if(temp__4092__auto___8477)
{var seq__8383_8478__$1 = temp__4092__auto___8477;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8383_8478__$1))
{var c__7112__auto___8479 = cljs.core.chunk_first.call(null,seq__8383_8478__$1);{
var G__8480 = cljs.core.chunk_rest.call(null,seq__8383_8478__$1);
var G__8481 = c__7112__auto___8479;
var G__8482 = cljs.core.count.call(null,c__7112__auto___8479);
var G__8483 = 0;
seq__8383_8468 = G__8480;
chunk__8384_8469 = G__8481;
count__8385_8470 = G__8482;
i__8386_8471 = G__8483;
continue;
}
} else
{var x_8484 = cljs.core.first.call(null,seq__8383_8478__$1);g.addEdge(null,new cljs.core.Keyword(null,"a","a",1013904339).cljs$core$IFn$_invoke$arity$1(x_8484),new cljs.core.Keyword(null,"b","b",1013904340).cljs$core$IFn$_invoke$arity$1(x_8484),{"label": ""});
{
var G__8485 = cljs.core.next.call(null,seq__8383_8478__$1);
var G__8486 = null;
var G__8487 = 0;
var G__8488 = 0;
seq__8383_8468 = G__8485;
chunk__8384_8469 = G__8486;
count__8385_8470 = G__8487;
i__8386_8471 = G__8488;
continue;
}
}
} else
{}
}
break;
}
var seq__8387_8489 = cljs.core.seq.call(null,deps);var chunk__8388_8490 = null;var count__8389_8491 = 0;var i__8390_8492 = 0;while(true){
if((i__8390_8492 < count__8389_8491))
{var x_8493 = cljs.core._nth.call(null,chunk__8388_8490,i__8390_8492);g.addEdge(null,"configuration",lt.plugins.groovy.graph.dep_id.call(null,x_8493),{"label": ""});
{
var G__8494 = seq__8387_8489;
var G__8495 = chunk__8388_8490;
var G__8496 = count__8389_8491;
var G__8497 = (i__8390_8492 + 1);
seq__8387_8489 = G__8494;
chunk__8388_8490 = G__8495;
count__8389_8491 = G__8496;
i__8390_8492 = G__8497;
continue;
}
} else
{var temp__4092__auto___8498 = cljs.core.seq.call(null,seq__8387_8489);if(temp__4092__auto___8498)
{var seq__8387_8499__$1 = temp__4092__auto___8498;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8387_8499__$1))
{var c__7112__auto___8500 = cljs.core.chunk_first.call(null,seq__8387_8499__$1);{
var G__8501 = cljs.core.chunk_rest.call(null,seq__8387_8499__$1);
var G__8502 = c__7112__auto___8500;
var G__8503 = cljs.core.count.call(null,c__7112__auto___8500);
var G__8504 = 0;
seq__8387_8489 = G__8501;
chunk__8388_8490 = G__8502;
count__8389_8491 = G__8503;
i__8390_8492 = G__8504;
continue;
}
} else
{var x_8505 = cljs.core.first.call(null,seq__8387_8499__$1);g.addEdge(null,"configuration",lt.plugins.groovy.graph.dep_id.call(null,x_8505),{"label": ""});
{
var G__8506 = cljs.core.next.call(null,seq__8387_8499__$1);
var G__8507 = null;
var G__8508 = 0;
var G__8509 = 0;
seq__8387_8489 = G__8506;
chunk__8388_8490 = G__8507;
count__8389_8491 = G__8508;
i__8390_8492 = G__8509;
continue;
}
}
} else
{}
}
break;
}
return g;
});
lt.plugins.groovy.graph.dimensions = (function dimensions(this$){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",1013904361),new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)).clientWidth,new cljs.core.Keyword(null,"h","h",1013904346),new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)).clientHeight], null);
});
lt.plugins.groovy.graph.d3_sel = (function d3_sel(selector){return window.d3.select(selector);
});
lt.plugins.groovy.graph.on_zoom = (function on_zoom(d3_layout){var ev = window.d3.event;return d3_layout.attr("transform",[cljs.core.str("translate("),cljs.core.str(ev.translate),cljs.core.str(") scale("),cljs.core.str(ev.scale),cljs.core.str(")")].join(''));
});
lt.plugins.groovy.graph.deps_by_conf_name = (function deps_by_conf_name(confs,name){return new cljs.core.Keyword(null,"dependencies","dependencies",1517678747).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,(function (p1__8391_SHARP_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"configuration","configuration",2946656360).cljs$core$IFn$_invoke$arity$1(p1__8391_SHARP_),name))
{return p1__8391_SHARP_;
} else
{return null;
}
}),confs));
});
lt.plugins.groovy.graph.render_deps = (function render_deps(this$,confs,conf_name){var renderer = (new dagreD3.Renderer());var g = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"g","g",1013904345),new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var svg = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"svg","svg",1014018518),new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var layout = renderer.run(lt.plugins.groovy.graph.create_graph.call(null,lt.plugins.groovy.graph.deps_by_conf_name.call(null,confs,conf_name),conf_name),lt.plugins.groovy.graph.d3_sel.call(null,g));var dim = lt.plugins.groovy.graph.dimensions.call(null,this$);lt.plugins.groovy.graph.d3_sel.call(null,svg).attr("width",(new cljs.core.Keyword(null,"w","w",1013904361).cljs$core$IFn$_invoke$arity$1(dim) + 20));
lt.plugins.groovy.graph.d3_sel.call(null,svg).attr("height",(new cljs.core.Keyword(null,"h","h",1013904346).cljs$core$IFn$_invoke$arity$1(dim) + 20));
return lt.plugins.groovy.graph.d3_sel.call(null,svg).call(window.d3.behavior.zoom().on("zoom",cljs.core.partial.call(null,lt.plugins.groovy.graph.on_zoom,lt.plugins.groovy.graph.d3_sel.call(null,g))));
});
lt.plugins.groovy.graph.conf_ui = (function conf_ui(this$,conf,confs){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.Keyword(null,"configuration","configuration",2946656360).cljs$core$IFn$_invoke$arity$1(conf)], null));var seq__8398_8510 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7755__auto__){
return (function (e){return lt.plugins.groovy.graph.render_deps.call(null,this$,confs,new cljs.core.Keyword(null,"configuration","configuration",2946656360).cljs$core$IFn$_invoke$arity$1(conf));
});})(e__7755__auto__))
], null)));var chunk__8399_8511 = null;var count__8400_8512 = 0;var i__8401_8513 = 0;while(true){
if((i__8401_8513 < count__8400_8512))
{var vec__8402_8514 = cljs.core._nth.call(null,chunk__8399_8511,i__8401_8513);var ev__7756__auto___8515 = cljs.core.nth.call(null,vec__8402_8514,0,null);var func__7757__auto___8516 = cljs.core.nth.call(null,vec__8402_8514,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8515,func__7757__auto___8516);
{
var G__8517 = seq__8398_8510;
var G__8518 = chunk__8399_8511;
var G__8519 = count__8400_8512;
var G__8520 = (i__8401_8513 + 1);
seq__8398_8510 = G__8517;
chunk__8399_8511 = G__8518;
count__8400_8512 = G__8519;
i__8401_8513 = G__8520;
continue;
}
} else
{var temp__4092__auto___8521 = cljs.core.seq.call(null,seq__8398_8510);if(temp__4092__auto___8521)
{var seq__8398_8522__$1 = temp__4092__auto___8521;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8398_8522__$1))
{var c__7112__auto___8523 = cljs.core.chunk_first.call(null,seq__8398_8522__$1);{
var G__8524 = cljs.core.chunk_rest.call(null,seq__8398_8522__$1);
var G__8525 = c__7112__auto___8523;
var G__8526 = cljs.core.count.call(null,c__7112__auto___8523);
var G__8527 = 0;
seq__8398_8510 = G__8524;
chunk__8399_8511 = G__8525;
count__8400_8512 = G__8526;
i__8401_8513 = G__8527;
continue;
}
} else
{var vec__8403_8528 = cljs.core.first.call(null,seq__8398_8522__$1);var ev__7756__auto___8529 = cljs.core.nth.call(null,vec__8403_8528,0,null);var func__7757__auto___8530 = cljs.core.nth.call(null,vec__8403_8528,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8529,func__7757__auto___8530);
{
var G__8531 = cljs.core.next.call(null,seq__8398_8522__$1);
var G__8532 = null;
var G__8533 = 0;
var G__8534 = 0;
seq__8398_8510 = G__8531;
chunk__8399_8511 = G__8532;
count__8400_8512 = G__8533;
i__8401_8513 = G__8534;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
lt.plugins.groovy.graph.confs_ui = (function confs_ui(this$,confs){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.conf","div.conf",1323665875),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Dependency graph"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),cljs.core.map.call(null,(function (p1__8404_SHARP_){return lt.plugins.groovy.graph.conf_ui.call(null,this$,p1__8404_SHARP_,confs);
}),cljs.core.filter.call(null,(function (p1__8405_SHARP_){return cljs.core.seq.call(null,new cljs.core.Keyword(null,"dependencies","dependencies",1517678747).cljs$core$IFn$_invoke$arity$1(p1__8405_SHARP_));
}),confs))], null)], null));var seq__8412_8535 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8413_8536 = null;var count__8414_8537 = 0;var i__8415_8538 = 0;while(true){
if((i__8415_8538 < count__8414_8537))
{var vec__8416_8539 = cljs.core._nth.call(null,chunk__8413_8536,i__8415_8538);var ev__7756__auto___8540 = cljs.core.nth.call(null,vec__8416_8539,0,null);var func__7757__auto___8541 = cljs.core.nth.call(null,vec__8416_8539,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8540,func__7757__auto___8541);
{
var G__8542 = seq__8412_8535;
var G__8543 = chunk__8413_8536;
var G__8544 = count__8414_8537;
var G__8545 = (i__8415_8538 + 1);
seq__8412_8535 = G__8542;
chunk__8413_8536 = G__8543;
count__8414_8537 = G__8544;
i__8415_8538 = G__8545;
continue;
}
} else
{var temp__4092__auto___8546 = cljs.core.seq.call(null,seq__8412_8535);if(temp__4092__auto___8546)
{var seq__8412_8547__$1 = temp__4092__auto___8546;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8412_8547__$1))
{var c__7112__auto___8548 = cljs.core.chunk_first.call(null,seq__8412_8547__$1);{
var G__8549 = cljs.core.chunk_rest.call(null,seq__8412_8547__$1);
var G__8550 = c__7112__auto___8548;
var G__8551 = cljs.core.count.call(null,c__7112__auto___8548);
var G__8552 = 0;
seq__8412_8535 = G__8549;
chunk__8413_8536 = G__8550;
count__8414_8537 = G__8551;
i__8415_8538 = G__8552;
continue;
}
} else
{var vec__8417_8553 = cljs.core.first.call(null,seq__8412_8547__$1);var ev__7756__auto___8554 = cljs.core.nth.call(null,vec__8417_8553,0,null);var func__7757__auto___8555 = cljs.core.nth.call(null,vec__8417_8553,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8554,func__7757__auto___8555);
{
var G__8556 = cljs.core.next.call(null,seq__8412_8547__$1);
var G__8557 = null;
var G__8558 = 0;
var G__8559 = 0;
seq__8412_8535 = G__8556;
chunk__8413_8536 = G__8557;
count__8414_8537 = G__8558;
i__8415_8538 = G__8559;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
lt.plugins.groovy.graph.render_confs = (function render_confs(this$,deps_confs){var temp__4092__auto___8560 = lt.util.dom.$.call(null,".conf",new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));if(cljs.core.truth_(temp__4092__auto___8560))
{var conf_div_8561 = temp__4092__auto___8560;lt.util.dom.remove.call(null,conf_div_8561);
} else
{}
return lt.util.dom.prepend.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),lt.plugins.groovy.graph.confs_ui.call(null,this$,deps_confs));
});
lt.plugins.groovy.graph.__BEH__on_show_dependencies = (function __BEH__on_show_dependencies(this$,deps_confs){lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.groovy.graph.dependency_graph);
if(cljs.core.truth_(deps_confs))
{lt.plugins.groovy.graph.render_confs.call(null,this$,deps_confs);
} else
{}
var temp__4092__auto__ = lt.plugins.groovy.graph.deps_by_conf_name.call(null,deps_confs,"compile");if(cljs.core.truth_(temp__4092__auto__))
{var deps = temp__4092__auto__;return lt.plugins.groovy.graph.render_deps.call(null,this$,deps_confs,"compile");
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy.graph","on-show-dependencies","lt.plugins.groovy.graph/on-show-dependencies",3356702407),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.graph.__BEH__on_show_dependencies,new cljs.core.Keyword(null,"desc","desc",1016984067),"Show dependency graph",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"graph.show.dependencies","graph.show.dependencies",3347099468),null], null), null));
lt.plugins.groovy.graph.dependency_graph = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.groovy.graph","dependency-graph","lt.plugins.groovy.graph/dependency-graph",4128469128));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.groovy')) {
goog.provide('lt.plugins.groovy');
goog.require('cljs.core');
goog.require('lt.objs.plugins');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.files');
goog.require('lt.plugins.groovy.graph');
goog.require('lt.plugins.groovy.graph');
goog.require('lt.objs.platform');
goog.require('lt.objs.popup');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.popup');
goog.require('lt.objs.notifos');
goog.require('lt.objs.proc');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.objs.command');
goog.require('lt.objs.platform');
goog.require('lt.objs.files');
goog.require('lt.objs.clients.tcp');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.plugins');
goog.require('lt.plugins.watches');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.clients.tcp');
goog.require('lt.util.load');
goog.require('clojure.string');
goog.require('lt.objs.sidebar.command');
goog.require('lt.plugins.watches');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.dialogs');
goog.require('lt.util.load');
goog.require('lt.objs.console');
goog.require('lt.objs.proc');
goog.require('lt.objs.console');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
lt.plugins.groovy.shell = lt.util.load.node_module.call(null,"shelljs");
lt.plugins.groovy.plugin_dir = lt.objs.plugins.find_plugin.call(null,"Groovy");
lt.plugins.groovy.binary_path = lt.objs.files.join.call(null,lt.plugins.groovy.plugin_dir,"./run-server.sh");
lt.plugins.groovy.server_path = lt.objs.files.join.call(null,lt.plugins.groovy.plugin_dir,"lib/ltserver.jar");
lt.plugins.groovy.__BEH__on_out = (function __BEH__on_out(this$,data){var out = data.toString();lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",3930752946)], null),cljs.core.str,out);
if((out.indexOf("Connected") > -1))
{lt.objs.notifos.done_working.call(null);
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connected","connected",4729661051),true], null));
} else
{return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",3930752946)], null),cljs.core.str,data);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","on-out","lt.plugins.groovy/on-out",1239098084),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__on_out,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));
lt.plugins.groovy.__BEH__on_error = (function __BEH__on_error(this$,data){var out = data.toString();if((new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)).indexOf("Connected") > -1))
{return null;
} else
{return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",3930752946)], null),cljs.core.str,data);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","on-error","lt.plugins.groovy/on-error",2638843290),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__on_error,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.error","proc.error",4143512802),null], null), null));
lt.plugins.groovy.__BEH__on_exit = (function __BEH__on_exit(this$,data){if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{} else
{lt.objs.notifos.done_working.call(null);
lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"We couldn't connect.",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),"Looks like there was an issue trying to connect\n                                              to the project. Here's what we got:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))], null)], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"close"], null)], null)], null));
lt.objs.clients.rem_BANG_.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
}
lt.objs.proc.kill_all.call(null,new cljs.core.Keyword(null,"procs","procs",1120844623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
return lt.object.destroy_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","on-exit","lt.plugins.groovy/on-exit",624270544),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__on_exit,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.exit","proc.exit",4162906152),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","connecting-notifier","lt.plugins.groovy/connecting-notifier",2578157599),new cljs.core.Keyword(null,"triggers","triggers",2516997421),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.groovy","on-exit","lt.plugins.groovy/on-exit",624270544),new cljs.core.Keyword("lt.plugins.groovy","on-error","lt.plugins.groovy/on-error",2638843290),new cljs.core.Keyword("lt.plugins.groovy","on-out","lt.plugins.groovy/on-out",1239098084)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,client){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",3951159101),client,new cljs.core.Keyword(null,"buffer","buffer",3930752946),""], null));
return null;
}));
lt.plugins.groovy.escape_spaces = (function escape_spaces(s){if(cljs.core._EQ_.call(null,lt.objs.files.separator,"\\"))
{return [cljs.core.str("\""),cljs.core.str(s),cljs.core.str("\"")].join('');
} else
{return s;
}
});
lt.plugins.groovy.bash_escape_spaces = (function bash_escape_spaces(s){if(cljs.core.truth_(s))
{return clojure.string.replace.call(null,s," ","\\ ");
} else
{return null;
}
});
lt.plugins.groovy.run_groovy = (function run_groovy(p__8566){var map__8568 = p__8566;var map__8568__$1 = ((cljs.core.seq_QMARK_.call(null,map__8568))?cljs.core.apply.call(null,cljs.core.hash_map,map__8568):map__8568);var info = map__8568__$1;var client = cljs.core.get.call(null,map__8568__$1,new cljs.core.Keyword(null,"client","client",3951159101));var name = cljs.core.get.call(null,map__8568__$1,new cljs.core.Keyword(null,"name","name",1017277949));var path = cljs.core.get.call(null,map__8568__$1,new cljs.core.Keyword(null,"path","path",1017337751));var obj = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.groovy","connecting-notifier","lt.plugins.groovy/connecting-notifier",2578157599),info);var client_id = lt.objs.clients.__GT_id.call(null,client);lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"port","port",1017351155),lt.objs.clients.tcp.port,new cljs.core.Keyword(null,"proc","proc",1017353928),obj], null));
lt.objs.notifos.working.call(null,"Connecting..");
return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"command","command",1964298941),lt.plugins.groovy.binary_path,new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.clients.tcp.port,client_id,lt.plugins.groovy.bash_escape_spaces.call(null,path)], null),new cljs.core.Keyword(null,"cwd","cwd",1014003170),lt.plugins.groovy.plugin_dir,new cljs.core.Keyword(null,"env","env",1014004831),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"LT_GROOVY_LOG","LT_GROOVY_LOG",4465086972),new cljs.core.Keyword("lt.plugins.groovy","enable-client-logging?","lt.plugins.groovy/enable-client-logging?",4091824316).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.groovy.groovy))], null),new cljs.core.Keyword(null,"obj","obj",1014014057),obj], null));
});
lt.plugins.groovy.check_groovy = (function check_groovy(obj){return cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"groovy","groovy",4071405440),(function (){var or__6364__auto__ = new cljs.core.Keyword("lt.plugins.groovy","groovy-exe","lt.plugins.groovy/groovy-exe",2429698647).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.groovy.groovy));if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return lt.plugins.groovy.shell.which("groovy");
}
})());
});
lt.plugins.groovy.check_server = (function check_server(obj){return cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"groovy-server","groovy-server",2729950548),lt.objs.files.exists_QMARK_.call(null,lt.plugins.groovy.server_path));
});
lt.plugins.groovy.handle_no_groovy = (function handle_no_groovy(client){lt.objs.clients.rem_BANG_.call(null,client);
lt.objs.notifos.done_working.call(null);
return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"We couldn't find Groovy.",new cljs.core.Keyword(null,"body","body",1016933652),"In order to evaluate in Groovy files, Groovy must be installed and on your system PATH.",new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Download Groovy",new cljs.core.Keyword(null,"action","action",3885920680),(function (){return lt.objs.platform.open.call(null,"http://gvmtool.net/");
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
});
lt.plugins.groovy.notify = (function notify(obj){var map__8570 = obj;var map__8570__$1 = ((cljs.core.seq_QMARK_.call(null,map__8570))?cljs.core.apply.call(null,cljs.core.hash_map,map__8570):map__8570);var client = cljs.core.get.call(null,map__8570__$1,new cljs.core.Keyword(null,"client","client",3951159101));var groovy_server = cljs.core.get.call(null,map__8570__$1,new cljs.core.Keyword(null,"groovy-server","groovy-server",2729950548));var path = cljs.core.get.call(null,map__8570__$1,new cljs.core.Keyword(null,"path","path",1017337751));var groovy = cljs.core.get.call(null,map__8570__$1,new cljs.core.Keyword(null,"groovy","groovy",4071405440));if((cljs.core.not.call(null,groovy)) || (cljs.core.empty_QMARK_.call(null,groovy)))
{lt.plugins.groovy.handle_no_groovy.call(null,client);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{lt.plugins.groovy.run_groovy.call(null,obj);
} else
{}
}
return obj;
});
lt.plugins.groovy.check_all = (function check_all(obj){return lt.plugins.groovy.notify.call(null,lt.plugins.groovy.check_server.call(null,lt.plugins.groovy.check_groovy.call(null,obj)));
});
lt.plugins.groovy.try_connect = (function try_connect(p__8571){var map__8573 = p__8571;var map__8573__$1 = ((cljs.core.seq_QMARK_.call(null,map__8573))?cljs.core.apply.call(null,cljs.core.hash_map,map__8573):map__8573);var info = cljs.core.get.call(null,map__8573__$1,new cljs.core.Keyword(null,"info","info",1017141280));var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info);var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"groovy.client","groovy.client",3165568285));lt.plugins.groovy.check_all.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"client","client",3951159101),client], null));
return client;
});
lt.plugins.groovy.__BEH__on_eval = (function __BEH__on_eval(editor){return lt.object.raise.call(null,lt.plugins.groovy.groovy,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.assoc.call(null,cljs.core.deref.call(null,editor).call(null,new cljs.core.Keyword(null,"info","info",1017141280)),new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.__GT_val.call(null,editor),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),0,new cljs.core.Keyword(null,"end","end",1014004813),lt.objs.editor.last_line.call(null,editor)], null))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","on-eval","lt.plugins.groovy/on-eval",624285258),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__on_eval,new cljs.core.Keyword(null,"desc","desc",1016984067),"Groovy: Eval current editor",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval","eval",1017029646),null], null), null));
lt.plugins.groovy.__BEH__on_eval__DOT__one = (function __BEH__on_eval__DOT__one(editor){var pos = lt.objs.editor.__GT_cursor.call(null,editor);var info = cljs.core.conj.call(null,new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)),(cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,editor))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.selection.call(null,editor),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,editor,"start")),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,editor,"end"))], null)], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",1014015430),pos,new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.line.call(null,editor,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos)),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos)], null)], null)));return lt.object.raise.call(null,lt.plugins.groovy.groovy,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),info], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","on-eval.one","lt.plugins.groovy/on-eval.one",656487106),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__on_eval__DOT__one,new cljs.core.Keyword(null,"desc","desc",1016984067),"Groovy: Eval current selection",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval.one","eval.one",1173589382),null], null), null));
lt.plugins.groovy.__BEH__eval_BANG_ = (function __BEH__eval_BANG_(this$,event){var map__8575 = event;var map__8575__$1 = ((cljs.core.seq_QMARK_.call(null,map__8575))?cljs.core.apply.call(null,cljs.core.hash_map,map__8575):map__8575);var origin = cljs.core.get.call(null,map__8575__$1,new cljs.core.Keyword(null,"origin","origin",4300251800));var info = cljs.core.get.call(null,map__8575__$1,new cljs.core.Keyword(null,"info","info",1017141280));lt.objs.notifos.working.call(null,"Evaluating groovy...");
return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.groovy","editor.eval.groovy",2695176721),new cljs.core.Keyword(null,"origin","origin",4300251800),origin,new cljs.core.Keyword(null,"info","info",1017141280),info,new cljs.core.Keyword(null,"create","create",3956577390),lt.plugins.groovy.try_connect], null)),new cljs.core.Keyword(null,"editor.eval.groovy","editor.eval.groovy",2695176721),info,new cljs.core.Keyword(null,"only","only",1017320222),origin);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","eval!","lt.plugins.groovy/eval!",2342640133),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__eval_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval!","eval!",1110791799),null], null), null));
lt.plugins.groovy.__BEH__on_clear_bindings = (function __BEH__on_clear_bindings(editor){var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));var cl = lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.clear.groovy","editor.clear.groovy",2933057826),new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),info,new cljs.core.Keyword(null,"create","create",3956577390),lt.plugins.groovy.try_connect], null));return lt.objs.clients.send.call(null,cl,new cljs.core.Keyword(null,"editor.clear.groovy","editor.clear.groovy",2933057826),info,new cljs.core.Keyword(null,"only","only",1017320222),editor);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","on-clear-bindings","lt.plugins.groovy/on-clear-bindings",2767221312),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__on_clear_bindings,new cljs.core.Keyword(null,"desc","desc",1016984067),"Clear cached bindings for this editor",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on.clear.bindings","on.clear.bindings",1493420144),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"clear-bindings","clear-bindings",3103631744),new cljs.core.Keyword(null,"desc","desc",1016984067),"Groovy: Clear bindings for current editor",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"on.clear.bindings","on.clear.bindings",1493420144));
} else
{return null;
}
})], null));
lt.plugins.groovy.notify_of_results = (function notify_of_results(editor,res){var seq__8580 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res));var chunk__8581 = null;var count__8582 = 0;var i__8583 = 0;while(true){
if((i__8583 < count__8582))
{var ln = cljs.core._nth.call(null,chunk__8581,i__8583);var lineNo_8590 = ((new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(ln) + new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res))) + -1);lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),clojure.string.join.call(null," ",new cljs.core.Keyword(null,"values","values",4485058708).cljs$core$IFn$_invoke$arity$1(ln)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),lineNo_8590,new cljs.core.Keyword(null,"start-line","start-line",3689311729),lineNo_8590], null));
{
var G__8591 = seq__8580;
var G__8592 = chunk__8581;
var G__8593 = count__8582;
var G__8594 = (i__8583 + 1);
seq__8580 = G__8591;
chunk__8581 = G__8592;
count__8582 = G__8593;
i__8583 = G__8594;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8580);if(temp__4092__auto__)
{var seq__8580__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8580__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8580__$1);{
var G__8595 = cljs.core.chunk_rest.call(null,seq__8580__$1);
var G__8596 = c__7112__auto__;
var G__8597 = cljs.core.count.call(null,c__7112__auto__);
var G__8598 = 0;
seq__8580 = G__8595;
chunk__8581 = G__8596;
count__8582 = G__8597;
i__8583 = G__8598;
continue;
}
} else
{var ln = cljs.core.first.call(null,seq__8580__$1);var lineNo_8599 = ((new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(ln) + new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res))) + -1);lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),clojure.string.join.call(null," ",new cljs.core.Keyword(null,"values","values",4485058708).cljs$core$IFn$_invoke$arity$1(ln)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),lineNo_8599,new cljs.core.Keyword(null,"start-line","start-line",3689311729),lineNo_8599], null));
{
var G__8600 = cljs.core.next.call(null,seq__8580__$1);
var G__8601 = null;
var G__8602 = 0;
var G__8603 = 0;
seq__8580 = G__8600;
chunk__8581 = G__8601;
count__8582 = G__8602;
i__8583 = G__8603;
continue;
}
}
} else
{return null;
}
}
break;
}
});
lt.plugins.groovy.__BEH__groovy_res = (function __BEH__groovy_res(editor,res){lt.objs.notifos.done_working.call(null,"Groovy evaluated");
var temp__4092__auto___8604 = new cljs.core.Keyword(null,"out","out",1014014656).cljs$core$IFn$_invoke$arity$1(res);if(cljs.core.truth_(temp__4092__auto___8604))
{var o_8605 = temp__4092__auto___8604;console.log(o_8605);
} else
{}
return lt.plugins.groovy.notify_of_results.call(null,editor,res);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","groovy-res","lt.plugins.groovy/groovy-res",2429694689),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__groovy_res,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"groovy.res","groovy.res",1460052530),null], null), null));
lt.plugins.groovy.notify_of_error = (function notify_of_error(editor,res){var lineNo = ((new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(res)) + new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res))) + -1);return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),new cljs.core.Keyword(null,"msg","msg",1014012659).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(res)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),lineNo,new cljs.core.Keyword(null,"start-line","start-line",3689311729),lt.plugins.groovy.lineNo_SINGLEQUOTE_], null));
});
lt.plugins.groovy.__BEH__groovy_err = (function __BEH__groovy_err(editor,res){lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"groovy.res","groovy.res",1460052530),res);
return lt.plugins.groovy.notify_of_error.call(null,editor,res);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","groovy-err","lt.plugins.groovy/groovy-err",2429698598),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__groovy_err,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"groovy.err","groovy.err",1460040439),null], null), null));
lt.plugins.groovy.__BEH__on_project_provided = (function __BEH__on_project_provided(this$,path){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project-path","project-path",1907176907),path], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","on-project-provided","lt.plugins.groovy/on-project-provided",3507617989),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__on_project_provided,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project.provided","project.provided",1503595658),null], null), null));
lt.plugins.groovy.__BEH__connect = (function __BEH__connect(this$,path){lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"project.provided","project.provided",1503595658),path);
return lt.plugins.groovy.try_connect.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",1017337751),path], null)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","connect","lt.plugins.groovy/connect",2930767210),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__connect,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connect","connect",1965255772),null], null), null));
lt.plugins.groovy.__BEH__client_enable_logging = (function __BEH__client_enable_logging(this$){return lt.object.merge_BANG_.call(null,lt.plugins.groovy.groovy,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.groovy","enable-client-logging?","lt.plugins.groovy/enable-client-logging?",4091824316),true], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","client-enable-logging","lt.plugins.groovy/client-enable-logging",4685259227),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__client_enable_logging,new cljs.core.Keyword(null,"desc","desc",1016984067),"Groovy: Log groovy client output to lt_groovy.log",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true);
lt.plugins.groovy.__BEH__on_gradle_progress = (function __BEH__on_gradle_progress(this$,info){return lt.objs.notifos.msg_STAR_.call(null,[cljs.core.str("Gradle progress: "),cljs.core.str(new cljs.core.Keyword(null,"msg","msg",1014012659).cljs$core$IFn$_invoke$arity$1(info))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","on-gradle-progress","lt.plugins.groovy/on-gradle-progress",597431301),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__on_gradle_progress,new cljs.core.Keyword(null,"desc","desc",1016984067),"Reporting of progress from gradle related tasks",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gradle.progress","gradle.progress",4086975334),null], null), null));
lt.plugins.groovy.__BEH__on_gradle_err = (function __BEH__on_gradle_err(this$,info){lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Gradle failure: "),cljs.core.str(new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(info))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"error",new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
return lt.objs.console.error.call(null,[cljs.core.str(new cljs.core.Keyword(null,"cause","cause",1108338651).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(info)))].join(''));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","on-gradle-err","lt.plugins.groovy/on-gradle-err",1876247181),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__on_gradle_err,new cljs.core.Keyword(null,"desc","desc",1016984067),"Gradle error",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gradle.err","gradle.err",1353131696),null], null), null));
lt.plugins.groovy.__BEH__on_gradle_execute_err = (function __BEH__on_gradle_execute_err(this$,info){lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Gradle failure")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"error",new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
return lt.objs.console.error.call(null,cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(info)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","on-gradle-execute-err","lt.plugins.groovy/on-gradle-execute-err",3493810229),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__on_gradle_execute_err,new cljs.core.Keyword(null,"desc","desc",1016984067),"Error executing gradle task(s)",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gradle.execute.err","gradle.execute.err",2054904759),null], null), null));
lt.plugins.groovy.__BEH__on_gradle_execute_success = (function __BEH__on_gradle_execute_success(this$,info){return lt.objs.notifos.msg_STAR_.call(null,[cljs.core.str("Gradle success!")].join(''));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","on-gradle-execute-success","lt.plugins.groovy/on-gradle-execute-success",3490845271),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__on_gradle_execute_success,new cljs.core.Keyword(null,"desc","desc",1016984067),"Succesful gradle task(s) execution",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gradle.execute.success","gradle.execute.success",988062293),null], null), null));
lt.plugins.groovy.__BEH__on_gradle_projectinfo = (function __BEH__on_gradle_projectinfo(this$,info){lt.object.merge_BANG_.call(null,lt.plugins.groovy.groovy,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.groovy","gradle-project-info","lt.plugins.groovy/gradle-project-info",2486425516),info], null));
return lt.object.assoc_in_BANG_.call(null,lt.objs.command.manager,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commands","commands",4706336250),new cljs.core.Keyword(null,"gradle.task.select","gradle.task.select",4003269072),new cljs.core.Keyword(null,"options","options",4059396624)], null),lt.plugins.groovy.add_selector.call(null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","on-gradle-projectinfo","lt.plugins.groovy/on-gradle-projectinfo",3032946675),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__on_gradle_projectinfo,new cljs.core.Keyword(null,"desc","desc",1016984067),"Gradle project model information",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gradle.projectinfo","gradle.projectinfo",1576218514),null], null), null));
lt.plugins.groovy.__BEH__on_gradle_execute = (function __BEH__on_gradle_execute(this$,task){return lt.objs.clients.send.call(null,lt.objs.clients.by_name.call(null,"Groovy"),new cljs.core.Keyword(null,"gradle.execute","gradle.execute",1349779520),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tasks","tasks",1124036352),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(task)], null)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","on-gradle-execute","lt.plugins.groovy/on-gradle-execute",3546228893),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__on_gradle_execute,new cljs.core.Keyword(null,"desc","desc",1016984067),"Gradle execute task(s)",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gradle.execute","gradle.execute",1349779520),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","groovy-lang","lt.plugins.groovy/groovy-lang",2937586893),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"groovy.lang","groovy.lang",1959416640),null], null), null));
lt.plugins.groovy.groovy = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.groovy","groovy-lang","lt.plugins.groovy/groovy-lang",2937586893));
lt.objs.sidebar.clients.add_connector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Groovy",new cljs.core.Keyword(null,"desc","desc",1016984067),"Select a directory to serve as the root of your groovy project. (Must be a gradle project)",new cljs.core.Keyword(null,"connect","connect",1965255772),(function (){return lt.objs.dialogs.dir.call(null,lt.plugins.groovy.groovy,new cljs.core.Keyword(null,"connect","connect",1965255772));
})], null));
lt.plugins.groovy.__BEH__set_selected = (function __BEH__set_selected(this$,v){return lt.objs.sidebar.command.exec_active_BANG_.call(null,v);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","set-selected","lt.plugins.groovy/set-selected",2986854054),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__set_selected,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select","select",4402849902),null], null), null));
lt.plugins.groovy.selector = (function selector(opts){var G__8585 = lt.objs.sidebar.command.filter_list.call(null,opts);lt.object.add_behavior_BANG_.call(null,G__8585,new cljs.core.Keyword("lt.plugins.groovy","set-selected","lt.plugins.groovy/set-selected",2986854054));
return G__8585;
});
lt.plugins.groovy.get_tasks = (function get_tasks(){return new cljs.core.Keyword(null,"tasks","tasks",1124036352).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("lt.plugins.groovy","gradle-project-info","lt.plugins.groovy/gradle-project-info",2486425516).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.groovy.groovy)));
});
lt.plugins.groovy.add_selector = (function add_selector(){return lt.plugins.groovy.selector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),lt.plugins.groovy.get_tasks.call(null),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p1__8587_SHARP_,p2__8588_SHARP_,p3__8589_SHARP_,p4__8586_SHARP_){return [cljs.core.str("<p>"),cljs.core.str(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(p4__8586_SHARP_)),cljs.core.str("</p>"),cljs.core.str("<p class='binding'>"),cljs.core.str(new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(p4__8586_SHARP_)),cljs.core.str("</p>")].join('');
})], null));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"gradle.task.select","gradle.task.select",4003269072),new cljs.core.Keyword(null,"desc","desc",1016984067),"Groovy: Select Gradle task",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.groovy.add_selector.call(null),new cljs.core.Keyword(null,"exec","exec",1017031683),(function (item){return lt.object.raise.call(null,lt.plugins.groovy.groovy,new cljs.core.Keyword(null,"gradle.execute","gradle.execute",1349779520),item);
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"gradle.show.deps","gradle.show.deps",809421088),new cljs.core.Keyword(null,"desc","desc",1016984067),"Groovy: Shows gradle dependencies",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.plugins.groovy.graph.dependency_graph,new cljs.core.Keyword(null,"graph.show.dependencies","graph.show.dependencies",3347099468),new cljs.core.Keyword(null,"dependencies","dependencies",1517678747).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("lt.plugins.groovy","gradle-project-info","lt.plugins.groovy/gradle-project-info",2486425516).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.groovy.groovy))));
})], null));
}

//# sourceMappingURL=groovy_compiled.js.map