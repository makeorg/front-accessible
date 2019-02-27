/* @flow */

import styled from 'styled-components';
import {
  PageWrapperStyle,
  PageContainerStyle,
} from 'Client/app/Styled/MainElements';
import { pxToRem } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import {
  CALC_RECOVERY_HEIGHT_MOBILE,
  CALC_RECOVERY_HEIGHT_DESKTOP,
} from 'Client/app/constants/elements';
import { FormStyle } from 'Client/ui/Elements/Form/Styled/Content';

export const PasswordRecoveryWrapperStyle = styled(PageWrapperStyle)`
  padding-bottom: 0;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    padding-bottom: 0;
  }
`;

export const PasswordRecoveryContentStyle = styled(PageContainerStyle)`
  min-height: calc(100vh - ${pxToRem(CALC_RECOVERY_HEIGHT_MOBILE)});
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    min-height: calc(100vh - ${pxToRem(CALC_RECOVERY_HEIGHT_DESKTOP)});
  }
`;

export const PasswordRecoveryStyle = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: ${pxToRem('100px')};
  max-width: ${pxToRem('697px')};
`;

export const PasswordRecoveryFormStyle = styled(FormStyle)`
  max-width: ${pxToRem('490px')};
`;
