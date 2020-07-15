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
          src={avatarUrl}
          alt={avatarAlt}
          width={avatarSize}
          avatarSize={avatarSize}
        />
      ) : (
        <SvgEmptyAvatar aria-hidden width={avatarSize} height={avatarSize} />
      )}
    </AvatarStyle>
  );
};

export const AvatarWithDots = ({ avatarSize = 34 }: DotsProps) => {
  return (
    <AvatarStyle>
      <AvatarWithDotsStyle avatarSize={avatarSize}>
        <DotsStyle />
        <DotsStyle />
        <DotsStyle />
      </AvatarWithDotsStyle>
    </AvatarStyle>
  );
};
