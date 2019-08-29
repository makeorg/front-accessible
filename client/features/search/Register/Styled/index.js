import styled from 'styled-components';
import { RedButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const SeachRegisterButtonStyle = styled(RedButtonStyle)`
  margin-top: 15px;
  svg {
    width: 13px;
    height: 13px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    svg {
      width: 15px;
      height: 15px;
    }
  }
`;
