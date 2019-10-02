import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import {
  Breakpoints,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import {
  BasicColors,
  IconColors,
  MakeThemeColors,
  BackgroundColors,
  TextColors,
} from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const ButtonsWrapperStyle = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    flex-flow: row;
    margin: 20px 0;
  }
`;

export const UnstyledButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: none;
  background-color: transparent;
`;

export const BasicButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: baseline;
  font-family: ${MakeFonts.TradeGothicBoldCondensed};
  font-size: 14px;
  line-height: 1;
  border: none;
  border-radius: 20px;
  text-transform: uppercase;
  padding: 12px 25px 8px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 16px;
    padding: 13px 25px 10px;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    font-size: 18px;
  }
`;

export const RedButtonStyle = styled(BasicButtonStyle)`
  color: ${BasicColors.PureWhite};
  background-color: ${MakeThemeColors.Red};
  svg {
    fill: ${BasicColors.PureWhite};
  }
`;

export const GreyButtonStyle = styled(BasicButtonStyle)`
  color: ${TextColors.MediumGrey};
  background-color: ${BackgroundColors.ExtraLightGrey};
  svg {
    fill: ${MakeThemeColors.Red};
  }
  &:hover,
  &:focus {
    color: ${TextColors.MediumGrey};
  }
`;

export const SmallRedButtonStyle = styled(RedButtonStyle)`
  padding: 5px 15px 2.5px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 10px 20px;
  }
`;

export const SmallGreyButtonStyle = styled(GreyButtonStyle)`
  padding: 5px 15px 2.5px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 10px 20px;
  }
`;

export const ActiveButtonStyle = styled(BasicButtonStyle)`
  color: ${BasicColors.PureWhite};
  background-color: ${MakeThemeColors.Red};
  svg,
  > .tofill {
    fill: ${BasicColors.PureWhite};
  }
  &:disabled {
    color: ${TextColors.MediumGrey};
    background-color: ${BackgroundColors.ExtraLightGrey};
    svg,
    .tofill {
      fill: ${TextColors.MediumGrey};
    }
  }
`;

export const IconWrapperStyle = styled.span`
  display: inline-flex;
  justify-content: flex-start;
  align-content: center;
  font-size: 12px;
  margin-right: 5px;
  svg {
    width: 12px;
    height: 12px;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

export const SocialButtonStyle = styled(ActiveButtonStyle)`
  width: 100%;
  margin: 0 5px;
  padding: 5px 15px;
  color: ${BasicColors.PureWhite};
  svg {
    fill: ${BasicColors.PureWhite};
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 10px 20px;
  }
`;

const SocialButtonMargin = `
  margin-top: 10px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin-top: 0;
  }
`;

export const FacebookButtonStyle = styled(SocialButtonStyle)`
  background-color: ${IconColors.Facebook};
`;

export const GoogleButtonStyle = styled(SocialButtonStyle)`
  ${SocialButtonMargin};
  background-color: ${IconColors.Google};
`;
export const EmailButtonStyle = styled(SocialButtonStyle)`
  ${SocialButtonMargin};
  background-color: ${MakeThemeColors.Red};
`;

export const RedLinkButtonStyle = styled(UnstyledButtonStyle)`
  display: inline-block;
  color: ${MakeThemeColors.Red};
  text-decoration: underline;
  margin: 0 5px;
`;

export const ButtonSmallWrapperStyle = styled(ButtonsWrapperStyle)`
  max-width: 410px;
`;

export const CloseButtonStyle = styled(UnstyledButtonStyle)`
  position: absolute;
  top: ${intToPx(DefaultPadding.Mobile)};
  right: ${intToPx(DefaultPadding.Mobile)};
  fill: ${MakeThemeColors.Red};
  z-index: 1;
  font-size: 16px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    top: ${intToPx(DefaultPadding.Desktop)};
    right: ${intToPx(DefaultPadding.Desktop)};
  }
`;

export const NavButtonStyle = styled(UnstyledButtonStyle)`
  font-family: ${MakeFonts.TradeGothicBoldCondensed};
  font-size: 14px;
  line-height: 20px;
  color: ${MakeThemeColors.Red};
  text-transform: uppercase;
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    font-size: 16px;
  }
`;
