// @flow
import React from 'react';
import {
  AvatarStyle,
  AvatarWithDotsStyle,
  DotsStyle,
  AvatarImageStyle,
} from './style';
import { SvgEmptyAvatar } from '../Svg/elements';

type Props = {
  /** Url of avatar */
  avatarUrl?: string,
  /** Width of avatar */
  avatarSize?: number,
  /** Width of avatar */
  avatarAlt?: string,
  /** Special avatar design for sequence */
  isSequence?: boolean,
};

type DotsProps = {
  avatarSize?: number,
};

export const Avatar = ({
  avatarSize = 30,
  avatarUrl,
  avatarAlt = '',
  isSequence,
}: Props) => (
  <AvatarStyle isSequence={isSequence}>
    {avatarUrl ? (
      <AvatarImageStyle
        src={avatarUrl}
        alt={avatarAlt}
        width={avatarSize}
        height={avatarSize}
        avatarSize={avatarSize}
        crop
      />
    ) : (
      <SvgEmptyAvatar
        aria-hidden
        width={avatarSize}
        height={avatarSize}
        focusable="false"
      />
    )}
  </AvatarStyle>
);

export const AvatarWithDots = ({ avatarSize = 34 }: DotsProps) => (
  <AvatarStyle>
    <AvatarWithDotsStyle avatarSize={avatarSize}>
      <DotsStyle />
      <DotsStyle />
      <DotsStyle />
    </AvatarWithDotsStyle>
  </AvatarStyle>
);
