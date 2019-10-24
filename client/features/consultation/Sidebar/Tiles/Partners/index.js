// @flow
import { useMobile } from 'Client/hooks/useMedia';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import { Collapse } from 'Client/ui/Elements/Collapse';
import React from 'react';
import { i18n } from 'Shared/i18n';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { type QuestionConfiguration as TypeQuestionConfiguration } from 'Shared/types/sequence';
import { isInProgress } from 'Shared/helpers/date';
import { Partners } from '../../Partners';

type Props = {
  question: TypeQuestion,
  questionConfiguration: TypeQuestionConfiguration,
};
export const PartnersTile = ({ question, questionConfiguration }: Props) => {
  const isMobile = useMobile();

  if (isMobile) {
    return (
      <Collapse
        title={
          isInProgress(question)
            ? i18n.t('consultation.partners.intro_title')
            : i18n.t('consultation.partners.commitment_title')
        }
        withTileStyle
      >
        <Partners
          questionConfiguration={questionConfiguration}
          question={question}
        />
      </Collapse>
    );
  }

  return (
    <TileWithTitle
      title={
        isInProgress(question)
          ? i18n.t('consultation.partners.intro_title')
          : i18n.t('consultation.partners.commitment_title')
      }
    >
      <Partners
        questionConfiguration={questionConfiguration}
        question={question}
      />
    </TileWithTitle>
  );
};
