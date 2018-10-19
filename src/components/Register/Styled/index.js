import styled from 'styled-components';
import { pxToRem } from '../../../helpers/styled';

const Register = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: ${pxToRem('665px')};
  max-width: ${pxToRem('470px')};
`;


export default Register;
