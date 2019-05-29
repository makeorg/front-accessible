/* @flow */

import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const ReadableItemStyle = styled.span`
  position: absolute;
  display: none;
  width: 0;
  height: 0;
  z-index: -100;
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

export const HiddenOnDesktopStyle = styled.span`
  width: 100%;
  @media (min-width: ${pxToRem(Breakpoints.Tablet)}) {
    display: none;
    visibility: hidden;
  }
`;
