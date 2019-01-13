/* @flow */

import styled from 'styled-components';
import { pxToRem } from 'Helpers/styled';
import { BackgroundColors } from 'Assets/vars/Colors';
import { Breakpoints } from 'Assets/vars/Breakpoints';
import { MiddleColumn, SpaceBetweenColumn } from './FlexElements';

export const AppWrapper = styled(SpaceBetweenColumn)`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  background: ${BackgroundColors.LightGrey};
  background-color: ${BackgroundColors.LightGrey};
`;

export const MainContent = styled.main`
  position: relative;
  height: calc(100vh - ${pxToRem('67px')});
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    height: calc(100vh - ${pxToRem('75px')});
  }
`;

export const InnerContent = styled(MiddleColumn)`
  width: 100%;
  height: 100%;
`;

export const ProposalSubmitWrapper = styled.aside`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  padding: 0 ${pxToRem('20px')};
`;
