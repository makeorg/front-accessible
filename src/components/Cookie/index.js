/* @flow */
import * as React from 'react';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import * as Helpers from 'Helpers/url';
import * as CookieBanner from './Styled';

/**
 * Renders Cookie Banner component
 */
export const CookieBannerComponent = () => (
  <CookieBanner.Wrapper role="banner" aria-describedby="content_info">
    <CookieBanner.Content
      id="content_info"
      dangerouslySetInnerHTML={
        {
          __html: i18next.t(
            'cookie_alert.text',
            {
              cgu_link: `<a class="red-link" href="${Helpers.getCountryLanguageLink('https://about.make.org/terms-of-use/', 'country', 'language')}">$t(cookie_alert.cgu)</a>`,
              policy_link: `<a class="red-link" href="${Helpers.getCountryLanguageLink('https://about.make.org/data-use-policy/', 'country', 'language')}">$t(cookie_alert.policy)</a>`
            }
          )
        }
      }
    />
    <CookieBanner.CloseButton
      aria-label={i18next.t('pannel.close')}
      aria-expanded="false"
    >
      <FontAwesomeIcon aria-hidden icon={faTimes} />
    </CookieBanner.CloseButton>
  </CookieBanner.Wrapper>
);
