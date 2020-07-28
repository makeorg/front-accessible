/* @flow */

import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import {
  BackgroundColors,
  BasicColors,
  BorderColors,
} from 'Client/app/assets/vars/Colors';
import {
  Breakpoints,
  Layouts,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import {
  ColumnElementStyle,
  CenterColumnStyle,
} from 'Client/ui/Elements/FlexElements';
import { LinkAsRedButton } from 'Client/ui/Elements/LinkElements';

export const AppWrapperStyle = styled(ColumnElementStyle)`
  position: relative;
  min-height: 100vh;
  background-color: ${BackgroundColors.LightGrey};
`;

export const AppMainContentStyle = styled.main`
  background-color: ${BasicColors.PureWhite};
  position: relative;
  display: flex;
  flex-flow: column;
  flex: 1 1 auto;
  z-index: 1;
  margin: 5px 0;
  margin-bottom: 0px;
`;

export const PageWrapperStyle = styled(CenterColumnStyle)`
  width: 100%;
  flex: 1 1 auto;
  padding: ${intToPx(DefaultPadding.Mobile)};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: ${intToPx(DefaultPadding.Desktop)};
  }
`;

export const MiddlePageWrapperStyle = styled(PageWrapperStyle)`
  justify-content: center;
`;

export const PageContainerStyle = styled(CenterColumnStyle)`
  width: 100%;
  flex: 1 1 auto;
  max-width: ${intToPx(Layouts.ContainerWidth)};
  background-color: ${BasicColors.PureWhite};
  border: 1px solid ${BorderColors.LightGrey};
  padding: ${intToPx(DefaultPadding.Mobile)};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: ${intToPx(DefaultPadding.Desktop)};
  }
`;

export const SkipLink = styled(LinkAsRedButton)`
  position: absolute;
  top: -100%;
  left: ${intToPx(DefaultPadding.Mobile)};
  max-width: calc(100% - 15px);
  z-index: 2;
  &:active,
  &:focus {
    top: ${intToPx(DefaultPadding.Mobile)};
  }
`;
