import styled from 'styled-components';
import { pxToRem } from 'Helpers/styled';
import { UnstyledButton } from 'Components/Elements/ButtonElements';
import UnstyledList from 'Components/Elements/ListElements';
import { BasicColors, BackgroundColors, TextColors } from 'Assets/vars/Colors';

export const Graph = styled(UnstyledList)`
  position: relative;
  display: flex;
  width: 100%;
  height: ${pxToRem('30px')};
  justify-content: center;
  align-items: flex-end;
  margin-top: ${pxToRem('10px')};
`;

export const GraphItem = styled.li`
  display: flex;
  height: 100%;
  align-items: flex-end;
`;

export const Bar = styled(UnstyledButton)`
  display: flex;
  width: ${pxToRem('6px')};
  min-height: ${pxToRem('5px')};
  margin: 0 ${pxToRem('2px')};
  height: ${props => props.percent}%;
  background: ${props => props.color};
  background-color: ${props => props.color};
`;

export const Tooltip = styled.div`
  position: absolute;
  padding: ${pxToRem('5px')} ${pxToRem('10px')};
  transform: translate(0,-50%);
  top: 50%;
  right: 100%;
  z-index: 1;
  background: ${BackgroundColors.LightBlack};
  background-color: ${BackgroundColors.LightBlack};
  color: ${BasicColors.PureWhite};
  font-size: ${pxToRem('12px')};
  > :after {
    content: '';
    position: absolute;
    bottom: 50%;
    border-bottom: ${pxToRem('5px')} solid transparent;
    border-top: ${pxToRem('5px')} solid transparent;
    transform: translate(0,50%);
    left: 100%;
    border-left: ${pxToRem('5px')} solid ${BackgroundColors.LightBlack};
  }
`;

export const HiddenTooltip = styled(Tooltip)`
  display: none;
`;


export const DisplayedTooltip = styled(Tooltip)`
  display: block;
`;

export const TotalLabel = styled.p`
  font-size: ${pxToRem('12px')};
  color: ${TextColors.MediumGrey};
  text-align: center;
  margin-top: ${pxToRem('5px')};
`;
