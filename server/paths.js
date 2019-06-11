const path = require('path');

const BUILD_DIR = path.resolve(__dirname, '..', 'dist');
const SERVER_DIR = path.resolve(__dirname, '.');
const IMAGES_DIR = path.resolve(__dirname, '.', 'images');
const DOC_DIR = path.resolve(__dirname, '..', 'styleguide');
const VERSION_PATH = path.join(BUILD_DIR, 'version');
const FAVICON_PATH = path.join(BUILD_DIR, 'favicon', 'icon_96x96.png');

module.exports = {
  BUILD_DIR,
  SERVER_DIR,
  IMAGES_DIR,
  DOC_DIR,
  VERSION_PATH,
  FAVICON_PATH,
};
