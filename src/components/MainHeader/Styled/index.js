import styled from 'styled-components';
import { pxToRem } from 'Helpers/styled';
import { BasicColors, ShadowColors } from 'Assets/vars/Colors';
import Logo from './HeaderContent';

const MainHeader = styled.header`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${pxToRem('15px')} ${pxToRem('20px')};
  box-shadow: 0 2px 4px 0 ${ShadowColors.BlackZeroFiveOpacity};
  background: ${BasicColors.PureWhite};
  background-color: ${BasicColors.PureWhite};
`;

/* HeaderContent */
MainHeader.Logo = Logo;

export default MainHeader;
