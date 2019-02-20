import styled from 'styled-components';
import { StartColumnStyle } from 'Client/ui/Elements/FlexElements';

export const SequencePageContentStyle = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export const SequencePageInnerContentStyle = styled(StartColumnStyle)`
  width: 100%;
  z-index: 0;
  ${props => (props.isSequenceCollapsed ? 'overflow: hidden' : '')};
`;
