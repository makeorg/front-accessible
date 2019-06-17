import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
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
  padding: ${pxToRem(DefaultPadding.Mobile)};
  @media (min-width: ${pxToRem(Breakpoints.Tablet)}) {
    padding: ${pxToRem(DefaultPadding.Desktop)};
  }
`;

export const NotFoundPageInnerStyle = styled(MiddleColumnStyle)`
  width: 100%;
  flex: 1 1 auto;
  padding: ${pxToRem(DefaultPadding.Mobile)};
  max-width: ${pxToRem(Layouts.ContainerWidth)};
  max-height: ${pxToRem('550px')};
  background-color: ${BackgroundColors.NotFoundPage};
  @media (min-width: ${pxToRem(Breakpoints.Tablet)}) {
    padding: ${pxToRem(DefaultPadding.Desktop)};
  }
`;

export const NotFoundIntroStyle = styled.p`
  font-size: ${pxToRem('15px')};
  color: ${MakeThemeColors.Red};
  font-style: italic;
  @media (min-width: ${pxToRem(Breakpoints.Tablet)}) {
    font-size: ${pxToRem('24px')};
  }
`;

export const NotFoundTitleStyle = styled(SecondLevelTitleStyle)`
  font-size: ${pxToRem('30px')};
  line-height: 1;
  margin: ${pxToRem('15px')} 0 ${pxToRem('30px')};
  @media (min-width: ${pxToRem(Breakpoints.Tablet)}) {
    font-size: ${pxToRem('60px')};
  }
`;
