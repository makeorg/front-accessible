import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { BasicColors, BorderColors } from 'Client/app/assets/vars/Colors';
import {
  Breakpoints,
  Layouts,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';

export const CookieWrapperStyle = styled.section`
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${BasicColors.PureWhite};
  border-bottom: 1px solid ${BorderColors.Grey};
`;

export const CookieContentStyle = styled.p`
  width: 100%;
  max-width: ${intToPx(Layouts.ContainerWidth)};
  padding: ${intToPx(DefaultPadding.Mobile)} 30px
    ${intToPx(DefaultPadding.Mobile)} ${intToPx(DefaultPadding.Mobile)};
  font-size: 12px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 14px;
  }
  @media (min-width: ${intToPx(Layouts.SpecialContainerWidth)}) {
    padding: 15px;
  }
`;
