import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { UnstyledButton } from 'Client/ui/Elements/ButtonElements';
import { Breakpoints, Layouts, DefaultPadding } from 'Client/app/assets/vars/Breakpoints';
import { BasicColors, ShadowColors } from 'Client/app/assets/vars/Colors';
import { CALC_WIDTH_MOBILE, CALC_WIDTH_DESKTOP } from 'Client/app/constants/elements';

export const Wrapper = styled.section`
  position: absolute;
  z-index: 2;
  display: flex;
  justify-content: center;
  width: calc(100% - ${pxToRem(CALC_WIDTH_MOBILE)});
  min-height: ${pxToRem('20px')};
  padding: ${pxToRem(DefaultPadding.Mobile)};
  top: ${pxToRem(DefaultPadding.Mobile)};
  left: ${pxToRem(DefaultPadding.Mobile)};
  box-shadow: 0 2px 4px 0 ${ShadowColors.BlackZeroFiveOpacity};
  background: ${BasicColors.PureWhite};
  background-color: ${BasicColors.PureWhite};
  border-radius: ${pxToRem('10px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    top: ${pxToRem(DefaultPadding.Desktop)};
  }
  @media (min-width: ${pxToRem(Breakpoints.LargeDesktop)}){
    width: calc(100% - ${pxToRem(CALC_WIDTH_DESKTOP)});
    left: ${pxToRem(DefaultPadding.Desktop)};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  max-width: ${pxToRem(Layouts.ContainerWidth)};
  padding-right: ${pxToRem(DefaultPadding.Desktop)};
  @media (min-width: ${pxToRem(Breakpoints.LargeDesktop)}){
    padding-right: ${pxToRem(DefaultPadding.Mobile)};
  }
`;


export const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: ${pxToRem(DefaultPadding.Mobile)};
  right: ${pxToRem(DefaultPadding.Mobile)};
  z-index: 1;
  font-size: ${pxToRem('20px')};
`;
