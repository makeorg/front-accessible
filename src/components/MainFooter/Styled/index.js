import styled from 'styled-components';
import { pxToRem } from 'Helpers/styled';
import { ShadowColors } from 'Assets/vars/Colors';
import Breakpoints from 'Assets/vars/Breakpoints';
import {
  Nav,
  Title,
  Link
} from './FooterContent';

const MainFooter = styled.footer`
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

/* FooterContent */
MainFooter.Nav = Nav;
MainFooter.Title = Title;
MainFooter.Link = Link;

export default MainFooter;
