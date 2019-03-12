import styled from 'styled-components';
import { TextColors } from 'Client/app/assets/vars/Colors';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';

export const AuthorWithAvatarStyle = styled.cite`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: normal;
  color: ${TextColors.MediumGrey};
  font-style: normal;
`;

export const AuthorInfosStyle = styled(AuthorWithAvatarStyle)`
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 18px;
  }
`;
