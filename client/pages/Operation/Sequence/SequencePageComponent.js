import React from 'react';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { SequenceFooter } from 'Client/features/sequence/Footer';
import { SequenceSkipLinks } from 'Client/app/SkipLinks/Sequence';
import { MetaTags } from 'Client/app/MetaTags';
import { i18n } from 'Shared/i18n';
import { SequencePageContentLoader } from './ContentLoader';
import { SequencePageContentStyle } from './Styled';

type Props = {
  question: TypeQuestion,
};

export const SequencePageComponent = (props: Props) => {
  const { question } = props;
  return (
    <React.Fragment>
      <MetaTags
        title={i18n.t('meta.sequence.title', {
          question: question.wording.question,
        })}
      />
      <SequenceSkipLinks canPropose={question.canPropose} />
      <SequencePageContentStyle>
        <SequencePageContentLoader question={question} />
      </SequencePageContentStyle>
      <SequenceFooter question={question} />
    </React.Fragment>
  );
};
