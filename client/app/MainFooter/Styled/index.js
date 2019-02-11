import styled from 'styled-components';
import { BasicColors, ShadowColors } from 'Client/app/assets/vars/Colors';
import {
  Nav,
  Item,
  ItemLink
} from './FooterContent';

const MainFooter = styled.footer`
  background-color: ${BasicColors.PureWhite};
  box-shadow: 0 0 4px 0 ${ShadowColors.BlackZeroThreOpacity};
`;

/* FooterContent */
MainFooter.Nav = Nav;
MainFooter.Item = Item;
MainFooter.ItemLink = ItemLink;

export default MainFooter;
