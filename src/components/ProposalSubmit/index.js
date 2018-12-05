/* @flow */

import * as React from 'react';
import i18next from 'i18next';
import { HiddenItem } from 'Components/Elements/HiddenElements';
import { PROPOSAL_BAIT_TEXT } from 'Constants/proposal';
import ProposalSubmitButtonComponent from './Button';
import ProposalSubmitForm from './Styled';

type Props = {
  content: string,
  length: number,
  canSubmit: boolean,
  isPannelOpen: boolean,
  handleChange: Function,
  handleFocus: Function,
  handleSubmit: Function
}
/**
 * ProposalSubmitCmponent render the proposal Submit Component
 */
const ProposalSubmitFormComponent = (props: Props) => {
  const {
    content,
    length,
    canSubmit,
    isPannelOpen,
    handleChange,
    handleFocus,
    handleSubmit
  } = props;

  return (
    <ProposalSubmitForm>
      <HiddenItem aria-hidden as="h2">
        {i18next.t('proposal_submit.title')}
      </HiddenItem>
      <ProposalSubmitForm.Label
        htmlFor="proposal"
      >
        { PROPOSAL_BAIT_TEXT }
      </ProposalSubmitForm.Label>
      <ProposalSubmitForm.Input
        type="text"
        name="proposal"
        id="proposal"
        value={content}
        onChange={handleChange}
        onFocus={handleFocus}
        tabIndex={isPannelOpen ? -1 : 0}
      />
      <ProposalSubmitForm.CharLimit>
        <span aria-valuetext={length}>{length}</span>
        <HiddenItem aria-hidden>
          {i18next.t('proposal_submit.entred_chars')}
        </HiddenItem>
        /
        <HiddenItem aria-hidden>
          {i18next.t('common.from')}
        </HiddenItem>
        <span aria-valuemax="140">140</span>
        <HiddenItem aria-hidden>
          {i18next.t('proposal_submit.available_chars')}
        </HiddenItem>
      </ProposalSubmitForm.CharLimit>
      <ProposalSubmitButtonComponent
        handleSubmit={handleSubmit}
        canSubmit={canSubmit}
        isPannelOpen={isPannelOpen}
      />
    </ProposalSubmitForm>
  );
};

export default ProposalSubmitFormComponent;
