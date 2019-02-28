/* @flow */
import React from 'react';
import { UpdatePassword } from 'Client/features/profile/UpdatePassword';

export const ProfileEditPage = () => (
  <div>
    <UpdatePassword />
  </div>
);

// default export needed for loadable component
export default ProfileEditPage; // eslint-disable-line import/no-default-export
