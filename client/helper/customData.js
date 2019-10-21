/* @flow */

export type StorageType = {
  set: (value: any) => void,
  get(): any,
};

type CustomDataType = {
  getFormattedDataForHeader: () => string,
  storeCustomDataFromQueryParams: (queryParams: Object) => void,
};

/** Default prefix matching custom data params in query params */
let paramPrefix = 'cs_';

/** Storage key for default storage */
const sessionStorageKey = 'app-custom-data';

/**
 * Default storage object
 */
let storage: StorageType = {
  set: (value: Object) =>
    sessionStorage.setItem(sessionStorageKey, JSON.stringify(value)),
  get: (): Object =>
    JSON.parse(sessionStorage.getItem(sessionStorageKey) || '{}') || {},
};

/**
 * Escape query values
 */
const escapeValue = (value: string): string => {
  return value.replace(',', '%2C').replace('=', '%3D');
};

/**
 * Format custom data to be used in a request header
 * { key1: "value1", key2: "value2" } ==> "key1=value1,key2=value2"
 */
const formatCustomDataAsString = (customData: Object): string => {
  return Object.keys(customData)
    .map(key => {
      const value: string =
        typeof customData[key] === 'string'
          ? customData[key]
          : 'invalid_value_type';

      return `${escapeValue(key)}=${escapeValue(value)}`;
    })
    .join(',');
};

/**
 * Extract custom data from queryParams using custom data prefix
 */
const getCustomDataFromQueryParams = (queryParams: Object): Object => {
  if (!queryParams) {
    return {};
  }
  const customData = {};
  Object.keys(queryParams).forEach(key => {
    const isValidKey =
      key.startsWith(paramPrefix) && key.length > paramPrefix.length;
    const isValidValue =
      typeof queryParams[key] === 'string' &&
      queryParams[key].trim().length > 0;

    if (isValidKey && isValidValue) {
      customData[key.substr(paramPrefix.length)] = queryParams[key].trim();
    }
  });

  return customData;
};

/**
 * Get stored custom data formatted to be used as header data
 */
const getFormattedDataForHeader = (): string => {
  return formatCustomDataAsString(storage.get());
};

/**
 * Store custom params from queryParams
 * Old params values are conserved but override by the new values
 */
const storeCustomDataFromQueryParams = (queryParams: Object): void => {
  storage.set({
    ...storage.get(),
    ...getCustomDataFromQueryParams(queryParams),
  });
};

export const generateCustomDataManager = (
  customStorage?: StorageType,
  customParamPrefix?: string
): CustomDataType => {
  storage = customStorage || storage;
  paramPrefix = customParamPrefix || paramPrefix;
  return {
    getFormattedDataForHeader,
    storeCustomDataFromQueryParams,
  };
};
