import styled from 'styled-components';
import { pxToRem, intToPx } from 'Shared/helpers/styled';
import { UnstyledButtonStyle } from 'Client/ui/Elements/ButtonElements';
import {
  DefaultPadding,
  Breakpoints,
} from 'Client/app/assets/vars/Breakpoints';

export const ModalCloseButtonStyle = styled(UnstyledButtonStyle)`
  position: absolute;
  top: ${intToPx(DefaultPadding.Mobile)};
  right: ${intToPx(DefaultPadding.Mobile)};
  z-index: 1;
  font-size: ${pxToRem('24px')};
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    top: ${intToPx(DefaultPadding.Desktop)};
    right: ${intToPx(DefaultPadding.Desktop)};
  }
`;
