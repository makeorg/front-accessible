// same as:
// i18next.t.mockImplementation((value) => value)
module.exports = {
  init: () => {},
  changeLanguage: value => value,
  t: value => value,
  getResourceBundle: value => value,
  getResource: value => value,
};
