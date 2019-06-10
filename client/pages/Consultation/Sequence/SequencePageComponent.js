import React from 'react';
import { type QuestionConfiguration as TypeQuestionConfiguration } from 'Shared/types/sequence';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { SequenceFooter } from 'Client/features/sequence/Footer';
import { SequenceSkipLinks } from 'Client/app/SkipLinks/Sequence';
import { MetaTags } from 'Client/app/MetaTags';
import { i18n } from 'Shared/i18n';
import { SequencePageContentLoader } from './ContentLoader';
import { SequencePageContentStyle } from './Styled';

type Props = {
  question: TypeQuestion,
  questionConfiguration: TypeQuestionConfiguration,
};

export const SequencePageComponent = (props: Props) => {
  const { question, questionConfiguration } = props;
  return (
    <React.Fragment>
      <MetaTags
        title={i18n.t('meta.sequence.title', {
          question: question.wording.question,
        })}
      />
      {question.canPropose && <SequenceSkipLinks />}
      <SequencePageContentStyle>
        <SequencePageContentLoader question={question} />
      </SequencePageContentStyle>
      <SequenceFooter
        question={question}
        questionConfiguration={questionConfiguration}
      />
    </React.Fragment>
  );
};
