// @flow
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  type Question as TypeQuestion,
  type QuestionResults as TypeQuestionResults,
} from 'Shared/types/question';
import { type FinalCardConfig } from 'Shared/types/card';
import { trackDisplayFinalCard } from 'Shared/services/Tracking';
import { CustomFinalCard } from 'Client/custom/cdc/finalCard';
/** @toDo: remove or refactor after the end of bretagne consultation */
import cdcData from 'Client/custom/cdc/finalCard/config.json';
import { FinalCardComponent } from './FinalCardComponent';

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

/**
 * Handles Final Card Business Logic
 */
export const FinalCardContainer = ({ configuration, isCardVisible }: Props) => {
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

  useEffect(() => {
    if (isCardVisible) {
      trackDisplayFinalCard();
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

  return <FinalCardComponent configuration={configuration} />;
};
