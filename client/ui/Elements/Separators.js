/* @flow */
import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { BackgroundColors } from 'Client/app/assets/vars/Colors';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { MiddleRowStyle } from './FlexElements';

export const SeparatorStyle = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${BackgroundColors.ExtraLightGrey};
`;

export const SmallSeparatorStyle = styled(SeparatorStyle)`
  max-width: 60px;
`;

export const SmallSeparatorWithMarginStyle = styled(SmallSeparatorStyle)`
  margin: 5px 0 15px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin: 20px 0 30px;
  }
`;

export const LargeSeparatorStyle = styled(SeparatorStyle)`
  margin: 25px 0;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin: 35px 0;
  }
`;

export const SeparatorWrapperStyle = styled(MiddleRowStyle)`
  width: 100%;
`;

export const TextSeparatorStyle = styled(MiddleRowStyle)`
  width: 60px;
  font-size: 14px;
`;

export const ContentSeparatorStyle = styled(LargeSeparatorStyle)`
  margin: 10px 0;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin: 15px 0;
  }
`;
