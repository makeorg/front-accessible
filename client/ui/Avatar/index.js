import React from 'react';
import { Svg } from 'Client/ui/Svg';
import { AvatarStyle } from './Styled';

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
      <Svg type="SvgEmptyAvatar" aria-hidden />
    </AvatarStyle>
  );
};

Avatar.defaultProps = {
  avatarSize: 30,
};
