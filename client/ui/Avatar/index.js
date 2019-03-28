import React from 'react';
import { AvatarStyle } from './Styled';
import { SvgEmptyAvatar } from '../Svg/elements';

type Props = {
  /** Children to render */
  children: React.Node,
  /** Width of avatar */
  avatarSize?: number,
};

export const Avatar = (props: Props) => {
  const { avatarSize, children } = props;

  if (children) {
    return (
      <AvatarStyle aria-hidden avatarSize={avatarSize}>
        {children}
      </AvatarStyle>
    );
  }

  return (
    <AvatarStyle aria-hidden avatarSize={avatarSize}>
      <SvgEmptyAvatar />
    </AvatarStyle>
  );
};

Avatar.defaultProps = {
  avatarSize: 30,
};
