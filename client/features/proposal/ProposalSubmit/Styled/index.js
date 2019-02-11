import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { BasicColors, BorderColors } from 'Client/app/assets/vars/Colors';
import { Breakpoints, Layouts } from 'Client/app/assets/vars/Breakpoints';
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

export const DescriptionWrapper = styled.div`
  margin: ${pxToRem('20px')} auto 0;
`;

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
  ${props => (props.isFieldExpanded ? `
    flex-flow: column;
    @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
      flex-flow: row;
    }`
    : ''
  )};
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
    margin: ${pxToRem('25px')} auto ${pxToRem('15px')};
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