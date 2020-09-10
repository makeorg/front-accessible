import styled from 'styled-components';
import { ShadowColors } from 'Client/app/assets/vars/Colors';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';

export const SequenceAuthorInfosStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  color: ${ShadowColors.BlackZeroFiveOpacity};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 16px;
  }
`;

export const SequenceInfosWrapperStyle = styled.span`
  display: inline-flex;
  align-items: center;
  margin: 45px auto 5px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin: 70px auto 20px;
  }
`;
