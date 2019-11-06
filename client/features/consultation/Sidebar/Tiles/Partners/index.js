// @flow
import { useMobile } from 'Client/hooks/useMedia';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import { Collapse } from 'Client/ui/Elements/Collapse';
import React from 'react';
import { i18n } from 'Shared/i18n';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { isInProgress } from 'Shared/helpers/date';
import { Partners } from '../../Partners';

type Props = {
  question: TypeQuestion,
};
export const PartnersTile = ({ question }: Props) => {
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
        <Partners question={question} />
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
      <Partners question={question} />
    </TileWithTitle>
  );
};
