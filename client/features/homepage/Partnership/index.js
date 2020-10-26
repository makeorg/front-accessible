// @flow
import React from 'react';
import { ExternalLinkIconStyle } from 'Client/ui/Elements/Buttons/V2/style';
import { PARTNERSHIP_LINK } from 'Shared/constants/url';
import { i18n } from 'Shared/i18n';
import {
  PartnershipInnerStyle,
  PartnershipParagraphStyle,
  PartnershipSectionStyle,
  PartnershipSubtitleStyle,
  PartnershipTitleStyle,
  PartnershipRedButton,
} from './style';

export const PartnershipBanner = () => (
  <PartnershipSectionStyle
    as="section"
    aria-labelledby="partnership_title"
    id="partnership"
    data-cy-container="partnership"
  >
    <PartnershipInnerStyle>
      <PartnershipSubtitleStyle data-cy-container="partnership_subtitle">
        {i18n.t('homepage.partnership.subtitle')}
      </PartnershipSubtitleStyle>
      <PartnershipTitleStyle
        id="partnership_title"
        data-cy-container="partnership_title"
      >
        {i18n.t('homepage.partnership.title')}
      </PartnershipTitleStyle>
      <PartnershipParagraphStyle
        dangerouslySetInnerHTML={{
          __html: i18n.t('homepage.partnership.description'),
        }}
        data-cy-container="partnership_description"
      />
      <PartnershipRedButton
        as="a"
        href={PARTNERSHIP_LINK}
        target="_blank"
        rel="noreferrer noopener"
      >
        {i18n.t('homepage.partnership.button')}
        <> </>
        <ExternalLinkIconStyle aria-label={i18n.t('common.open_new_window')} />
      </PartnershipRedButton>
    </PartnershipInnerStyle>
  </PartnershipSectionStyle>
);
