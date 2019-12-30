// @flow
import React from 'react';
import { Avatar, AvatarWithDots } from 'Client/ui/Avatar';

import { AvatarStyle, AvatarRowsStyle } from './style';

export const AvatarRows = () => {
  return (
    <AvatarRowsStyle>
      <AvatarStyle>
        <Avatar />
      </AvatarStyle>
      <AvatarStyle>
        <Avatar />
      </AvatarStyle>
      <AvatarStyle>
        <Avatar />
      </AvatarStyle>
      <AvatarStyle>
        <Avatar />
      </AvatarStyle>
      <AvatarStyle>
        <AvatarWithDots />
      </AvatarStyle>
    </AvatarRowsStyle>
  );
};
