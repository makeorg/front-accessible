/* @flow */
import { env } from 'Shared/env';

export const HOSTNAME =
  (typeof window !== 'undefined' &&
    window &&
    window.location &&
    window.location.hostname) ||
  null;
export const LOCATION_PARAMS =
  (typeof window !== 'undefined' &&
    window &&
    window.location &&
    window.location.search) ||
  '';

export const BROWSER_API_URL =
  (typeof window !== 'undefined' &&
    window &&
    window.API_URL &&
    window.API_URL !== '__API_URL__' &&
    window.API_URL) ||
  null;

export const API_URL =
  BROWSER_API_URL || process.env.API_URL || 'http://localhost:9000';
export const NODE_API_BASE = env.isDev() ? 'http://localhost:9009' : '';
