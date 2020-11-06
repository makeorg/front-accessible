import styled from 'styled-components';
import { color, typography } from 'athena-design-tokens';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const ConsultationLabelStyle = styled.p`
  background-color: ${color.black};
  padding: 3px 10px 1px;
  font-size: ${intToPx(typography.font.fontsize.X2S.value)};
  color: ${color.white};
  font-family: ${MakeFonts.TradeGothicBoldCondensed};
  text-transform: uppercase;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: ${intToPx(typography.font.fontsize.XS.value)};
    padding: 6px 12px 4px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    padding: 8px 18px 5px;
  }
`;
