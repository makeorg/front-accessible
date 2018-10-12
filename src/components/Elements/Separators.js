import styled from 'styled-components';
import { rem } from 'polished';
import { BackgroundColors } from '../../assets/vars/Colors';
import Breakpoints from '../../assets/vars/Breakpoints';

export const SepStyle = styled.div`
  width: 100%;
  height: ${rem('2px')};
  background: ${BackgroundColors.ExtraLightGrey};
  background-color: ${BackgroundColors.ExtraLightGrey};
`;

export const SmallSep = styled(SepStyle)`
  max-width: ${rem('60px')};
  margin: ${rem('15px')} 0 ${rem('25px')};
  @media (min-width: ${rem(Breakpoints.mobile)}){
    margin: ${rem('30px')} 0 ${rem('40px')};
  }
`;

export const LargeSep = styled(SepStyle)`
  margin: ${rem('35px')} 0;
  @media (min-width: ${rem(Breakpoints.mobile)}){
    margin: ${rem('45px')} 0;
  }
`;
