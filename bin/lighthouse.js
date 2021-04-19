#!/usr/bin/env node
/* eslint-disable security/detect-child-process */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable security/detect-non-literal-require */

const { argv } = require('yargs')
  .usage('Usage: $0 [options]')
  .example('$0 check', 'Check tracking documentation is up to date')
  .alias('c', 'config')
  .default('c', 'lighthouse.config.js')
  .describe('c', 'Config file')
  .string('c')
  .alias('t', 'target')
  .array('t')
  .describe('t', 'Target page(s). Example: --target /FR /GB')
  .help('h')
  .alias('h', 'help');

const { spawnSync } = require('child_process');

const { configuration } = require(`../${argv.config}`);
const { getNotifierInstance } = require('./utils/notification.js');

const notifier = getNotifierInstance();
const level1 = '\n\r>>> ';
const level2 = '    ';
const level3 = '    > ';

const { pages, preferences } = configuration;
const {
  baseUrl,
  accessibility,
  reportsDir,
  reportPrefix,
  chromeFlags,
  performance,
  bestPractices,
  seo,
  pwa,
} = preferences;

let pagesToTest = [];

if (argv.target) {
  argv.target.forEach(target => {
    const result = pages.find(
      page => page.name === target || page.path === target
    );
    if (result) {
      pagesToTest.push(result);
    } else {
      pagesToTest.push({
        name: ' - ',
        path: target,
      });
    }
  });
} else {
  pagesToTest = pages;
}

try {
  notifier.setPrefix(level1).add('Start lighthouse tests').notifySuccess();

  pagesToTest.forEach(page => {
    notifier
      .setPrefix(level2)
      .add(`Testing page ${page.name} (${page.path})`)
      .notifyInfo();
    const spawn = spawnSync(
      'lighthouse-ci',
      [
        `${baseUrl}${page.path}`,
        `--accessibility=${accessibility}`,
        `--preformance=${performance}`,
        `--seo=${seo}`,
        `--pwa=${pwa}`,
        `--best-practices=${bestPractices}`,
        `--report=${reportsDir}`,
        `--filename=${reportPrefix}-${page.name}.html`,
        `--chrome-flags='${chromeFlags}'`,
      ] // ,
      //      { stdio: [process.stdin, process.stderr, process.stdout] }
    );
    if (spawn.stdout) {
      const result = spawn.stdout.toString().trim().split('\n');
      result.forEach(line =>
        notifier.setPrefix(level3).add(line).notifyInfo2()
      );
    }

    if (spawn.status !== 0) {
      process.exit(spawn.status);
    }
  });
  notifier.setPrefix(level1).add(`All tests success`).notifySuccess();
} catch (e) {
  notifier.setPrefix(level1).add(e).notifyError();
  process.exit(1);
}
