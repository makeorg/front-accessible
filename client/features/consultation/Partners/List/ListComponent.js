import React from 'react';
import { type Partner } from 'Shared/types/partners';
import { TooltipWithTrigger } from 'Client/ui/Tooltip';
import { TopTooltipStyle } from 'Client/ui/Elements/TooltipElements';
import { PartnersListStyle } from 'Client/features/consultation/Styled/Partners';
import { PartnerAvatar } from '../Avatar';
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
          <TooltipWithTrigger
            tooltipType={TopTooltipStyle}
            triggerContent={
              // eslint-disable-next-line react/jsx-wrap-multilines
              <PartnerAvatar
                partnerName={partner.name}
                partnerLogo={partner.imageUrl}
              />
            }
          >
            <PartnerTooltip
              partnerName={partner.name}
              isFounder={partner.isFounder}
            />
          </TooltipWithTrigger>
        </li>
      ))}
    </PartnersListStyle>
  );
};
