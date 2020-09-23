import styled from 'styled-components';
import { TextColors } from 'Client/app/assets/vars/Colors';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';

export const SequenceAuthorInfosStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  line-height: 1.57;
  letter-spacing: 0.12px;
  color: ${TextColors.DarkGrey};
`;

export const SequenceInfosWrapperStyle = styled.span`
  display: inline-flex;
  align-items: center;
  margin: 45px auto 5px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin: 70px auto 20px;
  }
`;
