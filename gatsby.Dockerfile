FROM node:12-alpine as builder
# Get the necessary build tools
RUN apk update && apk add build-base autoconf automake libtool pkgconfig nasm


# Get a clean image with gatsby-cli and the pre-built node modules
FROM node:12-alpine
RUN apk --no-cache add git
RUN npm install --global gatsby-cli && gatsby telemetry --disable
#COPY --from=builder /app/node_modules /save/node_modules
WORKDIR /app
