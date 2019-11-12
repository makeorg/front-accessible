import styled from 'styled-components';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';

export const DescriptionImageStyle = styled.img`
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    border-radius: 8px 8px 0 0;
  }
`;
