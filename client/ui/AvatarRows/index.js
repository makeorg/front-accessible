// @flow
import React from 'react';
import { Avatar, AvatarWithDots } from 'Client/ui/Avatar';

import { AvatarStyle, AvatarRowsStyle } from './style';

export const AvatarRows = () => {
  const reverseRange = (start, end) => {
    const values = [];
    let current = start;
    while (current > end) {
      values.push(current);
      current -= 1;
    }
    return values;
  };

  return (
    <AvatarRowsStyle>
      {reverseRange(4, 0).map(zIndex => (
        <AvatarStyle style={{ zIndex }}>
          <Avatar />
        </AvatarStyle>
      ))}
      <AvatarStyle>
        <AvatarWithDots />
      </AvatarStyle>
    </AvatarRowsStyle>
  );
};
