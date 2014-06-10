#!/usr/bin/env bash

# Usage
# run_server.sh <lt_port> <lt_client_id>

echo $3

GROOVY_BIN=`which groovy`
GROOVY_BIN_FOLDER=`dirname $GROOVY_BIN`
GROOVY_ALL_JAR=`find "$GROOVY_BIN_FOLDER/../embeddable" -type f ! -name "*-indy.jar" | head -n 1`

java -Dfile.encoding=UTF-8 -cp "$GROOVY_ALL_JAR:lib/ltgroovy.jar" lt.groovy.LTServer $1 $2 "$3"
