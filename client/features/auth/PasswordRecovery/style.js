/* @flow */

import styled from 'styled-components';
import {
  PageWrapperStyle,
  PageContainerStyle,
} from 'Client/app/Styled/MainElements';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import {
  CALC_RECOVERY_HEIGHT_MOBILE,
  CALC_RECOVERY_HEIGHT_DESKTOP,
} from 'Client/app/constants/elements';
import { FormCenterAlignStyle } from 'Client/ui/Elements/Form/Styled/Content';
import { FourthLevelTitleStyle } from 'Client/ui/Elements/TitleElements';

export const PasswordRecoveryWrapperStyle = styled(PageWrapperStyle)`
  padding-bottom: 0;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding-bottom: 0;
  }
`;

export const PasswordRecoveryContentStyle = styled(PageContainerStyle)`
  min-height: calc(100vh - ${intToPx(CALC_RECOVERY_HEIGHT_MOBILE)});
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    min-height: calc(100vh - ${intToPx(CALC_RECOVERY_HEIGHT_DESKTOP)});
  }
`;

export const PasswordRecoveryStyle = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100px;
  max-width: 697px;
`;

export const PasswordRecoveryFormStyle = styled(FormCenterAlignStyle)`
  max-width: 490px;
`;

export const PasswordRecoveryTitleStyle = styled(FourthLevelTitleStyle)`
  margin-bottom: 20px;
`;
