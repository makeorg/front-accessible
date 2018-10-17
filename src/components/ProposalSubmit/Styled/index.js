import styled from 'styled-components';
import { rem } from 'polished';
import { BasicColors, BorderColors } from '../../../assets/vars/Colors';
import Breakpoints from '../../../assets/vars/Breakpoints';
import {
  Label,
  Input,
  CharLimit,
  ProposalButton,
  DisabledProposalButton
} from './ProposalField';

export const DescriptionWrapper = styled.div``;

const ProposalSubmitWrapper = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${rem(Breakpoints.sequenceWidth)};
  padding: 0 ${rem('8px')};
  border: ${rem('1px')} solid ${BorderColors.LightGrey};
  border-radius: ${rem('30px')};
  margin-bottom: ${rem('30px')};
  background: ${BasicColors.PureWhite};
  background-color: ${BasicColors.PureWhite};
`;

/* Proposal Field */
ProposalSubmitWrapper.Label = Label;
ProposalSubmitWrapper.Input = Input;
ProposalSubmitWrapper.CharLimit = CharLimit;
ProposalSubmitWrapper.ProposalButton = ProposalButton;
ProposalSubmitWrapper.DisabledProposalButton = DisabledProposalButton;

export default ProposalSubmitWrapper;
