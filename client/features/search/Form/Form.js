// @flow
import React, { useState, useEffect } from 'react';
import { type StateRoot } from 'Shared/store/types';
import { SvgSearch, SvgDisconnect } from 'Client/ui/Svg/elements';
import { SEARCH_FORMNAME } from 'Shared/constants/form';
import { throttle } from 'Shared/helpers/throttle';
import { i18n } from 'Shared/i18n';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { trackClickSubmitSearch } from 'Shared/services/Tracking';
import { getRouteSearch } from 'Shared/routes';
import {
  SearchLabelStyle,
  SearchFormStyle,
  SearchInputStyle,
  SearchButtonStyle,
  SearchInputWrapperStyle,
} from './style';

type Props = {
  isExpanded?: boolean,
  handleFocus?: () => void,
};

export const SearchForm = ({ isExpanded, handleFocus }: Props) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const term = params.get('query');
  const history = useHistory();
  const { country } = useSelector((state: StateRoot) => state.appConfig);
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
    history.push(getRouteSearch(country, searchTerm));
  };

  const handleFlush = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    flushSearchValue();
    history.push(getRouteSearch(country, ''));
  };

  useEffect(() => {
    if (!location.pathname.includes('search')) {
      flushSearchValue();
    }
  }, [location.pathname]);

  return (
    <SearchFormStyle
      id={SEARCH_FORMNAME}
      className={isExpanded && 'expanded'}
      onSubmit={throttle(handleSubmit)}
    >
      <ScreenReaderItemStyle as="div">
        {i18n.t('search.form.introduction', {
          context: searchTerm ? 'searched' : '',
        })}
      </ScreenReaderItemStyle>
      <SearchInputWrapperStyle as="span">
        <SearchLabelStyle
          className={searchTerm.length > 0 ? 'hide' : ''}
          htmlFor="search_input"
        >
          {i18n.t('search.form.placeholder')}
        </SearchLabelStyle>
        <> </>
        <SearchInputStyle
          type="text"
          name="search"
          id="search_input"
          value={searchTerm}
          minLength={3}
          maxLength={140}
          onChange={handleChange}
          onFocus={handleFocus}
          data-cy-field="search"
        />
      </SearchInputWrapperStyle>
      <> </>
      {hasSubmit ? (
        <SearchButtonStyle
          aria-label={i18n.t('search.form.flush')}
          type="button"
          onClick={handleFlush}
          data-cy-button="search-clear"
        >
          <SvgDisconnect aria-hidden />
        </SearchButtonStyle>
      ) : (
        <SearchButtonStyle
          type="submit"
          disabled={!canSubmit}
          data-cy-button="search-submit"
        >
          <SvgSearch aria-label={i18n.t('search.form.submit')} />
        </SearchButtonStyle>
      )}
    </SearchFormStyle>
  );
};
