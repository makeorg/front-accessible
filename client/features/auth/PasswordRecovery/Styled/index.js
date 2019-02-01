/* @flow */

import styled from 'styled-components';
import { PageWrapper, PageContainer } from 'Client/app/Styled/MainElements';
import { pxToRem } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { CALC_RECOVERY_HEIGHT_MOBILE, CALC_RECOVERY_HEIGHT_DESKTOP } from 'Client/app/constants/elements';
import { Form } from 'Client/ui/Elements/Form/Styled';

export const PasswordRecoveryWrapper = styled(PageWrapper)`
  padding-bottom: 0;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    padding-bottom: 0;
  }
`;

export const PasswordRecoveryContent = styled(PageContainer)`
  min-height : calc(100vh - ${pxToRem(CALC_RECOVERY_HEIGHT_MOBILE)});
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    min-height: calc(100vh - ${pxToRem(CALC_RECOVERY_HEIGHT_DESKTOP)});
  }
`;

const PasswordRecoveryStyle = styled.section`
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

PasswordRecoveryStyle.Form = PasswordRecoveryForm;

export { PasswordRecoveryStyle };
