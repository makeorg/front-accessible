import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { FormStyle } from 'Client/ui/Elements/Form/Styled/Content';

export const ForgotPasswordStyle = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: ${pxToRem('100px')};
  max-width: ${pxToRem('697px')};
`;

export const ForgotPasswordFormStyle = styled(FormStyle)`
  max-width: ${pxToRem('490px')};
`;
