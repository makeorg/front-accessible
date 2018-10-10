const path = require('path');


const BUILD_DIR = path.resolve(__dirname, '..', 'dist');
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

module.exports = {
  BUILD_DIR,
  PUBLIC_DIR
};
