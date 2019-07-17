import styled from 'styled-components';
import { FormColors } from 'Client/app/assets/vars/Colors';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const SuccessMessageStyle = styled.p`
  color: ${FormColors.Success};
  margin-bottom: 10px;
  font-size: 12px;
  line-height: 16px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 14px;
    line-height: 18px;
  }
`;
