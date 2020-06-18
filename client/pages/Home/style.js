import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints, Layouts } from 'Client/app/assets/vars/Breakpoints';
import {
  MiddleColumnStyle,
  SpaceBetweenColumnStyle,
} from 'Client/ui/Elements/FlexElements';
import { BasicColors } from 'Client/app/assets/vars/Colors';

export const HomepageWrapperStyle = styled(MiddleColumnStyle)`
  width: 100%;
  height: 100%;
  min-height: 100%;
  background-color: ${BasicColors.PureWhite};
  padding: 30px 20px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 35px 20px;
  }
`;

export const HomepageInnerStyle = styled(SpaceBetweenColumnStyle)`
  width: 100%;
  margin: 0 auto;
  max-width: ${intToPx(Layouts.ContainerWidth)};
`;
