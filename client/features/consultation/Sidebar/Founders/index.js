// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { type TypePartner } from 'Shared/types/question';
import { FOUNDER_PARTNER, MEDIA_PARTNER } from 'Shared/constants/partner';
import { TileSeparatorStyle } from 'Client/ui/Elements/TileWithTitle/Styled';
import { PartnersList } from '../Partners/List';

import { FoundersTitleStyle } from './style';

type Props = {
  isGreatCause: boolean,
  founders: TypePartner[],
};

type PartnersTypeListProps = {
  isGreatCause: boolean,
  partners: TypePartner[],
};

const PartnersListByType = ({
  isGreatCause,
  partners,
}: PartnersTypeListProps) => {
  const founders = partners.filter(
    partner => partner.partnerKind === FOUNDER_PARTNER
  );
  const medias = partners.filter(
    partner => partner.partnerKind === MEDIA_PARTNER
  );

  return isGreatCause ? (
    <>
      <FoundersTitleStyle>
        {i18n.t('consultation.partners.initWith')}
      </FoundersTitleStyle>
      <PartnersList partners={partners} />
    </>
  ) : (
    <>
      {medias.length > 0 && (
        <>
          <FoundersTitleStyle>
            {i18n.t('consultation.partners.with')}
          </FoundersTitleStyle>
          <PartnersList partners={medias} />
        </>
      )}
      {founders.length > 0 && (
        <>
          <FoundersTitleStyle>
            {i18n.t('consultation.partners.by')}
          </FoundersTitleStyle>
          <PartnersList partners={founders} />
        </>
      )}
    </>
  );
};

export const Founders = ({ founders, isGreatCause }: Props) => {
  if (!founders || founders.length === 0) {
    return null;
  }
  return (
    <React.Fragment>
      <TileSeparatorStyle />
      <PartnersListByType isGreatCause={isGreatCause} partners={founders} />
    </React.Fragment>
  );
};
