import styled from 'styled-components';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { intToPx } from 'Shared/helpers/styled';
import { SeparatorStyle } from 'Client/ui/Elements/Separators';
import { CardStyle } from 'Client/ui/Cards';
import { TextColors, BasicColors } from 'Client/app/assets/vars/Colors';

export const ProfileProposalCardStyle = styled(CardStyle)`
  margin: 15px 0;
  &:last-child {
    margin: 15px 0 0;
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

export const ProposalHeaderStyle = styled.div`
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

export const ProposalSeparatorStyle = styled(SeparatorStyle)`
  margin-top: 10px;
`;
