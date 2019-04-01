/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { UpdatePassword } from 'Client/features/profile/UpdatePassword';
import { MetaTags } from 'Client/app/MetaTags';
import { UserInformations } from 'Client/features/profile/UserInformations';
import { selectAuthentification } from 'Shared/store/selectors/user.selector';
import { logout } from 'Shared/store/actions/authentification';
import {
  ProfileWrapperStyle,
  ProfileHeaderStyle,
  ProfilePageContentWrapperStyle,
  ProfilePageSidebarStyle,
  ProfilePageContentStyle,
} from '../Styled';

const ProfileEdit = props => {
  const { user, handleLogout, match } = props;

  if (!user) {
    return <Redirect to={`/${match.params.countryLanguage}`} />;
  }

  return (
    <ProfileWrapperStyle>
      <MetaTags />
      <ProfileHeaderStyle aria-hidden />
      <ProfilePageContentWrapperStyle>
        <ProfilePageSidebarStyle>
          <UserInformations user={user} handleLogout={handleLogout} />
        </ProfilePageSidebarStyle>
        <ProfilePageContentStyle>
          <UpdatePassword />
        </ProfilePageContentStyle>
      </ProfilePageContentWrapperStyle>
    </ProfileWrapperStyle>
  );
};

const mapStateToProps = state => {
  const { user } = selectAuthentification(state);
  return { user };
};

const mapDispatchToProps = dispatch => ({
  handleLogout: () => {
    dispatch(logout());
  },
});

export const ProfileEditPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileEdit);

// default export needed for loadable component
export default ProfileEditPage; // eslint-disable-line import/no-default-export
