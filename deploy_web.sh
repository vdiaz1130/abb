#! /bin/bash
yarn run build:web
netlify deploy
netlify deploy --prod
