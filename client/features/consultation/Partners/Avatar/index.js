import React from 'react';
import { Avatar } from 'Client/ui/Avatar';

type Props = {
  /** Partner name */
  partnerName: string,
  /** Partner logo path */
  partnerLogo: string,
};

export const PartnerAvatar = (props: Props) => {
  const { partnerName, partnerLogo } = props;

  return (
    <Avatar avatarSize={50}>
      <img src={partnerLogo} alt={partnerName} aria-hidden />
    </Avatar>
  );
};
