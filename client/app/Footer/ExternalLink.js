// @flow
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import React from 'react';
import { i18n } from 'Shared/i18n';
import { FooterLinkIconStyle } from './style';

export const FooterExternalLink = () => (
  <>
    <FooterLinkIconStyle aria-hidden focusable="false" />
    <> </>
    <ScreenReaderItemStyle>
      {i18n.t('common.open_new_window')}
    </ScreenReaderItemStyle>
  </>
);
