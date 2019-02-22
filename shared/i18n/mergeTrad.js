/* eslint no-console: ["error", { allow: ["warn", "error", "info"] }] */
/**
 * This script utility is needed to merge global translation
 * into App translations and Weeuropean translations.
 */
const fs = require('fs');
const path = require('path');

const GLOBAL_TRAD_DIR = path.resolve(__dirname, 'static');
const APP_TRAD_DIR = path.resolve(
  __dirname,
  '..',
  '..',
  'server',
  'staticData',
  'i18n'
);
const QUESTION_TRAD_DIR = path.resolve(
  __dirname,
  '..',
  '..',
  'server',
  'staticData',
  'operationsParams'
);

const countriesLanguages = {
  AT: ['de'],
  BE: ['nl', 'fr'],
  BG: ['bg'],
  CY: ['el'],
  CZ: ['cs'],
  DE: ['de'],
  DK: ['da'],
  EE: ['et'],
  ES: ['es'],
  FI: ['fi'],
  FR: ['fr'],
  GB: ['en'],
  GR: ['el'],
  HR: ['hr'],
  HU: ['hu'],
  IE: ['en'],
  IT: ['it'],
  LT: ['lt'],
  LU: ['fr'],
  LV: ['lv'],
  MT: ['mt'],
  NL: ['nl'],
  PL: ['pl'],
  PT: ['pt'],
  RO: ['ro'],
  SE: ['sv'],
  SI: ['sl'],
  SK: ['sk'],
};

const writeJson = object => JSON.stringify(object, null, 2);

const mergeAppTrads = (filePath, newTrads) => {
  let appTradData;

  try {
    appTradData = fs.readFileSync(filePath, 'utf8');

    const appTrads = JSON.parse(appTradData);
    const updatedTrads = {
      ...appTrads,
      ...newTrads,
    };
    fs.writeFileSync(filePath, writeJson(updatedTrads), 'utf8');
  } catch (error) {
    console.error(`error when Merging ${filePath} file => ${error}`);

    return false;
  }

  return true;
};

const mergeQuestionTrads = (filePath, newTrads) => {
  let questionTradData;
  try {
    questionTradData = fs.readFileSync(filePath, 'utf8');

    const questionTrads = JSON.parse(questionTradData);

    const updatedTrads = {
      ...questionTrads,
      ...newTrads,
    };

    fs.writeFileSync(filePath, writeJson(updatedTrads), 'utf8');
  } catch (error) {
    console.error(`error when merging ${filePath} file => ${error}`);

    return false;
  }
  return true;
};

const promises = [];
const countries = Object.keys(countriesLanguages);
countries.forEach(country => {
  countriesLanguages[country].forEach(language => {
    promises.push(
      new Promise((resolve, reject) => {
        const globalFilePath = `${GLOBAL_TRAD_DIR}/global_${country}_${language}.json`;
        const appTradFilePath = `${APP_TRAD_DIR}/${language}-${country}.json`;
        const weeuropeanFileName =
          countriesLanguages[country].length > 1
            ? `weeuropeans-${country.toLowerCase()}-${language}.json`
            : `weeuropeans-${country.toLowerCase()}.json`;
        const questionTradFilePath = `${QUESTION_TRAD_DIR}/${weeuropeanFileName}`;
        try {
          const data = fs.readFileSync(globalFilePath, 'utf8');
          if (!data) {
            console.error(`${globalFilePath} is empty`);
            reject();
          }

          const trads = JSON.parse(data.trim());
          const { weeuropean } = trads;
          if (!weeuropean) {
            console.error(
              `The file for ${language}-${country} miss weeuropean trads`
            );
            reject();
          }

          weeuropean.wording.metas.picture =
            'https://assets.make.org/assets/images/meta-we-europeans-no-copy.png';

          const appTrads = trads;
          delete appTrads.weeuropean;

          if (mergeAppTrads(appTradFilePath, appTrads)) {
            console.info(`App Tranlsation merged for ${language}-${country}`);
          } else {
            console.error(
              `Error when App Tranlsation merge: ${language}-${country}`
            );
            reject();
          }

          if (mergeQuestionTrads(questionTradFilePath, weeuropean)) {
            console.info(
              `Weeuropean Tranlsation merge for ${language}-${country}`
            );
          } else {
            console.error(
              `Error when Weeuropean Tranlsation merge: ${language}-${country}`
            );
            reject();
          }
        } catch (error) {
          console.log(`error in content of ${globalFilePath} => ${error}`); // eslint-disable-line no-console
          reject();
        }
      })
    );
  });
});

Promise.all(promises)
  .then(() => console.info('all i18n files are valid'))
  .catch(() => {
    console.log('Error on validate i18n files'); // eslint-disable-line no-console
    process.exit(1);
  });
