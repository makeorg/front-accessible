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

export const Small = styled(SeparatorStyle)`
  max-width: ${pxToRem('60px')};
`;

export const SmallWithMargin = styled(Small)`
  margin: ${pxToRem('5px')} 0 ${pxToRem('15px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    margin: ${pxToRem('20px')} 0 ${pxToRem('30px')};
  }
`;

export const Large = styled(SeparatorStyle)`
  margin: ${pxToRem('25px')} 0;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    margin: ${pxToRem('35px')} 0;
  }
`;

export const Wrapper = styled(MiddleRowStyle)`
  width: 100%;
`;

export const Text = styled(MiddleRowStyle)`
  width: ${pxToRem('60px')};
  font-size: ${pxToRem('14px')};
`;

export const ContentSeparatorStyle = styled(Large)`
  margin: ${pxToRem('10px')} 0;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    margin: ${pxToRem('15px')} 0;
  }
`;
