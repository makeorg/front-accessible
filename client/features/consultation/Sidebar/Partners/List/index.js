import React from 'react';
import { type TypePartner } from 'Shared/types/question';
import {
  PartnersListStyle,
  AvatarWrapperStyle,
} from 'Client/features/consultation/Styled/Partners';
import { Tooltip } from 'Client/ui/Tooltip';
import { FOUNDER_PARTNER } from 'Shared/constants/partner';
import { PartnerTooltip } from '../Tooltip';
import { PartnerAvatar } from '../Avatar';

type TooltipProps = {
  partner: TypePartner,
};
const PartnerAvatarWithTooltip = ({ partner }: TooltipProps) => {
  const content = (
    <PartnerTooltip
      partnerName={partner.name}
      isFounder={partner.partnerKind === FOUNDER_PARTNER}
    />
  );

  return (
    <Tooltip content={content} direction="top">
      <PartnerAvatar partner={partner} />
    </Tooltip>
  );
};

type Props = {
  partners: TypePartner[],
};

export const PartnersList = ({ partners }: Props) => (
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
