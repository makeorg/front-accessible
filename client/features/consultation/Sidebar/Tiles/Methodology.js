// @flow
import React from 'react';
import { type QuestionType } from 'Shared/types/question';
import { useMobile } from 'Client/hooks/useMedia';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import { Collapse } from 'Client/ui/Elements/Collapse';
import { i18n } from 'Shared/i18n';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';

type Props = {
  question: QuestionType,
};
export const MethodologyTile = ({ question }: Props) => {
  const isMobile = useMobile();
  if (!question.displayResults) {
    return null;
  }

  if (isMobile) {
    return (
      <Collapse
        title={i18n.t('consultation.results.methodology.title')}
        withTileStyle
      >
        <ParagraphStyle>
          {i18n.t('consultation.results.methodology.description')}
        </ParagraphStyle>
      </Collapse>
    );
  }

  return (
    <TileWithTitle title={i18n.t('consultation.results.methodology.title')}>
      <ParagraphStyle>
        {i18n.t('consultation.results.methodology.description')}
      </ParagraphStyle>
    </TileWithTitle>
  );
};
