import styled from 'styled-components';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { color, typography } from 'athena-design-tokens';
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
  font-size: ${intToPx(typography.font.fontsize.X2S.value)};
  color: ${color.greyDark};
  border-left: 1px solid ${color.greyLighter};
  &:first-child {
    padding-left: 0;
    border-left: none;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    font-size: ${intToPx(typography.font.fontsize.XS.value)};
  }
`;

export const KeyFiguresCountStyle = styled.span`
  font-family: ${MakeFonts.TradeGothicBoldCondensed};
  color: ${props => props.fontColor};
  font-size: ${intToPx(typography.font.fontsize.L.value)};
`;
