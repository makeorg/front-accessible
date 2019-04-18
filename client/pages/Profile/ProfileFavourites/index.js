/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { i18n } from 'Shared/i18n';
import { selectAuthentification } from 'Shared/store/selectors/user.selector';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { CenterColumnStyle } from 'Client/ui/Elements/FlexElements';
import { FavouritesPlaceholder } from 'Client/features/profile/Placeholders/Favourites';
import {
  ProfileContentHeaderStyle,
  ProfileTitleSeparatorStyle,
} from '../Styled';

const ProfileFavourites = props => {
  const { user, match } = props;

  if (!user) {
    return <Redirect to={`/${match.params.countryLanguage}`} />;
  }

  return (
    <CenterColumnStyle>
      <ProfileContentHeaderStyle>
        <SecondLevelTitleStyle>
          {i18n.t('profile.proposals.title')}
        </SecondLevelTitleStyle>
        <ProfileTitleSeparatorStyle />
      </ProfileContentHeaderStyle>
      <FavouritesPlaceholder />
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
