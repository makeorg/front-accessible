import React from 'react';
import { AvatarStyle } from 'Client/ui/Avatar/Styled';

type Props = {
  /** Partner name */
  partnerName: string,
  /** Partner logo path */
  partnerLogo: string,
  /** Partner profile url */
  partnerProfile: string,
};

export const PartnerAvatar = (props: Props) => {
  const { partnerName, partnerLogo, partnerProfile } = props;

  return (
    <AvatarStyle
      aria-hidden
      as="a"
      href={partnerProfile}
      target="_blank"
      rel="noopener noreferrer"
      avatarSize={50}
    >
      {partnerLogo && <img src={partnerLogo} alt={partnerName} aria-hidden />}
    </AvatarStyle>
  );
};
