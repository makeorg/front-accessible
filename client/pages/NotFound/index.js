/* @flow */
import React from 'react';
import { i18n } from 'Shared/i18n';
import { MetaTags } from 'Client/app/MetaTags';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import {
  NotFoundPageContentStyle,
  NotFoundPageInnerStyle,
  NotFoundIntroStyle,
  NotFoundTitleStyle,
} from './Styled';

export const NotFoundPage = () => (
  <NotFoundPageContentStyle>
    <MetaTags
      title={i18n.t('meta.not_found.title')}
      description={i18n.t('meta.not_found.description')}
    />
    <NotFoundPageInnerStyle>
      <NotFoundIntroStyle>{i18n.t('not_found.intro')}</NotFoundIntroStyle>
      <NotFoundTitleStyle>{i18n.t('not_found.title')}</NotFoundTitleStyle>
      <ParagraphStyle>{i18n.t('not_found.description')}</ParagraphStyle>
    </NotFoundPageInnerStyle>
  </NotFoundPageContentStyle>
);

// default export needed for loadable component
export default NotFoundPage; // eslint-disable-line import/no-default-export
