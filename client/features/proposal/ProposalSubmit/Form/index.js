// @flow
import React from 'react';
import { type StateRoot } from 'Shared/store/types';
import { i18n } from 'Shared/i18n';
import { getBaitText, MAX_PROPOSAL_LENGTH } from 'Shared/constants/proposal';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { CenterParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import {
  MODERATION_CHARTER_FR_LINK,
  MODERATION_CHARTER_EN_LINK,
} from 'Shared/constants/url';
import { useSelector } from 'react-redux';
import { ProposalSubmitButton } from '../Button';
import {
  ProposalSubmitFormStyle,
  ProposalInputWrapperStyle,
  ProposalLabelStyle,
  ProposalTextareaStyle,
  ProposalButtonWrapperStyle,
  DescriptionWrapperStyle,
} from '../Styled';
import { CharsCounter } from '../Counter';

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
export const ProposalSubmitForm = ({
  content,
  length,
  canSubmit,
  isOpen,
  handleOnChange,
  handleOnFocus,
  handleOnSubmit,
  handleOnKeydown,
}: Props) => {
  const { country } = useSelector((state: StateRoot) => state.appConfig);
  const baitLength: number = getBaitText().length;
  const inputMaxLength: number = MAX_PROPOSAL_LENGTH - baitLength;
  const isFR = country === 'FR';

  return (
    <ProposalSubmitFormStyle isOpen={isOpen}>
      <ScreenReaderItemStyle as="div">
        {i18n.t('proposal_submit.title')}
        <DescriptionWrapperStyle id="proposal-submit-description">
          <CenterParagraphStyle>
            {i18n.t('proposal_submit.description')}
          </CenterParagraphStyle>
          <CenterParagraphStyle>
            {i18n.t('proposal_submit.moderation_charter')}
            <a
              href={
                isFR ? MODERATION_CHARTER_FR_LINK : MODERATION_CHARTER_EN_LINK
              }
            >
              {i18n.t('proposal_submit.moderation_charter_label')}
            </a>
          </CenterParagraphStyle>
        </DescriptionWrapperStyle>
      </ScreenReaderItemStyle>
      <ProposalInputWrapperStyle>
        <ProposalLabelStyle htmlFor="proposal">
          {getBaitText()}
        </ProposalLabelStyle>
        <ProposalTextareaStyle
          name="proposal"
          id="proposal"
          data-cy-field="proposal"
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
        />
      </ProposalInputWrapperStyle>
      <ProposalButtonWrapperStyle isOpen={isOpen}>
        <CharsCounter currentLength={length} />
        <ProposalSubmitButton
          handleOnSubmit={handleOnSubmit}
          canSubmit={canSubmit}
          isOpen={isOpen}
        />
      </ProposalButtonWrapperStyle>
    </ProposalSubmitFormStyle>
  );
};
