import styled from 'styled-components';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';

export const MainResultsProposalsItemStyle = styled.li`
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const SearchSliderListStyle = styled(UnstyledListStyle)`
  padding: 0 20px 5px;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    padding: 0 0 5px;
  }
`;

export const SearchSliderListItemStyle = styled.li`
  margin-right: 15px;
  &:last-child {
    margin-right: 0;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    margin-right: 30px;
    &:last-child {
      margin-right: 0;
    }
  }
`;
