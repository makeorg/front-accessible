/* @flow */

import * as React from 'react';
import i18next from 'i18next';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import { getBaitText } from 'Shared/constants/proposal';
import { ProposalSubmitButtonComponent } from './Button';
import ProposalSubmitForm from './Styled';

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
  handleChange: (SyntheticEvent<*>) => void,
  /** Method called when field is focused */
  handleFocus: () => void,
  /** Method called when field's value is submitted */
  handleSubmit: (SyntheticEvent<*>) => void
}
/**
 * Render the Proposal Field
 */
export const ProposalSubmitFormComponent = (props: Props) => {
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
      <HiddenItemStyle aria-hidden as="h2">
        {i18next.t('proposal_submit.title')}
      </HiddenItemStyle>
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
          autoCapitalize="none"
          autoComplete="off"
          spellCheck
          maxLength="140"
          tabIndex={isPannelOpen ? -1 : 0}
          isFieldExpanded={isSequenceCollapsed && isTyping}
        />
      </ProposalSubmitForm.InputWrapper>
      <ProposalSubmitForm.ButtonWrapper isFieldExpanded={isSequenceCollapsed && isTyping}>
        <ProposalSubmitForm.CharLimit>
          <span aria-valuetext={length}>{length}</span>
          <HiddenItemStyle aria-hidden>
            {i18next.t('proposal_submit.entred_chars')}
          </HiddenItemStyle>
          /
          <HiddenItemStyle aria-hidden>
            {i18next.t('common.from')}
          </HiddenItemStyle>
          <span aria-valuemax="140">140</span>
          <HiddenItemStyle aria-hidden>
            {i18next.t('proposal_submit.available_chars')}
          </HiddenItemStyle>
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
