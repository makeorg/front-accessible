// @flow
import ReactDOM from 'react-dom';
import { document } from 'ssr-window';
import React, { useEffect } from 'react';
import {
  PANEL_PORTAL,
  PANEL_WRAPPER,
  PANEL_OVERLAY,
  PANEL_CONTENT,
} from 'Shared/constants/ids';
import { lockBody, unlockBody } from 'Shared/helpers/styled';
import { collapsePanel, expandPanel } from 'Shared/helpers/a11y';
import { PanelWrapperStyle, PanelOverlayStyle, PanelInnerStyle } from './style';

export const PanelPortal = () => (
  <PanelWrapperStyle id={PANEL_WRAPPER} aria-hidden>
    <PanelOverlayStyle id={PANEL_OVERLAY} />
    <PanelInnerStyle id={PANEL_PORTAL} />
  </PanelWrapperStyle>
);

type Props = {
  isExpanded: boolean,
  children: any,
};

export const Panel = ({ isExpanded, children }: Props) => {
  const panelPortal = document.getElementById(PANEL_PORTAL);
  const el = document.createElement('section');
  el.id = PANEL_CONTENT;

  useEffect(() => {
    panelPortal.appendChild(el);
    return () => {
      panelPortal.removeChild(el);
    };
  });

  if (isExpanded && panelPortal && el) {
    lockBody();
    expandPanel();
    return ReactDOM.createPortal(children, el);
  }

  if (panelPortal && el) {
    collapsePanel();
    unlockBody();
    return ReactDOM.createPortal(null, el);
  }

  return null;
};
