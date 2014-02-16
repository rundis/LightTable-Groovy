(ns lt.plugins.groovy
  (:require [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd]
            [lt.objs.proc :as proc]
            [lt.object :as object]
            [lt.objs.sidebar.clients :as scl]
            [lt.objs.dialogs :as dialogs]
            [lt.objs.console :as console]
            [lt.objs.notifos :as notifos]
            [lt.plugins.watches :as watches]
            [lt.objs.editor :as ed]
            [lt.util.load :as load]
            [lt.objs.files :as files]
            [lt.objs.plugins :as plugins]
            [lt.objs.clients :as clients]
            [lt.objs.clients.tcp :as tcp]
            [lt.objs.popup :as popup]
            [lt.objs.eval :as eval])
  (:require-macros [lt.macros :refer [behavior]]))


(cmd/exec! :groovy-command)
