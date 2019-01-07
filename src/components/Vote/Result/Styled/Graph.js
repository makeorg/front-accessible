import styled from 'styled-components';
import { pxToRem } from 'Helpers/styled';
import { UnstyledButton } from 'Components/Elements/ButtonElements';
import { UnstyledList } from 'Components/Elements/ListElements';
import { TextColors } from 'Assets/vars/Colors';

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

export const TotalLabel = styled.p`
  font-size: ${pxToRem('12px')};
  color: ${TextColors.MediumGrey};
  text-align: center;
  margin-top: ${pxToRem('5px')};
`;
