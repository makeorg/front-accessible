import styled from 'styled-components';
import { rem } from 'polished';
import { BackgroundColors } from '../../assets/vars/Colors';
import Breakpoints from '../../assets/vars/Breakpoints';
import { MiddleRow } from './FlexElements';

const SepartorStyle = styled.div`
  width: 100%;
  height: ${rem('2px')};
  background: ${BackgroundColors.ExtraLightGrey};
  background-color: ${BackgroundColors.ExtraLightGrey};
`;

export const Small = styled(SepartorStyle)`
  max-width: ${rem('60px')};
  margin: ${rem('15px')} 0 ${rem('25px')};
  @media (min-width: ${rem(Breakpoints.mobile)}){
    margin: ${rem('20px')} 0 ${rem('30px')};
  }
`;

export const Large = styled(SepartorStyle)`
  margin: ${rem('25px')} 0;
  @media (min-width: ${rem(Breakpoints.mobile)}){
    margin: ${rem('35px')} 0;
  }
`;

export const Wrapper = styled(MiddleRow)`
  width: 100%;
`;

export const Text = styled(MiddleRow)`
  width: ${rem('60px')};
  font-size: ${rem('14px')};
`;
