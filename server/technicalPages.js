import { env } from 'Shared/env';

const fs = require('fs');
const { VERSION_PATH } = require('./paths');

let versionData;
try {
  versionData = fs.readFileSync(VERSION_PATH, 'utf8');
} catch (error) {
  if (error.code === 'ENOENT') {
    // eslint-disable-next-line no-console
    console.error('Version file not found');
  } else {
    // eslint-disable-next-line no-console
    console.error('Failed to load version file');
  }
  versionData = '';
}

export function renderVersion(req, res) {
  try {
    res.json(JSON.parse(versionData));
  } catch (error) {
    res.status(404).send('Version file not found');
  }
}

export function renderRobot(req, res) {
  const robotContent = env.contextEnvName() === 'prod'
    ? 'User-agent: *\nAllow: /' : 'User-agent: *\nDisallow: /';
  res.type('text/plain');
  res.send(robotContent);
}
