// @flow
import React, { useState } from 'react';
import { SvgSearch } from 'Client/ui/Svg/elements';
import { i18n } from 'Shared/i18n';
import {
  removeAriaHiddenByClass,
  addAriaHiddenByClass,
} from 'Shared/helpers/a11y';
import {
  SEARCH_ARIA_CLASS,
  SEARCH_ELEMENT_ARIA_CLASS,
} from 'Shared/constants/a11y';
import {
  SearchFormWrapperStyle,
  SearchFormTriggerStyle,
  SearchFormCancelTriggerStyle,
} from './style';
import { SearchForm } from './Form';

export const MobileSearchInput = () => {
  const [isExpanded, expandForm] = useState<boolean>(false);

  const toggleMobileExpansion = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (isExpanded) {
      removeAriaHiddenByClass(SEARCH_ARIA_CLASS, 250);
      removeAriaHiddenByClass(SEARCH_ELEMENT_ARIA_CLASS, 250);
      return expandForm(!isExpanded);
    }

    addAriaHiddenByClass(SEARCH_ARIA_CLASS, 250);
    addAriaHiddenByClass(SEARCH_ELEMENT_ARIA_CLASS, 250);
    return expandForm(!isExpanded);
  };

  return (
    <>
      <SearchFormTriggerStyle
        className={SEARCH_ELEMENT_ARIA_CLASS}
        aria-label={i18n.t('search.form.open_panel')}
        type="button"
        onClick={toggleMobileExpansion}
        disabled={isExpanded}
      >
        <SvgSearch aria-hidden />
      </SearchFormTriggerStyle>
      <SearchFormWrapperStyle
        aria-hidden={!isExpanded && true}
        className={isExpanded && 'expanded'}
      >
        <SearchForm />
        <SearchFormCancelTriggerStyle
          className="close-trigger"
          type="button"
          onClick={toggleMobileExpansion}
          disabled={!isExpanded}
        >
          {i18n.t('search.form.cancel')}
        </SearchFormCancelTriggerStyle>
      </SearchFormWrapperStyle>
    </>
  );
};
