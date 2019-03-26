/* @flow */

import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import { getBaitText } from 'Shared/constants/proposal';
import { ProposalSubmitButtonComponent } from './Button';
import {
  ProposalSubmitFormStyle,
  ProposalInputWrapperStyle,
  ProposalLabelStyle,
  ProposalInputStyle,
  ProposalButtonWrapperStyle,
  ProposalCharLimitStyle,
} from './Styled';

type Props = {
  /** Value's content */
  content: string,
  /** Value's lentgh */
  length: number,
  /** Can user submit value */
  canSubmit: boolean,
  /** Boolean toggled when user is typing a proposal */
  isOpen: boolean,
  /** Method called when field's value changes */
  handleOnChange: (SyntheticEvent<*>) => void,
  /** Method called when field is focused */
  handleOnFocus: () => void,
  /** Method called when field's value is submitted */
  handleOnSubmit: (SyntheticEvent<*>) => void,
};
/**
 * Render the Proposal Field
 */
export const ProposalSubmitFormComponent = (props: Props) => {
  const {
    content,
    length,
    canSubmit,
    isOpen,
    handleOnChange,
    handleOnFocus,
    handleOnSubmit,
  } = props;

  return (
    <ProposalSubmitFormStyle isOpen={isOpen}>
      <HiddenItemStyle aria-hidden as="h2">
        {i18n.t('proposal_submit.title')}
      </HiddenItemStyle>
      <ProposalInputWrapperStyle>
        <ProposalLabelStyle htmlFor="proposal">
          {getBaitText()}
        </ProposalLabelStyle>
        <ProposalInputStyle
          as="textarea"
          name="proposal"
          id="proposal"
          value={content}
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          autoCapitalize="none"
          autoComplete="off"
          placeholder="..."
          spellCheck
          maxLength="140"
          isOpen={isOpen}
        />
      </ProposalInputWrapperStyle>
      <ProposalButtonWrapperStyle isOpen={isOpen}>
        <ProposalCharLimitStyle>
          <span aria-valuetext={length}>{length}</span>
          <HiddenItemStyle>
            {i18n.t('proposal_submit.entred_chars')}
          </HiddenItemStyle>
          <span aria-hidden>/</span>
          <HiddenItemStyle>{i18n.t('common.from')}</HiddenItemStyle>
          <span aria-valuemax="140">140</span>
          <HiddenItemStyle>
            {i18n.t('proposal_submit.available_chars')}
          </HiddenItemStyle>
        </ProposalCharLimitStyle>
        <ProposalSubmitButtonComponent
          handleOnSubmit={handleOnSubmit}
          canSubmit={canSubmit}
          isOpen={isOpen}
        />
      </ProposalButtonWrapperStyle>
    </ProposalSubmitFormStyle>
  );
};
