// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { SvgExternalLink } from 'Client/ui/Svg/elements';
import { MakeThemeColors } from 'Client/app/assets/vars/Colors';
import { RedLinkStyle } from 'Client/ui/Elements/LinkElements';

type Props = {
  linkUrl: string,
  linkText: string,
  tracking: () => void,
};

export const SidebarNewWindowLink = (props: Props) => {
  const { linkUrl, linkText, tracking } = props;

  return (
    <RedLinkStyle
      href={linkUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={tracking}
    >
      {linkText}
      <SvgExternalLink
        aria-label={i18n.t('common.open_new_window')}
        style={{ marginLeft: '5px', fill: MakeThemeColors.Red }}
      />
    </RedLinkStyle>
  );
};
