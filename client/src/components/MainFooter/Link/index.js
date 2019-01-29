/* @flow */
import * as React from 'react';
import i18next from 'i18next';
import { footerItems, type TypeFooterLink } from 'Client/app/constants/footer';
import * as Helpers from 'Shared/helpers/url';
import { UnstyledList } from 'Src/components/Elements/ListElements';
import MainFooter from '../Styled';

type Props = {
  /** String with Language value */
  language: string,
  /** String with Country value */
  country: string
};

/**
 * Renders Main Footer
 */
export const FooterLinkComponent = (props: Props) => {
  const {
    language,
    country
  } = props;
  // avoid any -> https://github.com/facebook/flow/issues/2221
  const Items: Array<TypeFooterLink> = (Object.values(footerItems): any);
  return (
    <UnstyledList>
      {Items.map(Item => (
        <MainFooter.Item key={i18next.t(Item.label)}>
          <MainFooter.ItemLink href={Helpers.localizeLink(Item.linkUrl, country, language)}>
            {i18next.t(Item.label)}
          </MainFooter.ItemLink>
        </MainFooter.Item>
      ))}
    </UnstyledList>
  );
};
