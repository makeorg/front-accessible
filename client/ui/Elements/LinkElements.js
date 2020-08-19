import styled from 'styled-components';
import { color } from 'athena-design-tokens';
import { Link } from 'react-router-dom';
import {
  RedButtonStyle,
  GreyButtonStyle,
} from 'Client/ui/Elements/Buttons/style';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { SvgExternalLink } from '../Svg/elements';

const linkStyle = linkColor => `
  color: ${linkColor};
  font-size: 12px;
  line-height: 18px;
  &:hover,
  &:focus {
    color: ${linkColor};
  }
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    font-size: 14px;
    line-height: 21px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const NewWindowIconStyle = styled(SvgExternalLink)`
  margin-left: 5px;
  fill: ${color.brandSecondary};
`;

export const RedLinkRouterStyle = styled(Link)`
  ${linkStyle(color.brandSecondary)}
`;

export const RedLinkHTMLElementStyle = styled.a`
  ${linkStyle(color.brandSecondary)}
`;

export const LinkAsRedButton = styled(RedButtonStyle)`
  display: inline-flex;
  text-decoration: none;
  &:hover,
  &:focus {
    color: ${color.white};
    text-decoration: none;
  }
`;

export const LinkAsGreyButton = styled(GreyButtonStyle)`
  display: inline-flex;
  text-decoration: none;
  &:hover,
  &:focus {
    text-decoration: none;
  }
`;
