// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { i18n } from 'Shared/i18n';
import { LinkAsGreyButton } from 'Client/ui/Elements/LinkElements';
import {
  PencilIconStyle,
  AngleArrowLeftIconStyle,
} from 'Client/ui/Elements/Buttons/style';

export const EditProfileLink = ({ link }: { link: string }) => (
  <LinkAsGreyButton to={link} as={Link}>
    <PencilIconStyle aria-hidden />
    {i18n.t('profile.informations_update.title')}
  </LinkAsGreyButton>
);

export const GoToProfileLink = ({ link }: { link: string }) => (
  <LinkAsGreyButton to={link} as={Link}>
    <AngleArrowLeftIconStyle aria-hidden focusable="false" />
    {i18n.t('profile.informations_update.link_to_profile')}
  </LinkAsGreyButton>
);
