// @flow
import React from 'react';
import {
  AvatarStyle,
  AvatarWithDotsStyle,
  DotsStyle,
  AvatarImageStyle,
} from './Styled';
import { SvgEmptyAvatar } from '../Svg/elements';

type Props = {
  /** Url of avatar */
  avatarUrl?: string,
  /** Width of avatar */
  avatarSize?: number,
  /** Width of avatar */
  avatarAlt?: string,
};

type DotsProps = {
  avatarSize?: number,
};

export const Avatar = ({
  avatarSize = 30,
  avatarUrl,
  avatarAlt = '',
}: Props) => {
  return (
    <AvatarStyle>
      {avatarUrl ? (
        <AvatarImageStyle
          avatarSize={avatarSize}
          src={avatarUrl}
          alt={avatarAlt}
        />
      ) : (
        <SvgEmptyAvatar width={avatarSize} height={avatarSize} aria-hidden />
      )}
    </AvatarStyle>
  );
};

export const AvatarWithDots = ({ avatarSize = 30 }: DotsProps) => {
  return (
    <AvatarStyle>
      <AvatarWithDotsStyle
        width={avatarSize}
        height={avatarSize}
        aria-hidden
        withDots
      >
        <DotsStyle />
        <DotsStyle />
        <DotsStyle />
      </AvatarWithDotsStyle>
    </AvatarStyle>
  );
};
