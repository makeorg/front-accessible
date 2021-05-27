/* eslint-disable react-hooks/exhaustive-deps */
// @flow
import React, { useState } from 'react';
import {
  getNoProposalCardTitleBySequenceKind,
  getSequenceTitleBySequenceKind,
  isStandardSequence,
} from 'Shared/helpers/sequence';
import { type QuestionType } from 'Shared/types/question';
import { useDispatch, useSelector } from 'react-redux';
import { resetSequenceIndex } from 'Shared/store/actions/sequence';
import { trackClickOperationPage } from 'Shared/services/Tracking';
import { SequenceService } from 'Shared/services/Sequence';
import { ProposalSubmit } from 'Client/features/proposal/Submit';
import { CARD_TYPE_NO_PROPOSAL_CARD } from 'Shared/constants/card';
import { getParticipateLink } from 'Shared/helpers/url';
import { i18n } from 'Shared/i18n';
import { selectCurrentQuestion } from 'Shared/store/selectors/questions.selector';
import { MetaTags } from 'Client/app/MetaTags';
import { SequenceCard } from './Cards';
import {
  SequenceContainerStyle,
  ConsultationPageLinkStyle,
  SequenceContentStyle,
  SequenceAltTitleStyle,
  SequenceSpecialIconStyle,
  SequenceSpecialTitleStyle,
  SequenceTitleStyle,
} from './style';
import { SequenceProgress } from './Progress';
import { SequencePlaceholder } from './Placeholder';
import { useSequence } from './useSequence';

export type Props = {
  /** kind parameter for popular and controversy sequences */
  sequenceKind: string,
};

/**
 * Renders Sequence component with Intro / Push Proposal / Sign Up & Proposal Cards
 */
export const Sequence = ({ sequenceKind }: Props) => {
  const dispatch = useDispatch();
  const [sequenceProposals, setSequenceProposals] = useState([]);

  const question: QuestionType = useSelector((state: StateRoot) =>
    selectCurrentQuestion(state)
  );

  const executeStartSequence = async (
    questionId: string,
    votedIds: string[]
  ) => {
    const { proposals } = await SequenceService.startSequenceByKind(
      questionId,
      votedIds,
      sequenceKind
    );

    if (proposals) {
      setSequenceProposals(proposals);
      dispatch(resetSequenceIndex());
    }
  };
  const { withProposalButton, country, isLoading, currentCard } = useSequence(
    question,
    isStandardSequence(sequenceKind),
    sequenceProposals,
    executeStartSequence
  );

  if (isLoading) {
    return <SequencePlaceholder />;
  }

  const noProposalCard = {
    type: CARD_TYPE_NO_PROPOSAL_CARD,
    configuration: {
      title: getNoProposalCardTitleBySequenceKind(sequenceKind),
      description: isStandardSequence(sequenceKind)
        ? i18n.t('no_proposal_card.description.regular')
        : i18n.t('no_proposal_card.description.special'),
    },
  };
  const isSequenceEmpty = sequenceProposals.length === 0;

  return (
    <>
      <MetaTags
        title={i18n.t('meta.sequence.title', {
          question: question.wording.question,
        })}
        description={question.wording.metas.description}
        picture={question.wording.metas.picture}
      />
      <SequenceContainerStyle data-cy-container="sequence">
        <SequenceContentStyle>
          {isStandardSequence(sequenceKind) ? (
            <SequenceTitleStyle>{question.question}</SequenceTitleStyle>
          ) : (
            <>
              <SequenceAltTitleStyle>{question.question}</SequenceAltTitleStyle>
              <SequenceSpecialTitleStyle>
                <SequenceSpecialIconStyle aria-hidden focusable={false} />
                {getSequenceTitleBySequenceKind(sequenceKind)}
              </SequenceSpecialTitleStyle>
            </>
          )}
          <SequenceCard
            card={isSequenceEmpty ? noProposalCard : currentCard}
            question={question}
          />
          {!isSequenceEmpty && <SequenceProgress />}
        </SequenceContentStyle>
        <ConsultationPageLinkStyle
          className={!withProposalButton && 'static'}
          to={getParticipateLink(country, question.slug)}
          onClick={() => trackClickOperationPage()}
        >
          {i18n.t('sequence.more')}
        </ConsultationPageLinkStyle>
        {withProposalButton && <ProposalSubmit />}
      </SequenceContainerStyle>
    </>
  );
};
