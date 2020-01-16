import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { intToPx } from 'Shared/helpers/styled';
import { MakeThemeColors, BasicColors } from '../assets/vars/Colors';
import { MakeFonts } from '../assets/vars/Fonts';
import { Breakpoints } from '../assets/vars/Breakpoints';

export const BreadcrumbsListStyle = styled.ol`
  padding: 0;
  list-style: none;
  margin: 0 0 40px;
  padding: 0 20px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 0;
  }
`;

export const BreadcrumbsListItemStyle = styled.li`
  display: inline;
  &.selected > a {
    color: ${BasicColors.PureBlack};
    border-bottom: none;
  }
`;

export const BreadcrumbsLinkStyle = styled(Link)`
  font-family: ${MakeFonts.TradeGothicBoldCondensed};
  color: ${MakeThemeColors.Red};
  text-decoration: none;
  text-transform: uppercase;
  font-size: 20px;
  line-height: 24px;
  border-bottom: 3px solid ${MakeThemeColors.Red};
  &:hover,
  &:focus {
    color: ${MakeThemeColors.Red};
  }
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    font-size: 24px;
    line-height: 32px;
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 26px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 28px;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    font-size: 30px;
  }
`;

export const BreadcrumbsSeparatorIconStyle = {
  margin: '0 5px',
};
