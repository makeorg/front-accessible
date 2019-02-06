import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { UnstyledButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { TextColors } from 'Client/app/assets/vars/Colors';

export const Graph = styled(UnstyledListStyle)`
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

export const Bar = styled(UnstyledButtonStyle)`
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
