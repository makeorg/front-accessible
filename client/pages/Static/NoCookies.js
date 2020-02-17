import React from 'react';
import { HeadProvider } from 'react-head';
import Logo from 'Client/app/assets/images/logo.svg';
import { i18n } from 'Shared/i18n';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { RedLinkHTMLElementStyle } from 'Client/ui/Elements/LinkElements';
import { DefaultStylesheet } from 'Client/app/assets/css-in-js/DefaultStyle';
import { ModernNormalizeStylesheet } from 'Client/app/assets/css-in-js/ModernNormalize';
import { FontFacesStylesheet } from 'Client/app/assets/css-in-js/FontFaces';
import { CenterColumnStyle } from 'Client/ui/Elements/FlexElements';
import { MetaTags } from 'Client/app/MetaTags';
import {
  NoCookiesTitleStyle,
  NoCookiesSectionStyle,
  NoCookiesSeparatorStyle,
  NoCookiesParagraphStyle,
  NoCookiesAltParagraphStyle,
} from './style';

export const NoCookies = () => (
  <NoCookiesSectionStyle>
    <FontFacesStylesheet />
    <ModernNormalizeStylesheet />
    <DefaultStylesheet />
    <HeadProvider>
      <MetaTags />
    </HeadProvider>
    <CenterColumnStyle>
      <NoCookiesTitleStyle>
        <img src={Logo} alt="Make.org" />
      </NoCookiesTitleStyle>
      <SecondLevelTitleStyle>
        {i18n.t('no_cookies.title')}
      </SecondLevelTitleStyle>
      <NoCookiesSeparatorStyle />
      <NoCookiesParagraphStyle>
        {i18n.t('no_cookies.first_paragraph')}
      </NoCookiesParagraphStyle>
      <NoCookiesParagraphStyle>
        {i18n.t('no_cookies.second_paragraph')}
      </NoCookiesParagraphStyle>
      <NoCookiesParagraphStyle className="column">
        {i18n.t('no_cookies.information')}
        <RedLinkHTMLElementStyle href={`https://${i18n.t('no_cookies.link')}`}>
          {i18n.t('no_cookies.link')}
        </RedLinkHTMLElementStyle>
      </NoCookiesParagraphStyle>

      <NoCookiesParagraphStyle>
        {i18n.t('no_cookies.thanks')}
      </NoCookiesParagraphStyle>
    </CenterColumnStyle>
    <NoCookiesAltParagraphStyle
      dangerouslySetInnerHTML={{
        __html: i18n.t('no_cookies.footer'),
      }}
    />
  </NoCookiesSectionStyle>
);
