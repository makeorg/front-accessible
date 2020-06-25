import styled from 'styled-components';
import { LinkAsRedButtonStyle } from 'Client/ui/Elements/Buttons/V2/style';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const CurrentQuestionsListStyle = styled.ul`
  display: flex;
  flex-flow: column;
  padding: 0;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    flex-flow: wrap;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    flex-flow: row;
  }
`;

export const CurrentQuestionsButtonStyle = styled(LinkAsRedButtonStyle)`
  display: inline-flex;
  align-self: flex-start;
  margin-top: 50px;
`;
