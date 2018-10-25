import styled from 'styled-components';
import { pxToRem } from '../../../helpers/styled';
import Unstyledlist from '../../Elements/ListElements';
import { BasicColors, ShadowColors } from '../../../assets/vars/Colors';

export const Fieldset = styled.fieldset`
  width: 100%;
  padding: 0;
  margin: 0;
  border: none;
`;

export const ButtonList = styled(Unstyledlist)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ButtonItem = styled.div`
  overflow: hidden;
`;

export const Button = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${pxToRem('60px')};
  height: ${pxToRem('60px')};
  border-width: ${pxToRem('2px')};
  font-size: ${pxToRem('30px')};
  border-style: solid;
  border-radius: 50%;
  border-color: ${props => props.color};
  transform: rotate(${props => props.rotate}deg);
  overflow: hidden;
`;

export const UnvoteButton = styled(Button).attrs({
  color: props => props.color
})`
  color: ${BasicColors.PureWhite};
  background: ${props => props.color};
  background-color: : ${props => props.color};
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
`;

export const VoteButton = styled(Button).attrs({
  color: props => props.color
})`
  color: ${props => props.color};
  background: ${BasicColors.PureWhite};
  background-color: ${BasicColors.PureWhite};
`;
