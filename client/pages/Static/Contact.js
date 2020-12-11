// @flow
import React from 'react';
import { RedLinkHTMLElementStyle } from 'Client/ui/Elements/LinkElements';
import { i18n } from 'Shared/i18n';
import { MetaTags } from 'Client/app/MetaTags';
import {
  StaticPageWrapperStyle,
  StaticSecondLevelTitleStyle,
  StaticParagraphStyle,
} from './style';

export const Contact = () => (
  <>
    <MetaTags title={i18n.t('meta.contact.title')} />
    <StaticPageWrapperStyle>
      <StaticSecondLevelTitleStyle>
        {i18n.t('contact.contactUs')}
      </StaticSecondLevelTitleStyle>
      <StaticParagraphStyle>
        {i18n.t('contact.paragraph')}
        &nbsp;
        <RedLinkHTMLElementStyle
          href={`mailto:${i18n.t('contact.email_address')}`}
        >
          {i18n.t('contact.email_address')}
        </RedLinkHTMLElementStyle>
      </StaticParagraphStyle>
    </StaticPageWrapperStyle>
  </>
);

// default export needed for loadable component
export default Contact; // eslint-disable-line import/no-default-export
