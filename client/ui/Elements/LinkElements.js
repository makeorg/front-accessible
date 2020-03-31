import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MakeThemeColors, BasicColors } from 'Client/app/assets/vars/Colors';
import {
  RedButtonStyle,
  GreyButtonStyle,
} from 'Client/ui/Elements/Buttons/style';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { SvgExternalLink } from '../Svg/elements';

const linkStyle = color => `
  color: ${color};
  font-size: 12px;
  line-height: 18px;
  &:hover,
  &:focus {
    color: ${color};
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
  fill: ${MakeThemeColors.Red};
`;

export const RedLinkRouterStyle = styled(Link)`
  ${linkStyle(MakeThemeColors.Red)}
`;

export const RedLinkHTMLElementStyle = styled.a`
  ${linkStyle(MakeThemeColors.Red)}
`;

export const LinkAsRedButton = styled(RedButtonStyle)`
  display: inline-flex;
  text-decoration: none;
  &:hover,
  &:focus {
    color: ${BasicColors.PureWhite};
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
