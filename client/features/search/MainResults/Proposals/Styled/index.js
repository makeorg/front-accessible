import styled from 'styled-components';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';
import { RedButtonStyle } from 'Client/ui/Elements/ButtonElements';

export const MainResultsProposalsItemStyle = styled.li`
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const MainResultsMoreProposalsStyle = styled(RedButtonStyle)`
  margin: 20px auto 0;
`;
