import styled from 'styled-components';
import { TextColors } from 'Client/app/assets/vars/Colors';
import { pxToRem } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const AuthorInfosStyle = styled.cite`
  font-size: ${pxToRem('12px')};
  color: ${TextColors.MediumGrey};
  font-style: normal;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    font-size: ${pxToRem('18px')};
  }
`;
