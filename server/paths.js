const path = require('path');

const BUILD_DIR = path.resolve(__dirname, '..', 'dist');
const SERVER_DIR = path.resolve(__dirname, '.');

module.exports = {
  BUILD_DIR,
  SERVER_DIR
};
