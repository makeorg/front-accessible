/* @flow */
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { footerItems, type TypeFooterLink } from 'Client/app/constants/footer';
import { localizeExternal } from 'Shared/helpers/url';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { FooterItemStyle, FooterItemLinkStyle } from '../Styled';

type Props = {
  /** String with Language value */
  language: string,
  /** String with Country value */
  country: string,
};

/**
 * Renders Main Footer
 */
export const FooterLinkComponent = (props: Props) => {
  const { language, country } = props;
  // avoid any -> https://github.com/facebook/flow/issues/2221
  const Items: TypeFooterLink[] = (Object.values(footerItems): any);
  return (
    <UnstyledListStyle>
      {Items.map(Item => (
        <FooterItemStyle key={i18n.t(Item.label)}>
          <FooterItemLinkStyle
            href={localizeExternal(Item.linkUrl, country, language)}
          >
            {i18n.t(Item.label)}
          </FooterItemLinkStyle>
        </FooterItemStyle>
      ))}
    </UnstyledListStyle>
  );
};
