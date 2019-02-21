import styled from 'styled-components';
import { MiddleColumnStyle, StartColumnStyle } from 'Client/ui/Elements/FlexElements';

export const SequencePageContentStyle = styled(MiddleColumnStyle)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-grow: 1;
  overflow: auto;
`;

export const SequencePageInnerContentStyle = styled(StartColumnStyle)`
  width: 100%;
  z-index: 0;
  ${props => (props.isSequenceCollapsed ? 'overflow: hidden' : '')};
`;
