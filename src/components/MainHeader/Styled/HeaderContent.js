import styled from 'styled-components';
import { pxToRem } from '../../../helpers/styled';
import Breakpoints from '../../../assets/vars/Breakpoints';

const Logo = styled.img`
  max-width: ${pxToRem('70px')};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    max-width: ${pxToRem('85px')};
  }
`;

export default Logo;
