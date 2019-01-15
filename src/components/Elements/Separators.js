/* @flow */
import styled from 'styled-components';
import { pxToRem } from 'Helpers/styled';
import { BackgroundColors } from 'Assets/vars/Colors';
import { Breakpoints } from 'Assets/vars/Breakpoints';
import { MiddleRow } from './FlexElements';

export const SeparatorStyle = styled.div`
  width: 100%;
  height: ${pxToRem('2px')};
  background: ${BackgroundColors.ExtraLightGrey};
  background-color: ${BackgroundColors.ExtraLightGrey};
`;

export const Small = styled(SeparatorStyle)`
  max-width: ${pxToRem('60px')};
  margin: ${pxToRem('5px')} 0 ${pxToRem('15px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    margin: ${pxToRem('20px')} 0 ${pxToRem('30px')};
  }
`;

export const Large = styled(SeparatorStyle)`
  margin: ${pxToRem('25px')} 0;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
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
