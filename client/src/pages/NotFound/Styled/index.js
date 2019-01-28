import styled from 'styled-components';
import { pxToRem } from 'Src/helpers/styled';
import { Breakpoints, Layouts, DefaultPadding } from 'Src/assets/vars/Breakpoints';
import { BackgroundColors, MakeThemeColors } from 'Src/assets/vars/Colors';
import { MiddleColumn } from 'Src/components/Elements/FlexElements';
import { SecondLevelTitle } from 'Src/components/Elements/TitleElements';

export const NotFoundPageContent = styled(MiddleColumn)`
  width: 100%;
  height: 100%;
  flex: 1;
  padding: ${pxToRem(DefaultPadding.Mobile)};
  max-width: ${pxToRem(Layouts.ContainerWidth)};
  max-height: ${pxToRem('550px')};
  background: ${BackgroundColors.NotFoundPage};
  background-color: ${BackgroundColors.NotFoundPage};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    padding: ${pxToRem(DefaultPadding.Desktop)};
  }
`;

export const NotFoundIntro = styled.p`
  font-size: ${pxToRem('15px')};
  color: ${MakeThemeColors.Red};
  font-style: italic;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    font-size: ${pxToRem('24px')};
  }
`;

export const NotFoundTitle = styled(SecondLevelTitle)`
  font-size: ${pxToRem('30px')};
  line-height: 1;
  margin: ${pxToRem('15px')} 0 ${pxToRem('30px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    font-size: ${pxToRem('60px')};
  }
`;
