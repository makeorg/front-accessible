/* @flow */
import React from 'react';
import i18n from 'Shared/i18n';
import { MetaTags } from 'Client/app/MetaTags';
import { MiddlePageWrapper } from 'Client/app/Styled/MainElements';
import { DescriptionStyle } from 'Client/ui/Elements/DescriptionElements';
import {
  NotFoundPageContent,
  NotFoundIntro,
  NotFoundTitle
} from './Styled';

const NotFoundPage = () => (
  <MiddlePageWrapper>
    <MetaTags />
    <NotFoundPageContent>
      <NotFoundIntro>
        {i18n.t('not_found.intro')}
      </NotFoundIntro>
      <NotFoundTitle>
        {i18n.t('not_found.title')}
      </NotFoundTitle>
      <DescriptionStyle>
        {i18n.t('not_found.description')}
      </DescriptionStyle>
    </NotFoundPageContent>
  </MiddlePageWrapper>
);

export default NotFoundPage;
