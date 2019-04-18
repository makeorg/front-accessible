import styled from 'styled-components';
import { getBarHeight } from 'Shared/helpers/styled';
import { CenterColumnStyle } from 'Client/ui/Elements/FlexElements';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { TextColors } from 'Client/app/assets/vars/Colors';

export const VoteResultContainerStyle = styled(CenterColumnStyle)`
  margin-right: 10px;
`;

export const VoteResultGraphStyle = styled(UnstyledListStyle)`
  position: relative;
  display: flex;
  width: 100%;
  height: 30px;
  justify-content: center;
  align-items: flex-start;
  margin-top: 5px;
`;

export const VoteResultItemStyle = styled.li`
  display: flex;
  height: 100%;
  align-items: flex-end;
`;

export const VoteResultBarStyle = styled.div`
  display: flex;
  width: 6px;
  min-height: 5px;
  margin: 0 2px;
  height: ${props => getBarHeight(props.percent)};
  background-color: ${props => props.color};
`;

export const VoteResultTotalLabelStyle = styled.p`
  font-size: 12px;
  color: ${TextColors.MediumGrey};
  text-align: center;
  margin-top: 5px;
`;
