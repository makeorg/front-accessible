// @flow
import React, { useState } from 'react';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import { SvgSearch, SvgDisconnect } from 'Client/ui/Svg/elements';
import { SEARCH_FORMNAME } from 'Shared/constants/form';
import { throttle } from 'Shared/helpers/throttle';
import { i18n } from 'Shared/i18n';
import { SearchFormStyle, SearchInputStyle, SearchButtonStyle } from './Styled';

export const SearchInput = () => {
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const [canSubmit, setCanSubmit] = useState<boolean>(false);

  const handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setCanSubmit(false);
    setSearchValue(value);
    if (value.length > 3 && value.length <= 140) {
      setCanSubmit(true);
    }
  };

  const handleSubmit = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setHasSearched(true);
  };

  const flushSearchValue = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setHasSearched(false);
    setSearchValue('');
    setCanSubmit(false);
  };

  return (
    <SearchFormStyle
      id={SEARCH_FORMNAME}
      onSubmit={hasSearched ? flushSearchValue : throttle(handleSubmit)}
    >
      <HiddenItemStyle>
        {i18n.t('search.form.introduction', {
          context: hasSearched ? 'searched' : '',
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
        value={searchValue}
        minLength={3}
        maxLength={140}
        onChange={handleChange}
      />
      {hasSearched ? (
        <SearchButtonStyle
          aria-label={i18n.t('search.form.flush')}
          type="submit"
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
