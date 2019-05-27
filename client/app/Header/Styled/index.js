import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import {
  MakeThemeColors,
  BasicColors,
  ShadowColors,
} from 'Client/app/assets/vars/Colors';
import {
  Layouts,
  Breakpoints,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { HiddenOnMobileStyle } from 'Client/ui/Elements/HiddenElements';

export const HeaderStyle = styled.header`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  flex: 0 0 auto;
  padding: ${intToPx(DefaultPadding.Mobile)};
  box-shadow: 0 2px 4px 0 ${ShadowColors.BlackZeroFiveOpacity};
  background-color: ${BasicColors.PureWhite};
`;

export const HeaderInnerStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: ${intToPx(Layouts.ContainerWidth)};
`;

export const HeaderLogoStyle = styled.img`
  max-width: 50px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    max-width: 90px;
  }
`;

export const ProfileAccessWrapperStyle = styled.div`
  display: flex;
  align-items: center;
  button:last-child > span {
    margin-right: 0;
  }
`;

export const ProfileAccessButtonLabelStyle = styled(HiddenOnMobileStyle)`
  font-family: ${MakeFonts.RobotoBold};
  color: ${MakeThemeColors.Red};
  text-transform: uppercase;
  margin: 0 5px;
`;

export const ProfileAccessLinkStyle = styled.a`
  display: inline-flex;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
  align-items: center;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 16px;
  }
  img,
  svg {
    margin-right: 5px;
  }
`;

export const WhoAreWeLinkStyle = styled(ProfileAccessLinkStyle)`
  color: ${MakeThemeColors.Red};
  justify-self: flex-end;
  margin-right: ${intToPx(DefaultPadding.Desktop)};
  &:hover,
  &:focus {
    color: ${MakeThemeColors.Red};
  }
`;
