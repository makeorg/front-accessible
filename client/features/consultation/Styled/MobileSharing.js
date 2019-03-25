import styled from 'styled-components';
import { DefaultPadding } from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';
import { UnstyledButtonStyle } from 'Client/ui/Elements/ButtonElements';
import {
  BasicColors,
  MakeThemeColors,
  ShadowColors,
} from 'Client/app/assets/vars/Colors';

export const SharingWrapperStyle = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: ${intToPx(DefaultPadding.Desktop)};
  background: ${ShadowColors.BlackZeroEightOpacity};
  z-index: 3;
`;

export const SharingTriggerStyle = styled(UnstyledButtonStyle)`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 0 14px 0 ${ShadowColors.BlackZeroThreeOpacity};
  svg {
    width: 25px;
    height: 25px;
  }
`;

export const ExpandSharingStyle = styled(SharingTriggerStyle)`
  position: fixed;
  z-index: 3;
  right: ${intToPx(DefaultPadding.Desktop)};
  bottom: ${intToPx(DefaultPadding.Desktop)};
  color: ${BasicColors.PureWhite};
  background-color: ${MakeThemeColors.Red};
  svg {
    fill: ${BasicColors.PureWhite};
  }
`;

export const CloseSharingStyle = styled(SharingTriggerStyle)`
  margin-top: ${intToPx(DefaultPadding.Desktop)};
  color: ${BasicColors.PureBlack};
  background-color: ${BasicColors.PureWhite};
  svg {
    fill: ${BasicColors.PureBlack};
  }
`;
