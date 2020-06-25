import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { intToPx } from 'Shared/helpers/styled';
import {
  SvgAngleArrowRight,
  SvgHouse,
  SvgBigArrowRight,
} from 'Client/ui/Svg/elements';
import { MakeThemeColors, BasicColors } from '../assets/vars/Colors';
import { MakeFonts } from '../assets/vars/Fonts';
import { Breakpoints } from '../assets/vars/Breakpoints';

// BREADCRUMBS STYLES //

export const BrowseBreadcrumbWrapperStyle = styled.ol`
  padding-bottom: 24px;
  margin: 0px;
`;

export const BrowseBannerBreadcrumbListStyle = styled.li`
  display: inline-flex;
  &.selected > a {
    color: ${BasicColors.PureBlack};
    border-bottom: none;
    cursor: default;
  }
`;

export const BrowseBreadcrumbsLinkStyle = styled(Link)`
  font-family: ${MakeFonts.CircularStandardBook};
  color: ${BasicColors.PureBlack};
  text-decoration: none;
  font-size: 12px;
  line-height: 1.67;
  &:hover,
  &:focus {
    color: ${BasicColors.PureBlack};
  }
`;

export const BrowseHomeIconStyle = styled(SvgHouse)`
  margin-right: 10px;
`;

export const BrowseArrowIconStyle = styled(SvgBigArrowRight)`
  margin: 6px 11px;
`;

// DEPRECATED BREADCRUMBS STYLES //

export const BreadcrumbsListStyleDeprecated = styled.ol`
  padding: 0;
  list-style: none;
  margin: 30px 0 20px;
  padding: 0 20px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 0;
    margin: 0 0 40px;
  }
`;

export const BreadcrumbsListItemStyleDeprecated = styled.li`
  display: inline-flex;
  &.selected > a {
    color: ${BasicColors.PureBlack};
    border-bottom: none;
    cursor: default;
  }
`;

export const BreadcrumbsLinkStyleDeprecated = styled(Link)`
  font-family: ${MakeFonts.TradeGothicBoldCondensed};
  color: ${MakeThemeColors.Red};
  text-decoration: none;
  text-transform: uppercase;
  font-size: 16px;
  line-height: 1.25;
  border-bottom: 2px solid ${MakeThemeColors.Red};
  &:hover,
  &:focus {
    color: ${MakeThemeColors.Red};
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 18px;
  }
`;

export const SeparatorIconStyleDeprecated = styled(SvgAngleArrowRight)`
  width: 16px;
  height: 16px;
  margin: 1px 5px 0;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    width: 18px;
    height: 18px;
    margin-top: 2px;
  }
`;
