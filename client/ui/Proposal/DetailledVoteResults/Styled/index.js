import styled from 'styled-components';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { BackgroundColors, TextColors } from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';
import { ColumnElementStyle } from 'Client/ui/Elements/FlexElements';

export const DetailledContainer = `
  width: 100%;
  max-width: 650px;
  align-self: center;
`;

export const DetailledItemStyle = styled.li`
  display: flex;
  flex-flow: column;
  flex: 1 1 auto;
  padding: 0 15px;
  min-width: 200px;
  &.disagree {
    border-left: 1px solid ${BackgroundColors.ExtraLightGrey};
    border-right: 1px solid ${BackgroundColors.ExtraLightGrey};
  }
`;

export const DetailledItemListStyle = styled(UnstyledListStyle)`
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  margin-bottom: 20px;
  ${DetailledContainer};
`;

export const VoteDataListStyle = styled(ColumnElementStyle)`
  margin-left: 10px;
  justify-content: center;
`;

export const VoteDataItemStyle = styled.span`
  font-size: 12px;
  line-height: 18px;
  color: ${TextColors.MediumGrey};
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    font-size: 14px;
    line-height: 21px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 16px;
    line-height: 22px;
  }
  margin: 3px 0;
`;

export const VoteDataBoldItemStyle = styled(VoteDataItemStyle)`
  font-size: 14px;
  font-family: ${MakeFonts.CircularStandardBold};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 16px;
  }
`;

export const QualificationDataListStyle = styled(UnstyledListStyle)`
  margin-top: 10px;
`;