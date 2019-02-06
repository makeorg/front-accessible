import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { BackgroundColors } from 'Client/app/assets/vars/Colors';
import { UnstyledButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { Breakpoints, Layouts, DefaultPadding } from 'Client/app/assets/vars/Breakpoints';

export const Wrapper = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  background: ${BackgroundColors.LightGrey};
  background-color: ${BackgroundColors.LightGrey};
`;

export const Content = styled.p`
  width: 100%;
  max-width: ${pxToRem(Layouts.ContainerWidth)};
  padding: ${pxToRem(DefaultPadding.Mobile)} ${pxToRem('30px')} ${pxToRem(DefaultPadding.Mobile)} ${pxToRem(DefaultPadding.Mobile)};
  font-size: ${pxToRem('12px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    font-size: ${pxToRem('14px')};
  }  
  @media (min-width: ${pxToRem(Layouts.SpecialContainerWidth)}){
    padding: ${pxToRem(DefaultPadding.Mobile)};
  }
`;

export const CloseButton = styled(UnstyledButtonStyle)`
  position: absolute;
  top: ${pxToRem(DefaultPadding.Mobile)};
  right: ${pxToRem(DefaultPadding.Mobile)};
  z-index: 1;
  font-size: ${pxToRem('20px')};
`;
