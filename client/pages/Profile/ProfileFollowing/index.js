/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { selectAuthentification } from 'Shared/store/selectors/user.selector';
import { ProfilePageContentStyle } from '../Styled';

const ProfileFollowing = props => {
  const { user, match } = props;

  if (!user) {
    return <Redirect to={`/${match.params.countryLanguage}`} />;
  }

  return <ProfilePageContentStyle>Profile Following</ProfilePageContentStyle>;
};

const mapStateToProps = state => {
  const { user } = selectAuthentification(state);
  return { user };
};

export const ProfileFollowingPage = connect(mapStateToProps)(ProfileFollowing);

// default export needed for loadable component
export default ProfileFollowingPage; // eslint-disable-line import/no-default-export
