/* @flow */

import React from 'react';
import { i18n } from 'Shared/i18n';
import { type Partner as TypePartner } from 'Shared/types/organisation';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { TileSeparatorStyle } from 'Client/ui/Elements/TileWithTitle/Styled';
import { PartnersList } from '../Partners/List';

type Props = {
  isGreatCause: boolean,
  founders: TypePartner[],
};

export const FoundersComponent = (props: Props) => {
  const { founders, isGreatCause } = props;
  if (!founders || founders.length === 0) {
    return null;
  }
  return (
    <React.Fragment>
      <TileSeparatorStyle />
      <ParagraphStyle>
        {i18n.t(
          isGreatCause
            ? 'consultation.partners.initWith'
            : 'consultation.partners.init'
        )}
      </ParagraphStyle>
      <PartnersList partners={founders} />
    </React.Fragment>
  );
};
