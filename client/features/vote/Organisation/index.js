// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { i18n } from 'Shared/i18n';
import {
  getFirstOrganisation,
  getLastOrganisation,
  getOtherOrganisations,
} from 'Shared/helpers/organisation';
import { getOrganisationProfileLink } from 'Shared/helpers/url';
import { RedLinkStyle } from 'Client/ui/Elements/LinkElements';
import { OrganisationsVoteWrapperrStyle } from './Styled';

type Props = {
  proposal: TypeProposal,
};

export const OrganisationsVote = (props: Props) => {
  const { proposal } = props;
  const { country, language, organisations } = proposal;

  if (organisations.length === 1) {
    return (
      <OrganisationsVoteWrapperrStyle>
        {organisations.map(organisation => (
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
        ))}
        {i18n.t('profile.organisation.hasVoted')}
      </OrganisationsVoteWrapperrStyle>
    );
  }

  if (organisations.length === 2) {
    const firstOrganisation = getFirstOrganisation(organisations);
    const lastOrganisation = getLastOrganisation(organisations);
    return (
      <OrganisationsVoteWrapperrStyle>
        <RedLinkStyle
          as={Link}
          to={getOrganisationProfileLink(
            country,
            language,
            firstOrganisation.organisationSlug
          )}
        >
          {firstOrganisation.organisationName}
        </RedLinkStyle>
        {i18n.t('profile.organisation.and')}
        <RedLinkStyle
          as={Link}
          to={getOrganisationProfileLink(
            country,
            language,
            lastOrganisation.organisationSlug
          )}
        >
          {lastOrganisation.organisationName}
        </RedLinkStyle>
        {i18n.t('profile.organisation.hasVoted', {
          count: organisations.length,
        })}
      </OrganisationsVoteWrapperrStyle>
    );
  }

  if (organisations.length > 2) {
    const firstOrganisation = getFirstOrganisation(organisations);
    const lastOrganisation = getLastOrganisation(organisations);
    const othersOrganisations = getOtherOrganisations(organisations);
    return (
      <OrganisationsVoteWrapperrStyle>
        <RedLinkStyle
          as={Link}
          to={getOrganisationProfileLink(
            country,
            language,
            firstOrganisation.organisationSlug
          )}
        >
          {firstOrganisation.organisationName}
        </RedLinkStyle>
        {`, `}
        {othersOrganisations.map(organisation => (
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
        ))}
        {i18n.t('profile.organisation.and')}
        <RedLinkStyle
          as={Link}
          to={getOrganisationProfileLink(
            country,
            language,
            lastOrganisation.organisationSlug
          )}
        >
          {lastOrganisation.organisationName}
        </RedLinkStyle>
        {i18n.t('profile.organisation.hasVoted', {
          count: organisations.length,
        })}
      </OrganisationsVoteWrapperrStyle>
    );
  }

  return null;
};
