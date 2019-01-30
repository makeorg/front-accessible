/* @flow */

import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import {
  BasicColors,
  IconColors,
  MakeThemeColors,
  BackgroundColors,
  ShadowColors
} from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: ${pxToRem('10px')} 0;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    flex-flow: row;
    margin: ${pxToRem('20px')} 0;
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
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: baseline;
  font-family: ${MakeFonts.RobotoCondensedBold};
  font-weight: bold;
  font-size: ${pxToRem('14px')};
  border: none;
  border-radius: ${pxToRem('30px')};
  text-transform: uppercase;
  box-shadow: 0 0 4px 0 ${ShadowColors.BlackZeroFiveOpacity};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    font-size: ${pxToRem('16px')};
  }
`;

export const SmallBasicButton = styled(BasicButton)`
  padding: ${pxToRem('5px')} ${pxToRem('15px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    padding: ${pxToRem('9px')} ${pxToRem('20px')};
  }
`;

export const TallBasicButton = styled(BasicButton)`
  padding: ${pxToRem('8px')} ${pxToRem('15px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    padding: ${pxToRem('10px')} ${pxToRem('20px')};
  }
`;

export const SmallGreyButton = styled(SmallBasicButton)`
  color: ${BasicColors.PureWhite};
  background: ${BackgroundColors.Grey};
  background-color: ${BackgroundColors.Grey};
`;

export const TallGreyButton = styled(TallBasicButton)`
  color: ${BasicColors.PureWhite};
  background: ${BackgroundColors.Grey};
  background-color: ${BackgroundColors.Grey};
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
  margin-right: ${pxToRem('6.5px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    margin-right: ${pxToRem('10px')};
  }
`;

export const LargeButton = styled(SmallBasicButton)`
  width: 100%;
  margin: 0 ${pxToRem('5px')};
`;

export const FacebookButton = styled(LargeButton)`
  color: ${BasicColors.PureWhite};
  background: ${IconColors.Facebook};
  background-color: ${IconColors.Facebook};
`;

export const GoogleButton = styled(LargeButton)`
  margin-top: ${pxToRem('10px')};
  color: ${BasicColors.PureWhite};
  background: ${IconColors.Google};
  background-color: ${IconColors.Google};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    margin-top: 0;
  }
`;
export const EmailButton = styled(LargeButton)`
  margin-top: ${pxToRem('10px')};
  color: ${BasicColors.PureWhite};
  background: ${MakeThemeColors.Red};
  background-color: ${MakeThemeColors.Red};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    margin-top: 0;
  }
`;

export const RedLinkButton = styled(UnstyledButton)`
  display: inline-block;
  font-family: ${MakeFonts.RobotoBold};
  font-weight: bold;
  color: ${MakeThemeColors.Red};
  text-decoration: underline;
  margin: 0 ${pxToRem('5px')}
`;

export const SmallButtonsWrapper = styled(ButtonsWrapper)`
  max-width: ${pxToRem('410px')};
`;
