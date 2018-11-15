import styled from 'styled-components';
import { pxToRem } from '../../../helpers/styled';
import { ShadowColors } from '../../../assets/vars/Colors';
import {
  Nav,
  Title,
  Link
} from './FooterContent';

const MainFooter = styled.footer`
  position: relative;
  z-index: 2;
  padding: ${pxToRem('15px')} ${pxToRem('20px')};
  box-shadow: 0 0 16px 6px ${ShadowColors.BlackZeroTwoOpacity};
  background: ${props => props.theme.MainColor};
  background-color: ${props => props.theme.MainColor};
`;

/* FooterContent */
MainFooter.Nav = Nav;
MainFooter.Title = Title;
MainFooter.Link = Link;

export default MainFooter;
