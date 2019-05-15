import React from 'react';
import { type Partner as TypePartner } from 'Shared/types/organisation';
import {
  PartnersListStyle,
  AvatarWrapperStyle,
} from 'Client/features/consultation/Styled/Partners';
import { Tooltip } from 'Client/ui/Tooltip';
import { PartnerTooltip } from '../Tooltip';
import { PartnerAvatar } from '../Avatar';

type Props = {
  partners: TypePartner[],
};

/**
 * Renders Vote Result bar with Tooltip
 */
const PartnerAvatarWithTooltip = ({ partner }) => {
  const content = (
    <PartnerTooltip partnerName={partner.name} isFounder={partner.isFounder} />
  );
  const children = (
    <PartnerAvatar
      partnerName={partner.name}
      partnerLogo={partner.imageUrl}
      partnerProfile={partner.profileUrl}
    />
  );

  return (
    <Tooltip content={content} direction="top">
      {children}
    </Tooltip>
  );
};
export const PartnersListComponent = (props: Props) => {
  const { partners } = props;

  return (
    <PartnersListStyle>
      {partners.map(partner => (
        <AvatarWrapperStyle key={partner.name}>
          <PartnerAvatarWithTooltip
            key={`avatar_with_tooltip_${partner.name}`}
            partner={partner}
          />
        </AvatarWrapperStyle>
      ))}
    </PartnersListStyle>
  );
};
