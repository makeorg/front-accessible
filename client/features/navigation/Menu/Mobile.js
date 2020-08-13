// @flow
import React, { useState } from 'react';
import { i18n } from 'Shared/i18n';
import {
  NAVIGATION_ARIA_CLASS,
  NAVIGATION_ELEMENT_ARIA_CLASS,
  SEARCH_ELEMENT_ARIA_CLASS,
  NAVIGATION_ARIA_NEGATIVE_TAB_CLASS,
} from 'Shared/constants/a11y';
import {
  addAriaHiddenByClass,
  removeAriaHiddenByClass,
  addAriaHiddenAndNegativeTab,
  removeAriaHiddenAndNegativeTab,
} from 'Shared/helpers/a11y';
import { lockBody, unlockBody } from 'Shared/helpers/styled';
import { MenuOpenTriggerStyle, MenuBarStyle } from './style';
import { MenuPanel } from './Panel';

export const MobileMenu = () => {
  const [isExpanded, setExpansion] = useState(false);

  const toggleExpansion = () => {
    if (isExpanded) {
      removeAriaHiddenByClass(NAVIGATION_ARIA_CLASS);
      removeAriaHiddenByClass(NAVIGATION_ELEMENT_ARIA_CLASS);
      removeAriaHiddenAndNegativeTab(NAVIGATION_ARIA_NEGATIVE_TAB_CLASS);
      unlockBody();
    } else {
      addAriaHiddenByClass(NAVIGATION_ARIA_CLASS);
      addAriaHiddenByClass(NAVIGATION_ELEMENT_ARIA_CLASS);
      addAriaHiddenAndNegativeTab(NAVIGATION_ARIA_NEGATIVE_TAB_CLASS);
      lockBody();
    }

    return setExpansion(!isExpanded);
  };

  return (
    <>
      <MenuOpenTriggerStyle
        className={`${NAVIGATION_ELEMENT_ARIA_CLASS} ${SEARCH_ELEMENT_ARIA_CLASS}`}
        aria-label={i18n.t('header.open_menu')}
        onClick={toggleExpansion}
        disabled={isExpanded}
      >
        <MenuBarStyle className="first" />
        <MenuBarStyle className="second" />
        <MenuBarStyle />
      </MenuOpenTriggerStyle>
      <MenuPanel isExpanded={isExpanded} toggleExpansion={toggleExpansion} />
    </>
  );
};
