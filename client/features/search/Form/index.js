// @flow
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import { SvgSearch, SvgDisconnect } from 'Client/ui/Svg/elements';
import { getRouteSearch } from 'Shared/routes';
import { SEARCH_FORMNAME } from 'Shared/constants/form';
import { throttle } from 'Shared/helpers/throttle';
import { i18n } from 'Shared/i18n';
import { SearchFormStyle, SearchInputStyle, SearchButtonStyle } from './Styled';

const SearchInputHandler = ({ location, history, country, language }) => {
  const params = new URLSearchParams(location.search);
  const term = params.get('query');
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
    if (value.length > 3 && value.length <= 140) {
      setCanSubmit(true);
    }
  };

  const handleSubmit = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
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
      <HiddenItemStyle>
        {i18n.t('search.form.introduction', {
          context: searchTerm ? 'searched' : '',
        })}
      </HiddenItemStyle>
      <HiddenItemStyle as="label" htmlFor="search_input">
        {i18n.t('search.form.label')}
      </HiddenItemStyle>
      <SearchInputStyle
        type="text"
        name="search"
        id="search_input"
        placeholder={i18n.t('search.form.placeholder')}
        value={searchTerm}
        minLength={3}
        maxLength={140}
        onChange={handleChange}
      />
      {hasSubmit ? (
        <SearchButtonStyle
          aria-label={i18n.t('search.form.flush')}
          type="button"
          onClick={handleFlush}
        >
          <SvgDisconnect aria-hidden />
        </SearchButtonStyle>
      ) : (
        <SearchButtonStyle
          aria-label={i18n.t('search.form.submit')}
          type="submit"
          disabled={!canSubmit}
        >
          <SvgSearch aria-hidden />
        </SearchButtonStyle>
      )}
    </SearchFormStyle>
  );
};

const mapStateToProps = state => {
  const { country, language } = state.appConfig;

  return {
    country,
    language,
  };
};

export const SearchInput = withRouter(
  connect(mapStateToProps)(SearchInputHandler)
);
