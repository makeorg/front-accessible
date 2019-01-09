/* eslint no-console: ["error", { allow: ["warn", "error", "info"] }] */
/**
 * This script utility is needed to merge global translation
 * into App translations and Weeuropean translations.
 */
const fs = require('fs');
const path = require('path');

const GLOBAL_TRAD_DIR = path.resolve(__dirname, 'static');
const APP_TRAD_DIR = path.resolve(__dirname, '..', '..', 'src', 'i18n');
const QUESTION_TRAD_DIR = path.resolve(__dirname, '..', '..', 'server', 'staticData', 'operationsParams');

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
  SK: ['sk']
};

const writeJson = object => JSON.stringify(object, null, 2);

const mergeAppTrads = (filePath, newTrads) => {
  let appTradData;

  try {
    appTradData = fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    console.error(`error when reading ${filePath} file => ${error}`);

    return false;
  }

  const appTrads = JSON.parse(appTradData);
  const updatedTrads = {
    ...appTrads,
    ...newTrads
  };

  try {
    fs.writeFileSync(filePath, writeJson(updatedTrads), 'utf8');
  } catch (error) {
    console.error(`error when writing ${filePath} file => ${error}`);
    return false;
  }

  return true;
};

const mergeQuestionTrads = (filePath, newTrads) => {
  let questionTradData;
  try {
    questionTradData = fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    console.error(`error when reading ${filePath} file => ${error}`);

    return false;
  }

  const questionTrads = JSON.parse(questionTradData);


  const updatedTrads = {
    ...questionTrads,
    ...newTrads
  };

  try {
    fs.writeFileSync(filePath, writeJson(updatedTrads), 'utf8');
  } catch (error) {
    console.error(`error when writing ${filePath} file => ${error}`);
    return false;
  }

  return true;
};

const countries = Object.keys(countriesLanguages);
countries.forEach((country) => {
  countriesLanguages[country].forEach((language) => {
    const globalFilePath = `${GLOBAL_TRAD_DIR}/global_${country}_${language}.json`;
    const appTradFilePath = `${APP_TRAD_DIR}/${country}_${language}.json`;
    const weeuropeanFileName = (countriesLanguages[country].length > 1) ? `weeuropeans-${country.toLowerCase()}-${language}.json` : `weeuropeans-${country.toLowerCase()}.json`;
    const questionTradFilePath = `${QUESTION_TRAD_DIR}/${weeuropeanFileName}`;
    console.log(weeuropeanFileName);
    fs.readFile(globalFilePath, 'utf8', (readError, data) => {
      if (readError) {
        console.error(`error when reading ${globalFilePath}.json => ${readError}`);
      }

      try {
        const trads = JSON.parse(data.trim());
        const { weeuropean } = trads;
        if (!weeuropean) {
          console.error(`The file for ${language}-${country} miss weeuropean trads`);
        }

        weeuropean.wording.metas.picture = 'https://assets.make.org/assets/images/meta-we-europeans-no-copy.png';

        const appTrads = trads;
        delete appTrads.weeuropean;

        if (mergeAppTrads(appTradFilePath, appTrads)) {
          console.info(`App Trad merged for ${appTradFilePath} language`);
        }
     
        if (mergeQuestionTrads(questionTradFilePath, weeuropean)) {
          console.info(`App Weeuropean merged for ${language} language`);
        }
      } catch (error) {
        console.log(`error in content of ${globalFilePath} => ${error}`);
      }
    });
  });
});
