import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import {
  // Layouts,
  // DefaultPadding,
  Breakpoints,
} from 'Client/app/assets/vars/Breakpoints';
import { SpaceBetweenColumnStyle } from 'Client/ui/Elements/FlexElements';
import { BasicColors } from 'Client/app/assets/vars/Colors';

export const HomepageWrapperStyle = styled(SpaceBetweenColumnStyle)`
  width: 100%;
  background-color: ${BasicColors.PureWhite};
  padding: 30px 34px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 35px 50px;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    padding: 35px 165px;
  }
`;
