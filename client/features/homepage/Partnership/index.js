// @flow
import React from 'react';
import { ExternalLinkIconStyle } from 'Client/ui/Elements/Buttons/V2/style';
import { getWebflowDynamicLink } from 'Shared/helpers/url';
import { i18n } from 'Shared/i18n';
import { useSelector } from 'react-redux';
import { ROUTE_PARTNERSHIP } from 'Shared/routes';
import {
  PartnershipInnerStyle,
  PartnershipParagraphStyle,
  PartnershipSectionStyle,
  PartnershipSubtitleStyle,
  PartnershipTitleStyle,
  PartnershipRedButton,
} from './style';

export const PartnershipBanner = () => {
  const { language } = useSelector((state: StateRoot) => state.appConfig);

  return (
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
          href={getWebflowDynamicLink(language, ROUTE_PARTNERSHIP)}
          target="_blank"
          rel="noreferrer noopener"
        >
          {i18n.t('homepage.partnership.button')}
          <> </>
          <ExternalLinkIconStyle
            aria-label={i18n.t('common.open_new_window')}
          />
        </PartnershipRedButton>
      </PartnershipInnerStyle>
    </PartnershipSectionStyle>
  );
};
