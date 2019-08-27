import styled from 'styled-components';
import { ColumnElementStyle } from 'Client/ui/Elements/FlexElements';
import { Breakpoints, Layouts } from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';
import { RedLinkStyle } from 'Client/ui/Elements/LinkElements';
import { MakeThemeColors } from 'Client/app/assets/vars/Colors';
import { RedButtonStyle } from 'Client/ui/Elements/ButtonElements';

export const SearchPageWrapperStyle = styled.div`
  width: 100%;
  max-width: ${intToPx(Layouts.SpecialContainerWidth)};
  margin: 0 auto;
  padding: 20px 15px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 20px;
  }
`;

export const SearchPageContentStyle = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    flex-flow: row;
    justify-content: space-between;
  }
`;

export const ContentElementStyle = styled(ColumnElementStyle)`
  width: 100%;
`;

export const SearchPageResultsStyle = styled(ContentElementStyle)`
  margin-bottom: 20px;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    margin-bottom: 0;
    max-width: 750px;
  }
`;

export const SearchPageSidebarStyle = styled(ContentElementStyle)`
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    position: sticky;
    top: 0;
    z-index: 2;
    order: 1;
    max-width: 360px;
  }
`;

export const SearchPageTitleStyle = styled.h2`
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 35px;
  padding: 0 15px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 28px;
    line-height: 34px;
    padding: 0;
  }
`;

export const SearchBackStyle = styled(RedLinkStyle)`
  margin-bottom: 10px;
  display: flex;
  align-items: flex-end;
`;

export const SearchBackArrowStyle = {
  fontSize: '11px',
  marginRight: '4px',
  fill: MakeThemeColors.Red,
};

export const SearchResultsProposalItemStyle = styled.li`
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const SearchMoreProposalsButtonStyle = styled(RedButtonStyle)`
  margin: 20px auto 0;
`;
