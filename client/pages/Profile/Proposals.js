// @flow
import React, { useState, useEffect } from 'react';
import { i18n } from 'Shared/i18n';
import { UserService } from 'Shared/services/User';
import { type UserType } from 'Shared/types/user';
import { ThirdLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { ProfileProposalsPlaceholder } from 'Client/pages/Profile/Placeholders/Proposals';
import { ProfileProposalCard } from 'Client/features/proposal/ProfileProposalCard';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import {
  ProfileContentHeaderStyle,
  ProfileTitleSeparatorStyle,
} from 'Client/ui/Elements/ProfileElements';
import { MetaTags } from 'Client/app/MetaTags';
import { trackLoadMoreProposals } from 'Shared/services/Tracking';
import { LoadMoreWrapperStyle } from 'Client/features/consultation/Styled/Proposal';
import { RedButtonStyle } from 'Client/ui/Elements/Buttons/style';
import { COMPONENT_PARAM_PROPOSALS } from 'Shared/constants/tracking';

type Props = {
  user: UserType,
};

const ProfileProposalsPage = ({ user }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [proposalList, setProposalList] = useState<Object>({
    proposals: [],
    hasMore: false,
    seed: undefined,
    page: 0,
  });

  const { proposals, hasMore, seed, page } = proposalList;

  const loadProposals = async () => {
    setIsLoading(true);
    const result = await UserService.myProposals(user.userId, seed, page);
    if (result) {
      const { results, total, seed: apiSeed } = result;
      const newProposalList = [...proposals, ...results];
      setProposalList({
        proposals: newProposalList,
        hasMore: newProposalList.length < total,
        seed: apiSeed,
        page: page + 1,
      });
    }
    setIsLoading(false);
  };

  const clickLoadMore = () => {
    loadProposals();
    trackLoadMoreProposals(COMPONENT_PARAM_PROPOSALS, page);
  };

  useEffect(() => {
    if (user) {
      loadProposals();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const proposalsLength = proposals.length;
  const renderPlaceholder = !proposalsLength && !isLoading;
  const renderProposals = !!proposalsLength;
  const displayLoadMoreButton = hasMore && !isLoading;
  return (
    <>
      <MetaTags title={i18n.t('meta.profile.proposals.title')} />
      <ProfileContentHeaderStyle>
        <ThirdLevelTitleStyle as="h2">
          {i18n.t('profile.proposals.title')}
        </ThirdLevelTitleStyle>
        <ProfileTitleSeparatorStyle />
      </ProfileContentHeaderStyle>
      {renderProposals && (
        <section role="feed" aria-live="polite">
          {proposals.map((proposal, index) => (
            <ProfileProposalCard
              key={proposal.id}
              proposal={proposal}
              size={proposalsLength}
              position={index}
              withStatus
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
      {renderPlaceholder && <ProfileProposalsPlaceholder />}
    </>
  );
};

// default export needed for loadable component
export default ProfileProposalsPage; // eslint-disable-line import/no-default-export
