import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { MakeFonts } from 'Src/assets/vars/Fonts';
import { BasicColors, ShadowColors } from 'Src/assets/vars/Colors';
import { Breakpoints } from 'Src/assets/vars/Breakpoints';

export const Button = styled.button`
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

export const UnqualifyButton = styled(Button)`
  color: ${BasicColors.PureWhite};
  background: ${props => props.color};
  background-color: : ${props => props.color};
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
`;

export const QualifyButton = styled(Button)`
  color: ${props => props.color};
  background: ${BasicColors.PureWhite};
  background-color: ${BasicColors.PureWhite};
  &:hover {
    color: ${BasicColors.PureWhite};
    background: ${props => props.color};
    background-color: ${props => props.color};
  }
`;

export const QualificationCounter = styled.span`
  font-family: ${MakeFonts.RobotoBold};
  font-weight: bold;
  font-size: ${pxToRem('18px')};
  margin-left: ${pxToRem('10px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    font-size: ${pxToRem('22px')};
  }
`;
