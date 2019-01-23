/* @flow */

import * as React from 'react';
import i18next from 'i18next';
import { HiddenItem } from 'Components/Elements/HiddenElements';
import { getBaitText } from 'Constants/proposal';
import ProposalSubmitButtonComponent from './Button';
import ProposalSubmitForm, { ExpandedForm } from './Styled';

type Props = {
  /** Value's content */
  content: string,
  /** Value's lentgh */
  length: number,
  /** Can user submit value */
  canSubmit: boolean,
  /** Boolean toggled when Sliding pannel is opened / closed */
  isPannelOpen: boolean,
  /** Boolean toggled when Sequence is collapsed / expanded */
  isSequenceCollapsed: boolean,
  /** Boolean toggled when User is typing a proposal */
  isTyping: boolean,
  /** Method called when field's value changes */
  handleChange: Function,
  /** Method called when field is focused */
  handleFocus: Function,
  /** Method called when field's value is submitted */
  handleSubmit: Function
}
/**
 * Render the Proposal Field
 */
const ProposalSubmitFormComponent = (props: Props) => {
  const {
    content,
    length,
    canSubmit,
    isPannelOpen,
    isSequenceCollapsed,
    isTyping,
    handleChange,
    handleFocus,
    handleSubmit
  } = props;

  return (
    <ProposalSubmitForm isFieldExpanded={isSequenceCollapsed && isTyping}>
      <HiddenItem aria-hidden as="h2">
        {i18next.t('proposal_submit.title')}
      </HiddenItem>
      <ProposalSubmitForm.InputWrapper>
        <ProposalSubmitForm.Label
          htmlFor="proposal"
        >
          {getBaitText()}
        </ProposalSubmitForm.Label>
        <ProposalSubmitForm.Input
          as="textarea"
          name="proposal"
          id="proposal"
          value={content}
          onChange={handleChange}
          onFocus={handleFocus}
          autoComplete="off"
          spellCheck="true"
          maxLength="140"
          tabIndex={isPannelOpen ? -1 : 0}
          isFieldExpanded={isSequenceCollapsed && isTyping}
        />
      </ProposalSubmitForm.InputWrapper>
      <ProposalSubmitForm.ButtonWrapper isFieldExpanded={isSequenceCollapsed && isTyping}>
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
          isFieldExpanded={isSequenceCollapsed && isTyping}
        />
      </ProposalSubmitForm.ButtonWrapper>
    </ProposalSubmitForm>
  );
};

export default ProposalSubmitFormComponent;
