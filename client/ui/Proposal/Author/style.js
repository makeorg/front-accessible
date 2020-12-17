import styled from 'styled-components';
import { color, typography } from 'athena-design-tokens';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';

export const AuthorInfosStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${intToPx(typography.font.fontsize.XS.value)};
  letter-spacing: 0.12px;
  color: ${color.greyDark};
`;

export const InfosWrapperStyle = styled.span`
  display: inline-flex;
  align-items: center;
  &.sequence {
    margin: 50px auto 5px;
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    &.sequence {
      margin: 75px auto 20px;
    }
  }
`;
