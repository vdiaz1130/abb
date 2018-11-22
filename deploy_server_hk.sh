#! /bin/bash
yarn run build:server
heroku container:push --app=aqueous-sands-19635 web
heroku container:release --app=aqueous-sands-19635 web
