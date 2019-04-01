import React from 'react';
import { type Partner } from 'Shared/types/partners';
import { PartnersListStyle } from 'Client/features/consultation/Styled/Partners';
import { PartnerTooltip } from '../Tooltip';

type Props = {
  partners?: Partner[],
};

export const PartnersListComponent = (props: Props) => {
  const { partners } = props;
  if (!partners) {
    return null;
  }

  return (
    <PartnersListStyle>
      {partners.map(partner => (
        <li key={partner.name}>
          <PartnerTooltip partner={partner} />
        </li>
      ))}
    </PartnersListStyle>
  );
};
