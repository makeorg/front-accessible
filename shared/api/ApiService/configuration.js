/* @flow */
import { env } from 'Shared/env';

export const HOSTNAME =
  (env.isClient() && window.location && window.location.hostname) || null;

export const LOCATION_PARAMS =
  (env.isClient() && window.location && window.location.search) || '';

export const API_URL = env.apiUrl() || 'http://localhost:9000';

export const NODE_API_BASE = '';
