/* @flow */
import React from 'react';
import i18n from 'Shared/i18n';
import { MetaTags } from 'Client/app/MetaTags';
import { MiddlePageWrapperStyle } from 'Client/app/Styled/MainElements';
import { DescriptionStyle } from 'Client/ui/Elements/DescriptionElements';
import {
  NotFoundPageContentStyle,
  NotFoundIntroStyle,
  NotFoundTitleStyle
} from './Styled';

export const NotFoundPage = () => (
  <MiddlePageWrapperStyle>
    <MetaTags />
    <NotFoundPageContentStyle>
      <NotFoundIntroStyle>
        {i18n.t('not_found.intro')}
      </NotFoundIntroStyle>
      <NotFoundTitleStyle>
        {i18n.t('not_found.title')}
      </NotFoundTitleStyle>
      <DescriptionStyle>
        {i18n.t('not_found.description')}
      </DescriptionStyle>
    </NotFoundPageContentStyle>
  </MiddlePageWrapperStyle>
);

export default NotFoundPage;
