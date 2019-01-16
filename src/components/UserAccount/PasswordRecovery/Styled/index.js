import styled from 'styled-components';
import { pxToRem } from 'Helpers/styled';
import { Form } from 'Components/Elements/Form';

const PasswordRecovery = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: ${pxToRem('100px')};
  max-width: ${pxToRem('697px')};
`;

const PasswordRecoveryForm = styled(Form)`
  max-width: ${pxToRem('490px')};
`;

PasswordRecovery.Form = PasswordRecoveryForm;

export { PasswordRecovery };
