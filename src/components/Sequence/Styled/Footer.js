import styled from 'styled-components';
import { ShadowColors } from 'Assets/vars/Colors';
import { pxToRem } from 'Helpers/styled';
import Breakpoints from 'Assets/vars/Breakpoints';

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  width: 100%;
  min-height: ${pxToRem('91px')};
  padding: ${pxToRem('15px')} ${pxToRem('20px')};
  box-shadow: 0 0 16px 6px ${ShadowColors.BlackZeroTwoOpacity};
  background: ${props => props.theme.color};
  background-color: ${props => props.theme.color};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
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
  color: ${props => props.color};
  font-size: ${pxToRem('14px')};
  line-height: ${pxToRem('24px')};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    font-size: ${pxToRem('18px')};
    line-height: ${pxToRem('32px')};
  }
`;

export const FooterLink = styled.a`
  color: ${props => props.color};
  font-size: ${pxToRem('12px')};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    font-size: ${pxToRem('14px')};
  }
  &:focus {
    outline-color: ${props => props.color};
  }
`;
