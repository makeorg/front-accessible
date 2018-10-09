import styled from 'styled-components';
import { rem } from 'polished';
import { Colors, Shadows } from '../../../assets/vars/Colors';
import Logo from './HeaderContent';

const MainHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${rem('15px')} ${rem('20px')};
  box-shadow: 0 2px 4px 0 ${Shadows.BlackHalfOpacity};
  background: ${Colors.PureWhite};
  background-color: ${Colors.PureWhite};
`;

/* HeaderContent */
MainHeader.Logo = Logo;

export default MainHeader;
