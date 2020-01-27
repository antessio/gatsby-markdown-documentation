FROM node:12-alpine
RUN apk update && apk add build-base autoconf automake libtool pkgconfig nasm git curl
RUN apk add --virtual build-dependencies build-base gcc wget
RUN curl https://sh.rustup.rs -sSf | sh -s -- -y
RUN npm install --global gatsby-cli && gatsby telemetry --disable
RUN ~/.cargo/bin/cargo install svgbob_cli

WORKDIR /app
