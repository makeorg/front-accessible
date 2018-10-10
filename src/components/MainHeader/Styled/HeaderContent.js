import styled from 'styled-components';
import { rem } from 'polished';
import Breakpoints from '../../../assets/vars/Breakpoints';

const Logo = styled.img`
  max-width: ${rem('70px')};
  @media (min-width: ${rem(Breakpoints.mobile)}){
    max-width: ${rem('85px')};
  }
`;

export default Logo;
