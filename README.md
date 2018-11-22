# Tech

# Stack

brew to install postgress psql
nodejs and npm
yarn
docker
digital ocean
dokku
heroku

# Basic Postgres Cmds

https://www.codementor.io/engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb

## Installing ext on Postgress

http://www.postgresqltutorial.com/postgresql-uuid/

## Postgres Setup

psql -U postgres
create role vdiaz1130 with login password 'testtest';
alter role vdiaz1130 createdb;
create database graphql_ts_server_boilerplate;
create database graphql_ts_server_boilerplate_test;
\connect graphql_ts_server_boilerplate;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
\connect graphql_ts_server_boilerplate_test;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
GRANT ALL PRIVILEGES ON DATABASE graphql_ts_server_boilerplate TO viaz1130;
GRANT ALL PRIVILEGES ON DATABASE graphql_ts_server_boilerplate_test TO viaz1130;
\list

# Graphql realm error:

Ensure modules are using the same versions across node_modules

# SSH Error:

https://www.digitalocean.com/community/questions/error-permission-denied-publickey-when-i-try-to-ssh?answer=44730

# Heroku

https://devcenter.heroku.com/articles/heroku-cli
https://aqueous-sands-19635.herokuapp.com/ | https://git.heroku.com/aqueous-sands-19635.git

## Heroku Deployment: See deploy_server_hk.sh

# Netlify

Setup Netlify<br>
Used for redirects /\* /index.html 200<br>

## Run:

netlify login<br>
netlify init<br>
./deploy_web # runs netlify deploy<br>

Note: run yarn build:web (will build common and controller).
Note: May need to deploy dependent server updates (e.g. api updates)

# env.production flag set during deployment ??

# Setup node for Docker

https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

NOTE: Dockerfile name is case-sensitive on mac and not Windows.
Error response from daemon: Cannot locate specified Dockerfile: Dockerfile

Run build on common and server
lerna run build --scope={@abb/common,@abb/server,@abb/common,@abb/controller}

# Docker build

See Dockerfile for settings

# Deploy to Dokku via Docker

run deploy_server_do.sh
