import styled from 'styled-components';
import { color } from 'athena-design-tokens';
import { DefaultPadding } from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';
import { UnstyledButtonStyle } from 'Client/ui/Elements/Buttons/style';
import { ShadowColors } from 'Client/app/assets/vars/Colors';

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
  color: ${color.white};
  background-color: ${color.brandSecondary};
  svg {
    fill: ${color.white};
  }
`;

export const CloseSharingStyle = styled(SharingTriggerStyle)`
  margin-top: ${intToPx(DefaultPadding.Desktop)};
  color: ${color.black};
  background-color: ${color.white};
  svg {
    fill: ${color.black};
  }
`;
