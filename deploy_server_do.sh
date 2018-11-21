#! /bin/bash
yarn run build:server
docker build -t vdiaz1130/abb:latest .
docker push vdiaz1130/abb:latest
ssh root@206.189.205.117 "docker pull vdiaz1130/abb:latest && docker tag vdiaz1130/abb:latest dokku/abb:latest && dokku tags:deploy abb latest"
