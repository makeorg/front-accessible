import fs from 'fs';

const allKeys = (obj, current = '') => {
  const keys = Object.keys(obj);
  const all = keys.map(value => {
    if (typeof obj[value] === 'string') {
      return `${current}.${value}`;
    }
    const newCurrent = current === '' ? value : `${current}.${value}`;
    return allKeys(obj[value], newCurrent);
  });

  return all.flat();
};

const getExtraKeys = (keysToCheck, referenceKeys) => {
  const keysToRemove = [];
  keysToCheck.forEach(key => {
    if (!referenceKeys.includes(key)) {
      keysToRemove.push(key);
    }
  });

  return keysToRemove;
};

const getMissingKeys = (keysToCheck, referenceKeys) => {
  const keysToAdd = [];
  referenceKeys.forEach(key => {
    if (!keysToCheck.includes(key)) {
      keysToAdd.push(key);
    }
  });

  return keysToAdd;
};

const getTranslationFilenames = directory => {
  return fs
    .readdirSync(directory, { withFileTypes: true })
    .map(file => file.name)
    .filter(file => file.match(/^.*\.json/));
};

const loadTranslationObjFromFilenames = (filenames, translationFilesDir) => {
  return Promise.all(
    filenames.map(async name => {
      // eslint-disable-next-line import/no-dynamic-require
      const trans = require(`${translationFilesDir}/${name}`);
      const language = name.slice(0, -5);
      return {
        language,
        trans,
        filename: name,
      };
    })
  );
};

const removeKey = (obj, concatKey) => {
  const keyList = concatKey.split('.');
  keyList.reduce((accumulator, currentValue) => {
    if (typeof accumulator[currentValue] === 'string') {
      delete accumulator[currentValue];
    }

    return accumulator[currentValue];
  }, obj);
};

const addKey = (obj, referenceObj, concatKey, mainLanguage) => {
  const keyList = concatKey.split('.');
  keyList.reduce(
    (accumulator, currentValue) => {
      if (!(currentValue in accumulator.obj)) {
        if (typeof accumulator.referenceObj[currentValue] === 'string') {
          accumulator.obj[currentValue] = `@@${concatKey}|${mainLanguage}:${
            accumulator.referenceObj[currentValue]
          }`;
        } else {
          accumulator.obj[currentValue] =
            accumulator.referenceObj[currentValue];
        }
      }
      return {
        obj: accumulator.obj[currentValue],
        referenceObj: accumulator.referenceObj[currentValue],
      };
    },
    { obj, referenceObj }
  );
};

export const analyse = async (translationFilesDir, mainLanguage = 'fr') => {
  const translations = await loadTranslationObjFromFilenames(
    await getTranslationFilenames(translationFilesDir),
    translationFilesDir
  );

  const mainTransObj = translations.find(
    transObj => transObj.language === mainLanguage
  );
  if (!mainTransObj) {
    throw new Error(`Main translation "${mainLanguage}" not found`);
  }
  const allTransObj = translations.filter(
    transObj => transObj.language !== mainLanguage
  );

  const referenceKeys = allKeys(mainTransObj.trans);

  const failedResults = [];
  allTransObj.forEach(transObj => {
    const extraKeys = getExtraKeys(allKeys(transObj.trans), referenceKeys);
    const missingKeys = getMissingKeys(allKeys(transObj.trans), referenceKeys);

    if (extraKeys.length > 0 || missingKeys.length > 0) {
      const fixedTrans = transObj.trans;
      extraKeys.forEach(key => {
        removeKey(fixedTrans, key);
      });
      missingKeys.forEach(key => {
        addKey(fixedTrans, mainTransObj.trans, key, mainLanguage);
      });
      failedResults.push({
        language: transObj.language,
        extraKeysCount: extraKeys.length,
        missingKeysCount: missingKeys.length,
        extraKeys,
        missingKeys,
        original: transObj.trans,
        fixedTrans,
        filename: transObj.filename,
      });
    }
  });

  return {
    results: failedResults,
    totalTransCount: allTransObj.length,
    transList: allTransObj.map(item => item.language),
  };
};

export const fixTranslationFile = (filePath, fixedTrans) => {
  fs.writeFileSync(filePath, JSON.stringify(fixedTrans, null, 2));
};
