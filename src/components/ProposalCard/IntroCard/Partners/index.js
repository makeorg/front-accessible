import * as React from 'react';
import i18next from 'i18next';
import { MiddleRow } from 'Components/Elements/FlexElements';
import ProposalCard from '../../Styled';

const PartnersList = ({ partners }) => {
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

const Partners = ({ partners, wording }) => {
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
