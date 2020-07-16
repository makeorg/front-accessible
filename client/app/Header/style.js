import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { intToPx } from 'Shared/helpers/styled';
import {
  MakeThemeColors,
  BasicColors,
  ShadowColors,
  TextColors,
} from 'Client/app/assets/vars/Colors';
import {
  Layouts,
  Breakpoints,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { FlexElementStyle } from 'Client/ui/Elements/FlexElements';
import { NavButtonStyle } from 'Client/ui/Elements/Buttons/style';
import { SvgUser } from 'Client/ui/Svg/elements';
import { Image } from 'Client/ui/Image';

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
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

export const HeaderFlexLeftStyle = styled(FlexElementStyle)`
  flex: 1;
  justify-items: flex-start;
  align-items: center;
`;

export const HeaderFlexRightStyle = styled(FlexElementStyle)`
  justify-items: flex-end;
  align-items: center;
`;

export const HeaderLogoStyle = styled(Image)`
  max-width: 50px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    max-width: 78px;
  }
`;

export const ProfileAccessWrapperStyle = styled.div`
  display: flex;
  align-items: center;
  button:last-child > span {
    margin-right: 0;
  }
`;

export const ProfileUserIconStyle = styled(SvgUser)`
  width: 16px;
  .tofill {
    fill: ${TextColors.MediumGrey};
  }
`;

export const ProfileAccessButtonLabelStyle = styled(NavButtonStyle)`
  margin: 0 5px;
`;

export const ProfileAccessLinkStyle = styled(Link)`
  font-family: ${MakeFonts.TradeGothicBoldCondensed};
  display: inline-flex;
  text-decoration: none;
  text-transform: uppercase;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 16px;
  }
  > span {
    margin-right: 5px;
  }
`;

export const WhoAreWeLinkStyle = styled.a`
  color: ${MakeThemeColors.Red};
  justify-self: flex-end;
  margin-right: ${intToPx(DefaultPadding.Desktop)};
  font-family: ${MakeFonts.TradeGothicBoldCondensed};
  display: inline-flex;
  text-decoration: none;
  text-transform: uppercase;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
  &:hover,
  &:focus {
    color: ${MakeThemeColors.Red};
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 16px;
  }
`;
