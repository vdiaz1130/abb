# Tech

brew to install postgress psql
nodejs and npm
yarn
docker
digital ocean
dokku

Basic PostGres Cmds
https://www.codementor.io/engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb

Installing ext on Postgress
http://www.postgresqltutorial.com/postgresql-uuid/

Postgres Seup
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

Graphql realm error:
Ensure modules are using the same versions across node_modules

Run build on common and server
lerna run build --scope={@abb/common,@abb/server,@abb/common,@abb/controller}

Docker build
See Dockerfile for settings

Deploy to Dokku via Docker
run deploy_server_do.sh
