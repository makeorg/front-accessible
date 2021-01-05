import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import {
  DefaultPadding,
  Layouts,
  Breakpoints,
} from 'Client/app/assets/vars/Breakpoints';
import {
  SecondLevelTitleStyle,
  ThirdLevelTitleStyle,
  FourthLevelTitleStyle,
} from 'Client/ui/Elements/TitleElements';
import { TextColors } from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const StaticPageWrapperStyle = styled.div`
  width: 100%;
  flex: 1 1 auto;
  padding: ${intToPx(DefaultPadding.Mobile)};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: ${intToPx(DefaultPadding.Desktop)} 20px;
  }
  max-width: ${intToPx(Layouts.SpecialContainerWidth)};
  margin: 30px auto;
`;

export const StaticSecondLevelTitleStyle = styled(SecondLevelTitleStyle)`
  text-align: center;
  margin: 0 0 30px;
`;

export const StaticThirdLevelTitleStyle = styled(ThirdLevelTitleStyle)`
  display: inline-flex;
  margin: 30px 0 5px;
`;

export const StaticFourthLevelTitleStyle = styled(FourthLevelTitleStyle)`
  display: inline-flex;
  font-family: ${MakeFonts.CircularStandardBold};
  text-transform: none;
  margin: 15px 0 5px;
`;

export const StaticTitleExtra = styled.span`
  display: block;
  font-family: ${MakeFonts.PlayfairDisplayRegularItalic};
  text-transform: none;
  font-size: 12px;
  line-height: 2;
  color: ${TextColors.MediumGrey};
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    font-size: 14px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 16px;
  }
`;

export const StaticParagraphStyle = styled.p`
  margin: 0 0 15px;
  font-size: 12px;
  line-height: 2;
  color: ${TextColors.MediumGrey};
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    font-size: 14px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 16px;
  }
`;

export const StaticStrongStyle = styled.strong`
  font-display: ${MakeFonts.CircularStandardBold};
`;

export const StaticPrimaryUnorderedListStyle = styled.ol`
  margin: 15px 0 0;
  padding: 0;
`;

export const StaticPrimaryUnorderedListItemStyle = styled.li`
  list-style-type: none;
`;

export const StaticPrimaryOrderedListStyle = styled.ol`
  margin: 15px 0 0;
  padding: 0;
  counter-reset: articles;
`;

export const StaticPrimaryOrderedListItemStyle = styled.li`
  list-style-type: none;
  counter-increment: articles;
  &:before {
    content: counter(articles) '.';
    font-family: ${MakeFonts.TradeGothicBoldCondensed};
    font-size: 14px;
    line-height: 19px;
    margin-right: 10px;
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    &:before {
      font-size: 16px;
      line-height: 22px;
    }
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    &:before {
      font-size: 18px;
      line-height: 25px;
    }
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    &:before {
      font-size: 20px;
      line-height: 30px;
    }
  }
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    &:before {
      font-size: 22px;
    }
  }
`;

export const StaticSecondaryOrderedListStyle = styled.ol`
  margin: 0;
  counter-reset: reset-articles;
`;

export const StaticSecondaryOrderedListItemStyle = styled.li`
  list-style-type: none;
  counter-increment: reset-articles;
  &:before {
    font-family: ${MakeFonts.CircularStandardBold};
    font-size: 12px;
    line-height: 15px;
    margin-right: 10px;
  }
  &.section5:before {
    content: '5.' counter(reset-articles);
  }
  &.section6:before {
    content: '6.' counter(reset-articles);
  }
  &.section8:before {
    content: '8.' counter(reset-articles);
  }
  &.section9:before {
    content: '9.' counter(reset-articles);
  }
  &.section11:before {
    content: '11.' counter(reset-articles);
  }
  &.section12:before {
    content: '12.' counter(reset-articles);
  }
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    &:before {
      font-size: 14px;
      line-height: 19px;
    }
  }

  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    &:before {
      font-size: 16px;
      line-height: 32px;
    }
  }
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    &:before {
      font-size: 18px;
      line-height: 25px;
    }
  }
`;

export const StaticSquareListStyle = styled.ul`
  margin: 10px 0 0;
`;

export const StaticSquareListItemStyle = styled.li`
  list-style-type: square;
  font-size: 12px;
  line-height: 2;
  color: ${TextColors.MediumGrey};
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    font-size: 14px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 16px;
  }
`;