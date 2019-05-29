import styled from 'styled-components';
import {
  TextColors,
  BackgroundColors,
  MakeThemeColors,
} from 'Client/app/assets/vars/Colors';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { intToPx } from 'Shared/helpers/styled';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';

export const ProposalTagListStyle = styled(UnstyledListStyle)`
  margin-top: 15px;
  padding-top: 5px;
  border-top: 1px solid ${BackgroundColors.ExtraLightGrey};
`;

export const ProposalFooterStyle = styled.div`
  display: flex;
  flex-flow: row;
  align-self: flex-start;
  flex-wrap: wrap;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid ${BackgroundColors.ExtraLightGrey};
`;

export const PostedInLabelStyle = styled.span`
  font-size: 12px;
  margin-right: 5px;
  color: ${TextColors.MediumGrey};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 14px;
  }
`;

export const PostedInLinkStyle = styled.a`
  font-size: 12px;
  font-family: ${MakeFonts.RobotoCondensedBold};
  text-decoration: none;
  text-transform: uppercase;
  color: ${MakeThemeColors.Red};
  &:hover,
  &:focus {
    color: ${MakeThemeColors.Red};
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 16px;
  }
`;
