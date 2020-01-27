#!/bin/bash
echo "This will delete your webapp folder and create a new one"
read -p "Press enter to continue"
rm -Rf ./webapp

docker run -t -i --rm \
-v $PWD:/app/ \
--workdir '/app/webapp' \
--entrypoint '/bin/sh' gatsby \
-c 'gatsby new webapp && npm install --save gatsby-source-filesystem gatsby-transformer-remark gatsby-plugin-emotion @emotion/core @emotion/styled gatsby-plugin-typography react-typography typography' 