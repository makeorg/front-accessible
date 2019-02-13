import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { BasicColors, ShadowColors } from 'Client/app/assets/vars/Colors';

export const ButtonStyle = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  border-width: ${pxToRem('2px')};
  font-size: ${pxToRem('12px')};
  line-height: ${pxToRem('26px')};
  border-style: solid;
  padding: 0 ${pxToRem('10px')};
  border-radius: ${pxToRem('36px')};
  border-color: ${props => props.color};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    font-size: ${pxToRem('16px')};
    line-height: ${pxToRem('33px')};
    padding: 0 ${pxToRem('15px')};
  }
`;

export const UnqualifyButtonStyle = styled(ButtonStyle)`
  color: ${BasicColors.PureWhite};
  background-color: ${props => props.color};
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
`;

export const QualifyButtonStyle = styled(ButtonStyle)`
  color: ${props => props.color};
  background-color: ${BasicColors.PureWhite};
  &:focus,
  &:active {
    color: ${BasicColors.PureWhite};
    background-color: ${props => props.color};
  }
`;

export const CounterStyle = styled.span`
  font-family: ${MakeFonts.RobotoBold};
  font-size: ${pxToRem('18px')};
  margin-left: ${pxToRem('10px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    font-size: ${pxToRem('22px')};
  }
`;
