// @flow
import React, { useState } from 'react';
import { i18n } from 'Shared/i18n';
import { SearchFormCancelTriggerStyle } from './style';
import { SearchForm } from './Form';
import { addSearchDesktopHidden, removeSearchDesktopHidden } from './Animation';

export const DesktopSearchInput = () => {
  const [isExpanded, expandForm] = useState<boolean>(false);

  const expandDesktop = () => {
    expandForm(true);
    return addSearchDesktopHidden();
  };

  const collapseDesktop = () => {
    expandForm(false);
    return removeSearchDesktopHidden();
  };

  return (
    <>
      <SearchForm isExpanded={isExpanded} handleFocus={expandDesktop} />
      {isExpanded && (
        <SearchFormCancelTriggerStyle
          className="close-trigger"
          type="button"
          onClick={collapseDesktop}
        >
          {i18n.t('search.form.cancel')}
        </SearchFormCancelTriggerStyle>
      )}
    </>
  );
};
