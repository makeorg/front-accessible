// @flow
import React from 'react';
import { AvatarStyle } from './Styled';
import { SvgEmptyAvatar } from '../Svg/elements';

type Props = {
  /** Url of avatar */
  avatarUrl?: string,
  /** Width of avatar */
  avatarSize?: number,
  /** Width of avatar */
  avatarAlt?: string,
};

export const Avatar = ({
  avatarSize = 30,
  avatarUrl,
  avatarAlt = '',
}: Props) => {
  return (
    <AvatarStyle>
      {avatarUrl ? (
        <img
          width={avatarSize}
          height={avatarSize}
          src={avatarUrl}
          alt={avatarAlt}
        />
      ) : (
        <SvgEmptyAvatar width={avatarSize} height={avatarSize} aria-hidden />
      )}
    </AvatarStyle>
  );
};
