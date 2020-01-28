import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { BasicColors } from 'Client/app/assets/vars/Colors';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const DisclaimerSubtitleStyle = styled.h4`
  font-size: 12px;
  line-height: 18px;
  color: ${BasicColors.PureBlack};
  font-family: ${MakeFonts.CircularStandardBold};
  text-transform: none;
  margin-bottom: 5px;
  &.margin-top {
    margin-top: 20px;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    font-size: 14px;
    line-height: 21px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const OpinionCardListItemStyle = styled.li`
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;
