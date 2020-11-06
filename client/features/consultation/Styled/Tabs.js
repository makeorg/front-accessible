import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { TabNavStyle } from 'Client/ui/Elements/Tabs';
import { typography } from 'athena-design-tokens';

export const ExtraTabsInformationsStyle = styled.span`
  font-size: ${intToPx(typography.font.fontsize.X2S.value)};
  font-family: ${MakeFonts.CircularStandardBook};
  text-transform: none;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: ${intToPx(typography.font.fontsize.XS.value)};
    padding: 0 10px;
  }
`;

export const ConsultationNavStyle = styled(TabNavStyle)`
  && {
    margin-bottom: 0;
  }
`;
