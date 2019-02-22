import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { CenterColumnStyle } from 'Client/ui/Elements/FlexElements';
import { UnstyledButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { TextColors } from 'Client/app/assets/vars/Colors';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const ContainerStyle = styled(CenterColumnStyle)`
  margin-right: ${pxToRem('10px')};
`;

export const GraphStyle = styled(UnstyledListStyle)`
  position: relative;
  display: flex;
  width: 100%;
  height: ${pxToRem('30px')};
  justify-content: center;
  align-items: flex-start;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    margin-top: ${pxToRem('10px')};
  }
`;

export const ItemStyle = styled.li`
  display: flex;
  height: 100%;
  align-items: flex-end;
`;

export const BarStyle = styled(UnstyledButtonStyle)`
  display: flex;
  width: ${pxToRem('6px')};
  min-height: ${pxToRem('5px')};
  margin: 0 ${pxToRem('2px')};
  height: ${props => props.percent}%;
  background-color: ${props => props.color};
`;

export const TotalLabelStyle = styled.p`
  font-size: ${pxToRem('12px')};
  color: ${TextColors.MediumGrey};
  text-align: center;
  margin-top: ${pxToRem('5px')};
`;
