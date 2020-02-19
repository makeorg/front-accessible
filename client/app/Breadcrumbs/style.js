import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { intToPx } from 'Shared/helpers/styled';
import { SvgAngleArrowRight } from 'Client/ui/Svg/elements';
import { MakeThemeColors, BasicColors } from '../assets/vars/Colors';
import { MakeFonts } from '../assets/vars/Fonts';
import { Breakpoints } from '../assets/vars/Breakpoints';

export const BreadcrumbsListStyle = styled.ol`
  padding: 0;
  list-style: none;
  margin: 30px 0 20px;
  padding: 0 20px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 0;
    margin: 0 0 40px;
  }
`;

export const BreadcrumbsListItemStyle = styled.li`
  display: inline-flex;
  &.selected > a {
    color: ${BasicColors.PureBlack};
    border-bottom: none;
    cursor: default;
  }
`;

export const BreadcrumbsLinkStyle = styled(Link)`
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

export const BreadcrumbsSeparatorIconStyle = styled(SvgAngleArrowRight)`
  width: 16px;
  height: 16px;
  margin: 1px 5px 0;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    width: 18px;
    height: 18px;
    margin-top: 2px;
  }
`;
