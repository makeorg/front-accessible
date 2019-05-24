import React from 'react';
import { AvatarStyle } from 'Client/ui/Avatar/Styled';
import { i18n } from 'Shared/i18n';

type Props = {
  /** Partner name */
  partnerName: string,
  /** Partner logo path */
  partnerLogo: string,
  /** Partner profile url */
  partnerProfile: string,
  /** Link with blank attribute */
  newWindow: boolean,
};

export const PartnerAvatar = (props: Props) => {
  const { partnerName, partnerLogo, partnerProfile, newWindow = true } = props;

  return (
    <AvatarStyle
      as="a"
      href={partnerProfile}
      target={newWindow ? '_blank' : '_self'}
      rel="noopener noreferrer"
      avatarSize={50}
    >
      {partnerLogo && (
        <img
          src={partnerLogo}
          alt={i18n.t('consultation.partners.profile_link', {
            name: partnerName,
          })}
        />
      )}
    </AvatarStyle>
  );
};
