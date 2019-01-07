/* @flow */
import * as React from 'react';
import i18next from 'i18next';
import * as Constants from 'Constants/footer';
import * as Helpers from 'Helpers/url';
import { UnstyledList } from 'Components/Elements/ListElements';
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
  const Items = Object.values(Constants.footerItems);
  return (
    <UnstyledList>
      {Items.map(Item => (
        <MainFooter.Item key={i18next.t(Item.label)}>
          <MainFooter.ItemLink href={Helpers.setCountryLanguageLink(Item.linkUrl, country, language)}>
            {i18next.t(Item.label)}
          </MainFooter.ItemLink>
        </MainFooter.Item>
      ))}
    </UnstyledList>
  );
};
