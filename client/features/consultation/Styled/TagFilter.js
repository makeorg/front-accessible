import styled from 'styled-components';
import {
  Breakpoints,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { FourthLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { BorderColors } from 'Client/app/assets/vars/Colors';

export const TagFilterWrapperStyle = styled.div`
  padding: 0 ${intToPx(DefaultPadding.Mobile)};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 0;
  }
`;

export const TagFilterIntroStyle = styled(ParagraphStyle)`
  margin-right: 15px;
`;

export const TagSectionTitle = styled(FourthLevelTitleStyle)`
  padding: 0 ${intToPx(DefaultPadding.Mobile)};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 0;
  }
`;

export const TagListStyle = styled(UnstyledListStyle)`
  display: inline;
`;

export const TagListItemStyle = styled.li`
  display: inline-flex;
`;

export const FiltersContainerStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
`;

export const ResetStyle = styled.span`
  cursor: pointer;
  font-size: 12px;
  text-decoration: underline;
  margin-left: 10px;
`;

export const SeparatorStyle = styled.div`
  padding: 0;
  color: ${BorderColors.LightGrey};

  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 0 15px;
  }
`;
