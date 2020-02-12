// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { NewWindowIconStyle } from 'Client/ui/Elements/LinkElements';
import { NewWindowLinkStyle } from './style';

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
  <NewWindowLinkStyle
    href={linkUrl}
    target="_blank"
    rel="noopener noreferrer"
    onClick={tracking}
  >
    {linkText}
    <NewWindowIconStyle aria-label={i18n.t('common.open_new_window')} />
  </NewWindowLinkStyle>
);
