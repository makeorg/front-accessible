import styled from 'styled-components';
import { rem } from 'polished';
import { BasicColors, ShadowColors } from '../../../assets/vars/Colors';
import Breakpoints from '../../../assets/vars/Breakpoints';
import { IntroProposalCard, FakeNavWrapper } from './Cards';
import { IntroTitle } from './Titles';
import { IntroParagraph, Sep } from './Content';
import { AuthorInfos, Proposal } from './Proposal';
import {
  IntroButton,
  BackButton,
  BackIcon
} from './Buttons';

const ProposalCard = styled.li`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: ${rem('15px')};
  background: ${BasicColors.PureWhite};
  background-color: ${BasicColors.PureWhite};
  box-shadow: 0 0 2px 0 ${ShadowColors.BlackZeroThreeOpacity};
  @media (min-width: ${rem(Breakpoints.mobile)}){
    padding: ${rem('30px')};
  }
`;

/* Card */
ProposalCard.IntroProposalCard = IntroProposalCard;
ProposalCard.FakeNavWrapper = FakeNavWrapper;

/* Titles */
ProposalCard.IntroTitle = IntroTitle;

/* Contents */
ProposalCard.IntroParagraph = IntroParagraph;
ProposalCard.Sep = Sep;

/* Proposal */
ProposalCard.AuthorInfos = AuthorInfos;
ProposalCard.Proposal = Proposal;

/* Button */
ProposalCard.IntroButton = IntroButton;
ProposalCard.BackButton = BackButton;
ProposalCard.BackIcon = BackIcon;

export default ProposalCard;
