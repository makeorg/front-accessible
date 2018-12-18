import styled from 'styled-components';
import { pxToRem } from 'Helpers/styled';
import Unstyledlist from 'Components/Elements/ListElements';
import { BasicColors, ShadowColors } from 'Assets/vars/Colors';
import Breakpoints from 'Assets/vars/Breakpoints';

export const ButtonList = styled(Unstyledlist)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${pxToRem('46px')};
  height: ${pxToRem('46px')};
  border-width: ${pxToRem('2px')};
  font-size: ${pxToRem('22px')};
  border-style: solid;
  border-radius: 50%;
  border-color: ${props => props.color};
  transform: rotate(${props => props.rotate}deg);
  overflow: hidden;
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    width: ${pxToRem('60px')};
    height: ${pxToRem('60px')};
    font-size: ${pxToRem('30px')};
  }
`;

export const UnvoteButton = styled(Button)`
  color: ${BasicColors.PureWhite};
  background: ${props => props.color};
  background-color: : ${props => props.color};
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
`;

export const VoteButton = styled(Button)`
  color: ${props => props.color};
  background: ${BasicColors.PureWhite};
  background-color: ${BasicColors.PureWhite};
`;
