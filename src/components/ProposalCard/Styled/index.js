import styled from 'styled-components';
import { pxToRem } from 'Helpers/styled';
import { BasicColors, ShadowColors } from 'Assets/vars/Colors';
import Breakpoints from 'Assets/vars/Breakpoints';
import { IntroProposalCard, FakeNavWrapper } from './Cards';
import { IntroTitle } from './Titles';
import { IntroParagraph, FinalParagraph, Separator } from './Content';
import { AuthorInfos, Proposal } from './Proposal';
import {
  IntroButton,
  BackButton,
  BackIcon,
  FinalLink
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
  padding: ${pxToRem('15px')};
  z-index: ${props => props.zindex || 0};
  transform: scaleX(${props => props.scale || 0}) translateY(-${props => props.position || 0}px);
  background: ${BasicColors.PureWhite};
  background-color: ${BasicColors.PureWhite};
  transition: transform 0.75s ease-in;
  box-shadow: 0 0 2px 0 ${ShadowColors.BlackZeroThreOpacity};
  overflow: hidden;
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    padding: ${pxToRem('30px')};
  }
`;

/* Card */
ProposalCard.IntroProposalCard = IntroProposalCard;
ProposalCard.FakeNavWrapper = FakeNavWrapper;

/* Titles */
ProposalCard.IntroTitle = IntroTitle;

/* Contents */
ProposalCard.IntroParagraph = IntroParagraph;
ProposalCard.FinalParagraph = FinalParagraph;
ProposalCard.Separator = Separator;

/* Proposal */
ProposalCard.AuthorInfos = AuthorInfos;
ProposalCard.Proposal = Proposal;

/* Button */
ProposalCard.IntroButton = IntroButton;
ProposalCard.BackButton = BackButton;
ProposalCard.BackIcon = BackIcon;
ProposalCard.FinalLink = FinalLink;

export default ProposalCard;
