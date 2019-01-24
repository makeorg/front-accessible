/* @flow */

import styled from 'styled-components';
import { pxToRem } from 'Helpers/styled';
import { Breakpoints } from 'Assets/vars/Breakpoints';

export const HiddenItem = styled.span`
  position: absolute;
  display: none;
  width: 0;
  height: 0;
  z-index: -100;
  visibility: hidden;
`;

export const HiddenOnMobile = styled.div`
  display: none;
  visibility: hidden;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    display: block;
    visibility: visible;
  }
`;

export const HiddenOnDesktop = styled.div`
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    display: none;
    visibility: hidden;
  }
`;
