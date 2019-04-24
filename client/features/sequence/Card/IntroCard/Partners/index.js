// @flow
import * as React from 'react';
import { type PartnerItem } from 'Shared/types/card';
import { i18n } from 'Shared/i18n';
import { MiddleRowStyle } from 'Client/ui/Elements/FlexElements';
import {
  PartnerFooterStyle,
  PartnerListStyle,
  PartnerAvatarStyle,
} from '../../Styled/Content';

type Props = {
  /** Array with partners propeties */
  partners?: PartnerItem[],
};

/**
 * Renders Partners component
 */
export const Partners = (props: Props) => {
  const { partners } = props;

  if (!partners) {
    return null;
  }

  return (
    <PartnerFooterStyle as="footer">
      {i18n.t('intro_card.partnership')}
      <PartnerListStyle>
        {partners.map(partner => (
          <MiddleRowStyle as="li" key={partner.name}>
            <PartnerAvatarStyle
              key={partner.name}
              src={partner.imageUrl}
              alt={partner.name}
            />
          </MiddleRowStyle>
        ))}
      </PartnerListStyle>
    </PartnerFooterStyle>
  );
};
