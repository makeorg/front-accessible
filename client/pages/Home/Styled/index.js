import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import {
  Breakpoints,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import { CenterColumnStyle } from 'Client/ui/Elements/FlexElements';

export const HomeWrapperStyle = styled(CenterColumnStyle)`
  width: 100%;
  flex-grow: 1;
  padding: ${intToPx(DefaultPadding.Mobile)} 0;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: ${intToPx(DefaultPadding.Desktop)} 0;
  }
`;

export const PaddingContainerStyle = styled(CenterColumnStyle)`
  width: 100%;
  padding: 0 ${intToPx(DefaultPadding.Mobile)};
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    padding: 0 ${intToPx(DefaultPadding.Desktop)};
  }
`;
