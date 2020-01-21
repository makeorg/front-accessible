// @flow
import React from 'react';
import { Avatar, AvatarWithDots } from 'Client/ui/Avatar';

import { AvatarStyle, AvatarRowsStyle } from './style';

type Props = {
  avatars: string[],
};

export const AvatarRows = ({ avatars }: Props) => {
  /* const reverseRange = (start, end) => {
    const values = [];
    let current = start;
    while (current > end) {
      values.push(current);
      current -= 1;
    }
    return values;
  };
*/
  return (
    <AvatarRowsStyle>
      {avatars.map((avatar, zIndex) => (
        <AvatarStyle style={{ zIndex }}>
          <Avatar avatarUrl={avatar} />
        </AvatarStyle>
      ))}
      <AvatarStyle>
        <AvatarWithDots />
      </AvatarStyle>
    </AvatarRowsStyle>
  );
};
