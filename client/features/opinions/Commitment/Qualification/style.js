import styled from 'styled-components';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';

export const OpinionQualificationListStyle = styled(UnstyledListStyle)`
  width: 100%;
  padding-left: 5px;
`;

export const OpinionQualificationListItemStyle = styled.li`
  margin-bottom: 5px;
  &:last-child {
    margin-bottom: 0;
  }
`;
