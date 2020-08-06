// @flow
import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SvgSearch, SvgDisconnect } from 'Client/ui/Svg/elements';
import { getRouteSearch } from 'Shared/routes';
import { SEARCH_FORMNAME } from 'Shared/constants/form';
import { trackClickSubmitSearch } from 'Shared/services/Tracking';
import { throttle } from 'Shared/helpers/throttle';
import { i18n } from 'Shared/i18n';
import { type StateRoot } from 'Shared/store/types';
import { useMobile } from 'Client/hooks/useMedia';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import {
  SearchLabelStyle,
  SearchFormStyle,
  SearchInputStyle,
  SearchButtonStyle,
  SearchInputWrapperStyle,
} from './style';

export const DeprecatedSearchInput = () => {
  const location = useLocation();
  const history = useHistory();
  const { country, language } = useSelector(
    (state: StateRoot) => state.appConfig
  );
  const params = new URLSearchParams(location.search);
  const term = params.get('query');
  const isMobile = useMobile();
  const [searchTerm, setSearchTerm] = useState<string>(term || '');
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
  const [hasSubmit, setHasSubmit] = useState<boolean>(!!term);

  const flushSearchValue = () => {
    setSearchTerm('');
    setCanSubmit(false);
    setHasSubmit(false);
  };

  const handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setHasSubmit(false);
    setCanSubmit(false);
    setSearchTerm(value);
    if (value.length > 2 && value.length <= 140) {
      setCanSubmit(true);
    }
  };

  const handleSubmit = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    trackClickSubmitSearch();
    setHasSubmit(true);
    history.push(getRouteSearch(country, language, searchTerm));
  };

  const handleFlush = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    flushSearchValue();
    history.push(getRouteSearch(country, language, ''));
  };

  useEffect(() => {
    if (!location.pathname.includes('search')) {
      flushSearchValue();
    }
  }, [location.pathname]);

  return (
    <SearchFormStyle id={SEARCH_FORMNAME} onSubmit={throttle(handleSubmit)}>
      <ScreenReaderItemStyle>
        {i18n.t('search.form.introduction', {
          context: searchTerm ? 'searched' : '',
        })}
      </ScreenReaderItemStyle>
      <SearchInputWrapperStyle>
        <SearchLabelStyle
          className={searchTerm.length > 0 ? 'hide' : ''}
          htmlFor="search_input"
        >
          {isMobile
            ? i18n.t('search.form.deprecated_placeholder_mobile')
            : i18n.t('search.form.deprecated_placeholder')}
        </SearchLabelStyle>
        <SearchInputStyle
          type="text"
          name="search"
          id="search_input"
          value={searchTerm}
          minLength={3}
          maxLength={140}
          onChange={handleChange}
        />
      </SearchInputWrapperStyle>
      {hasSubmit ? (
        <SearchButtonStyle
          aria-label={i18n.t('search.form.flush')}
          type="button"
          onClick={handleFlush}
        >
          <SvgDisconnect aria-hidden />
        </SearchButtonStyle>
      ) : (
        <SearchButtonStyle type="submit" disabled={!canSubmit}>
          <SvgSearch aria-label={i18n.t('search.form.submit')} />
        </SearchButtonStyle>
      )}
    </SearchFormStyle>
  );
};
