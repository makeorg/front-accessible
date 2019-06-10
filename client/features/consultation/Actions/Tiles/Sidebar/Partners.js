// @flow
import React from 'react';
import { type Partner as TypePartner } from 'Shared/types/organisation';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { i18n } from 'Shared/i18n';
import { PartnersList } from 'Client/features/consultation/Partners/List';
import { getPartnerAnchor } from 'Shared/helpers/url';
import { SidebarNewWindowLink } from 'Client/features/consultation/SidebarLink';
import { Tracking } from 'Shared/services/Tracking';

type Props = {
  partners: TypePartner[],
  aboutUrl: string,
};

export const PartnersTileContent = ({ partners, aboutUrl }: Props) => (
  <React.Fragment>
    <ParagraphStyle>{i18n.t('actions.partners.text')}</ParagraphStyle>
    {partners && <PartnersList partners={partners} />}
    <SidebarNewWindowLink
      linkUrl={getPartnerAnchor(aboutUrl)}
      linkText={i18n.t('consultation.partners.commitment_link')}
      tracking={() => Tracking.trackSeeMorePartners()}
    />
  </React.Fragment>
);
