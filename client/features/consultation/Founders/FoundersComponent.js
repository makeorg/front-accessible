/* @flow */

import React from 'react';
import { i18n } from 'Shared/i18n';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { TileSeparatorStyle } from 'Client/ui/Elements/TileWithTitle/Styled';
import { PartnersList } from '../Partners/List';

type Props = {
  questionConfiguration: QuestionConfiguration,
};

export const FoundersComponent = (props: Props) => {
  const { questionConfiguration } = props;

  const founders =
    typeof questionConfiguration.partners === 'undefined'
      ? []
      : questionConfiguration.partners.filter(partner => partner.isFounder);
  return (
    <React.Fragment>
      {founders.length > 0 && (
        <React.Fragment>
          <TileSeparatorStyle />
          <ParagraphStyle>
            {i18n.t(
              questionConfiguration.isGreatCause
                ? 'consultation.partners.initWith'
                : 'consultation.partners.init'
            )}
          </ParagraphStyle>
          <PartnersList partners={founders} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
