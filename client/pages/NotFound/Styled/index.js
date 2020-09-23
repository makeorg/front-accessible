import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import {
  Breakpoints,
  Layouts,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import {
  BackgroundColors,
  MakeThemeColors,
} from 'Client/app/assets/vars/Colors';
import { MiddleColumnStyle } from 'Client/ui/Elements/FlexElements';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';

export const NotFoundPageContentStyle = styled(MiddleColumnStyle)`
  flex: 1 1 auto;
  padding: ${intToPx(DefaultPadding.Mobile)};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: ${intToPx(DefaultPadding.Desktop)};
  }
`;

export const NotFoundPageInnerStyle = styled(MiddleColumnStyle)`
  width: 100%;
  flex: 1 1 auto;
  padding: ${intToPx(DefaultPadding.Mobile)};
  max-width: ${intToPx(Layouts.ContainerWidth)};
  max-height: 550px;
  background-color: ${BackgroundColors.NotFoundPage};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: ${intToPx(DefaultPadding.Desktop)};
  }
`;

export const NotFoundIntroStyle = styled.p`
  font-size: 15px;
  color: ${MakeThemeColors.Red};
  font-style: italic;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 24px;
  }
`;

export const NotFoundTitleStyle = styled(SecondLevelTitleStyle)`
  font-size: 30px;
  line-height: 1;
  margin: 15px 0 30px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 60px;
  }
`;
