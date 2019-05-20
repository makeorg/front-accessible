/* @flow */

import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const HiddenItemStyle = styled.span`
  position: absolute;
  display: none;
  width: 0;
  height: 0;
  z-index: -100;
  visibility: hidden;
`;

export const HiddenOnMobileStyle = styled.div`
  display: none !important;
  visibility: hidden;
  @media (min-width: ${pxToRem(Breakpoints.Tablet)}) {
    display: flex !important;
    visibility: visible;
  }
`;

export const HiddenOnDesktopStyle = styled.div`
  width: 100%;
  @media (min-width: ${pxToRem(Breakpoints.Tablet)}) {
    display: none;
    visibility: hidden;
  }
`;
