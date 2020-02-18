import styled from 'styled-components';
import { ProposalCardStyle } from 'Client/ui/Elements/ProposalCardElements';
import { BackgroundColors, BasicColors } from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { intToPx } from 'Shared/helpers/styled';
import { Elements } from 'Client/app/assets/vars/Elements';

export const PopularProposalWrapperStyle = styled(ProposalCardStyle)`
  overflow: hidden;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  margin-bottom: 20px;
  border-radius: ${intToPx(Elements.BorderRadius)};
`;

export const PopularProposalHeader = styled.div`
  font-family: ${MakeFonts.CircularStandardBook};
  color: ${BasicColors.PureBlack};
  background-color: ${BackgroundColors.TaintedWhite};
  margin: -20px -20px 10px -20px;
  padding: 11px 20px;
`;

export const PopularProposalTagStyle = styled.div`
  padding-top: 15px;
  border-top: 1px solid ${BackgroundColors.ExtraLightGrey};
  font-family: ${MakeFonts.CircularStandardBold};
  &::first-letter {
    text-transform: uppercase;
  }
`;
