// @flow
import React from 'react';
import { useSelector } from 'react-redux';
import { type TypePartner } from 'Shared/types/question';
import { Link } from 'react-router-dom';
import { PartnerAvatarStyle } from 'Client/ui/Avatar/Styled';
import { i18n } from 'Shared/i18n';
import { getOrganisationProfileLink } from 'Shared/helpers/url';

const linkProps = (partner, country, language) => {
  if (partner.link) {
    return {
      as: 'a',
      href: partner.link,
      target: '_blank',
      rel: 'noopener noreferrer',
    };
  }

  if (partner.organisation) {
    return {
      as: Link,
      to: getOrganisationProfileLink(
        country,
        language,
        partner.organisation.slug
      ),
    };
  }

  return {
    as: 'span',
  };
};

type Props = {
  partner: TypePartner,
};

export const PartnerAvatar = ({ partner }: Props) => {
  const language: string = useSelector(state => state.appConfig.language);
  const country: string = useSelector(state => state.appConfig.country);

  return (
    <PartnerAvatarStyle {...linkProps(partner, country, language)}>
      {partner.logo && (
        <img
          src={partner.logo}
          alt={
            partner.link
              ? i18n.t('consultation.partners.profile_link_new_window', {
                  name: partner.name,
                })
              : i18n.t('consultation.partners.profile_link', {
                  name: partner.name,
                })
          }
        />
      )}
    </PartnerAvatarStyle>
  );
};
