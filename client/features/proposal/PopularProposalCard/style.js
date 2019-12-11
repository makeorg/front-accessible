import styled from 'styled-components';
import { ProposalCardStyle } from 'Client/ui/Elements/ProposalCardElements';
import { BackgroundColors, BasicColors } from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const PopularProposalWrapperStyle = styled(ProposalCardStyle)`
  overflow: hidden;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  margin: 0;
`;

export const PopularProposalHeader = styled.div`
  font-family: ${MakeFonts.CircularStandardBook};
  color: ${BasicColors.PureBlack};
  background-color: ${BackgroundColors.LightGrey};
  margin: -20px -20px 10px -20px;
  padding: 11px 20px;
`;
