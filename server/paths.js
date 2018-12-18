const path = require('path');

const BUILD_DIR = path.resolve(__dirname, '..', 'dist');
const SERVER_DIR = path.resolve(__dirname, '.');
const IMAGES_DIR = path.resolve(__dirname, '.', 'images');

module.exports = {
  BUILD_DIR,
  SERVER_DIR,
  IMAGES_DIR
};
