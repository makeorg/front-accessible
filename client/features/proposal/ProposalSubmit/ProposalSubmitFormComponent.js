/* @flow */
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { getBaitText, MAX_PROPOSAL_LENGTH } from 'Shared/constants/proposal';
import {
  ReadableItemStyle,
  HiddenItemStyle,
} from 'Client/ui/Elements/HiddenElements';
import { ProposalSubmitButtonComponent } from './Button';
import {
  ProposalSubmitFormStyle,
  ProposalInputWrapperStyle,
  ProposalLabelStyle,
  ProposalTextareaStyle,
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
  handleOnChange: (SyntheticEvent<HTMLTextAreaElement>) => void,
  /** Method called when field is focused */
  handleOnFocus: () => void,
  /** Method called when field's value is submitted */
  handleOnSubmit: (SyntheticEvent<HTMLTextAreaElement>) => void,
  handleOnKeydown: (SyntheticKeyboardEvent<HTMLTextAreaElement>) => void,
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
    handleOnKeydown,
  } = props;

  const inputMaxLength: number = MAX_PROPOSAL_LENGTH - getBaitText().length;

  return (
    <ProposalSubmitFormStyle isOpen={isOpen}>
      <ReadableItemStyle as="p">
        {i18n.t('proposal_submit.title')}
      </ReadableItemStyle>
      <ProposalInputWrapperStyle>
        <ProposalLabelStyle htmlFor="proposal">
          {getBaitText()}
        </ProposalLabelStyle>
        <ProposalTextareaStyle
          name="proposal"
          id="proposal"
          value={content}
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          autoCapitalize="none"
          autoComplete="off"
          placeholder="..."
          rows={1}
          maxRows={10}
          spellCheck
          maxLength={inputMaxLength}
          onKeyDown={handleOnKeydown}
          async
        />
      </ProposalInputWrapperStyle>
      <ProposalButtonWrapperStyle isOpen={isOpen}>
        <ProposalCharLimitStyle>
          <span
            aria-label={i18n.t('proposal_submit.dynamic_entred_chars', {
              chars: length,
            })}
            aria-valuetext={length}
          >
            {length}
            <HiddenItemStyle>
              {i18n.t('proposal_submit.entred_chars')}
            </HiddenItemStyle>
          </span>
          <span aria-label={i18n.t('common.from')}>/</span>
          <span
            aria-label={i18n.t('proposal_submit.dynamic_available_chars', {
              chars: 140,
            })}
            aria-valuemax="140"
          >
            140
            <HiddenItemStyle>
              {i18n.t('proposal_submit.available_chars')}
            </HiddenItemStyle>
          </span>
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
