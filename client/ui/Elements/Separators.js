/* @flow */
import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { BackgroundColors } from 'Client/app/assets/vars/Colors';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { MiddleRowStyle } from './FlexElements';

export const SeparatorStyle = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${BackgroundColors.ExtraLightGrey};
`;

export const SmallSeparatorStyle = styled(SeparatorStyle)`
  max-width: ${pxToRem('60px')};
`;

export const SmallSeparatorWithMarginStyle = styled(SmallSeparatorStyle)`
  margin: ${pxToRem('5px')} 0 ${pxToRem('15px')};
  @media (min-width: ${pxToRem(Breakpoints.Tablet)}) {
    margin: ${pxToRem('20px')} 0 ${pxToRem('30px')};
  }
`;

export const LargeSeparatorStyle = styled(SeparatorStyle)`
  margin: ${pxToRem('25px')} 0;
  @media (min-width: ${pxToRem(Breakpoints.Tablet)}) {
    margin: ${pxToRem('35px')} 0;
  }
`;

export const SeparatorWrapperStyle = styled(MiddleRowStyle)`
  width: 100%;
`;

export const TextSeparatorStyle = styled(MiddleRowStyle)`
  width: ${pxToRem('60px')};
  font-size: ${pxToRem('14px')};
`;

export const ContentSeparatorStyle = styled(LargeSeparatorStyle)`
  margin: ${pxToRem('10px')} 0;
  @media (min-width: ${pxToRem(Breakpoints.Tablet)}) {
    margin: ${pxToRem('15px')} 0;
  }
`;
