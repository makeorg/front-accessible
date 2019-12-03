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

export const Avatar = (props: Props) => {
  const { avatarSize, avatarUrl, avatarAlt } = props;

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

Avatar.defaultProps = {
  avatarSize: 30,
  avatarAlt: '',
};
