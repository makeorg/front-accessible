import styled from 'styled-components';
import { UnstyledList } from 'Src/components/Elements/ListElements';
import { pxToRem } from 'Src/helpers/styled';

export const Wrapper = styled.div`
  overflow: hidden;
  height: 100%;
`;

export const List = styled(UnstyledList)`
  margin: ${pxToRem('30px')} ${pxToRem('20px')} 0;
  width: calc(100% - ${pxToRem('40px')});
  height: calc(100% - ${pxToRem('30px')});
  transition: transform 0.25s ease-in;
  ${props => (props.isSequenceCollapsed ? 'transform: scale(0.95)' : 'transform: scale(1)')};
`;
