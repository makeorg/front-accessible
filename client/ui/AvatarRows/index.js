// @flow
import React from 'react';
import { Avatar, AvatarWithDots } from 'Client/ui/Avatar';

import { AvatarStyle, AvatarRowsStyle } from './style';

type Props = {
  avatars: string[],
};

const getAvatarKey = (index: number) => `avatar_${index}`;

const getZindex = (index: number) => 10 - index;

export const AvatarRows = ({ avatars }: Props) => (
  <AvatarRowsStyle>
    {avatars.map((avatar, index) => (
      <AvatarStyle
        key={getAvatarKey(index)}
        style={{ zIndex: getZindex(index) }}
      >
        <Avatar avatarSize={34} avatarUrl={avatar} />
      </AvatarStyle>
    ))}
    {avatars.length > 3 && (
      <AvatarStyle>
        <AvatarWithDots />
      </AvatarStyle>
    )}
  </AvatarRowsStyle>
);
