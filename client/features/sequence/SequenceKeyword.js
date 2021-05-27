/* eslint-disable react-hooks/exhaustive-deps */
// @flow
import React, { useState } from 'react';
import { type QuestionType } from 'Shared/types/question';
import { useDispatch, useSelector } from 'react-redux';
import { resetSequenceIndex } from 'Shared/store/actions/sequence';
import { trackClickOperationPage } from 'Shared/services/Tracking';
import { SequenceService } from 'Shared/services/Sequence';
import { ProposalSubmit } from 'Client/features/proposal/Submit';
import { CARD_TYPE_NO_PROPOSAL_CARD } from 'Shared/constants/card';
import { getParticipateLink } from 'Shared/helpers/url';
import { i18n } from 'Shared/i18n';
import { capitalizeFirstLetter } from 'Shared/helpers/stringFormatter';
import { useParams } from 'react-router';
import { MetaTags } from 'Client/app/MetaTags';
import { selectCurrentQuestion } from 'Shared/store/selectors/questions.selector';
import { SequenceCard } from './Cards';
import {
  SequenceContainerStyle,
  ConsultationPageLinkStyle,
  SequenceContentStyle,
  SequenceAltTitleStyle,
  SequenceSpecialIconStyle,
  SequenceSpecialTitleStyle,
} from './style';
import { SequenceProgress } from './Progress';
import { SequencePlaceholder } from './Placeholder';
import { useSequence } from './useSequence';

/**
 * Renders Sequence component with Intro / Push Proposal / Sign Up & Proposal Cards
 */
export const SequenceKeyword = () => {
  const dispatch = useDispatch();
  const { encodedKeyword } = useParams();
  const keyword = encodedKeyword && decodeURI(encodedKeyword);
  const [sequenceProposals, setSequenceProposals] = useState([]);
  const [keywordLabel, setKeywordLabel] = useState('');
  const question: QuestionType = useSelector((state: StateRoot) =>
    selectCurrentQuestion(state)
  );

  const executeStartSequence = async (
    questionId: string,
    votedIds: string[]
  ) => {
    const response = await SequenceService.startSequenceByKeyword(
      questionId,
      votedIds,
      keyword
    );

    if (response) {
      setSequenceProposals(response.proposals);
      dispatch(resetSequenceIndex());
      setKeywordLabel(response.label);
    }
  };

  const { withProposalButton, country, isLoading, currentCard } = useSequence(
    question,
    false,
    sequenceProposals,
    executeStartSequence
  );

  if (isLoading) {
    return <SequencePlaceholder />;
  }

  const noProposalCard = {
    type: CARD_TYPE_NO_PROPOSAL_CARD,
    configuration: {
      title: i18n.t('no_proposal_card.title.keyword', {
        keyword: capitalizeFirstLetter(keywordLabel),
      }),
      description: i18n.t('no_proposal_card.description.special'),
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
          <SequenceAltTitleStyle>{question.question}</SequenceAltTitleStyle>
          <SequenceSpecialTitleStyle>
            <SequenceSpecialIconStyle aria-hidden focusable={false} />
            {capitalizeFirstLetter(keywordLabel)}
          </SequenceSpecialTitleStyle>

          <SequenceCard
            card={isSequenceEmpty ? noProposalCard : currentCard}
            question={question}
            sequenceKind={keyword}
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
