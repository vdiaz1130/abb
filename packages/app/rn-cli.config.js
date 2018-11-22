const blacklist = require('metro-config/src/defaults/blacklist');
const getConfig = require('metro-bundler-config-yarn-workspaces');
const path = require('path');

module.exports = getConfig(__dirname, {
  nodeModules: path.join(__dirname, '../..')
});
