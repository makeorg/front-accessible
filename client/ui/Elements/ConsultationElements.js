import styled from 'styled-components';
import { BasicColors } from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const ConsultationLabelStyle = styled.p`
  background-color: ${BasicColors.PureBlack};
  padding: 3px 10px 1px;
  font-size: 12px;
  line-height: 16px;
  color: ${BasicColors.PureWhite};
  font-family: ${MakeFonts.TradeGothicBoldCondensed};
  text-transform: uppercase;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 6px 12px 4px;
    font-size: 14px;
    line-height: 18px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 16px;
    line-height: 18px;
    padding: 8px 18px 5px;
  }
`;
