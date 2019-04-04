import styled from 'styled-components';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import {
  BackgroundColors,
  BorderColors,
  TextColors,
} from 'Client/app/assets/vars/Colors';

export const NoStyleTextInputStyle = styled.input`
  border: none;
  background: transparent;
  background-color: transparent;
  padding: 15px 10px 0;
`;

export const FakeInputStyle = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  padding: 0 18px;
  border-radius: 20px;
  background-color: ${BackgroundColors.LightGrey};
  border-width: 1px;
  border-style: solid;
  border-color: ${props =>
    props.hasError ? BorderColors.ErrorRed : BorderColors.LightGrey};
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const MiddleFakeInputStyle = styled(FakeInputStyle)`
  align-items: center;
`;

export const BasicInputStyle = styled(NoStyleTextInputStyle)`
  width: 100%;
  color: ${TextColors.MediumGrey};
  font-size: 14px;
  line-height: 35px;
  &:focus ~ label,
  &:not([value='']) ~ label {
    top: 10px;
    font-size: 10px;
  }
  @media (min-width: ${Breakpoints.Desktop}) {
    font-size: 16px;
    line-height: 40px;
  }
`;
