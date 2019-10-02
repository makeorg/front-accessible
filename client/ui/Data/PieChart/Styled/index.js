import styled from 'styled-components';
import { BackgroundColors } from 'Client/app/assets/vars/Colors';

export const WrapperStyle = styled.div`
  display: flex;
  background-color: ${BackgroundColors.TaintedWhite};
`;

export const PieChartCanvasStyle = styled.canvas`
  display: block;
  margin: 0 auto;
`;
