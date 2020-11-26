const path = require('path');
export const { PATH_USER } = require('Shared/api/UserApiService');

export const BUILD_DIR = path.resolve(__dirname, '..', 'dist');
export const SERVER_DIR = path.resolve(__dirname, '.');
export const IMAGES_DIR = path.resolve(__dirname, '.', 'images');
export const REPORTS_DIR = path.resolve(__dirname, '.', 'reports');
export const HTML_DIR = path.resolve(__dirname, '.', 'static-pages');
export const DOC_DIR = path.resolve(__dirname, '..', 'storybook-static');
export const ASSETS_DIR = path.resolve(__dirname, '.', 'static-pages/assets');
export const VERSION_PATH = path.join(BUILD_DIR, 'version');
export const FAVICON_PATH = path.join(BUILD_DIR, 'favicon', 'icon_96x96.png');
