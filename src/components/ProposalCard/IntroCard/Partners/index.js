// @flow
import * as React from 'react';
import i18next from 'i18next';
import { MiddleRow } from 'Components/Elements/FlexElements';
import ProposalCard from '../../Styled';

type ListProps = {
  /** Array with partners propeties */
  partners: Array<Object>
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
            <MiddleRow as="li" key={partner.name}>
              <ProposalCard.PartnerAvatar
                key={partner.name}
                src={partner.imageUrl}
                alt={partner.name}
              />
            </MiddleRow>
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
  /** Boolean used to return wording */
  wording: boolean
}

/**
 * Renders Partners component
 */
const Partners = (props: Props) => {
  const {
    partners,
    wording
  } = props;

  if (!partners) {
    return null;
  }

  return (
    <ProposalCard.PartnerFooter as="footer">
      {wording
        ? i18next.t('intro_card.partnership')
        : ''
      }
      <PartnersList partners={partners} />
    </ProposalCard.PartnerFooter>
  );
};

export default Partners;
