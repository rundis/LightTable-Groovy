#!/usr/bin/env bash

# Usage
# run_server.sh <lt_port> <lt_client_id>


cd groovy-src
groovy LTServer.groovy $@
