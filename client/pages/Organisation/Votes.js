// @flow
import React, { useState, useEffect } from 'react';
import { OrganisationService } from 'Shared/services/Organisation';
import {
  type OrganisationVoteType,
  type OrganisationType,
  type OrganisationVotesType,
} from 'Shared/types/organisation';
import { i18n } from 'Shared/i18n';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import {
  ProfileContentHeaderStyle,
  ProfileTitleSeparatorStyle,
} from 'Client/ui/Elements/ProfileElements';
import { ProfileVoteCard } from 'Client/features/proposal/ProfileVoteCard';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { MetaTags } from 'Client/app/MetaTags';
import { trackLoadMoreProposals } from 'Shared/services/Tracking';
import { LoadMoreWrapperStyle } from 'Client/features/consultation/Styled/Proposal';
import { RedButtonStyle } from 'Client/ui/Elements/Buttons/style';
import { COMPONENT_PARAM_PROPOSALS } from 'Shared/constants/tracking';
import { formatOrganisationName } from 'Shared/helpers/stringFormatter';
import { OrganisationVotesPlaceholder } from './Placeholders/Votes';

type Props = {
  organisation: OrganisationType,
};

const OrganisationVotesPage = ({ organisation }: Props) => {
  const [votes, setVotes] = useState<OrganisationVoteType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [seed, setSeed] = useState(undefined);
  const [page, setPage] = useState<number>(0);

  const initProposal = async () => {
    setIsLoading(true);
    const response: ?OrganisationVotesType = await OrganisationService.getVotes(
      organisation.organisationId
    );
    if (response) {
      const { results, total, seed: apiSeed } = response;
      setVotes(results);
      setHasMore(results.length < total);
      setSeed(apiSeed);
      setPage(1);
    }

    setIsLoading(false);
  };

  const loadProposals = async () => {
    setIsLoading(true);
    const response: ?OrganisationVotesType = await OrganisationService.getVotes(
      organisation.organisationId,
      seed,
      page
    );
    if (response) {
      const { results, total, seed: apiSeed } = response;
      const newVotesList = [...votes, ...results];
      setVotes(newVotesList);
      setHasMore(newVotesList.length < total);
      setSeed(apiSeed);
      setPage(page + 1);
    }
    setIsLoading(false);
  };

  const clickLoadMore = () => {
    loadProposals();
    trackLoadMoreProposals(COMPONENT_PARAM_PROPOSALS, page);
  };

  useEffect(() => {
    initProposal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [organisation]);

  const votesLength = votes.length;
  const renderVotes = !!votesLength;
  const renderPlaceholder = !votesLength && !isLoading;
  const displayLoadMoreButton = hasMore && !isLoading;

  return (
    <>
      <MetaTags
        title={i18n.t('meta.organisation.positions.title', {
          organisation: formatOrganisationName(organisation.organisationName),
        })}
      />
      <ProfileContentHeaderStyle>
        <SecondLevelTitleStyle>
          {i18n.t('organisation.votes.title', {
            name: formatOrganisationName(organisation.organisationName),
          })}
        </SecondLevelTitleStyle>
        <ProfileTitleSeparatorStyle />
      </ProfileContentHeaderStyle>
      {renderVotes && (
        <section role="feed" aria-live="polite">
          {votes.map((vote, index) => (
            <ProfileVoteCard
              key={`organisation_votes_${vote.proposal.id}`}
              voteKey={vote.vote}
              proposal={vote.proposal}
              organisation={organisation}
              size={votes.length}
              position={index + 1}
            />
          ))}
        </section>
      )}
      {isLoading && <Spinner />}
      {displayLoadMoreButton && (
        <LoadMoreWrapperStyle>
          <RedButtonStyle onClick={clickLoadMore}>
            {i18n.t('consultation.proposal.load_more')}
          </RedButtonStyle>
        </LoadMoreWrapperStyle>
      )}
      {renderPlaceholder && (
        <OrganisationVotesPlaceholder
          name={formatOrganisationName(organisation.organisationName)}
        />
      )}
    </>
  );
};

// default export needed for loadable component
export default OrganisationVotesPage; // eslint-disable-line import/no-default-export
