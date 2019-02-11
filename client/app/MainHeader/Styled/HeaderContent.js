import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

const Logo = styled.img`
  max-width: ${pxToRem('70px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    max-width: ${pxToRem('85px')};
  }
`;

export default Logo;