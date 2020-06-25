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
import { intToPx, getFullWidthDividedByItems } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import {
  SpaceBetweenColumnStyle,
  ColumnElementStyle,
  MiddleColumnStyle,
} from 'Client/ui/Elements/FlexElements';

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

export const ConsultationElementStyle = styled(SpaceBetweenColumnStyle)`
  flex-direction: column;
  margin-bottom: 50px;
  flex: 1 1 auto;
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    width: ${getFullWidthDividedByItems(2)};
    &:nth-child(odd) {
      padding-right: 15px;
    }
    &:nth-child(even) {
      padding-left: 15px;
    }
    &:nth-child(3) {
      margin-bottom: 0;
    }
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    width: ${getFullWidthDividedByItems(props => props.itemsCount)};
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 0;
    &:first-child {
      padding-left: 0px;
    }
    &:last-child {
      padding-right: 0px;
    }
  }
`;

export const ConsultationArticleStyle = styled.article`
  display: flex;
  flex-flow: column;
  flex: 1;
`;

export const ConsultationElementPictureStyle = styled.img`
  margin-bottom: 20px;
`;

export const ConsultationElementSubtitleStyle = styled.span`
  font-size: 15px;
  text-transform: uppercase;
  color: ${TextColors.BlackWithOpacity};
  font-family: ${MakeFonts.TradeGothicBoldCondensed};
  margin-bottom: 5px;
`;

export const ConsultationElementTitleStyle = styled.p`
  font-size: 18px;
  color: ${BasicColors.PureBlack};
  font-family: ${MakeFonts.CircularStandardBold};
  line-height: 1.44;
  margin-bottom: 20px;
`;

export const ConsultationElementDateWrapperStyle = styled.div`
  display: flex;
`;

export const ClockIconStyle = styled(SvgClock)`
  min-width: 12px;
  min-height: 12px;
  margin-right: 20px;
`;

export const ConsultationElementDateStyle = styled.p`
  font-size: 14px;
  font-family: ${MakeFonts.CircularStandardBook};
  color: ${TextColors.BlackWithOpacity};
  margin-bottom: 20px;
`;

export const ConsultationRedLinkElementStyle = styled(Link)`
  ${linkStyle(MakeThemeColors.Red)};
  text-transform: uppercase;
  font-family: ${MakeFonts.TradeGothicBoldCondensed};
`;

// NO CONSULTATION ELEMENTS //

export const NoConsultationWrapperStyle = styled(ColumnElementStyle)`
  max-width: 540px;
  flex: 1;
`;

export const NoConsultationImageStyle = styled(MiddleColumnStyle)`
  background-color: ${BackgroundColors.LightGrey};
  min-height: 174px;
  margin-bottom: 20px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    min-height: 248px;
    margin-bottom: 25px;
  }
`;
