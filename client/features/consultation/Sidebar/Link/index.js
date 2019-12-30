// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { SvgExternalLink } from 'Client/ui/Svg/elements';
import {
  RedLinkStyle,
  NewWindowIconStyle,
} from 'Client/ui/Elements/LinkElements';

type Props = {
  linkUrl: string,
  linkText: string,
  tracking: () => void,
};

export const SidebarNewWindowLink = ({
  linkUrl,
  linkText,
  tracking,
}: Props) => (
  <RedLinkStyle
    as="a"
    href={linkUrl}
    to={linkUrl}
    target="_blank"
    rel="noopener noreferrer"
    onClick={tracking}
  >
    {linkText}
    <SvgExternalLink
      aria-label={i18n.t('common.open_new_window')}
      style={NewWindowIconStyle}
    />
  </RedLinkStyle>
);
