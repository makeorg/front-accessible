import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BasicColors, BorderColors } from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { intToPx } from 'Shared/helpers/styled';
import { SvgExternalLink } from 'Client/ui/Svg/elements';
import { Layouts, Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const FooterStyle = styled.footer`
  padding: 0 20px 55px;
`;

export const FooterNavStyle = styled.nav`
  width: 100%;
  margin: 0 auto;
  padding-top: 30px;
  max-width: ${intToPx(Layouts.ContainerWidth)};
  border-top: 1px solid ${BorderColors.LightGrey};
`;

export const FooterItemStyle = styled.li`
  display: inline-flex;
  &:after {
    content: '.';
    margin: 0 5px;
  }
  &:last-child :after {
    display: none;
  }
`;

export const FooterItemLinkStyle = styled(Link)`
  display: inline-flex;
  align-items: center;
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
