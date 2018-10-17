import React from 'react';
import ProposalSubmitButtonComponent from './Button';
import ProposalSubmitForm from './Styled';
import { HiddenSecondLevelTitle, HiddenItem } from '../Elements/HiddenElements';
import { PROPOSAL_BAIT_TEXT } from '../../constants/proposal';

/**
 * ProposalSubmitCmponent render the proposal Submit Component
 * @extends React
 */
class ProposalSubmitFormComponent extends React.Component {
  render() {
    const {
      length,
      canSubmit,
      handleChange,
      handleFocus,
      handleSubmit
    } = this.props;
    return (
      <ProposalSubmitForm>
        <HiddenSecondLevelTitle>
          Soumettez vos propositions en remplissant ce formulaire avec moins de 140 caractères :
        </HiddenSecondLevelTitle>
        <ProposalSubmitForm.Label htmlFor="proposal">
          { PROPOSAL_BAIT_TEXT }
        </ProposalSubmitForm.Label>
        <ProposalSubmitForm.Input
          type="text"
          name="proposal"
          id="proposal"
          onChange={handleChange}
          onFocus={handleFocus}
        />
        <ProposalSubmitForm.CharLimit>
          <span aria-valuetext={length}>{length}</span>
          <HiddenItem> caractères entrés </HiddenItem>
          /
          <HiddenItem> sur </HiddenItem>
          <span aria-valuemax="140">140</span>
          <HiddenItem> caractères disponibles</HiddenItem>
        </ProposalSubmitForm.CharLimit>
        <ProposalSubmitButtonComponent handleSubmit={handleSubmit} canSubmit={canSubmit} />
      </ProposalSubmitForm>
    );
  }
}

export default ProposalSubmitFormComponent;
