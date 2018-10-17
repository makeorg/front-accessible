import styled from 'styled-components';
import { rem } from 'polished';
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
  min-height: calc(100vh - ${rem('134px')});
  padding: ${rem('20px')};
  overflow: hidden;
  @media (min-width: ${rem(Breakpoints.mobile)}){
    padding: ${rem('40px')} ${rem('20px')};
    min-height: calc(100vh - ${rem('153px')});
  }
`;
