import React from 'react';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { i18n } from 'Shared/i18n';
import { ActionsParagraphStyle } from 'Client/features/consultation/Styled/Actions';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';

export const PlanTileContent = () => {
  return (
    <React.Fragment>
      <ParagraphStyle>{i18n.t('actions.plan.text')}</ParagraphStyle>
      <ActionsParagraphStyle>
        {i18n.t('actions.plan.list-bait')}
      </ActionsParagraphStyle>
      <ParagraphStyle>{i18n.t('actions.plan.list-intro')}</ParagraphStyle>
      <UnstyledListStyle>
        <ParagraphStyle as="li">
          {i18n.t('actions.plan.list-first-item')}
        </ParagraphStyle>
        <ParagraphStyle as="li">
          {i18n.t('actions.plan.list-second-item')}
        </ParagraphStyle>
        <ParagraphStyle as="li">
          {i18n.t('actions.plan.list-third-item')}
        </ParagraphStyle>
      </UnstyledListStyle>
    </React.Fragment>
  );
};
