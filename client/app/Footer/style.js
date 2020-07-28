import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BasicColors, BorderColors } from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { intToPx } from 'Shared/helpers/styled';
import { SvgExternalLink } from 'Client/ui/Svg/elements';
import {
  Layouts,
  DefaultPadding,
  Breakpoints,
} from 'Client/app/assets/vars/Breakpoints';

export const FooterSeparationLineStyle = styled.hr`
  margin: 0 auto;
  padding: 0 ${intToPx(DefaultPadding.Mobile)};
  width: 100%;
  max-width: ${intToPx(Layouts.ContainerWidth)};
  height: 1px;
  border-color: ${BorderColors.LightGrey};
`;

export const FooterStyle = styled.footer`
  padding: 0 20px 20px;
  background-color: ${BasicColors.PureWhite};
`;

export const FooterNavStyle = styled.nav`
  width: 100%;
  margin: 30px auto;
  max-width: ${intToPx(Layouts.ContainerWidth)};
`;

export const FooterItemStyle = styled.li`
  display: inline-block;
  &:after {
    content: '.';
    position: relative;
    bottom: 3px;
    margin: 0 5px;
  }
  &:last-child :after {
    display: none;
  }
`;

export const FooterItemLinkStyle = styled(Link)`
  display: inline-block;
  vertical-align: bottom;
  font-family: ${MakeFonts.CircularStandardBook};
  text-decoration: underline;
  font-size: 14px;
  line-height: 24px;
`;

export const FooterLinkIconStyle = styled(SvgExternalLink)`
  width: 12px;
  height: 12px;
  margin-left: 5px;
  .tofill {
    fill: ${BasicColors.PureBlack};
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    width: 14px;
    height: 14px;
  }
`;
