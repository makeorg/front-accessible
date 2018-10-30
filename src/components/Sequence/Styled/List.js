import styled from 'styled-components';
import Unstyledlist from '../../Elements/ListElements';

const List = styled(Unstyledlist)`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.25s ease-in;
`;

export default List;
