import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const ProfileLinkStyle = styled(Link)`
  font-family: ${MakeFonts.TradeGothicBoldCondensed};
  display: inline-flex;
  text-decoration: none;
  text-transform: uppercase;
  align-items: center;
  font-size: 15px;
  line-height: 33px;
  flex-shrink: 0;
  > span {
    margin-right: 0;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    > span {
      margin-right: 5px;
    }
  }
`;
