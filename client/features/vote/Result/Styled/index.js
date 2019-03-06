import styled from 'styled-components';
import { getBarHeight, IntToPx } from 'Shared/helpers/styled';
import { CenterColumnStyle } from 'Client/ui/Elements/FlexElements';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { TextColors } from 'Client/app/assets/vars/Colors';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const ContainerStyle = styled(CenterColumnStyle)`
  margin-right: 10px;
`;

export const GraphStyle = styled(UnstyledListStyle)`
  position: relative;
  display: flex;
  width: 100%;
  height: 30px;
  justify-content: center;
  align-items: flex-start;
  @media (min-width: ${IntToPx(Breakpoints.Desktop)}) {
    margin-top: 10px;
  }
`;

export const ItemStyle = styled.li`
  display: flex;
  height: 100%;
  align-items: flex-end;
`;

export const BarStyle = styled.div`
  display: flex;
  width: 6px;
  min-height: 5px;
  margin: 0 2px;
  height: ${props => getBarHeight(props.percent)};
  background-color: ${props => props.color};
`;

export const TotalLabelStyle = styled.p`
  font-size: 12px;
  color: ${TextColors.MediumGrey};
  text-align: center;
  margin-top: 5px;
`;
