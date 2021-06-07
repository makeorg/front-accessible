// @flow
import React, { useState, useEffect } from 'react';
import { OrganisationService } from 'Shared/services/Organisation';
import { type OrganisationType } from 'Shared/types/organisation';
import { type ProposalType, type ProposalsType } from 'Shared/types/proposal';
import { i18n } from 'Shared/i18n';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import {
  ProfileContentHeaderStyle,
  ProfileTitleSeparatorStyle,
} from 'Client/ui/Elements/ProfileElements';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { ProposalCardWithQuestion } from 'Client/features/proposal/ProposalCardWithQuestion';
import { MetaTags } from 'Client/app/MetaTags';
import { trackLoadMoreProposals } from 'Shared/services/Tracking';
import { LoadMoreWrapperStyle } from 'Client/features/consultation/Styled/Proposal';
import { RedButtonStyle } from 'Client/ui/Elements/Buttons/style';
import { COMPONENT_PARAM_PROPOSALS } from 'Shared/constants/tracking';
import { formatOrganisationName } from 'Shared/helpers/stringFormatter';
import {
  TopComponentContext,
  type TopComponentContextValueType,
  TopComponentContextValue,
} from 'Client/context/TopComponentContext';
import { OrganisationProposalsPlaceholder } from './Placeholders/Proposals';

type Props = {
  organisation: OrganisationType,
};

const OrganisationProposalsPage = ({ organisation }: Props) => {
  const [proposals, setProposals] = useState<ProposalType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [seed, setSeed] = useState(undefined);
  const [page, setPage] = useState<number>(0);

  const initProposal = async () => {
    setIsLoading(true);
    const proposalsResponse: ?ProposalsType =
      await OrganisationService.getProposals(organisation.organisationId);
    if (proposalsResponse) {
      const { results, total, seed: apiSeed } = proposalsResponse;
      setProposals(results);
      setHasMore(results.length < total);
      setSeed(apiSeed);
      setPage(1);
    }
    setIsLoading(false);
  };

  const loadProposals = async () => {
    setIsLoading(true);
    const proposalsResponse: ?ProposalsType =
      await OrganisationService.getProposals(
        organisation.organisationId,
        seed,
        page
      );
    if (proposalsResponse) {
      const { results, total, seed: apiSeed } = proposalsResponse;
      const newProposalList = [...proposals, ...results];
      setProposals(newProposalList);
      setHasMore(newProposalList.length < total);
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

  const proposalsLength = proposals.length;
  const renderProposals = !!proposalsLength;
  const renderPlaceholder = !proposalsLength && !isLoading;
  const displayLoadMoreButton = hasMore && !isLoading;

  const topComponentContext: TopComponentContextValueType =
    TopComponentContextValue.getOrganisationProposalList();

  return (
    <>
      <MetaTags
        title={i18n.t('meta.organisation.proposals.title', {
          organisation: formatOrganisationName(organisation.organisationName),
        })}
      />
      <ProfileContentHeaderStyle>
        <SecondLevelTitleStyle>
          {i18n.t('organisation.proposals.title', {
            name: formatOrganisationName(organisation.organisationName),
          })}
        </SecondLevelTitleStyle>
        <ProfileTitleSeparatorStyle />
      </ProfileContentHeaderStyle>
      <TopComponentContext.Provider value={topComponentContext}>
        {renderProposals && (
          <section role="feed" aria-live="polite">
            {proposals.map((proposal, index) => (
              <ProposalCardWithQuestion
                key={proposal.id}
                proposal={proposal}
                position={index + 1}
                size={proposalsLength}
              />
            ))}
          </section>
        )}
      </TopComponentContext.Provider>
      {isLoading && <Spinner />}
      {displayLoadMoreButton && (
        <LoadMoreWrapperStyle>
          <RedButtonStyle onClick={clickLoadMore}>
            {i18n.t('consultation.proposal.load_more')}
          </RedButtonStyle>
        </LoadMoreWrapperStyle>
      )}
      {renderPlaceholder && (
        <OrganisationProposalsPlaceholder
          name={formatOrganisationName(organisation.organisationName)}
        />
      )}
    </>
  );
};

// default export needed for loadable component
export default OrganisationProposalsPage; // eslint-disable-line import/no-default-export
