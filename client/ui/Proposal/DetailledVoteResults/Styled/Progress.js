import styled, { keyframes } from 'styled-components';
import {
  CenterColumnStyle,
  FlexElementStyle,
} from 'Client/ui/Elements/FlexElements';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { DetailledContainer } from './index';

const ProgessAnim = keyframes`
  0% { width: 0; }
  100% { width: 100%; }
`;

export const VoteProgressContainerStyle = styled(CenterColumnStyle)`
  margin: 20px 0;
  ${DetailledContainer};
`;

export const VoteCounterStyle = styled(ParagraphStyle)`
  font-family: ${MakeFonts.CircularStandardBold};
`;

export const VoteProgressWrapperStyle = styled(FlexElementStyle)`
  width: 100%;
  margin-top: 5px;
`;

export const VoteProgressItemStyle = styled.div`
  max-width: ${props => props.percent}%;
  background: ${props => props.color};
  height: 5px;
  transition: width 0.5s ease-in;
  animation: ${ProgessAnim} 2s 1 forwards;
`;
