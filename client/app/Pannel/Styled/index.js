import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { BasicColors, ShadowColors } from 'Client/app/assets/vars/Colors';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { Elements } from 'Client/app/assets/vars/Elements';
import { UnstyledButtonStyle } from 'Client/ui/Elements/ButtonElements';

export const PannelStyle = styled.div`
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: ${pxToRem('50px')} ${pxToRem('20px')}
    ${pxToRem(Elements.SequenceFooterHeightMobile)};
  box-shadow: 0 0 2px 0 ${ShadowColors.BlackZeroThreOpacity};
  background-color: ${BasicColors.PureWhite};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    padding: ${pxToRem('50px')} ${pxToRem('20px')}
      ${pxToRem(Elements.SequenceFooterHeightDesktop)};
  }
`;

export const PannelContentStyle = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 100%;
`;

export const PannelCloseButtonStyle = styled(UnstyledButtonStyle)`
  position: absolute;
  top: ${pxToRem('20px')};
  right: ${pxToRem('20px')};
  z-index: 1;
  font-size: ${pxToRem('24px')};
`;
