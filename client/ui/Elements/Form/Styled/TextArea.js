import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { TextColors } from 'Client/app/assets/vars/Colors';

export const BasicTextAreaStyle = styled.textarea`
  width: 100%;
  border: none;
  background: transparent;
  background-color: transparent;
  padding: 10px;
  color: ${TextColors.MediumGrey};
  font-size: 14px;
  line-height: 18px;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const TextAreaCounterStyle = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 10px;
`;
