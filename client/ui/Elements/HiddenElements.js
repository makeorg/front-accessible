/* @flow */

import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const ReadableItemStyle = styled.span`
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
`;

export const HiddenItemStyle = styled.span`
  position: absolute;
  display: none;
  width: 0;
  height: 0;
  z-index: -100;
  visibility: hidden;
`;

export const HiddenOnMobileStyle = styled.span`
  display: none !important;
  visibility: hidden;
  @media (min-width: ${pxToRem(Breakpoints.Tablet)}) {
    display: flex !important;
    visibility: visible;
  }
`;
