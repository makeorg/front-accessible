import styled from 'styled-components';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { BackgroundColors, TextColors } from 'Client/app/assets/vars/Colors';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const KeyFiguresListStyle = styled(UnstyledListStyle)`
  display: flex;
  justify-content: space-between;
`;

export const KeyFiguresListItemStyle = styled.li`
  display: flex;
  flex-flow: column;
  flex: 1;
  padding-left: 15px;
  font-size: 12px;
  line-height: 18px;
  color: ${TextColors.MediumGrey};
  border-left: 1px solid ${BackgroundColors.ExtraLightGrey};
  &:first-child {
    padding-left: 0;
    border-left: none;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    font-size: 14px;
    line-height: 21px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const KeyFiguresCountStyle = styled.span`
  font-family: ${MakeFonts.TradeGothicBoldCondensed};
  color: ${props => props.fontColor};
  font-size: 22px;
  line-height: 1;
`;
