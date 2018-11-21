#! /bin/bash
yarn run build:server
docker build -t vdiaz1130/abb:latest .
docker push vdiaz1130/abb:1.0.0
ssh rppt@206.189.205.117 "docker pull vdiaz1130/abb:latest && docker tag vdiaz1130/abb:1.0.0 dokku/abb:latest && dokku tags:deploy abb latest"
