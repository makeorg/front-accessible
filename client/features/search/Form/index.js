// @flow
import React, { useState } from 'react';
import { SvgSearch, SvgClose } from 'Client/ui/Svg/elements';
import { i18n } from 'Shared/i18n';
import { useMobile } from 'Client/hooks/useMedia';
import { SearchFormWrapperStyle, SearchFormTriggerStyle } from './style';
import { SearchForm } from './Form';

export const SearchInput = () => {
  const isMobile = useMobile();
  const [isExpanded, expandForm] = useState<boolean>(false);

  const toggleExpansion = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    expandForm(!isExpanded);
  };

  if (isMobile) {
    return (
      <>
        <SearchFormTriggerStyle
          className="open-trigger"
          aria-label={i18n.t('search.form.open_panel')}
          type="button"
          onClick={toggleExpansion}
        >
          <SvgSearch aria-hidden />
        </SearchFormTriggerStyle>
        <SearchFormWrapperStyle
          aria-hidden={!isExpanded && true}
          className={isExpanded && 'expanded'}
        >
          <SearchForm />
          <SearchFormTriggerStyle
            className="close-trigger"
            aria-label={i18n.t('search.form.close_panel')}
            type="button"
            onClick={toggleExpansion}
          >
            <SvgClose aria-hidden />
          </SearchFormTriggerStyle>
        </SearchFormWrapperStyle>
      </>
    );
  }

  return (
    <>
      <SearchForm
        isExpanded={isExpanded}
        handleFocus={() => expandForm(true)}
      />
      {isExpanded && (
        <SearchFormTriggerStyle
          className="close-trigger"
          aria-label={i18n.t('search.form.close_panel')}
          type="button"
          onClick={() => expandForm(false)}
        >
          <SvgClose aria-hidden />
        </SearchFormTriggerStyle>
      )}
    </>
  );
};
