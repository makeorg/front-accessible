/* @flow */

import styled from 'styled-components';
import { pxToRem } from 'Helpers/styled';
import { BackgroundColors, BasicColors, BorderColors } from 'Assets/vars/Colors';
import { Breakpoints, Layouts } from 'Assets/vars/Breakpoints';
import { MiddleColumn, SpaceBetweenColumn, CenterColumn } from './FlexElements';

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

export const SequenceContent = styled.div`
  width: 100%;
  height: calc(100% - ${pxToRem('91px')});
  overflow: auto;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    height: calc(100% - ${pxToRem('78px')});
  }
`;

export const PageWrapper = styled(CenterColumn)`
  width: 100%;
  height: 100%;
  padding: ${pxToRem('20px')} ${pxToRem('20px')} 0;
`;

export const PageContent = styled(CenterColumn)`
  width: 100%;
  height: 100%;
  max-width: ${Layouts.ContainerWidth};
  background-color: ${BasicColors.PureWhite};
  border: ${pxToRem('1px')} solid ${BorderColors.LightGrey};
  padding: ${pxToRem('20px')};
`;

export const InnerContent = styled(MiddleColumn)`
  position: relative;
  z-index: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
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
