// @flow
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  type Question as TypeQuestion,
  type QuestionResults as TypeQuestionResults,
} from 'Shared/types/question';
import { type FinalCardConfig } from 'Shared/types/card';
import {
  trackDisplayFinalCard,
  trackClickLearnMore,
} from 'Shared/services/Tracking';
import { CustomFinalCard } from 'Client/custom/cdc/finalCard';
/** @toDo: remove or refactor after the end of bretagne consultation */
import cdcData from 'Client/custom/cdc/finalCard/config.json';
import { checkIsFeatureActivated } from 'Client/helper/featureFlipping';
import { CONSULTATION_SHARE_DISABLE } from 'Shared/constants/featureFlipping';
import { Sharing } from 'Client/features/flipping/Sharing/FincalCardi';
import { i18n } from 'Shared/i18n';
import { resetSequenceVotedProposals } from 'Shared/store/actions/sequence';
import {
  SequenceContentWrapperStyle,
  SequenceInnerContentStyle,
  SequenceFinalCardContentWrapperStyle,
  SequenceAltMainTitleStyle,
  SequenceIntroParagraphStyle,
  SequenceMoreWrapperStyle,
  SequenceFinalLinkStyle,
} from '../style';

type Props = {
  /** Object with Static properties used to configure the Final Card */
  configuration: FinalCardConfig,
  /** Boolean toggled when card is visible / hidden */
  isCardVisible: boolean,
};

type QuestionState = {
  question: TypeQuestion,
  questionResults?: TypeQuestionResults,
};

/** @toDo: remove or refactor after the end of bretagne consultation */
export const getSlugInArray = (
  questionsArray: string[],
  questionSlug: string
) => {
  const value = questionsArray.some(item => {
    return item === questionSlug;
  });

  return value;
};

export const FinalCard = ({ configuration, isCardVisible }: Props) => {
  const dispach = useDispatch();
  const currentQuestion: string = useSelector(state => state.currentQuestion);
  const questionState: QuestionState = useSelector(
    state => state.questions[currentQuestion]
  );
  const { question } = questionState;
  const hasSiblingQuestion = question.operation.questions.length > 0;
  const slugsArray = [];
  const [isSlugInArray, setIsSlugInArray] = useState(false);
  const isFinalCardCustom =
    cdcData[question.slug] && cdcData[question.slug].customFinalCard;
  const isSharingDisabled: boolean = checkIsFeatureActivated(
    CONSULTATION_SHARE_DISABLE,
    question.activeFeatures
  );

  useEffect(() => {
    if (isCardVisible) {
      trackDisplayFinalCard();
      dispach(resetSequenceVotedProposals(currentQuestion));
    }
  }, [isCardVisible]);

  useEffect(() => {
    if (hasSiblingQuestion) {
      question.operation.questions.map(questionItem =>
        slugsArray.push(questionItem.questionSlug)
      );
    }
    setIsSlugInArray(getSlugInArray(slugsArray, question.slug));
  }, [slugsArray]);

  /** @toDo: remove or refactor after the end of bretagne consultation */
  if (isSlugInArray && isFinalCardCustom) {
    return <CustomFinalCard question={question} />;
  }

  return (
    <SequenceContentWrapperStyle>
      <SequenceInnerContentStyle>
        <SequenceAltMainTitleStyle>
          {configuration.title
            ? configuration.title
            : i18n.t('final_card.title')}
        </SequenceAltMainTitleStyle>
        <SequenceFinalCardContentWrapperStyle>
          {configuration.share && !isSharingDisabled && (
            <Sharing text={configuration.share} />
          )}
          <SequenceMoreWrapperStyle>
            <SequenceIntroParagraphStyle>
              {configuration.learnMoreTitle
                ? configuration.learnMoreTitle
                : i18n.t('final_card.more.title')}
            </SequenceIntroParagraphStyle>
            <SequenceFinalLinkStyle
              as="a"
              href={configuration.linkUrl}
              onClick={() => trackClickLearnMore()}
            >
              {configuration.learnMoreTextButton
                ? configuration.learnMoreTextButton
                : i18n.t('final_card.more.button')}
            </SequenceFinalLinkStyle>
          </SequenceMoreWrapperStyle>
        </SequenceFinalCardContentWrapperStyle>
      </SequenceInnerContentStyle>
    </SequenceContentWrapperStyle>
  );
};