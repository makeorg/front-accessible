import styled from 'styled-components';
import Unstyledlist from 'Components/Elements/ListElements';
import { pxToRem } from 'Helpers/styled';

export const Wrapper = styled.div`
  overflow: hidden;
  height: 100%;
`;

export const List = styled(Unstyledlist)`
  margin: ${pxToRem('30px')} ${pxToRem('20px')} 0;
  width: calc(100% - ${pxToRem('40px')});
  height: 100%;
  transition: transform 0.25s ease-in;
`;
