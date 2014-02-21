#!/usr/bin/env bash

# Usage
# run_server.sh <lt_port> <lt_client_id>

GROOVY_BIN=`which groovy`
GROOVY_ALL_JAR=`find "$GROOVY_BIN/../../embeddable" -type f ! -name "*-indy.jar" | head -n 1`

java -cp "$GROOVY_ALL_JAR:lib/ltgroovy.jar" lt.groovy.LTServer $@
