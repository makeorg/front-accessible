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
import { UnstyledButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const HeaderStyle = styled.header`
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
`;

export const ProfileAccessButtonStyle = styled(UnstyledButtonStyle)`
  display: inline-block;
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
