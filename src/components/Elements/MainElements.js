import styled from 'styled-components';
import { pxToRem } from '../../helpers/styled';
import { SpaceBetweenColumn } from './FlexElements';
import { BackgroundColors } from '../../assets/vars/Colors';
import Breakpoints from '../../assets/vars/Breakpoints';

export const AppWrapper = styled(SpaceBetweenColumn)`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  background: ${BackgroundColors.LightGrey};
  background-color: ${BackgroundColors.LightGrey};
`;

export const MainContent = styled.main`
  width: 100%;
  height: calc(100vh - ${pxToRem('134px')});
  overflow: auto;
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    height: calc(100vh - ${pxToRem('153px')});
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
  min-height: ${pxToRem('615px')};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    min-height: ${pxToRem('725px')};
  }
`;

export const ProposalSubmitWrapper = styled.aside`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  padding: 0 ${pxToRem('20px')};
`;
