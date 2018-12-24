/**
 * This script utility is needed to merge global translation
 * into App translations and Weeuropean translations.
 */
const fs = require('fs');
const path = require('path');

const GLOBAL_TRAD_DIR = path.resolve(__dirname, 'static');
const APP_TRAD_DIR = path.resolve(__dirname, '..', '..', 'src', 'i18n');
const QUESTION_TRAD_DIR = path.resolve(__dirname, '..', '..', 'server', 'staticData', 'operationsParams');

const languages = [
  'FR'
];

const writeJson = object => JSON.stringify(object, null, 2);

const mergeAppTrads = (language, newTrads) => {
  const appTradFilePath = `${APP_TRAD_DIR}/${language.toLowerCase()}.json`;
  let appTradData;

  try {
    appTradData = fs.readFileSync(appTradFilePath, 'utf8');
  } catch (error) {
    console.error(`error when reading ${appTradFilePath} file => ${error}`);
    return false;
  }

  const appTrads = JSON.parse(appTradData);
  const updatedTrads = {
    ...appTrads,
    ...newTrads
  };

  try {
    fs.writeFileSync(appTradFilePath, writeJson(updatedTrads), 'utf8');
  } catch (error) {
    console.error(`error when writing ${appTradFilePath} file => ${error}`);
    return false;
  }

  return true;
};

const mergeQuestionTrads = (language, newTrads) => {
  const questionTradFilePath = `${QUESTION_TRAD_DIR}/weeuropean_${language}.json`;
  let questionTradData;

  try {
    questionTradData = fs.readFileSync(questionTradFilePath, 'utf8');
  } catch (error) {
    console.error(`error when reading ${questionTradFilePath} file => ${error}`);
    return false;
  }

  const appTrads = JSON.parse(questionTradData);
  const updatedTrads = {
    ...appTrads,
    ...newTrads
  };

  try {
    fs.writeFileSync(questionTradFilePath, writeJson(updatedTrads), 'utf8');
  } catch (error) {
    console.error(`error when writing ${questionTradFilePath} file => ${error}`);
    return false;
  }

  return true;
};

languages.forEach((language) => {
  fs.readFile(`${GLOBAL_TRAD_DIR}/global_${language.toLowerCase()}.json`, 'utf8', (readError, data) => {
    if (readError) console.error(`error when reading ${GLOBAL_TRAD_DIR}/global_${language}.json => ${readError}`);

    const trads = JSON.parse(data);
    const { weeuropean } = trads;
    if (!weeuropean) {
      console.error(`The file for ${language} miss weeuropean trads`);
    }

    const appTrads = trads;
    delete appTrads.weeuropean;

    if (mergeAppTrads(language, appTrads)) {
      console.info(`App Trad merged for ${language} language`);
    }
    if (mergeQuestionTrads(language, weeuropean)) {
      console.info(`App Weeuropean merged for ${language} language`);
    }
  });
});
