import styled from 'styled-components';
import { CardStyle } from 'Client/ui/Cards';
import { TextColors, BasicColors } from 'Client/app/assets/vars/Colors';

export const ProfileProposalCardStyle = styled(CardStyle)`
  margin: 15px 0;
  &:first-child {
    margin: 0 0 15px;
  }
  &:last-child {
    margin: 15px 0 0;
  }
  &:only-child {
    margin: 0;
  }
  &.proposal-refused,
  &.proposal-postponed,
  &.proposal-pending {
    * {
      color: ${TextColors.MediumGrey};
    }
    header,
    .status-refused {
      color: ${BasicColors.PureWhite};
    }
  }
`;
