// @flow
import React, { useEffect, useRef } from 'react';
import { type StateRoot } from 'Shared/store/types';
import { lockBody, unlockBody } from 'Shared/helpers/styled';
import {
  addAriaHiddenAndNegativeTab,
  addAriaHiddenByClass,
  removeAriaHiddenAndNegativeTab,
  removeAriaHiddenByClass,
} from 'Shared/helpers/a11y';
import { useSelector } from 'react-redux';
import {
  PANEL_ARIA_NEGATIVE_TAB_CLASS,
  PANEL_ARIA_CLASS,
} from 'Shared/constants/a11y';
import { PanelWrapperStyle, PanelOverlayStyle, PanelInnerStyle } from './style';

export const Panel = () => {
  const panelRef = useRef();
  const { isExpanded, panelContent } = useSelector(
    (state: StateRoot) => state.panel
  );

  useEffect(() => {
    if (!panelRef.current) {
      return undefined;
    }

    if (isExpanded) {
      lockBody();
      addAriaHiddenByClass(PANEL_ARIA_CLASS);
      addAriaHiddenAndNegativeTab(PANEL_ARIA_NEGATIVE_TAB_CLASS);
      // $FlowFixMe
      return panelRef.current.removeAttribute('aria-hidden');
    }

    removeAriaHiddenByClass(PANEL_ARIA_CLASS);
    removeAriaHiddenAndNegativeTab(PANEL_ARIA_NEGATIVE_TAB_CLASS);
    const timer = setTimeout(() => {
      // $FlowFixMe
      panelRef.current.setAttribute('aria-hidden', 'true');
    }, 500);
    unlockBody();
    return () => clearTimeout(timer);
  }, [isExpanded]);

  return (
    <PanelWrapperStyle ref={panelRef} aria-hidden="true">
      <PanelOverlayStyle className={isExpanded && 'expanded'} />
      <PanelInnerStyle className={isExpanded && 'expanded'}>
        {panelContent}
      </PanelInnerStyle>
    </PanelWrapperStyle>
  );
};
