import styled from 'styled-components';
import { ShadowColors, TextColors } from 'Client/app/assets/vars/Colors';
import { pxToRem } from 'Shared/helpers/styled';
import { Breakpoints, DefaultPadding } from 'Client/app/assets/vars/Breakpoints';

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  width: 100%;
  min-height: ${pxToRem('91px')};
  padding: ${pxToRem(DefaultPadding.Mobile)} ${pxToRem('20px')};
  box-shadow: 0 0 16px 6px ${ShadowColors.BlackZeroTwoOpacity};
  background: ${props => props.theme.color};
  background-color: ${props => props.theme.color};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    min-height: ${pxToRem('78px')};
  }
`;

export const FooterNav = styled.nav`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const FooterTitle = styled.h2`
  display: inline-block;
  color: ${props => props.color};
  font-size: ${pxToRem('13px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    font-size: ${pxToRem('20px')};
  }
`;

export const FooterLink = styled.a`
  color: ${props => props.color};
  font-size: ${pxToRem('12px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    font-size: ${pxToRem('14px')};
  }
  &:hover,
  &:focus {
    color: ${props => props.color};
  }
  &:focus {
    outline-color: ${props => props.color};
  }
`;

export const InPartnershipWith = styled.span`
  color: ${TextColors.LightGrey};
  font-size: ${pxToRem('12px')};
  padding: 0 ${pxToRem('20px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    font-size: ${pxToRem('14px')};
  }
`;
