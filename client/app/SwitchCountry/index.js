// @flow
import React from 'react';
import { type StateRoot } from 'Shared/store/types';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { getHomeLink } from 'Shared/helpers/url';
import {
  setCountryCode,
  setLanguageByCountryCode,
  setTranslationsByCountryCode,
} from 'Shared/store/actions/appConfig';
import {
  compareCountriesByName,
  getLanguageFromCountryCode,
} from 'Shared/helpers/countries';
import {
  CountryLinkStyle,
  CountryListStyle,
  SelectedCountryIconStyle,
  SwitchCountryTitleStyle,
} from './style';

export const SwitchCountry = () => {
  const dispatch = useDispatch();
  const { country, countriesWithConsultations } = useSelector(
    (state: StateRoot) => state.appConfig
  );
  const countries = [];

  countriesWithConsultations.map(countryCode =>
    countries.push({
      isoCode: countryCode,
      name: i18n.t(`countries.${countryCode}`),
    })
  );

  countries.sort(compareCountriesByName);

  const switchCountry = (countryCode: string) => {
    if (country === countryCode) {
      return () => {};
    }
    dispatch(setCountryCode(countryCode));
    dispatch(setLanguageByCountryCode(countryCode));
    dispatch(setTranslationsByCountryCode(countryCode));
    return i18n.changeLanguage(getLanguageFromCountryCode(countryCode));
  };

  return (
    <nav aria-labelledby="switch_country_title">
      <SwitchCountryTitleStyle id="switch_country_title">
        {i18n.t('main-footer.country')}
      </SwitchCountryTitleStyle>
      <CountryListStyle>
        {countries.map(item => (
          <li key={item.isoCode}>
            <CountryLinkStyle
              to={getHomeLink(item.isoCode)}
              onClick={() => switchCountry(item.isoCode)}
              className={item.isoCode === country && 'selected'}
              aria-current={item.isoCode === country}
            >
              {item.name}
              {item.isoCode === country && (
                <SelectedCountryIconStyle aria-hidden />
              )}
            </CountryLinkStyle>
          </li>
        ))}
      </CountryListStyle>
    </nav>
  );
};
