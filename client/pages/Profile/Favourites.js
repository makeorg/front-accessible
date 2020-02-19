// @flow
import React, { useState, useEffect } from 'react';
import { i18n } from 'Shared/i18n';
import * as UserService from 'Shared/services/User';
import { type TypeUser } from 'Shared/types/user';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { ThirdLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { ProfileFavouritesPlaceholder } from 'Client/pages/Profile/Placeholders/Favourites';
import { ProfileProposalCard } from 'Client/features/proposal/ProfileProposalCard';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import {
  ProfileContentHeaderStyle,
  ProfileTitleSeparatorStyle,
} from 'Client/ui/Elements/ProfileElements';
import { MetaTags } from 'Client/app/MetaTags';
import { trackLoadMoreProposals } from 'Shared/services/Tracking';
import { LoadMoreWrapperStyle } from 'Client/features/consultation/Styled/Proposal';
import { RedButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { COMPONENT_PARAM_FAVOURITES } from 'Shared/constants/tracking';

type Props = {
  user: TypeUser,
};

const ProfileFavouritesPage = ({ user }: Props) => {
  const [proposals, setProposals] = useState<TypeProposal[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);

  const initProposal = async () => {
    setIsLoading(true);
    const { results, total } = await UserService.myFavourites(user.userId);
    setProposals(results);
    setHasMore(results.length < total);
    setPage(1);
    setIsLoading(false);
  };

  const loadProposals = async () => {
    setIsLoading(true);
    const { results, total } = await UserService.myFavourites(
      user.userId,
      page
    );
    const newProposalList = [...proposals, ...results];
    setProposals(newProposalList);
    setHasMore(newProposalList.length < total);
    setPage(page + 1);
    setIsLoading(false);
  };

  const clickLoadMore = () => {
    loadProposals();
    trackLoadMoreProposals(COMPONENT_PARAM_FAVOURITES, page);
  };

  useEffect(() => {
    initProposal();
  }, [user]);

  const proposalsLength = proposals.length;
  const renderProposals = !!proposalsLength;
  const renderPlaceholder = !proposalsLength && !isLoading;
  const displayLoadMoreButton = hasMore && !isLoading;
  return (
    <>
      <MetaTags title={i18n.t('meta.profile.favorites.title')} />
      <ProfileContentHeaderStyle>
        <ThirdLevelTitleStyle as="h2">
          {i18n.t('profile.favourites.title')}
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
      {renderPlaceholder && <ProfileFavouritesPlaceholder />}
    </>
  );
};

// default export needed for loadable component
export default ProfileFavouritesPage; // eslint-disable-line import/no-default-export
