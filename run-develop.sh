#!/bin/bash
if [ -z "$GATSBY_DOCUMENTATION_PATH" ]
then
      echo "\$GATSBY_DOCUMENTATION_PATH is empty"
      exit 1
fi
docker run -d -t -i --rm \
-v $GATSBY_DOCUMENTATION_PATH:/app/webapp/content \
-v $PWD:/app/ \
-p '8000:8000' --workdir '/app/webapp' \
--entrypoint '/bin/sh' gatsby:v2 -c 'gatsby develop -H 0.0.0.0' 