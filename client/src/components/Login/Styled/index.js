import styled from 'styled-components';
import { pxToRem } from 'Src/helpers/styled';

const Login = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: ${pxToRem('490px')};
  max-width: ${pxToRem('470px')};
`;

export default Login;
