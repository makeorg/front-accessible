import styled from 'styled-components';
import { pxToRem } from '../../../helpers/styled';
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

const ProposalCard = styled.li.attrs({
  position: props => props.position || 0,
  zindex: props => props.zindex || 0,
  scale: props => props.scale || 0
})`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: ${pxToRem('15px')};
  z-index: ${props => props.zindex};
  transform: scaleX(${props => props.scale}) translateY(-${props => props.position}px);
  background: ${BasicColors.PureWhite};
  background-color: ${BasicColors.PureWhite};
  box-shadow: 0 0 2px 0 ${ShadowColors.BlackZeroThreeOpacity};
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
ProposalCard.Sep = Sep;

/* Proposal */
ProposalCard.AuthorInfos = AuthorInfos;
ProposalCard.Proposal = Proposal;

/* Button */
ProposalCard.IntroButton = IntroButton;
ProposalCard.BackButton = BackButton;
ProposalCard.BackIcon = BackIcon;

export default ProposalCard;
