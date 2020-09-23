import styled from 'styled-components';
import { CardStyle } from 'Client/ui/Cards';
import {
  TextColors,
  BasicColors,
  MakeThemeColors,
} from 'Client/app/assets/vars/Colors';

export const ProfileProposalCardStyle = styled(CardStyle)`
  margin: 15px 0;
  &:first-child {
    margin: 0 0 15px;
  }
  &:only-child {
    margin: 0;
  }
  &:last-child {
    margin: 15px 0 0;
  }
  &.proposal-refused,
  &.proposal-postponed,
  &.proposal-pending {
    * {
      color: ${TextColors.MediumGrey};
    }
    a {
      color ${MakeThemeColors.Red};
    }
    header,
    .status-refused {
      color: ${BasicColors.PureWhite};
    }
  }
`;
