import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { CenterRowStyle } from 'Client/ui/Elements/FlexElements';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const VoteContainerStyle = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
  min-width: 275px;
  margin: 10px 0;
  padding: 0 10px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin: 30px 0;
  }
`;

export const VoteWrapperStyle = styled(CenterRowStyle)`
  width: 100%;
  justify-content: space-between;
  max-width: 200px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    max-width: 250px;
  }
`;

export const VoteButtonWrapperStyle = styled.div`
  position: relative;
  z-index: 1;
`;
