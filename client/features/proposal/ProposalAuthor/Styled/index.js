import styled from 'styled-components';
import { TextColors } from 'Client/app/assets/vars/Colors';
import { pxToRem } from 'Shared/helpers/styled';

export const AuthorInfosStyle = styled.cite`
  font-size: ${pxToRem('18px')};
  color: ${TextColors.MediumGrey};
  font-style: normal;
`;
