import styled from 'styled-components';
import { pxToRem } from 'Helpers/styled';
import { BackgroundColors } from 'Assets/vars/Colors';
import { UnstyledButton } from 'Components/Elements/ButtonElements';
import { Breakpoints, Layouts } from 'Assets/vars/Breakpoints';

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
  max-width: ${Layouts.ContainerWidth};
  padding: ${pxToRem('15px')} ${pxToRem('30px')} ${pxToRem('15px')} ${pxToRem('15px')};
  font-size: ${pxToRem('12px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    font-size: ${pxToRem('14px')};
  }  
  @media (min-width: ${pxToRem(Layouts.SpecialContainerWidth)}){
    padding: ${pxToRem('15px')};
  }
`;

export const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: ${pxToRem('15px')};
  right: ${pxToRem('15px')};
  z-index: 1;
  font-size: ${pxToRem('20px')};
`;
