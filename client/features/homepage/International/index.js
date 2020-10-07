// @flow
import { ConsultationElementSubtitleStyle } from 'Client/features/consultation/Browse/style';
import {
  HomepagePageInnerStyle,
  HomepageSectionStyle,
  HomepageSectionTitleStyle,
} from 'Client/pages/Home/style';
import React from 'react';
import { getHomeLink } from 'Shared/helpers/url';
import { i18n } from 'Shared/i18n';
import { CurrentQuestionsButtonStyle } from '../CurrentQuestions/style';

export const InternationalPlaceholder = () => (
  <HomepageSectionStyle
    as="section"
    aria-labelledby="international_placeholder_title"
    id="international_placeholder"
  >
    <HomepagePageInnerStyle>
      <ConsultationElementSubtitleStyle data-cy-container="international_placeholder_subtitle">
        {i18n.t('homepage.international.subtitle')}
      </ConsultationElementSubtitleStyle>
      <HomepageSectionTitleStyle
        data-cy-container="international_placeholder_title"
        id="international_placeholder_title"
      >
        {i18n.t('homepage.international.title')}
      </HomepageSectionTitleStyle>
      <CurrentQuestionsButtonStyle
        to={getHomeLink('FR')}
        data-cy-link="international-placeholder-link"
      >
        {i18n.t('homepage.international.button')}
      </CurrentQuestionsButtonStyle>
    </HomepagePageInnerStyle>
  </HomepageSectionStyle>
);
