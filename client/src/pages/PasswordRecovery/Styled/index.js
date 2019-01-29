/* @flow */

import styled from 'styled-components';
import { PageWrapper, PageContainer } from 'Src/components/Elements/MainElements';
import { pxToRem } from 'Shared/helpers/styled';
import { Breakpoints } from 'Src/assets/vars/Breakpoints';
import { CALC_RECOVERY_HEIGHT_MOBILE, CALC_RECOVERY_HEIGHT_DESKTOP } from 'Client/app/constants/elements';


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
