import styled from 'styled-components';
import { MiddleColumnStyle } from 'Client/ui/Elements/FlexElements';
import { intToPx } from 'Shared/helpers/styled';
import { Layouts, Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const SequencePageContentStyle = styled(MiddleColumnStyle)`
  width: 100%;
  display: flex;
  flex-grow: 1;
  overflow: auto;
`;

export const SequenceProposalFieldStyle = styled.aside`
  display: block;
  flex-grow: 0;
  width: 100%;
  max-width: ${intToPx(Layouts.ContainerWidth)};
  margin: 10px auto 0;
  padding: 0 20px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin: 25px auto 15px;
  }
`;
