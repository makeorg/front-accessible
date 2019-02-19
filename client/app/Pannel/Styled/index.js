import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { BasicColors, ShadowColors } from 'Client/app/assets/vars/Colors';
import { Breakpoints, Layouts } from 'Client/app/assets/vars/Breakpoints';
import { Elements } from 'Client/app/assets/vars/Elements';
import { UnstyledButtonStyle } from 'Client/ui/Elements/ButtonElements';


export const PannelStyle = styled.div`
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 50%;
  width: 100%;
  max-width: ${pxToRem(Layouts.ContainerWidth)};
  height: calc( 100% - ${pxToRem('15px')});
  padding: ${pxToRem('50px')} ${pxToRem('20px')}  ${pxToRem(Elements.SequenceFooterHeightMobile)};
  box-shadow: 0 0 2px 0 ${ShadowColors.BlackZeroThreOpacity};
  background-color: ${BasicColors.PureWhite};
  transform: translate(-50%, -${props => props.translate}%);
  transition: transform 0.5s linear;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    height: calc( 100% - ${pxToRem('25px')});
    padding: ${pxToRem('50px')} ${pxToRem('20px')} ${pxToRem(Elements.SequenceFooterHeightDesktop)};
  }
`;

export const PannelContentStyle = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 100%;
  overflow: auto;
`;


export const PannelCloseButtonStyle = styled(UnstyledButtonStyle)`
  position: absolute;
  top: ${pxToRem('20px')};
  right: ${pxToRem('20px')};
  z-index: 1;
  font-size: ${pxToRem('24px')};
`;
