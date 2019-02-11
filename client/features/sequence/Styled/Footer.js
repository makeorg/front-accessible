import styled from 'styled-components';
import { ShadowColors, TextColors } from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { pxToRem } from 'Shared/helpers/styled';
import { Breakpoints, DefaultPadding } from 'Client/app/assets/vars/Breakpoints';
import { Elements } from 'Client/app/assets/vars/Elements';

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  width: 100%;
  min-height: ${pxToRem(Elements.SequenceFooterHeightMobile)};
  padding: ${pxToRem('5px')};
  box-shadow: 0 0 16px 6px ${ShadowColors.BlackZeroTwoOpacity};
  background-color: ${props => props.theme.color};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    min-height: ${pxToRem(Elements.SequenceFooterHeightDesktop)};
    padding: ${pxToRem('10px')} ${pxToRem(DefaultPadding.Desktop)};
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
  color: ${props => props.color};
  font-size: ${pxToRem('13px')};
  margin-bottom: ${pxToRem('5px')};
  text-align: center;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    font-size: ${pxToRem('20px')};
  }
`;

export const TitleInner = styled.span`
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    display: flex;
    flex-flow: column;
    align-items: center;
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
  font-family: ${MakeFonts.RobotoRegular};
  text-transform: none;
  font-size: ${pxToRem('12px')};
  padding: 0 0 0 ${pxToRem('5px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    font-size: ${pxToRem('14px')};
  }
`;
