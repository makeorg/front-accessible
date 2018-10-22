import styled from 'styled-components';
import { pxToRem } from '../../helpers/styled';
import { BackgroundColors } from '../../assets/vars/Colors';
import Breakpoints from '../../assets/vars/Breakpoints';
import { MiddleRow } from './FlexElements';

const SepartorStyle = styled.div`
  width: 100%;
  height: ${pxToRem('2px')};
  background: ${BackgroundColors.ExtraLightGrey};
  background-color: ${BackgroundColors.ExtraLightGrey};
`;

export const Small = styled(SepartorStyle)`
  max-width: ${pxToRem('60px')};
  margin: ${pxToRem('15px')} 0 ${pxToRem('25px')};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    margin: ${pxToRem('20px')} 0 ${pxToRem('30px')};
  }
`;

export const Large = styled(SepartorStyle)`
  margin: ${pxToRem('25px')} 0;
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    margin: ${pxToRem('35px')} 0;
  }
`;

export const Wrapper = styled(MiddleRow)`
  width: 100%;
`;

export const Text = styled(MiddleRow)`
  width: ${pxToRem('60px')};
  font-size: ${pxToRem('14px')};
`;
