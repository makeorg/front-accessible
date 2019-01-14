/**
 * This script utility is needed to create version file.
 */

const fs = require('fs');
const childProcess = require('child_process');
const { BUILD_DIR } = require('./paths');

const lastCommit = childProcess
  .execSync('git rev-parse HEAD')
  .toString().trim();
const branch = childProcess
  .execSync('git rev-parse --abbrev-ref HEAD')
  .toString().trim();

const projectName = 'make.org-frontend';
const dateTime = new Date();

const version = {
  name: projectName,
  version: lastCommit.substr(0, 10),
  gitCommit: lastCommit,
  gitBranch: branch,
  buildTime: dateTime.toISOString()
};

try {
  const versionPathFile = `${BUILD_DIR}/version`;

  fs.writeFileSync(versionPathFile, JSON.stringify(version, null, 2), 'utf8');
} catch (error) {
  console.error(`error when writing version file => ${error}`);
  process.exit(1);
}

console.info('Version file created successfully!');
