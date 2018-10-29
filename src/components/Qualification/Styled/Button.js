import styled from 'styled-components';
import { pxToRem } from '../../../helpers/styled';
import { MakeFonts } from '../../../assets/vars/Fonts';
import { BasicColors, ShadowColors } from '../../../assets/vars/Colors';

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  border-width: ${pxToRem('2px')};
  font-size: ${pxToRem('16px')};
  line-height: ${pxToRem('33px')};
  border-style: solid;
  padding: 0 ${pxToRem('15px')};
  border-radius: ${pxToRem('36px')};
  border-color: ${props => props.color};
`;

export const UnqualifyButton = styled(Button).attrs({
  color: props => props.color
})`
  color: ${BasicColors.PureWhite};
  background: ${props => props.color};
  background-color: : ${props => props.color};
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
`;

export const QualifyButton = styled(Button).attrs({
  color: props => props.color
})`
  color: ${props => props.color};
  background: ${BasicColors.PureWhite};
  background-color: ${BasicColors.PureWhite};
`;

export const QualificationCounter = styled.span`
  font-family: ${MakeFonts.CircularBold};
  font-size: ${pxToRem('22px')};
`;
