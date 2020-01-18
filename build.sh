#!/bin/bash -x
echo "start shifter"
RESULT=$(python3 ./shifter/run.py start)
echo $RESULT
echo "parse url"
export CONTAINER_URL=$(node ./shifter/getContainerURL.js "$RESULT")
echo "shifter: $CONTAINER_URL"
echo "build"
npm run build

