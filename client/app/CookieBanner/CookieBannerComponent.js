/* @flow */
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { CloseButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { SvgClose } from 'Client/ui/Svg/elements';
import { CookieContentStyle, CookieWrapperStyle } from './Styled';

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
    <CloseButtonStyle
      aria-label={i18n.t('pannel.close')}
      aria-expanded="false"
      onClick={handleClose}
    >
      <SvgClose aria-hidden />
    </CloseButtonStyle>
  </CookieWrapperStyle>
);
