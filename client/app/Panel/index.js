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
import { useDispatch, useSelector } from 'react-redux';
import {
  PANEL_ARIA_NEGATIVE_TAB_CLASS,
  PANEL_ARIA_CLASS,
} from 'Shared/constants/a11y';
import {
  closePanel,
  removePanelContent,
} from 'Shared/store/reducers/panel/actions';
import { i18n } from 'Shared/i18n';
import {
  PanelWrapperStyle,
  PanelOverlayStyle,
  PanelInnerStyle,
  PanelCloseButtonStyle,
  PanelCloseIconStyle,
} from './style';

export const Panel = () => {
  const panelRef = useRef();
  const dispatch = useDispatch();
  const { isExpanded, panelContent } = useSelector(
    (state: StateRoot) => state.panel
  );

  const handleCloseAndRemove = () => {
    dispatch(closePanel());
    dispatch(removePanelContent());
  };

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
      <PanelOverlayStyle
        onClick={handleCloseAndRemove}
        className={isExpanded && 'expanded'}
        aria-label={i18n.t('common.close_panel')}
      />
      <PanelCloseButtonStyle
        onClick={handleCloseAndRemove}
        className={isExpanded && 'expanded'}
        aria-label={i18n.t('common.close_panel')}
      >
        <PanelCloseIconStyle aria-hidden />
      </PanelCloseButtonStyle>
      <PanelInnerStyle className={isExpanded && 'expanded'}>
        {panelContent}
      </PanelInnerStyle>
    </PanelWrapperStyle>
  );
};
