import styled from 'styled-components';
import {
  Breakpoints,
  Layouts,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import {
  BasicColors,
  ShadowColors,
  FormColors,
} from 'Client/app/assets/vars/Colors';
import { intToPx } from 'Shared/helpers/styled';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { CloseButtonStyle } from 'Client/ui/Elements/ButtonElements';

export const NotificationWrapperStyle = styled.section`
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  top: 0;
  z-index: 5;
  width: 100%;
  padding: ${intToPx(DefaultPadding.Mobile)};
  box-shadow: 0 2px 4px 0 ${ShadowColors.BlackZeroFiveOpacity};
  background-color: ${BasicColors.PureWhite};
  box-shadow: 0 -2px 4px 0 ${ShadowColors.BlackZeroOneOpacity};
  &.success {
    background-color: ${FormColors.SuccessBackground};
  }
  &.error {
    background-color: ${FormColors.ErrorBackground};
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 25px ${intToPx(DefaultPadding.Desktop)};
  }
`;

export const NotificationContentStyle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: ${intToPx(Layouts.ContainerWidth)};
  padding-right: ${intToPx(DefaultPadding.Mobile)};
  font-size: 16px;
  line-height: 24px;
  color: ${BasicColors.PureBlack};
  &.success {
    font-family: ${MakeFonts.RobotoBold};
  }
`;

export const NotificationCloseButtonStyle = styled(CloseButtonStyle)`
  top: 20px;
  right: 15px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    top: 30px;
    right: 30px;
  }
`;

export const SvgCheckStyle = {
  display: 'inline-flex',
  fill: FormColors.Success,
  fontSize: '28px',
  marginRight: '10px',
};
