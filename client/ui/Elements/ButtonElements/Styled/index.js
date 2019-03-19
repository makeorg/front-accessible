/* @flow */

import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import {
  BasicColors,
  IconColors,
  MakeThemeColors,
  BackgroundColors,
  ShadowColors,
} from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const ButtonsWrapperStyle = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    flex-flow: row;
    margin: 20px 0;
  }
`;

export const UnstyledButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: 0;
  border: none;
  background: transparent;
  background-color: transparent;
`;

export const BasicButtonStyle = styled.button`
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: baseline;
  font-family: ${MakeFonts.RobotoCondensedBold};
  font-size: 14px;
  line-height: 1;
  border: none;
  border-radius: 30px;
  text-transform: uppercase;
  box-shadow: 0 0 4px 0 ${ShadowColors.BlackZeroFiveOpacity};
  padding: 5px 15px;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    font-size: 16px;
    padding: 10px 20px;
  }
`;

export const GreyButtonStyle = styled(BasicButtonStyle)`
  color: ${BasicColors.PureWhite};
  background-color: ${BackgroundColors.Grey};
  svg {
    fill: ${BasicColors.PureWhite};
  }
`;

export const RedButtonStyle = styled(BasicButtonStyle)`
  color: ${BasicColors.PureWhite};
  background-color: ${MakeThemeColors.Red};
  svg {
    fill: ${BasicColors.PureWhite};
  }
`;

export const TallRedButtonStyle = styled(RedButtonStyle)`
  padding: 8px 15px;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    padding: 10px 20px;
  }
`;

export const IconWrapperStyle = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    font-size: 14px;
  }
`;

export const LargeButtonStyle = styled(BasicButtonStyle)`
  width: 100%;
  margin: 0 5px;
`;

export const FacebookButtonStyle = styled(LargeButtonStyle)`
  color: ${BasicColors.PureWhite};
  background-color: ${IconColors.Facebook};
`;

export const GoogleButtonStyle = styled(LargeButtonStyle)`
  margin-top: 10px;
  color: ${BasicColors.PureWhite};
  background-color: ${IconColors.Google};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    margin-top: 0;
  }
`;
export const EmailButtonStyle = styled(LargeButtonStyle)`
  margin-top: 10px;
  color: ${BasicColors.PureWhite};
  background-color: ${MakeThemeColors.Red};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    margin-top: 0;
  }
`;

export const RedLinkButtonStyle = styled(UnstyledButtonStyle)`
  display: inline-block;
  font-family: ${MakeFonts.RobotoBold};
  color: ${MakeThemeColors.Red};
  text-decoration: underline;
  margin: 0 5px;
`;

export const SmallButtonWrapperStyle = styled(ButtonsWrapperStyle)`
  max-width: 410px;
`;
