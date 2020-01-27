## Steps to run 

- build the docker image (this will take a while)

  `./build.sh`

- install the node dependencies (this will take a while)

  `./run-install`

- run gatsby in develop mode

  `GATSBY_DOCUMENTATION_PATH=<documentation absolute path> ./run-develop.sh`

  this will run a container named `gatsby_documentation` and tail on container logs

- to stop the container

  `./run-stop.sh`

  this will kill the container named `gatsby_documentation`
