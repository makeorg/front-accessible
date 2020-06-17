import styled from 'styled-components';
import { SvgClock } from 'Client/ui/Svg/elements';
import { Link } from 'react-router-dom';
import {
  TextColors,
  BasicColors,
  MakeThemeColors,
  ShadowColors,
  BackgroundColors,
} from 'Client/app/assets/vars/Colors';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import {
  FlexElementStyle,
  SpaceBetweenColumnStyle,
  ColumnElementStyle,
  StartColumnStyle,
} from '../../../ui/Elements/FlexElements';

const linkStyle = color => `
  color: ${color};
  font-size: 16px;
  &:hover,
  &:focus {
    color: ${color};
  }
`;

// BROWSE ELEMENTS//

export const BrowseBannerWrapperStyle = styled(ColumnElementStyle)`
  padding-top: 28px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding-top: 36px;
  }
`;

export const BrowseBannerTitleStyle = styled.h1`
  font-family: ${MakeFonts.CircularStandardBold};
  font-size: 36px;
  margin-bottom: 24px;
  text-transform: none;
  max-width: 308px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 56px;
    margin-bottom: 33px;
    max-width: 646px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    max-width: 1110px;
  }
`;

export const BrowseNavListStyle = styled.ol`
  display: flex;
  justify-content: start;
  max-width: 308px;
  padding-inline-start: 0px;
  margin: 0px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    max-width: 646px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    max-width: 1110px;
  }
`;

export const BrowseNavItemStyle = styled.li`
  display: inline-flex;
  flex-wrap: wrap;
  max-width: 106px;
  margin-right: 45px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    max-width: 228px;
    margin-right: 80px;
  }
`;

export const BrowseNavLinkStyle = styled.a`
  font-family: ${MakeFonts.CircularStandardBold};
  font-size: 13px;
  line-height: 1.25;
  text-decoration: none;
  padding-bottom: 8px;
  &:link,
  &:visited {
    color: ${TextColors.BlackWithOpacity};
  }
  &:hover,
  &:active,
  &:focus {
    color: ${MakeThemeColors.Red};
  }
  color: ${props =>
    props.isSelected
      ? `${MakeThemeColors.Red}`
      : `${TextColors.BlackWithOpacity}`};
  border-bottom: ${props =>
    props.isSelected
      ? `2px solid ${MakeThemeColors.Red};`
      : `2px solid transparent`};

  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 16px;
    line-height: 1.25;
    padding-bottom: 14px;
  }
`;

// CONSULTATION ELEMENTS //

export const ConsultationsTitleWrapperStyle = styled(ColumnElementStyle)`
  flex-wrap: wrap;
  padding: 30px 0px;
  background-color: ${BasicColors.PureWhite};
`;

export const ConsultationsTitleStyle = styled.h2`
  font-family: ${MakeFonts.CircularStandardBold};
  font-size: 30px;
  padding: 30px 0px 20px;
  text-transform: none;
  max-width: 308px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 42px;
    max-width: 646px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 42px;
    max-width: 1110px;
  }
`;

export const ConsultationsSubtitleStyle = styled.p`
  font-family: ${MakeFonts.CircularStandardBook};
  font-size: 14px;
  max-width: 308px;
  color: ${ShadowColors.BlackZeroSixOpacity};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    max-width: 646px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    max-width: 1110px;
  }
`;

export const ConsultationsWrapperStyle = styled(FlexElementStyle)`
  flex-flow: row;
  flex-wrap: wrap;
  background-color: ${BasicColors.PureWhite};
  padding-inline-start: 0px;
`;

export const ConsultationElementStyle = styled(SpaceBetweenColumnStyle)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  box-sizing: border-box;
  padding: 20px 0px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    width: 50%;
    &:nth-child(odd) {
      padding-right: 30px;
    }
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    width: 33%;
    padding-right: 30px;
    &:nth-child(3) {
      padding-right: 0px;
    }
  }
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    width: 25%;
    padding-right: 30px;
    &:nth-child(3) {
      padding-right: 30px;
    }
    &:nth-child(4) {
      padding-right: 0px;
    }
  }
`;

export const ConsultationElementPicture = styled.img`
  margin-bottom: 20px;
`;

export const ConsultationElementSubtitle = styled.p`
  font-size: 15px;
  text-transform: uppercase;
  color: ${TextColors.BlackWithOpacity};
  font-family: ${MakeFonts.TradeGothicBoldCondensed};
  padding-bottom: 6px;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    padding: 6px 0px;
  }
`;

export const ConsultationElementQuestion = styled.p`
  font-size: 18px;
  color: ${BasicColors.PureBlack};
  font-family: ${MakeFonts.CircularStandardBold};
  line-height: 1.44;
  padding-bottom: 20px;
`;

export const ConsultationElementDateWrapper = styled.div`
  display: flex;
  padding-bottom: 20px;
`;

export const BrowseClockIconStyle = styled(SvgClock)`
  margin-right: 22px;
`;

export const ConsultationElementDateStyle = styled.p`
  font-size: 14px;
  font-family: ${MakeFonts.CircularStandardBook};
  color: ${TextColors.BlackWithOpacity};
  max-width: 258px;
`;

export const ConsultationRedLinkElementStyle = styled(Link)`
  ${linkStyle(MakeThemeColors.Red)};
  text-transform: uppercase;
  font-family: ${MakeFonts.TradeGothicBoldCondensed};
`;

// NO CONSULTATION ELEMENTS //

export const NoConsultationWrapperStyle = styled(StartColumnStyle)`
  background-color: ${BasicColors.PureWhite};
  margin-bottom: 50px;
`;

export const NoConsultationImageStyle = styled.div`
  background-color: ${BackgroundColors.LightGrey};
  width: 308px;
  height: 174px;
  margin: 20px 0px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    width: 540px;
    height: 248px;
    margin-bottom: 26px;
  }
`;

export const SvgMailWrapperStyle = styled.span`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const NoConsultationTextStyle = styled.p`
  font-family: ${MakeFonts.CircularStandardBold};
  font-size: 18px;
  line-height: 1.44;
  max-width: 308px;
  margin-bottom: 20px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    max-width: 540px;
    line-height: 1.22;
  }
`;
