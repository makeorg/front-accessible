// @flow
import React, { useState } from 'react';
import { i18n } from 'Shared/i18n';
import { NAVIGATION_ARIA_CLASS } from 'Shared/constants/a11y';
import { addAriaHidden, removeAriaHidden } from 'Shared/helpers/a11y';
import { lockBody, unlockBody } from 'Shared/helpers/styled';
import { MenuOpenTriggerStyle, MenuBarStyle } from './style';
import { MenuPanel } from './Panel';

export const MobileMenu = () => {
  const [isExpanded, setExpansion] = useState(false);

  const toggleExpansion = () => {
    if (isExpanded) {
      removeAriaHidden(NAVIGATION_ARIA_CLASS);
      unlockBody();
    } else {
      addAriaHidden(NAVIGATION_ARIA_CLASS);
      lockBody();
    }

    setExpansion(!isExpanded);
  };

  return (
    <>
      <MenuOpenTriggerStyle
        aria-label={i18n.t('header.open_menu')}
        onClick={toggleExpansion}
      >
        <MenuBarStyle className="first" />
        <MenuBarStyle className="second" />
        <MenuBarStyle />
      </MenuOpenTriggerStyle>
      <MenuPanel isExpanded={isExpanded} toggleExpansion={toggleExpansion} />
    </>
  );
};
