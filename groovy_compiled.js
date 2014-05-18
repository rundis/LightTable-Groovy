if(!lt.util.load.provided_QMARK_('lt.plugins.groovy')) {
goog.provide('lt.plugins.groovy');
goog.require('cljs.core');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
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
lt.plugins.groovy.run_groovy = (function run_groovy(p__8511){var map__8513 = p__8511;var map__8513__$1 = ((cljs.core.seq_QMARK_.call(null,map__8513))?cljs.core.apply.call(null,cljs.core.hash_map,map__8513):map__8513);var info = map__8513__$1;var client = cljs.core.get.call(null,map__8513__$1,new cljs.core.Keyword(null,"client","client",3951159101));var name = cljs.core.get.call(null,map__8513__$1,new cljs.core.Keyword(null,"name","name",1017277949));var path = cljs.core.get.call(null,map__8513__$1,new cljs.core.Keyword(null,"path","path",1017337751));var obj = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.groovy","connecting-notifier","lt.plugins.groovy/connecting-notifier",2578157599),info);var client_id = lt.objs.clients.__GT_id.call(null,client);lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"port","port",1017351155),lt.objs.clients.tcp.port,new cljs.core.Keyword(null,"proc","proc",1017353928),obj], null));
lt.objs.notifos.working.call(null,"Connecting..");
return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"command","command",1964298941),lt.plugins.groovy.binary_path,new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.clients.tcp.port,client_id,lt.plugins.groovy.bash_escape_spaces.call(null,path)], null),new cljs.core.Keyword(null,"cwd","cwd",1014003170),lt.plugins.groovy.plugin_dir,new cljs.core.Keyword(null,"env","env",1014004831),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"LT_GROOVY_LOG","LT_GROOVY_LOG",4465086972),new cljs.core.Keyword("lt.plugins.groovy","enable-client-logging?","lt.plugins.groovy/enable-client-logging?",4091824316).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.groovy.groovy))], null),new cljs.core.Keyword(null,"obj","obj",1014014057),obj], null));
});
lt.plugins.groovy.check_groovy = (function check_groovy(obj){return cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"groovy","groovy",4071405440),(function (){var or__6813__auto__ = new cljs.core.Keyword("lt.plugins.groovy","groovy-exe","lt.plugins.groovy/groovy-exe",2429698647).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.groovy.groovy));if(cljs.core.truth_(or__6813__auto__))
{return or__6813__auto__;
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
lt.plugins.groovy.notify = (function notify(obj){var map__8515 = obj;var map__8515__$1 = ((cljs.core.seq_QMARK_.call(null,map__8515))?cljs.core.apply.call(null,cljs.core.hash_map,map__8515):map__8515);var client = cljs.core.get.call(null,map__8515__$1,new cljs.core.Keyword(null,"client","client",3951159101));var groovy_server = cljs.core.get.call(null,map__8515__$1,new cljs.core.Keyword(null,"groovy-server","groovy-server",2729950548));var path = cljs.core.get.call(null,map__8515__$1,new cljs.core.Keyword(null,"path","path",1017337751));var groovy = cljs.core.get.call(null,map__8515__$1,new cljs.core.Keyword(null,"groovy","groovy",4071405440));if((cljs.core.not.call(null,groovy)) || (cljs.core.empty_QMARK_.call(null,groovy)))
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
lt.plugins.groovy.try_connect = (function try_connect(p__8516){var map__8518 = p__8516;var map__8518__$1 = ((cljs.core.seq_QMARK_.call(null,map__8518))?cljs.core.apply.call(null,cljs.core.hash_map,map__8518):map__8518);var info = cljs.core.get.call(null,map__8518__$1,new cljs.core.Keyword(null,"info","info",1017141280));var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info);var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"groovy.client","groovy.client",3165568285));lt.plugins.groovy.check_all.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"client","client",3951159101),client], null));
return client;
});
lt.plugins.groovy.__BEH__on_eval = (function __BEH__on_eval(editor){return lt.object.raise.call(null,lt.plugins.groovy.groovy,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.assoc.call(null,cljs.core.deref.call(null,editor).call(null,new cljs.core.Keyword(null,"info","info",1017141280)),new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.__GT_val.call(null,editor),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),0,new cljs.core.Keyword(null,"end","end",1014004813),lt.objs.editor.last_line.call(null,editor)], null))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","on-eval","lt.plugins.groovy/on-eval",624285258),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__on_eval,new cljs.core.Keyword(null,"desc","desc",1016984067),"Groovy: Eval current editor",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval","eval",1017029646),null], null), null));
lt.plugins.groovy.__BEH__on_eval__DOT__one = (function __BEH__on_eval__DOT__one(editor){var pos = lt.objs.editor.__GT_cursor.call(null,editor);var info = cljs.core.conj.call(null,new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)),(cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,editor))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.selection.call(null,editor),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,editor,"start")),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,editor,"end"))], null)], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",1014015430),pos,new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.line.call(null,editor,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos)),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos)], null)], null)));return lt.object.raise.call(null,lt.plugins.groovy.groovy,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),info], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","on-eval.one","lt.plugins.groovy/on-eval.one",656487106),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__on_eval__DOT__one,new cljs.core.Keyword(null,"desc","desc",1016984067),"Groovy: Eval current selection",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval.one","eval.one",1173589382),null], null), null));
lt.plugins.groovy.__BEH__eval_BANG_ = (function __BEH__eval_BANG_(this$,event){var map__8520 = event;var map__8520__$1 = ((cljs.core.seq_QMARK_.call(null,map__8520))?cljs.core.apply.call(null,cljs.core.hash_map,map__8520):map__8520);var origin = cljs.core.get.call(null,map__8520__$1,new cljs.core.Keyword(null,"origin","origin",4300251800));var info = cljs.core.get.call(null,map__8520__$1,new cljs.core.Keyword(null,"info","info",1017141280));lt.objs.notifos.working.call(null,"Evaluating groovy...");
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
lt.plugins.groovy.notify_of_results = (function notify_of_results(editor,res){var seq__8525 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res));var chunk__8526 = null;var count__8527 = 0;var i__8528 = 0;while(true){
if((i__8528 < count__8527))
{var ln = cljs.core._nth.call(null,chunk__8526,i__8528);var lineNo_8529 = ((new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(ln) + new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res))) + -1);lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),clojure.string.join.call(null," ",new cljs.core.Keyword(null,"values","values",4485058708).cljs$core$IFn$_invoke$arity$1(ln)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),lineNo_8529,new cljs.core.Keyword(null,"start-line","start-line",3689311729),lineNo_8529], null));
{
var G__8530 = seq__8525;
var G__8531 = chunk__8526;
var G__8532 = count__8527;
var G__8533 = (i__8528 + 1);
seq__8525 = G__8530;
chunk__8526 = G__8531;
count__8527 = G__8532;
i__8528 = G__8533;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8525);if(temp__4092__auto__)
{var seq__8525__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8525__$1))
{var c__7561__auto__ = cljs.core.chunk_first.call(null,seq__8525__$1);{
var G__8534 = cljs.core.chunk_rest.call(null,seq__8525__$1);
var G__8535 = c__7561__auto__;
var G__8536 = cljs.core.count.call(null,c__7561__auto__);
var G__8537 = 0;
seq__8525 = G__8534;
chunk__8526 = G__8535;
count__8527 = G__8536;
i__8528 = G__8537;
continue;
}
} else
{var ln = cljs.core.first.call(null,seq__8525__$1);var lineNo_8538 = ((new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(ln) + new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res))) + -1);lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),clojure.string.join.call(null," ",new cljs.core.Keyword(null,"values","values",4485058708).cljs$core$IFn$_invoke$arity$1(ln)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),lineNo_8538,new cljs.core.Keyword(null,"start-line","start-line",3689311729),lineNo_8538], null));
{
var G__8539 = cljs.core.next.call(null,seq__8525__$1);
var G__8540 = null;
var G__8541 = 0;
var G__8542 = 0;
seq__8525 = G__8539;
chunk__8526 = G__8540;
count__8527 = G__8541;
i__8528 = G__8542;
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
var temp__4092__auto___8543 = new cljs.core.Keyword(null,"out","out",1014014656).cljs$core$IFn$_invoke$arity$1(res);if(cljs.core.truth_(temp__4092__auto___8543))
{var o_8544 = temp__4092__auto___8543;console.log(o_8544);
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
lt.plugins.groovy.__BEH__on_project_provided = (function __BEH__on_project_provided(this$,path){cljs.core.println.call(null,[cljs.core.str("Project provided: "),cljs.core.str(path)].join(''));
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project-path","project-path",1907176907),path], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","on-project-provided","lt.plugins.groovy/on-project-provided",3507617989),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__on_project_provided,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project.provided","project.provided",1503595658),null], null), null));
lt.plugins.groovy.__BEH__connect = (function __BEH__connect(this$,path){lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"project.provided","project.provided",1503595658),path);
return lt.plugins.groovy.try_connect.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",1017337751),path], null)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","connect","lt.plugins.groovy/connect",2930767210),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__connect,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connect","connect",1965255772),null], null), null));
lt.plugins.groovy.__BEH__client_enable_logging = (function __BEH__client_enable_logging(this$){return lt.object.merge_BANG_.call(null,lt.plugins.groovy.groovy,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.groovy","enable-client-logging?","lt.plugins.groovy/enable-client-logging?",4091824316),true], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","client-enable-logging","lt.plugins.groovy/client-enable-logging",4685259227),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__client_enable_logging,new cljs.core.Keyword(null,"desc","desc",1016984067),"Groovy: Log groovy client output to lt_groovy.log",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true);
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","groovy-lang","lt.plugins.groovy/groovy-lang",2937586893),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"groovy.lang","groovy.lang",1959416640),null], null), null));
lt.plugins.groovy.groovy = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.groovy","groovy-lang","lt.plugins.groovy/groovy-lang",2937586893));
lt.objs.sidebar.clients.add_connector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Groovy",new cljs.core.Keyword(null,"desc","desc",1016984067),"Select a directory to serve as the root of your groovy project. (Must be a gradle project)",new cljs.core.Keyword(null,"connect","connect",1965255772),(function (){return lt.objs.dialogs.dir.call(null,lt.plugins.groovy.groovy,new cljs.core.Keyword(null,"connect","connect",1965255772));
})], null));
}

//# sourceMappingURL=groovy_compiled.js.map