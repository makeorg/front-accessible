import styled from 'styled-components';
import { rem } from 'polished';
import Breakpoints from '../../assets/vars/Breakpoints';
import { BasicColors, MakeThemeColors, BackgroundColors } from '../../assets/vars/Colors';
import { MakeFonts } from '../../assets/vars/Fonts';

export const BasicButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: baseline;
  font-family: ${MakeFonts.TradeGothic};
  font-size: ${rem('14px')};
  padding: ${rem('9px')} ${rem('20px')} ${rem('7px')};
  border: none;
  border-radius: ${rem('30px')};
  @media (min-width: ${rem(Breakpoints.mobile)}){
    font-size: ${rem('16px')};
  }
`;

export const GreyButton = styled(BasicButton)`
  text-transform: uppercase;
  color: ${BasicColors.PureWhite};
  background: ${BackgroundColors.ExtraLightGrey};
  background-color: ${BackgroundColors.ExtraLightGrey};
`;

export const RedButton = styled(BasicButton)`
  text-transform: uppercase;
  color: ${BasicColors.PureWhite};
  background: ${MakeThemeColors.Red};
  background-color: ${MakeThemeColors.Red};
`;

export const IconInButton = styled.span`
  margin-right: ${rem('5px')}
`;
