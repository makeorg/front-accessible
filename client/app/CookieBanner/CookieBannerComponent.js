/* @flow */
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { SvgClose } from 'Client/ui/Svg/elements';
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
  <CookieWrapperStyle aria-label={i18n.t('common.cookie_area')}>
    <CookieContentStyle
      dangerouslySetInnerHTML={{
        __html: i18n.t('cookie_alert.text', {
          cgu_link: `<a class="red-link" href="${cguLink}">$t(cookie_alert.cgu)</a>`,
          policy_link: `<a class="red-link" href="${policyLink}">$t(cookie_alert.policy)</a>`,
        }),
      }}
    />
    <CookieCloseButtonStyle
      aria-label={i18n.t('cookie_alert.close')}
      aria-expanded="false"
      onClick={handleClose}
    >
      <SvgClose aria-hidden />
    </CookieCloseButtonStyle>
  </CookieWrapperStyle>
);
