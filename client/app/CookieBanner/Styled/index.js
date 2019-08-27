import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { BackgroundColors, BasicColors } from 'Client/app/assets/vars/Colors';
import {
  Breakpoints,
  Layouts,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import { CloseButtonStyle } from 'Client/ui/Elements/ButtonElements';

export const CookieWrapperStyle = styled.section`
  position: relative;
  z-index: 0;
  width: 100%;
  background-color: ${BackgroundColors.Notifications};
  color: ${BasicColors.PureWhite};
  padding: ${intToPx(DefaultPadding.Mobile)} 35px
    ${intToPx(DefaultPadding.Mobile)} ${intToPx(DefaultPadding.Mobile)};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: ${intToPx(DefaultPadding.Mobile)};
  }
`;

export const CookieContentStyle = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: ${intToPx(Layouts.ContainerWidth)};
`;

export const CookieParagraphStyle = styled.p`
  font-size: 14px;
  line-height: 21px;
  flex: 1;
  a {
    color: ${BasicColors.PureWhite};
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const CookieCloseButtonStyle = styled(CloseButtonStyle)`
  fill: ${BasicColors.PureWhite};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    top: 15px;
    right: 15px;
  }
`;
