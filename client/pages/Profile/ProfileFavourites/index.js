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

type Props = {
  user: TypeUser,
};

const ProfileFavouritesPage = (props: Props) => {
  const [proposals, setProposals] = useState<TypeProposal[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { user } = props;
  const proposalsLength = proposals.length;
  const renderProposals = !!proposalsLength && !isLoading;
  const renderPlaceholder = !proposalsLength && !isLoading;

  useEffect(() => {
    const fetchProposals = async () => {
      const loadedProposals: TypeProposal[] = await UserService.myFavourites(
        user.userId
      );

      setProposals(loadedProposals);
      setIsLoading(false);
    };

    fetchProposals();
  }, [user]);

  return (
    <React.Fragment>
      <MetaTags title={i18n.t('meta.profile.favorites.title')} />
      <ProfileContentHeaderStyle>
        <ThirdLevelTitleStyle as="h2">
          {i18n.t('profile.favourites.title')}
        </ThirdLevelTitleStyle>
        <ProfileTitleSeparatorStyle />
      </ProfileContentHeaderStyle>
      {isLoading && <Spinner />}
      {renderProposals && (
        <section role="feed">
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
      {renderPlaceholder && <ProfileFavouritesPlaceholder />}
    </React.Fragment>
  );
};

// default export needed for loadable component
export default ProfileFavouritesPage; // eslint-disable-line import/no-default-export
