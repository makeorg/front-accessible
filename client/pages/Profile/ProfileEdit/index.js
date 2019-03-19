/* @flow */
import React from 'react';
import { UpdatePassword } from 'Client/features/profile/UpdatePassword';
import { MetaTags } from 'Client/app/MetaTags';
import { UserInformations } from 'Client/features/profile/UserInformations';
import {
  ProfileWrapperStyle,
  ProfileHeaderStyle,
  ProfilePageContentWrapperStyle,
  ProfilePageSidebarStyle,
  ProfilePageContentStyle,
} from '../Styled';

export const ProfileEditPage = () => (
  <ProfileWrapperStyle>
    <MetaTags />
    <ProfileHeaderStyle aria-hidden />
    <ProfilePageContentWrapperStyle>
      <ProfilePageSidebarStyle>
        <UserInformations />
      </ProfilePageSidebarStyle>
      <ProfilePageContentStyle>
        <UpdatePassword />
      </ProfilePageContentStyle>
    </ProfilePageContentWrapperStyle>
  </ProfileWrapperStyle>
);

// default export needed for loadable component
export default ProfileEditPage; // eslint-disable-line import/no-default-export
