import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const ExtraTabsInformationsStyle = styled.span`
  font-size: 12px;
  font-family: ${MakeFonts.CircularStandardBook};
  text-transform: none;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 14px;
    padding: 0 10px;
  }
`;

export const ConsultationPanelInnerStyle = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    flex-flow: row;
    justify-content: space-between;
  }
`;
