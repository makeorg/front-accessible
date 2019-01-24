/* @flow */
import React from 'react';
import i18next from 'i18next';
import MetaTags from 'Src/components/MetaTags';
import { MiddlePageWrapper } from 'Src/components/Elements/MainElements';
import { Description } from 'Src/components/Elements/DescriptionElements';
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
        {i18next.t('not_found.intro')}
      </NotFoundIntro>
      <NotFoundTitle>
        {i18next.t('not_found.title')}
      </NotFoundTitle>
      <Description>
        {i18next.t('not_found.description')}
      </Description>
    </NotFoundPageContent>
  </MiddlePageWrapper>
);

export default NotFoundPage;
