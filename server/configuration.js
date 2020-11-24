import { env } from 'Shared/env';

export const proxyTargetApiUrl =
  env.proxyTargetApiUrl() || env.apiUrl() || 'http://localhost:9000';
export const apiUrl = env.apiUrl() || 'http://localhost:9000';
export const frontUrl = env.frontUrl() || 'https://www.preprod.makeorg.tech';
export const port = env.port() || 9009;
export const host = env.host() || 'localhost';
