// @flow
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { type StateRoot } from 'Shared/store/types';
import { type QuestionType } from 'Shared/types/question';
import { selectCurrentQuestion } from 'Shared/store/selectors/questions.selector';
import { PROPOSAL_SUBMIT_FORMNAME } from 'Shared/constants/form';
import { MAX_PROPOSAL_LENGTH, getBaitText } from 'Shared/constants/proposal';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { SpaceBetweenRowStyle } from 'Client/ui/Elements/FlexElements';
import { i18n } from 'Shared/i18n';
import {
  GreyUnderlineButtonStyle,
  RedButtonStyle,
} from 'Client/ui/Elements/Buttons/V2/style';
import { proposalHasValidLength } from 'Shared/helpers/proposal';
import { throttle } from 'Shared/helpers/throttle';
import {
  MODERATION_CHARTER_FR_LINK,
  MODERATION_CHARTER_EN_LINK,
} from 'Shared/constants/url';
import {
  trackDisplayProposalField,
  trackClickProposalSubmit,
  trackClickModerationLink,
} from 'Shared/services/Tracking';
import {
  ProposalFormWrapperStyle,
  ProposalFormTitleStyle,
  ProposalTextareaStyle,
  ProposalFieldWrapperStyle,
  ProposalCharCountStyle,
  ProposalExternalLinkStyle,
  ProposalExternalLinkIconStyle,
} from './style';

type Props = {
  proposalContent: string,
  handleValueChange: (event: SyntheticEvent<HTMLTextAreaElement>) => void,
  handleFieldFocus: () => void,
  handleCancel: () => void,
  handleSubmit: () => void,
};

export const ProposalForm = ({
  proposalContent,
  handleValueChange,
  handleFieldFocus,
  handleCancel,
  handleSubmit,
}: Props) => {
  const question: QuestionType = useSelector((state: StateRoot) =>
    selectCurrentQuestion(state)
  );
  const { country } = useSelector((state: StateRoot) => state.appConfig);
  const proposalIsEmpty = proposalContent.length === 0;
  const baitText = getBaitText();
  const isFR = country === 'FR';
  const charCounting = proposalIsEmpty
    ? baitText.length
    : proposalContent.length;

  useEffect(() => {
    trackDisplayProposalField();
  }, []);

  return (
    <ProposalFormWrapperStyle>
      <form
        id={PROPOSAL_SUBMIT_FORMNAME}
        name={PROPOSAL_SUBMIT_FORMNAME}
        onSubmit={throttle(handleSubmit)}
      >
        <ProposalFormTitleStyle>{question.question}</ProposalFormTitleStyle>
        <ScreenReaderItemStyle>
          {i18n.t('proposal_submit.title')}
        </ScreenReaderItemStyle>
        <ProposalFieldWrapperStyle>
          <ScreenReaderItemStyle as="label" htmlFor="proposal">
            {i18n.t('proposal_submit.field')}
          </ScreenReaderItemStyle>
          <ProposalTextareaStyle
            name="proposal"
            id="proposal"
            data-cy-field="proposal"
            value={proposalContent}
            onChange={handleValueChange}
            onFocus={handleFieldFocus}
            autoCapitalize="none"
            autoComplete="off"
            placeholder={`${baitText} ...`}
            rows={6}
            spellCheck
            maxLength={MAX_PROPOSAL_LENGTH}
          />
          <ProposalCharCountStyle aria-hidden>
            {`${charCounting} / ${MAX_PROPOSAL_LENGTH}`}
          </ProposalCharCountStyle>
          <ScreenReaderItemStyle aria-live="polite">
            {i18n.t('proposal_submit.counter', {
              current: proposalContent.length,
              total: MAX_PROPOSAL_LENGTH,
            })}
          </ScreenReaderItemStyle>
        </ProposalFieldWrapperStyle>
        <SpaceBetweenRowStyle>
          <GreyUnderlineButtonStyle type="button" onClick={handleCancel}>
            {i18n.t('proposal_submit.button_cancel')}
          </GreyUnderlineButtonStyle>
          <RedButtonStyle
            type="submit"
            form={PROPOSAL_SUBMIT_FORMNAME}
            onClick={trackClickProposalSubmit}
            disabled={!proposalHasValidLength(proposalContent.length)}
          >
            {i18n.t('proposal_submit.button_submit')}
          </RedButtonStyle>
        </SpaceBetweenRowStyle>
      </form>
      <ProposalExternalLinkStyle
        href={isFR ? MODERATION_CHARTER_FR_LINK : MODERATION_CHARTER_EN_LINK}
        target="_blank"
        rel="noreferrer noopener"
        onClick={trackClickModerationLink}
      >
        {i18n.t('proposal_submit.moderation_link')}
        <ProposalExternalLinkIconStyle
          aria-label={i18n.t('common.open_new_window')}
        />
      </ProposalExternalLinkStyle>
    </ProposalFormWrapperStyle>
  );
};
