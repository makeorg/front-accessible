// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { type OrganisationSoft as TypeOrganisationSoft } from 'Shared/types/organisation';
import { i18n } from 'Shared/i18n';
import { getOrganisationProfileLink } from 'Shared/helpers/url';
import { RedLinkStyle } from 'Client/ui/Elements/LinkElements';
import { OrganisationsVoteWrapperrStyle } from './Styled';

type Props = {
  organisations: TypeOrganisationSoft[],
  country: string,
  language: string,
};

export const OrganisationsVote = (props: Props) => {
  const { organisations, country, language } = props;

  return (
    <OrganisationsVoteWrapperrStyle>
      {organisations.map((organisation, index) => (
        <React.Fragment key={organisation.organisationId}>
          {!!index && index + 1 < organisations.length && ', '}
          {!!index &&
            index + 1 === organisations.length &&
            i18n.t('profile.organisation.and')}
          <RedLinkStyle
            as={Link}
            to={getOrganisationProfileLink(
              country,
              language,
              organisation.organisationSlug
            )}
          >
            {organisation.organisationName}
          </RedLinkStyle>
        </React.Fragment>
      ))}
      {i18n.t('profile.organisation.hasVoted', { count: organisations.length })}
    </OrganisationsVoteWrapperrStyle>
  );
};
