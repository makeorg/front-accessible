// @flow
import * as React from 'react';
import type { PartnerItem } from 'Shared/types/card';
import i18n from 'Shared/i18n';
import { MiddleRowStyle } from 'Client/ui/Elements/FlexElements';
import { PartnerFooterStyle, PartnerListStyle, PartnerAvatarStyle } from '../../Styled/Content';

type ListProps = {
  /** Array with partners propeties */
  partners: Array<PartnerItem>
}

/**
 * Renders PartnersList component
 */
const PartnersList = (props: ListProps) => {
  const {
    partners
  } = props;

  if (partners.length > 1) {
    return (
      <PartnerListStyle>
        {partners.map(
          partner => (
            <MiddleRowStyle as="li" key={partner.name}>
              <PartnerAvatarStyle
                key={partner.name}
                src={partner.imageUrl}
                alt={partner.name}
              />
            </MiddleRowStyle>
          )
        )}
      </PartnerListStyle>
    );
  }

  return (
    partners.map(
      partner => (
        <PartnerAvatarStyle
          key={partner.name}
          src={partner.imageUrl}
          alt={partner.name}
        />
      )
    )
  );
};

type Props = {
  /** Array with partners propeties */
  partners: Array<Object>,
  /** Boolean used to return configuration for partnership label display */
  configuration: boolean
}

/**
 * Renders Partners component
 */
export const Partners = (props: Props) => {
  const {
    partners,
    configuration
  } = props;

  if (!partners) {
    return null;
  }

  return (
    <PartnerFooterStyle as="footer">
      {configuration
        ? i18n.t('intro_card.partnership')
        : ''
      }
      <PartnersList partners={partners} />
    </PartnerFooterStyle>
  );
};
