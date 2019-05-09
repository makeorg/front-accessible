import styled from 'styled-components';
import { TextColors, MakeThemeColors } from 'Client/app/assets/vars/Colors';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { intToPx } from 'Shared/helpers/styled';

export const ProposalFooterStyle = styled.div`
  display: flex;
  flex-flow: row;
  align-self: flex-start;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const PostedInLabelStyle = styled.span`
  font-size: 12px;
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
