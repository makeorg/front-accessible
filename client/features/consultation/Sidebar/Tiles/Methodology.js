// @flow
import { useMobile } from 'Client/hooks/useMedia';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import { Collapse } from 'Client/ui/Elements/Collapse';
import React from 'react';
import { i18n } from 'Shared/i18n';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';

export const MethodologyTile = () => {
  const isMobile = useMobile();

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
