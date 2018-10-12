import styled from 'styled-components';
import { rem } from 'polished';
import Breakpoints from '../../assets/vars/Breakpoints';
import {
  BasicColors,
  MakeThemeColors,
  BackgroundColors,
  ShadowColors
} from '../../assets/vars/Colors';
import { MakeFonts } from '../../assets/vars/Fonts';

export const UnstyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: 0;
  border: none;
  background: transparent;
  background-color: transparent;
`;

export const BasicButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: baseline;
  font-family: ${MakeFonts.TradeGothic};
  font-size: ${rem('14px')};
  padding: ${rem('12px')} ${rem('20px')} ${rem('9px')};
  border: none;
  border-radius: ${rem('30px')};
  text-transform: uppercase;
  box-shadow: 0 0 4px 0 ${ShadowColors.BlackZeroFiveOpacity};
  @media (min-width: ${rem(Breakpoints.mobile)}){
    font-size: ${rem('16px')};
  }
`;

export const GreyButton = styled(BasicButton)`
  color: ${BasicColors.PureWhite};
  background: ${BackgroundColors.ExtraLightGrey};
  background-color: ${BackgroundColors.ExtraLightGrey};
`;

export const RedButton = styled(BasicButton)`
  color: ${BasicColors.PureWhite};
  background: ${MakeThemeColors.Red};
  background-color: ${MakeThemeColors.Red};
`;

export const IconInButton = styled.span`
  margin-right: ${rem('5px')}
`;
