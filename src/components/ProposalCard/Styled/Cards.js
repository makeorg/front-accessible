import styled from 'styled-components';
import { rem } from 'polished';
import { BasicColors, ShadowColors } from '../../../assets/vars/Colors';
import Breakpoints from '../../../assets/vars/Breakpoints';

export const IntroProposalCard = styled.li`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: ${rem('15px')};
  background: ${BasicColors.PureWhite};
  background-color: ${BasicColors.PureWhite};
  box-shadow: 0 0 2px 0 ${ShadowColors.BlackZeroThreeOpacity};
  @media (min-width: ${rem(Breakpoints.mobile)}){
    padding: ${rem('30px')};
  }
`;

export const FakeNavWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${rem('15px')};
  @media (min-width: ${rem(Breakpoints.mobile)}){
    margin-bottom: ${rem('30px')};
  }
`;
