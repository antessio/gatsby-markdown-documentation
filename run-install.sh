#!/bin/bash
echo "Running 'npm install' inside webapp"
docker run -t -i --rm \
-v $PWD:/app/ \
--workdir '/app/webapp' \
--entrypoint '/bin/sh' gatsby \
-c 'npm install' 