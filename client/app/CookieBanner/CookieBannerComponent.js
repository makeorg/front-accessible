/* @flow */
import * as React from 'react';
import i18n from 'Shared/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import * as CookieBanner from './Styled';

/**
 * Renders Cookie Banner component
 */
export const CookieBannerComponent = ({ cguLink, policyLink, handleClose }:
  { cguLink: string, policyLink: string, handleClose: () => void }) => (
    <CookieBanner.Wrapper role="banner" aria-describedby="content_info">
      <CookieBanner.Content
        id="content_info"
        dangerouslySetInnerHTML={
          {
            __html: i18n.t(
              'cookie_alert.text',
              {
                cgu_link: `<a class="red-link" target="_blank" href="${cguLink}">$t(cookie_alert.cgu)</a>`,
                policy_link: `<a class="red-link" target="_blank" href="${policyLink}">$t(cookie_alert.policy)</a>`
              }
            )
          }
        }
      />
      <CookieBanner.CloseButton
        aria-label={i18n.t('pannel.close')}
        aria-expanded="false"
        onClick={handleClose}
      >
        <FontAwesomeIcon aria-hidden icon={faTimes} />
      </CookieBanner.CloseButton>
    </CookieBanner.Wrapper>);
