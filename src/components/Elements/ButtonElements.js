import styled from 'styled-components';
import { rem } from 'polished';
import Breakpoints from '../../assets/vars/Breakpoints';
import {
  BasicColors,
  IconColors,
  MakeThemeColors,
  BackgroundColors,
  ShadowColors
} from '../../assets/vars/Colors';
import { MakeFonts } from '../../assets/vars/Fonts';

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: ${rem('20px')} 0;
  @media (min-width: ${rem(Breakpoints.mobile)}){
    flex-flow: row;
  }
`;

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
  border: none;
  border-radius: ${rem('30px')};
  text-transform: uppercase;
  box-shadow: 0 0 4px 0 ${ShadowColors.BlackZeroFiveOpacity};
  @media (min-width: ${rem(Breakpoints.mobile)}){
    font-size: ${rem('16px')};
  }
`;

export const SmallBasicButton = styled(BasicButton)`
  padding: ${rem('8.5px')} ${rem('15px')} ${rem('5.5px')};
  @media (min-width: ${rem(Breakpoints.mobile)}){
    padding: ${rem('10.5px')} ${rem('20px')} ${rem('7.5px')};
  }
`;

export const TallBasicButton = styled(BasicButton)`
  padding: ${rem('10.5px')} ${rem('15px')} ${rem('7.5px')};
  @media (min-width: ${rem(Breakpoints.mobile)}){
    padding: ${rem('12.5px')} ${rem('20px')} ${rem('9.5px')};
  }
`;

export const SmallGreyButton = styled(SmallBasicButton)`
  color: ${BasicColors.PureWhite};
  background: ${BackgroundColors.ExtraLightGrey};
  background-color: ${BackgroundColors.ExtraLightGrey};
`;

export const TallGreyButton = styled(TallBasicButton)`
  color: ${BasicColors.PureWhite};
  background: ${BackgroundColors.ExtraLightGrey};
  background-color: ${BackgroundColors.ExtraLightGrey};
`;

export const SmallRedButton = styled(SmallBasicButton)`
  color: ${BasicColors.PureWhite};
  background: ${MakeThemeColors.Red};
  background-color: ${MakeThemeColors.Red};
`;

export const TallRedButton = styled(TallBasicButton)`
  color: ${BasicColors.PureWhite};
  background: ${MakeThemeColors.Red};
  background-color: ${MakeThemeColors.Red};
`;

export const IconInButton = styled.span`
  margin-right: ${rem('6.5px')};
  @media (min-width: ${rem(Breakpoints.mobile)}){
    margin-right: ${rem('10px')};
  }
`;

export const LargeButton = styled(SmallBasicButton)`
  width: 100%;
  max-width: ${rem('230px')};
  margin: 0 ${rem('5px')};
`;

export const FacebookButton = styled(LargeButton)`
  color: ${BasicColors.PureWhite};
  background: ${IconColors.Facebook};
  background-color: ${IconColors.Facebook};
`;

export const GoogleButton = styled(LargeButton)`
  margin-top: ${rem('10px')};
  color: ${BasicColors.PureWhite};
  background: ${IconColors.Google};
  background-color: ${IconColors.Google};
  @media (min-width: ${rem(Breakpoints.mobile)}){
    margin-top: 0;
  }
`;
export const EmailButton = styled(LargeButton)`
  margin-top: ${rem('10px')};
  color: ${BasicColors.PureWhite};
  background: ${MakeThemeColors.Red};
  background-color: ${MakeThemeColors.Red};
  @media (min-width: ${rem(Breakpoints.mobile)}){
    margin-top: 0;
  }
`;

export const RedLinkButton = styled(UnstyledButton)`
  display: inline-block;
  font-family: ${MakeFonts.CircularBold};
  color: ${MakeThemeColors.Red};
  text-decoration: underline;
  margin: 0 ${rem('5px')}
`;

export const SmallButtonsWrapper = styled(ButtonsWrapper)`
  max-width: ${rem('410px')};
`;
