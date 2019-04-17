// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import { i18n } from 'Shared/i18n';
import { LinkAsGreyButton } from 'Client/ui/Elements/LinkElements';
import { SvgPencil, SvgAngleArrowLeft } from 'Client/ui/Svg/elements';
import { IconWrapperStyle } from 'Client/ui/Elements/ButtonElements';

export const EditProfileLink = ({ link }: { link: string }) => {
  return (
    <LinkAsGreyButton to={link} as={Link}>
      <IconWrapperStyle aria-hidden>
        <SvgPencil />
      </IconWrapperStyle>
      {i18n.t('profile.informations_update.title')}
    </LinkAsGreyButton>
  );
};

export const GoToProfileLink = ({ link }: { link: string }) => {
  return (
    <LinkAsGreyButton to={link} as={Link}>
      <IconWrapperStyle aria-hidden>
        <SvgAngleArrowLeft />
      </IconWrapperStyle>
      {i18n.t('profile.informations_update.link_to_profile')}
    </LinkAsGreyButton>
  );
};
