// @flow
import React, { useState, useEffect } from 'react';
import * as OrganisationService from 'Shared/services/Organisation';
import {
  type OrganisationVote as TypeOrganisationVote,
  type Organisation as TypeOrganisation,
} from 'Shared/types/organisation';
import { i18n } from 'Shared/i18n';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { CenterColumnStyle } from 'Client/ui/Elements/FlexElements';
import {
  ProfileContentHeaderStyle,
  ProfileTitleSeparatorStyle,
} from 'Client/ui/Elements/ProfileElements';
import { ProfileVoteCard } from 'Client/features/proposal/ProfileVoteCard';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { MetaTags } from 'Client/app/MetaTags';
import { OrganisationVotesPlaceholder } from '../Placeholders/Votes';

type Props = {
  organisation: TypeOrganisation,
};

const OrganisationVotesPage = (props: Props) => {
  const [votes, setVotes] = useState<TypeOrganisationVote[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { organisation } = props;
  const votesLength = votes.length;
  const renderVotes = !!votesLength && !isLoading;
  const renderPlaceholder = !votesLength && !isLoading;

  useEffect(() => {
    const fetchVotes = async () => {
      const loadedVotes: TypeOrganisationVote[] = await OrganisationService.getVotes(
        organisation.organisationId
      );

      setVotes(loadedVotes);
      setIsLoading(false);
    };

    fetchVotes();
  }, [organisation]);

  return (
    <React.Fragment>
      <MetaTags
        title={i18n.t('meta.organisation.positions.title', {
          organisation: organisation.organisationName,
        })}
      />
      <ProfileContentHeaderStyle>
        <SecondLevelTitleStyle>
          {i18n.t('organisation.votes.title', {
            name: organisation.organisationName,
          })}
        </SecondLevelTitleStyle>
        <ProfileTitleSeparatorStyle />
      </ProfileContentHeaderStyle>
      <CenterColumnStyle as="dl">
        {isLoading && <Spinner />}
        {renderVotes &&
          votes.map((vote, index) => (
            <ProfileVoteCard
              key={`organisation_votes_${vote.proposal.id}`}
              voteKey={vote.vote}
              proposal={vote.proposal}
              organisation={organisation}
              size={votes.length}
              position={index + 1}
            />
          ))}
        {renderPlaceholder && (
          <OrganisationVotesPlaceholder name={organisation.organisationName} />
        )}
      </CenterColumnStyle>
    </React.Fragment>
  );
};

// default export needed for loadable component
export default OrganisationVotesPage; // eslint-disable-line import/no-default-export
