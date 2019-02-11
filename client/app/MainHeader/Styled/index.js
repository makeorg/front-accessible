import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { BasicColors, ShadowColors } from 'Client/app/assets/vars/Colors';
import { DefaultPadding } from 'Client/app/assets/vars/Breakpoints';
import Logo from './HeaderContent';

const MainHeader = styled.header`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${pxToRem(DefaultPadding.Mobile)} ${pxToRem('20px')};
  box-shadow: 0 2px 4px 0 ${ShadowColors.BlackZeroFiveOpacity};
  background-color: ${BasicColors.PureWhite};
`;

/* HeaderContent */
MainHeader.Logo = Logo;

export default MainHeader;
