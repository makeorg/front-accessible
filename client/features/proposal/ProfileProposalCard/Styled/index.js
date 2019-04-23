import styled from 'styled-components';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { intToPx } from 'Shared/helpers/styled';
import { SeparatorStyle } from 'Client/ui/Elements/Separators';
import { CardStyle } from 'Client/ui/Cards';
import {
  TextColors,
  MakeThemeColors,
  BasicColors,
  StatusColors,
} from 'Client/app/assets/vars/Colors';

export const ProfileProposalCardStyle = styled(CardStyle)`
  margin: 15px 0;
  &:last-child {
    margin: 15px 0 0;
  }
  &.proposal-refused,
  &.proposal-postponed,
  &.proposal-pending {
    * {
      opacity: 0.5;
    }
    header,
    .status-refused,
    .status-postponed,
    .status-pending {
      opacity: 1;
    }
  }
`;

export const ProposalHeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProposalStyle = styled.a`
  max-width: 100%;
  font-size: 14px;
  line-height: normal;
  font-family: ${MakeFonts.RobotoBold};
  font-weight: bold;
  align-self: flex-start;
  margin-top: 10px;
  text-decoration: none;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 18px;
  }
`;

export const FooterStyle = styled.footer`
  margin-top: 10px;
`;

export const ProposalSeparatorStyle = styled(SeparatorStyle)`
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

export const ProposalStatusStyle = styled.span`
  font-size: 12px;
  color: ${BasicColors.PureWhite};
  padding: 5px 10px;
  &.status-accepted {
    background-color: ${StatusColors.Accepted};
  }
  &.status-refused {
    background-color: ${StatusColors.Refused};
  }
  &.status-postponed,
  &.status-pending {
    background-color: ${StatusColors.Pending};
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 14px;
  }
`;
