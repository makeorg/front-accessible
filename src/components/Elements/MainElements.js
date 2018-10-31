import styled from 'styled-components';
import { pxToRem } from '../../helpers/styled';
import { SpaceBetweenColumn } from './FlexElements';
import { BackgroundColors } from '../../assets/vars/Colors';
import Breakpoints from '../../assets/vars/Breakpoints';

export const AppWrapper = styled(SpaceBetweenColumn)`
  min-height: 100vh;
  background: ${BackgroundColors.LightGrey};
  background-color: ${BackgroundColors.LightGrey};
`;

export const MainContent = styled.main`
  position: relative;
  z-index: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - ${pxToRem('134px')});
  min-height: ${pxToRem('615px')};
  padding: ${pxToRem('20px')} ${pxToRem('20px')} 0;
  overflow: hidden;
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    padding: ${pxToRem('40px')} ${pxToRem('20px')} 0;
    height: calc(100vh - ${pxToRem('153px')});
    min-height: ${pxToRem('725px')};
  }
`;

export const ProposalSubmitWrapper = styled.aside`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
`;
