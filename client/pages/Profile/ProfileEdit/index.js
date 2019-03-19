/* @flow */
import React from 'react';
import { UpdatePassword } from 'Client/features/profile/UpdatePassword';
import { MetaTags } from 'Client/app/MetaTags';
import {
  ProfileHeaderStyle,
  ProfilePageWrapperStyle,
  ProfilePageSidebarStyle,
  ProfilePageContentStyle,
} from '../Styled';

export const ProfileEditPage = () => (
  <React.Fragment>
    <MetaTags />
    <ProfileHeaderStyle aria-hidden />
    <ProfilePageWrapperStyle>
      <ProfilePageSidebarStyle>informations</ProfilePageSidebarStyle>
      <ProfilePageContentStyle>
        <UpdatePassword />
      </ProfilePageContentStyle>
    </ProfilePageWrapperStyle>
  </React.Fragment>
);

// default export needed for loadable component
export default ProfileEditPage; // eslint-disable-line import/no-default-export
