/* eslint no-restricted-imports: 0 */
import i18next, { type InitOptions, type Callback } from 'i18next';

let instance = i18next;

export const i18n = {
  t: (...args) => instance.t(...args),
  getLanguage: () => instance.language,
  init: (options: InitOptions, callback?: Callback) =>
    instance.init(options, callback),
  changeLanguage: (lng: string, callback?: Callback) =>
    instance.changeLanguage(lng, callback),
  cloneInstance: (options?: InitOptions, callback?: Callback) => {
    instance = i18next.cloneInstance(options, callback);
  },
  getResourceBundle: (lng: string, ns: string) =>
    instance.getResourceBundle(lng, ns),
};
