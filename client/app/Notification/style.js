import styled from 'styled-components';
import {
  Breakpoints,
  Layouts,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import {
  BasicColors,
  ShadowColors,
  BackgroundColors,
  VoteColors,
} from 'Client/app/assets/vars/Colors';
import { intToPx } from 'Shared/helpers/styled';
import {
  CloseButtonStyle,
  WhiteButtonStyle,
} from 'Client/ui/Elements/Buttons/style';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { ColumnToRowElementStyle } from 'Client/ui/Elements/FlexElements';

export const NotificationWrapperStyle = styled.aside`
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  top: 0;
  z-index: 15;
  width: 100%;
  padding: ${intToPx(DefaultPadding.Mobile)};
  box-shadow: 0 2px 4px 0 ${ShadowColors.BlackZeroFiveOpacity};
  background-color: ${BackgroundColors.Notifications};
  box-shadow: 0 -2px 4px 0 ${ShadowColors.BlackZeroOneOpacity};
  margin-top: -5px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 25px ${intToPx(DefaultPadding.Desktop)};
  }
`;

export const NotificationContentStyle = styled(ParagraphStyle)`
  display: flex;
  align-items: flex-start;
  width: 100%;
  max-width: ${intToPx(Layouts.ContainerWidth)};
  padding-right: ${intToPx(DefaultPadding.Mobile)};
  color: ${BasicColors.PureWhite};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    align-items: center;
  }
`;

export const NotificationCloseButtonStyle = styled(CloseButtonStyle)`
  fill: ${BasicColors.PureWhite};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    top: 15px;
    right: 15px;
  }
`;

export const SecuredExpirationStyle = styled.span`
  flex: 1;
`;

export const SvgIconStyle = {
  minWidth: '19px',
  marginRight: '10px',
};

export const SvgCheckStyle = {
  fill: VoteColors.Agree,
  minWidth: '22px',
  fontSize: '22px',
  marginRight: '10px',
};

export const VoteOnlyMessageStyle = styled(ColumnToRowElementStyle)`
  align-items: flex-start;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    align-items: center;
  }
`;

export const VoteOnlyButtonStyle = styled(WhiteButtonStyle)`
  white-space: nowrap;
  margin-top: 15px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin-top: 0;
    margin-left: 15px;
  }
`;
