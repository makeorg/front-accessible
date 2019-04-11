import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { BasicColors, ShadowColors } from 'Client/app/assets/vars/Colors';
import {
  Breakpoints,
  Layouts,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';

export const CardStyle = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  width: 100%;
  flex-grow: 1;
  max-width: ${pxToRem(Layouts.ContainerWidth)};
  padding: ${pxToRem(DefaultPadding.Mobile)};
  background-color: ${BasicColors.PureWhite};
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
`;

export const TallCardStyle = styled(CardStyle)`
  @media (min-width: ${pxToRem(Breakpoints.Tablet)}) {
    max-height: 550px;
    padding: ${pxToRem(DefaultPadding.Desktop)};
  }
`;
