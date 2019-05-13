import styled from 'styled-components';
import { BasicColors, ShadowColors } from 'Client/app/assets/vars/Colors';

export const ProfileVoteCardStyle = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  width: 100%;
  box-shadow: 0 1px 1px 0 #00000080;
  background-color: #0000000c;
`;

export const ProfileHasVotedStyle = styled.div`
  display: inline-flex;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin-right: 5px;
  border-radius: 50%;
  border-width: 2px;
  font-size: 12px;
  border-style: solid;
  border-radius: 50%;
  border-color: ${props => props.color};
  overflow: hidden;
  color: ${BasicColors.PureWhite};
  background-color: ${props => props.color};
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
  svg {
    fill: ${BasicColors.PureWhite};
  }
`;
