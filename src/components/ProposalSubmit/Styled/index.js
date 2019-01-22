import styled from 'styled-components';
import { pxToRem } from 'Helpers/styled';
import { BasicColors, BorderColors } from 'Assets/vars/Colors';
import { Breakpoints, Layouts } from 'Assets/vars/Breakpoints';
import {
  InputWrapper,
  Label,
  Input,
  ButtonWrapper,
  CharLimit,
  ProposalButton,
  DisabledProposalButton,
  ProposalIcon
} from './ProposalField';

export const DescriptionWrapper = styled.div``;

const ProposalSubmitForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 0 ${pxToRem('8px')};
  border: ${pxToRem('1px')} solid ${BorderColors.LightGrey};
  border-radius: ${pxToRem('30px')};
  background: ${BasicColors.PureWhite};
  background-color: ${BasicColors.PureWhite};
`;

export const ProposalSubmitFormWrapper = styled.aside`
  display: block;
  width: 100%;
  max-height: ${pxToRem('45px')};
  max-width: ${pxToRem(Layouts.ContainerWidth)};
  margin: ${pxToRem('15px')} auto ${pxToRem('5px')};
  padding: 0 ${pxToRem('20px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    max-height: ${pxToRem('50px')};
    margin: ${pxToRem('15px')} auto;
  }
`;

/* Proposal Field */
ProposalSubmitForm.InputWrapper = InputWrapper;
ProposalSubmitForm.Label = Label;
ProposalSubmitForm.Input = Input;
ProposalSubmitForm.ButtonWrapper = ButtonWrapper;
ProposalSubmitForm.CharLimit = CharLimit;
ProposalSubmitForm.ProposalButton = ProposalButton;
ProposalSubmitForm.DisabledProposalButton = DisabledProposalButton;
ProposalSubmitForm.ProposalIcon = ProposalIcon;

export default ProposalSubmitForm;
