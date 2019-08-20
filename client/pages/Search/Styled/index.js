import styled from 'styled-components';
import { ColumnElementStyle } from 'Client/ui/Elements/FlexElements';
import { Breakpoints, Layouts } from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';
import { RedLinkStyle } from 'Client/ui/Elements/LinkElements';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { MakeThemeColors } from 'Client/app/assets/vars/Colors';

const PageWrapperStyle = styled.div`
  width: 100%;
  max-width: ${intToPx(Layouts.SpecialContainerWidth)};
  margin: 0 auto;
`;

export const SearchPageWrapperStyle = styled(PageWrapperStyle)`
  padding: 20px 15px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 20px;
  }
`;

export const SearchMainResultsWrapperStyle = styled(PageWrapperStyle)`
  padding: 20px 15px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 40px 20px;
  }
`;

export const SearchPageContentStyle = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    flex-flow: row;
    justify-content: space-between;
  }
`;

export const ContentElementStyle = styled(ColumnElementStyle)`
  width: 100%;
`;

export const SearchPageResultsStyle = styled(ContentElementStyle)`
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    max-width: 750px;
  }
`;

export const SearchPageSidebarStyle = styled(ContentElementStyle)`
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    order: 1;
    max-width: 360px;
    margin-left: 30px;
  }
`;

export const SearchPageTitleStyle = styled.h2`
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 35px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 28px;
    line-height: 34px;
  }
`;

export const SearchBackStyle = styled(RedLinkStyle)`
  font-family: ${MakeFonts.RobotoRegular};
  font-size: 14px;
  margin-bottom: 10px;
  display: flex;
  align-items: flex-end;
`;

export const SearchBackArrowStyle = {
  fontSize: '11px',
  marginRight: '4px',
  fill: MakeThemeColors.Red,
};
