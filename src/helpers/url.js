import 'url-search-params-polyfill';

export const getParamsQuery = (searchParams: string) => {
  const params = new URLSearchParams(searchParams);

  return params.toString();
};

export const
  getCountryLanguageLink = (link: string, country: string, language: string) => `${link}${country}-${language}`;
