import styled from 'styled-components';
import { BasicColors, ShadowColors } from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { pxToRem } from 'Shared/helpers/styled';
import {
  Breakpoints,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';

export const FooterStyle = styled.footer`
  display: flex;
  flex: 0 0 auto;
  background-color: ${BasicColors.PureWhite};
  box-shadow: 0 0 4px 0 ${ShadowColors.BlackZeroThreOpacity};
`;

export const FooterNavStyle = styled.nav`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const FooterItemStyle = styled.li`
  display: inline-block;
  width: 50%;
  padding: ${pxToRem('5px')};
  text-align: center;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    padding: ${pxToRem(DefaultPadding.Mobile)};
    width: auto;
  }
`;

export const FooterItemLinkStyle = styled.a`
  font-family: ${MakeFonts.RobotoRegular};
  text-decoration: none;
  font-size: ${pxToRem('12px')};
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
