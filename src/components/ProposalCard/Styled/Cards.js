import styled from 'styled-components';
import { pxToRem } from '../../../helpers/styled';
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
  padding: ${pxToRem('15px')};
  background: ${BasicColors.PureWhite};
  background-color: ${BasicColors.PureWhite};
  box-shadow: 0 0 2px 0 ${ShadowColors.BlackZeroThreeOpacity};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    padding: ${pxToRem('30px')};
  }
`;

export const FakeNavWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${pxToRem('15px')};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    margin-bottom: ${pxToRem('30px')};
  }
`;
