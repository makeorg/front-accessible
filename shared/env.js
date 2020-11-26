import { env as processEnv } from 'Shared/process';

const isClient = () => typeof window !== 'undefined' && !!window;
const isClientWithSSR = () => isClient() && window.ENV !== '___ENV___';

const ENV =
  (isClientWithSSR() && window.ENV) ||
  (isClient() ? process.env.NODE_ENV : processEnv.NODE_ENV);
const API_URL =
  (isClientWithSSR() && window.API_URL) ||
  (isClient() ? process.env.API_URL : processEnv.API_URL);
const FRONT_URL =
  (isClientWithSSR() && window.FRONT_URL) ||
  (isClient() ? process.env.FRONT_URL : processEnv.FRONT_URL);

const HOST = isClient() ? process.env.HOST : processEnv.HOST;
const HTTPS = isClient() ? process.env.HTTPS : processEnv.HTTPS;
const PORT = isClient() ? process.env.PORT : processEnv.PORT;
const PROXY_TARGET_API_URL = isClient()
  ? process.env.PROXY_TARGET_API_URL
  : processEnv.PROXY_TARGET_API_URL;

const isDev = () => ENV === 'development';
const isTest = () => ENV === 'test';
const isProduction = () => ENV === 'production';
const withDevCerts = () => HTTPS === 'true';
const isNone = () => !ENV;
const apiUrl = () => API_URL;
const host = () => HOST;
const port = () => PORT;
const proxyTargetApiUrl = () => PROXY_TARGET_API_URL;
const frontUrl = () => FRONT_URL;
const nodeApiBase = () => (isDev() ? 'https://local.makeorg.tech:9009' : '');

export const env = {
  isDev,
  isNone,
  isTest,
  isProduction,
  apiUrl,
  nodeApiBase,
  isClient,
  isClientWithSSR,
  withDevCerts,
  port,
  proxyTargetApiUrl,
  frontUrl,
  host,
};
