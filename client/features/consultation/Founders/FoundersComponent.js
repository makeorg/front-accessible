/* @flow */

import React from 'react';
import { i18n } from 'Shared/i18n';
import { type QuestionConfiguration } from 'Shared/types/question';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { TileSeparatorStyle } from 'Client/ui/Elements/TileWithTitle/Styled';
import { PartnersList } from '../Partners/List';

type Props = {
  questionConfiguration: QuestionConfiguration,
};

export const FoundersComponent = (props: Props) => {
  const { questionConfiguration } = props;
  return (
    <React.Fragment>
      <TileSeparatorStyle />
      <ParagraphStyle>{i18n.t('consultation.partners.init')}</ParagraphStyle>
      <PartnersList partners={questionConfiguration.partners} />
    </React.Fragment>
  );
};
