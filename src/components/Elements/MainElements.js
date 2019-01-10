/* @flow */

import styled from 'styled-components';
import { pxToRem } from 'Helpers/styled';
import { BackgroundColors } from 'Assets/vars/Colors';
import { Breakpoints } from 'Assets/vars/Breakpoints';
import { SpaceBetweenColumn } from './FlexElements';

export const AppWrapper = styled(SpaceBetweenColumn)`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  background: ${BackgroundColors.LightGrey};
  background-color: ${BackgroundColors.LightGrey};
`;

export const MainContent = styled.main`
  height: calc(100vh - ${pxToRem('67px')});
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    height: calc(100vh - ${pxToRem('75px')});
  }
`;

export const SequenceContent = styled.div`
  width: 100%;
  height: calc(100% - ${pxToRem('91px')});
  overflow: auto;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    height: calc(100% - ${pxToRem('78px')});
  }
`;


export const InnerContent = styled.div`
  position: relative;
  z-index: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: ${pxToRem('545px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    min-height: ${pxToRem('660px')};
  }
`;

export const ProposalSubmitWrapper = styled.aside`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  padding: 0 ${pxToRem('20px')};
`;
