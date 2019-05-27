import React from 'react';
import { Link } from 'react-router-dom';
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
  newWindow?: boolean,
};

export const PartnerAvatar = (props: Props) => {
  const { partnerName, partnerLogo, partnerProfile, newWindow } = props;

  return (
    <AvatarStyle
      {...(newWindow
        ? {
            as: 'a',
            href: partnerProfile,
            target: '_blank',
            rel: 'noopener noreferrer',
          }
        : {
            as: Link,
            to: partnerProfile,
          })}
      avatarSize={50}
    >
      {partnerLogo && (
        <img
          src={partnerLogo}
          alt={
            newWindow
              ? i18n.t('consultation.partners.profile_link_new_window', {
                  name: partnerName,
                })
              : i18n.t('consultation.partners.profile_link', {
                  name: partnerName,
                })
          }
        />
      )}
    </AvatarStyle>
  );
};
