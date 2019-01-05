/* @flow */

import styled from 'styled-components';
import { pxToRem } from 'Helpers/styled';
import Breakpoints from 'Assets/vars/Breakpoints';

export const HiddenItem = styled.span`
  position: absolute;
  display: none;
  width: 0;
  height: 0;
  z-index: -100;
  visibility: hidden;
`;

export const HiddenOnMobile = styled.div`
  display: none !important;
  visibility: hidden;
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    display: block !important;
    visibility: visible;
  }
`;
