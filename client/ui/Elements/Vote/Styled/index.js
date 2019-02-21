import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { BasicColors, ShadowColors } from 'Client/app/assets/vars/Colors';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-width: ${pxToRem('2px')};
  font-size: ${pxToRem('22px')};
  border-style: solid;
  border-radius: 50%;
  border-color: ${props => props.color};
  transform: rotate(${props => props.rotate}deg);
  overflow: hidden;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    width: 60px;
    height: 60px;
    font-size: ${pxToRem('30px')};
  }
`;

export const UnvoteButtonStyle = styled(ButtonStyle)`
  color: ${BasicColors.PureWhite};
  background-color: ${props => props.color};
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
`;

export const VoteButtonStyle = styled(ButtonStyle)`
  color: ${props => props.color};
  background-color: ${BasicColors.PureWhite};
  &:focus,
  &:active {
    color: ${BasicColors.PureWhite};
    background-color: ${props => props.color};
  }
`;
