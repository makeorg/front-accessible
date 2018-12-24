/* @flow */

import * as React from 'react';
import i18next from 'i18next';
import { HiddenItem } from 'Components/Elements/HiddenElements';
import { getBaitText } from 'Constants/proposal';
import ProposalSubmitButtonComponent from './Button';
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
        {getBaitText()}
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
