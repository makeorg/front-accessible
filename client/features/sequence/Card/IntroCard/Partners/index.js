// @flow
import * as React from 'react';
import type { PartnerItem } from 'Shared/types/card';
import i18next from 'i18next';
import { MiddleRowStyle } from 'Client/ui/Elements/FlexElements';
import ProposalCard from '../../Styled';

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
      <ProposalCard.PartnerList>
        {partners.map(
          partner => (
            <MiddleRowStyle as="li" key={partner.name}>
              <ProposalCard.PartnerAvatar
                key={partner.name}
                src={partner.imageUrl}
                alt={partner.name}
              />
            </MiddleRowStyle>
          )
        )}
      </ProposalCard.PartnerList>
    );
  }

  return (
    partners.map(
      partner => (
        <ProposalCard.PartnerAvatar
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
const Partners = (props: Props) => {
  const {
    partners,
    configuration
  } = props;

  if (!partners) {
    return null;
  }

  return (
    <ProposalCard.PartnerFooter as="footer">
      {configuration
        ? i18next.t('intro_card.partnership')
        : ''
      }
      <PartnersList partners={partners} />
    </ProposalCard.PartnerFooter>
  );
};

export default Partners;
