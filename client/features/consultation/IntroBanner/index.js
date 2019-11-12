// @flow
import React from 'react';
import { isGreatCause } from 'Shared/helpers/question';
import { type Question } from 'Shared/types/question';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { DefaultBanner } from './DefaultBanner';
import { GreatCauseBanner } from './GreatCauseBanner';

type Props = {
  question: Question,
  questionConfiguration: QuestionConfiguration,
};

export const IntroBanner = (props: Props) => {
  const { question } = props;
  const questionIsGreatCause = isGreatCause(question.operationKind);
  return questionIsGreatCause ? (
    <GreatCauseBanner {...props} />
  ) : (
    <DefaultBanner {...props} />
  );
};
