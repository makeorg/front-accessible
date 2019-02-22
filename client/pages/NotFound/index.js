/* @flow */
import React from 'react';
import { i18n } from 'Shared/i18n';
import { MetaTags } from 'Client/app/MetaTags';
import { DescriptionStyle } from 'Client/ui/Elements/DescriptionElements';
import {
  NotFoundPageContentStyle,
  NotFoundPageInnerStyle,
  NotFoundIntroStyle,
  NotFoundTitleStyle,
} from './Styled';

export const NotFoundPage = () => (
  <NotFoundPageContentStyle>
    <MetaTags />
    <NotFoundPageInnerStyle>
      <NotFoundIntroStyle>{i18n.t('not_found.intro')}</NotFoundIntroStyle>
      <NotFoundTitleStyle>{i18n.t('not_found.title')}</NotFoundTitleStyle>
      <DescriptionStyle>{i18n.t('not_found.description')}</DescriptionStyle>
    </NotFoundPageInnerStyle>
  </NotFoundPageContentStyle>
);

// default export needed for loadable component
export default NotFoundPage; // eslint-disable-line import/no-default-export
