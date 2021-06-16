import webpack from 'webpack';
import path from 'path';
import { merge } from 'webpack-merge';
import { clientConfig, serverConfig } from './base.config.babel';

// Define env file path depending from NODE_ENV
let envConfigPath = path.resolve(__dirname, '..', '.env');
if (process.env.NODE_ENV === 'development') {
  envConfigPath = path.resolve(__dirname, '..', '.env.local');
}
if (process.env.NODE_ENV === 'ci') {
  envConfigPath = path.resolve(__dirname, '..', '.env.ci');
}

// Build client and server configurations
const client = clientConfig(envConfigPath);
const server = serverConfig(envConfigPath);

// Extra configurations depending from NODE_ENV
if (process.env.NODE_ENV === 'development') {
  client.mode = 'development';
  server.mode = 'development';
  client.entry.push('webpack-hot-middleware/client');
  client.plugins.push(new webpack.HotModuleReplacementPlugin());
} else {
  client.mode = 'production';
  server.mode = 'production';
}

// Merging client and server configurations
const webpackConfig = [merge(client), merge(server)];

// eslint-disable-next-line import/no-default-export
export default webpackConfig;
