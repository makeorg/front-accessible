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

const ProposalSubmitForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: ${rem('45px')};
  max-width: ${rem(Breakpoints.sequenceWidth)};
  padding: 0 ${rem('8px')};
  border: ${rem('1px')} solid ${BorderColors.LightGrey};
  border-radius: ${rem('30px')};
  margin-bottom: ${rem('30px')};
  background: ${BasicColors.PureWhite};
  background-color: ${BasicColors.PureWhite};
  @media (min-width: ${rem(Breakpoints.mobile)}){
    min-height: ${rem('50px')};
  }
`;

/* Proposal Field */
ProposalSubmitForm.Label = Label;
ProposalSubmitForm.Input = Input;
ProposalSubmitForm.CharLimit = CharLimit;
ProposalSubmitForm.ProposalButton = ProposalButton;
ProposalSubmitForm.DisabledProposalButton = DisabledProposalButton;

export default ProposalSubmitForm;
