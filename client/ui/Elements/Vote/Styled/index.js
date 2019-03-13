import styled from 'styled-components';
import { BasicColors, ShadowColors } from 'Client/app/assets/vars/Colors';

export const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-width: 2px;
  font-size: 22px;
  border-style: solid;
  border-radius: 50%;
  border-color: ${props => props.color};
  ${props => props.rotate && `transform:rotate(${props.rotate}deg)`};
  overflow: hidden;
`;

export const UnvoteButtonStyle = styled(ButtonStyle)`
  color: ${BasicColors.PureWhite};
  background-color: ${props => props.color};
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
`;

export const VoteButtonStyle = styled(ButtonStyle)`
  color: ${props => props.color};
  background-color: ${BasicColors.PureWhite};
  &:focus,
  &:active {
    color: ${BasicColors.PureWhite};
    background-color: ${props => props.color};
  }
`;
