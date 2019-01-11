import styled from 'styled-components';
import { pxToRem } from 'Helpers/styled';
import { UnstyledButton } from 'Components/Elements/ButtonElements';
import { Breakpoints, Layouts } from 'Assets/vars/Breakpoints';
import { BasicColors, ShadowColors } from 'Assets/vars/Colors';

export const Wrapper = styled.section`
  position: absolute;
  z-index: 2;
  display: flex;
  justify-content: center;
  width: calc(100% - ${pxToRem('30px')});
  min-height: ${pxToRem('20px')};
  padding: ${pxToRem('15px')};
  top: ${pxToRem('80px')};
  left: ${pxToRem('15px')};
  box-shadow: 0 2px 4px 0 ${ShadowColors.BlackZeroFiveOpacity};
  background: ${BasicColors.PureWhite};
  background-color: ${BasicColors.PureWhite};
  border-radius: ${pxToRem('10px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    top: ${pxToRem('100px')};
  }
  @media (min-width: ${pxToRem(Breakpoints.LargeDesktop)}){
    width: calc(100% - ${pxToRem('60px')});
    left: ${pxToRem('30px')};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  max-width: ${Layouts.ContainerWidth};
  padding-right: ${pxToRem('30px')};
  @media (min-width: ${pxToRem(Breakpoints.LargeDesktop)}){
    padding-right: ${pxToRem('15px')};
  }
`;


export const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: ${pxToRem('15px')};
  right: ${pxToRem('15px')};
  z-index: 1;
  font-size: ${pxToRem('20px')};
`;
