/* @flow */
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  CookieContentStyle,
  CookieWrapperStyle,
  CookieCloseButtonStyle,
} from './Styled';

/**
 * Renders Cookie Banner component
 */
export const CookieBannerComponent = ({
  cguLink,
  policyLink,
  handleClose,
}: {
  cguLink: string,
  policyLink: string,
  handleClose: () => void,
}) => (
  <CookieWrapperStyle aria-describedby="content_info">
    <CookieContentStyle
      id="content_info"
      dangerouslySetInnerHTML={{
        __html: i18n.t('cookie_alert.text', {
          cgu_link: `<a class="red-link" target="_blank" href="${cguLink}">$t(cookie_alert.cgu)</a>`,
          policy_link: `<a class="red-link" target="_blank" href="${policyLink}">$t(cookie_alert.policy)</a>`,
        }),
      }}
    />
    <CookieCloseButtonStyle
      aria-label={i18n.t('pannel.close')}
      aria-expanded="false"
      onClick={handleClose}
    >
      <FontAwesomeIcon aria-hidden icon={faTimes} />
    </CookieCloseButtonStyle>
  </CookieWrapperStyle>
);
