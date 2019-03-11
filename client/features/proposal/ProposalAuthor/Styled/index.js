import styled from 'styled-components';
import { TextColors } from 'Client/app/assets/vars/Colors';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { IntToPx } from 'Shared/helpers/styled';

export const AuthorInfosStyle = styled.cite`
  font-size: 12px;
  color: ${TextColors.MediumGrey};
  font-style: normal;
  @media (min-width: ${IntToPx(Breakpoints.Desktop)}) {
    font-size: 18px;
  }
`;
