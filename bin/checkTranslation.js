#!/usr/bin/env node

const path = require('path');

const { argv } = require('yargs')
  .usage('Usage: $0 <command> [options]')
  .command('check')
  .example(
    '$0 check -d ./translationDir -l ',
    'Check translation files in dir translationDir'
  )
  .alias('d', 'directory')
  .nargs('d', 1)
  .describe('d', 'Translation files directory')
  .alias('l', 'reference language')
  .nargs('l', 1)
  .describe('l', 'Reference language')
  .option('fix', {
    describe: 'Fix invalid translation files',
    default: false,
    type: 'boolean',
  })
  .demandOption(['d', 'l'])
  .demandCommand(1)
  .help('h')
  .alias('h', 'help');

const getNotifierInstance = () => {
  const reset = '\x1b[0m';
  const bgWhite = '\x1b[47m';
  const bgBlack = '\x1b[40m';
  const reverseRed = `${bgWhite}\x1b[31m\x1b[7m%s${reset}`;
  const reverseGreen = `${bgBlack}\x1b[32m\x1b[7m%s${reset}`;
  const fgGreen = `\x1b[32m%s${reset}`;
  const fgCyan = `\x1b[36m%s${reset}`;
  const fgYellow = `\x1b[33m%s${reset}`;
  const fgWhite = `\x1b[37m${reset}`;

  const messages = [];
  const config = { separator: ' - ', prefix: '' };
  const resetConfig = () => {
    messages.length = 0;
    config.separator = ' - ';
    config.prefix = '';
  };
  const fetchMessages = colors => {
    const pref =
      config.prefix === '' ? '' : fgCyan.replace(/%s/g, config.prefix);
    const template = messages.map(() => colors).join(config.separator);
    const values = messages.map(m => [m.title, m.content]).flat();
    resetConfig();

    return { template: `${pref}${template}`, values };
  };
  const notify = colors => {
    const data = fetchMessages(colors);
    console.log(`${data.template}`, ...data.values);
  };
  const singleton = {
    newLine: () => {
      console.log('');
      return singleton;
    },
    add: (title, content) => {
      messages.push({ title: title || '', content: content || '' });
      return singleton;
    },
    setSeparator: sep => {
      config.separator = sep;
      return singleton;
    },
    setPrefix: pre => {
      config.prefix = pre;
      return singleton;
    },
    notifyInfo: () => notify(`${fgGreen} ${fgCyan}`),
    notifyError: () => notify(`${fgCyan} ${reverseRed}`),
    notifyInfo2: () => notify(`${fgYellow} ${fgCyan}`),
    notifySuccess: () => notify(`${reverseGreen} ${reverseGreen}`),
  };

  return singleton;
};

const notifier = getNotifierInstance();

const translationDir = path.resolve(process.cwd(), argv.d);

const checkTranslation = require('../dist/i18n/CheckTranslation/index.js');

const level1 = '\n\r>>> ';
const level2 = '    ';
const level3 = '    > ';

notifier.newLine();
notifier.add('Translation check', '').notifyInfo2();
notifier
  .setPrefix(level1)
  .add('Starting analyse...', '')
  .notifyInfo();

checkTranslation.analyse(translationDir, argv.l).then(response => {
  const { results, totalTransCount, transList } = response;
  notifier
    .setPrefix(level2)
    .add(
      'Translation file(s):',
      `total: ${totalTransCount} / language(s): ${transList.join(', ')}`
    )
    .notifyInfo();

  if (!results.length) {
    notifier
      .setPrefix(level1)
      .add(' All is ok ')
      .notifySuccess();
    notifier
      .newLine()
      .add('Have a nice day')
      .notifyInfo2();
    notifier.newLine();
    process.exit(0);
  }
  if (results.length) {
    notifier
      .setPrefix(level2)
      .add('Failed results:')
      .notifyInfo();

    results.forEach(result => {
      notifier
        .setPrefix(level3)
        .add('Language:', result.language)
        .add('Extra keys:', result.extraKeysCount)
        .add('Missing keys:', result.missingKeysCount)
        .notifyInfo();
    });
    if (!argv.fix) {
      notifier
        .setPrefix(level1)
        .add('', ' KO - translations check failed ')
        .notifyError();

      notifier
        .newLine()
        .add('Add the --fix option to update translation file(s)')
        .notifyInfo2();
      notifier.add('', '').notifyInfo();
      process.exit(1);
    }
    notifier
      .setPrefix(level1)
      .add('Starting fix...')
      .notifyInfo();
    results.forEach(result => {
      checkTranslation.fixTranslationFile(
        `${translationDir}/${result.filename}`,
        result.fixedTrans
      );
      notifier
        .setPrefix(level2)
        .add('Update file', result.filename)
        .notifyInfo();
    });
    notifier
      .setPrefix(level1)
      .add(' All is ok - translation(s) file(s) fixed ')
      .notifySuccess();

    notifier
      .newLine()
      .add("Don't forget to commit changes")
      .notifyInfo2();
    notifier.newLine();
    process.exit(0);
  }
});
