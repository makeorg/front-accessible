// @flow
import React from 'react';
import { isGreatCause } from 'Shared/helpers/question';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { DefaultBanner } from './DefaultBanner';
import { GreatCauseBanner } from './GreatCauseBanner';

type Props = {
  question: TypeQuestion,
};

export const IntroBanner = ({ question }: Props) => {
  return isGreatCause(question.operationKind) ? (
    <GreatCauseBanner question={question} />
  ) : (
    <DefaultBanner question={question} />
  );
};
