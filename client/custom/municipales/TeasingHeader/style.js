import styled from 'styled-components';
import { intToPx, pxToRem } from 'Shared/helpers/styled';
import {
  BasicColors,
  TextColors,
  MakeThemeColors,
  BorderColors,
} from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { Breakpoints, Layouts } from 'Client/app/assets/vars/Breakpoints';

export const TeasingHeaderContainerStyle = styled.div`
  background-color: ${BasicColors.PureWhite};
  padding: 18px;
`;

export const TeasingHeaderWrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${MakeFonts.CircularStandardBook};

  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    flex-direction: row;
    max-width: ${intToPx(Layouts.ContainerWidth)};
    margin: 0 auto;
  }
`;

export const TeasingHeaderCenterStyle = styled.div`
  flex: 1;
  text-align: center;
  padding: 20px;

  &:nth-child(2) {
    border-top: 1px solid ${BorderColors.LightGrey};
  }

  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    flex: 1;
    &:nth-child(1) {
      flex: 2;
    }
    &:nth-child(2) {
      flex: 1;
      border-top: 0;
      border-left: 1px solid ${BorderColors.LightGrey};
    }
  }
`;

export const TeasingHeaderTextStyle = styled.p`
  font-family: ${MakeFonts.TradeGothicBoldCondensed};
  font-size: 18px;
  text-transform: uppercase;
  color: ${BasicColors.PureBlack};
  line-height: ${pxToRem('21px')};
`;

export const TeasingHeaderSubTextStyle = styled.p`
  color: ${TextColors.MediumGrey};
  margin-top: 5px;
  a {
    font-family: ${MakeFonts.CircularStandardBold};
    color: ${MakeThemeColors.Red};
  }
`;
