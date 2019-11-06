// @flow
import React from 'react';
import { isGreatCause } from 'Shared/helpers/question';
import { type Question } from 'Shared/types/question';
import { DefaultBanner } from './DefaultBanner';
import { GreatCauseBanner } from './GreatCauseBanner';

type Props = {
  question: Question,
};

export const IntroBanner = ({ question }: Props) => {
  const questionIsGreatCause = isGreatCause(question.operationKind);
  return questionIsGreatCause ? (
    <GreatCauseBanner question={question} />
  ) : (
    <DefaultBanner question={question} />
  );
};
