// @flow
import React from 'react';
import { type OrganisationSoft as TypeOrganisationSoft } from 'Shared/types/organisation';
import { i18n } from 'Shared/i18n';
import { getOrganisationProfileLink } from 'Shared/helpers/url';
import { RedLinkRouterStyle } from 'Client/ui/Elements/LinkElements';
import { trackClickProposalProfile } from 'Shared/services/Tracking';
import { formatOrganisationName } from 'Shared/helpers/stringFormatter';
import { OrganisationsVoteWrapperStyle } from './Styled';

type Props = {
  organisations: TypeOrganisationSoft[],
  country: string,
  language: string,
};

export const OrganisationsVote = (props: Props) => {
  const { organisations, country, language } = props;

  if (!organisations.length) {
    return null;
  }

  return (
    <OrganisationsVoteWrapperStyle>
      {organisations.map((organisation, index) => (
        <React.Fragment key={organisation.organisationId}>
          {!!index && index + 1 < organisations.length && ', '}
          {!!index &&
            index + 1 === organisations.length &&
            i18n.t('profile.organisation.and')}
          <RedLinkRouterStyle
            to={getOrganisationProfileLink(
              country,
              language,
              organisation.organisationSlug
            )}
            onClick={trackClickProposalProfile}
          >
            {formatOrganisationName(organisation.organisationName)}
          </RedLinkRouterStyle>
        </React.Fragment>
      ))}
      {i18n.t('profile.organisation.hasVoted', {
        count: organisations.length,
      })}
    </OrganisationsVoteWrapperStyle>
  );
};
