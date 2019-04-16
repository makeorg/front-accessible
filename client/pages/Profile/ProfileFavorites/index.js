/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { selectAuthentification } from 'Shared/store/selectors/user.selector';
import { ProfilePageContentStyle } from '../Styled';

const ProfileFavorites = props => {
  const { user, match } = props;

  if (!user) {
    return <Redirect to={`/${match.params.countryLanguage}`} />;
  }

  return <ProfilePageContentStyle>Profile Favorites</ProfilePageContentStyle>;
};

const mapStateToProps = state => {
  const { user } = selectAuthentification(state);
  return { user };
};

export const ProfileFavoritesPage = connect(mapStateToProps)(ProfileFavorites);

// default export needed for loadable component
export default ProfileFavoritesPage; // eslint-disable-line import/no-default-export
