import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BasicColors, ShadowColors } from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { intToPx } from 'Shared/helpers/styled';
import {
  Breakpoints,
  Layouts,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';

export const FooterStyle = styled.footer`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  background-color: ${BasicColors.PureWhite};
  box-shadow: 0 -2px 4px 0 ${ShadowColors.BlackZeroFiveOpacity};
  padding: ${intToPx(DefaultPadding.Mobile)};
`;

export const FooterLogoStyle = styled.img`
  max-width: 50px;
  height: 100%;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    max-width: 60px;
  }
`;

export const FooterNavStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${intToPx(Layouts.ContainerWidth)};
`;

export const FooterItemListStyle = styled(UnstyledListStyle)`
  display: flex;
  flex-flow: column;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    flex-flow: row;
  }
`;

export const FooterItemStyle = styled.li`
  text-align: right;
  margin: 10px 0;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    margin: 0 0 0 30px;
    &:first-child {
      margin: 0;
    }
  }
`;

export const FooterItemLinkStyle = styled(Link)`
  font-family: ${MakeFonts.TradeGothicBoldCondensed};
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 20px;
`;
