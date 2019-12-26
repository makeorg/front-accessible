// @flow
import React from 'react';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { withQuestionData } from './fetchQuestionData';

type Props = {
  question: TypeQuestion,
};

const IdeasPageWrapper = ({ question }: Props) => (
  <div>{`IdeasPage for ${question.wording.question}`}</div>
);

const IdeasPage = withQuestionData(IdeasPageWrapper);

// default export needed for loadable component
export default IdeasPage; // eslint-disable-line import/no-default-export
