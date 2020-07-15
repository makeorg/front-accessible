import styled from 'styled-components';
import { SvgClock } from 'Client/ui/Svg/elements';
import { Link } from 'react-router-dom';
import {
  TextColors,
  BasicColors,
  MakeThemeColors,
  BackgroundColors,
  ShadowColors,
} from 'Client/app/assets/vars/Colors';
import { intToPx, getFullWidthDividedByItems } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import {
  ColumnElementStyle,
  MiddleColumnStyle,
} from 'Client/ui/Elements/FlexElements';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';

export const BrowseHeaderStyle = styled.header`
  background-color: ${BackgroundColors.LightGrey};
  padding: 30px 20px 0;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 35px 20px 0;
  }
`;

export const BrowseHeaderTitleStyle = styled.h2`
  font-family: ${MakeFonts.CircularStandardBold};
  font-size: 36px;
  margin-bottom: 24px;
  text-transform: none;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 56px;
    margin-bottom: 33px;
  }
`;

export const BrowseNavItemStyle = styled.li`
  display: inline-flex;
  flex-wrap: wrap;
  max-width: 106px;
  margin-right: 45px;
  &:last-child {
    margin-right: 0;
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    max-width: 228px;
    margin-right: 80px;
  }
`;

export const BrowseNavLinkStyle = styled(Link)`
  font-family: ${MakeFonts.CircularStandardBold};
  font-size: 13px;
  line-height: 1.25;
  text-decoration: none;
  padding-bottom: 8px;
  color: ${TextColors.BlackWithOpacity};
  border-bottom: 2px solid transparent;
  &:hover,
  &:focus {
    color: ${BasicColors.PureBlack};
  }
  &.selected,
  &.selected:hover,
  &.selected:focus {
    color: ${MakeThemeColors.Red};
    border-bottom: 2px solid ${MakeThemeColors.Red};
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 16px;
    line-height: 1.25;
    padding-bottom: 14px;
  }
`;

export const ConsultationsTitleWrapperStyle = styled(ColumnElementStyle)`
  margin: 60px 0 40px;
  background-color: ${BasicColors.PureWhite};
`;

export const ConsultationsSubtitleStyle = styled.p`
  font-family: ${MakeFonts.CircularStandardBook};
  font-size: 14px;
  width: 100%;
  color: ${ShadowColors.BlackZeroSixOpacity};
`;

const linkStyle = color => `
  color: ${color};
  font-size: 16px;
  &:hover,
  &:focus {
    color: ${color};
  }
`;

export const ConsultationsListStyle = styled(UnstyledListStyle)`
  display: flex;
  flex-flow: column;
  padding: 0;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    flex-flow: wrap;
  }
`;

export const ConsultationsListItemStyle = styled.li`
  margin-bottom: 50px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    width: ${getFullWidthDividedByItems(2)};
    &:nth-child(2n + 1) {
      padding-right: 15px;
    }
    &:nth-child(2n) {
      padding-left: 15px;
    }
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    width: ${props => getFullWidthDividedByItems(props.itemsPerRow)};
    padding-left: 15px;
    padding-right: 15px;
    &:nth-child(4n + 1) {
      padding-left: 0px;
    }
    &:nth-child(4n) {
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

export const ClockIconStyle = styled(SvgClock)`
  min-width: 12px;
  min-height: 12px;
  margin-top: 2px;
  margin-right: 20px;
  .tofill {
    fill: rgb(37, 49, 134);
  }
`;

export const ConsultationElementParagraphStyle = styled.p`
  font-size: 14px;
  line-height: 22px;
  font-family: ${MakeFonts.CircularStandardBook};
  color: ${TextColors.BlackWithOpacity};
  margin-bottom: 20px;
`;

export const ConsultationRedLinkElementStyle = styled(Link)`
  ${linkStyle(MakeThemeColors.Red)};
  text-transform: uppercase;
  font-family: ${MakeFonts.TradeGothicBoldCondensed};
`;

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
