import styled from 'styled-components';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { intToPx } from 'Shared/helpers/styled';
import { CardStyle } from 'Client/ui/Cards';
import { BackgroundColors } from 'Client/app/assets/vars/Colors';

export const ProposalStyle = styled.a`
  width: 100%;
  font-size: 12px;
  line-height: normal;
  font-family: ${MakeFonts.RobotoBold};
  font-weight: bold;
  align-self: flex-start;
  margin-top: 5px;
  padding-top: 10px;
  text-decoration: none;
  border-top: 1px solid ${BackgroundColors.ExtraLightGrey};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 18px;
  }
`;

export const ProposalCardStyle = styled(CardStyle)`
  margin: 15px 0 0;
  &:only-child {
    margin: 0;
  }
`;
