import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { BasicColors, ShadowColors } from 'Client/app/assets/vars/Colors';
import {
  Breakpoints,
  Layouts,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import { Elements } from 'Client/app/assets/vars/Elements';

export const CardStyle = styled.article`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  width: 100%;
  flex: 1 1 auto;
  max-width: ${intToPx(Layouts.ContainerWidth)};
  padding: ${intToPx(DefaultPadding.Mobile)};
  background-color: ${BasicColors.PureWhite};
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    border-radius: ${intToPx(Elements.BorderRadius)};
  }
`;

export const TallCardStyle = styled(CardStyle)`
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    max-height: 550px;
    padding: ${intToPx(DefaultPadding.Desktop)};
  }
`;
