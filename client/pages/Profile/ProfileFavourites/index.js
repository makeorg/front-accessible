// @flow
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { selectAuthentification } from 'Shared/store/selectors/user.selector';
import * as UserService from 'Shared/services/User';
import { type User as TypeUser } from 'Shared/types/user';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { CenterColumnStyle } from 'Client/ui/Elements/FlexElements';
import { ProfileFavouritesPlaceholder } from 'Client/pages/Profile/Placeholders/Favourites';
import { ProfileProposalCard } from 'Client/features/proposal/ProfileProposalCard/ProfileProposalCard';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import {
  ProfileContentHeaderStyle,
  ProfileTitleSeparatorStyle,
} from 'Client/ui/Elements/ProfileElements';
import { FRONT_LEGACY_ROOT } from 'Shared/constants/url';

type Props = {
  user: TypeUser,
};

const ProfileFavourites = (props: Props) => {
  const [proposals, setProposals] = useState<TypeProposal[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { user } = props;
  const proposalsLength = proposals.length;
  const renderProposals = !!proposalsLength && !isLoading;
  const renderPlaceholder = !proposalsLength && !isLoading;

  const fetchProposals = async () => {
    const loadedProposals: TypeProposal[] = await UserService.myFavourites(
      user.userId
    );

    setProposals(loadedProposals);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProposals();
  }, [user]);

  if (!user) {
    window.location = FRONT_LEGACY_ROOT;

    return null;
  }

  return (
    <CenterColumnStyle>
      <ProfileContentHeaderStyle>
        <SecondLevelTitleStyle>
          {i18n.t('profile.favourites.title')}
        </SecondLevelTitleStyle>
        <ProfileTitleSeparatorStyle />
      </ProfileContentHeaderStyle>
      {isLoading && <Spinner />}
      {renderProposals &&
        proposals.map((proposal, index) => (
          <React.Fragment>
            <ProfileProposalCard
              key={proposal.id}
              proposal={proposal}
              size={proposalsLength}
              position={index}
            />
          </React.Fragment>
        ))}
      {renderPlaceholder && <ProfileFavouritesPlaceholder />}
    </CenterColumnStyle>
  );
};

const mapStateToProps = state => {
  const { user } = selectAuthentification(state);

  return { user };
};

export const ProfileFavouritesPage = connect(mapStateToProps)(
  ProfileFavourites
);

// default export needed for loadable component
export default ProfileFavouritesPage; // eslint-disable-line import/no-default-export
