import React from 'react';
import { Svg } from 'Client/ui/Svg';
import { AvatarStyle } from 'Client/ui/Elements/AvatarElements';

type Props = {
  /** Boolean use to render or not children */
  customAvatar: boolean,
  /** Children to render */
  children: React.Node,
  /** Width of avatar */
  avatarSize?: number,
};

export const Avatar = (props: Props) => {
  const { avatarSize, customAvatar, children } = props;

  if (customAvatar) {
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
