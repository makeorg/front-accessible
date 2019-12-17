import styled from 'styled-components';
import { TextColors, MakeThemeColors } from 'Client/app/assets/vars/Colors';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { UnstyledButtonStyle } from 'Client/ui/Elements/ButtonElements';

export const PopularTagsListStyle = styled.ol`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const PopularTagsListItemStyle = styled.li`
  display: flex;
  flex-flow: column;
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 5px;
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    font-size: 14px;
    line-height: 21px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const FilterTriggerStyle = styled(UnstyledButtonStyle)`
  display: inline-block;
  font-size: 12px;
  line-height: 18px;
  color: ${MakeThemeColors.Red};
  text-decoration: underline;
  &::first-letter {
    text-transform: uppercase;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    font-size: 14px;
    line-height: 21px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const ProposalCountStyle = styled.span`
  font-size: 10px;
  color: ${TextColors.MediumGrey};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 12px;
  }
`;
