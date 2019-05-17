/* @flow */

import React from 'react';
import { MetaTags } from 'Client/app/MetaTags';
import { FeaturedConsultations } from 'Client/features/homepage/FeaturedConsultations';
import { CorporateBanner } from 'Client/features/homepage/Corporate';
import { QuestionsList } from 'Client/features/homepage/QuestionsList';
import { HomeWrapperStyle, PaddingContainerStyle } from './Styled';

const questions = [
  {
    theme: {
      colorStart: 'rgb(125, 183, 227)',
      colorEnd: 'rgb(93, 161, 19)',
    },
    startDate: null,
    endDate: '2019-02-06',
    slug: 'european-digital-champions',
    aboutUrl: 'https://about.make.org/about-european-digital-champions',
    title: 'Comment faire émerger des champions européens du numérique ?',
  },
  {
    theme: {
      colorStart: 'rgb(254, 168, 254)',
      colorEnd: 'rgb(53, 191, 255)',
    },
    startDate: '2018-10-07',
    endDate: '2019-01-03',
    slug: 'jeunesse-hautsdefrance',
    aboutUrl: 'https://about.make.org/about-jeunesse-hautsdefrance',
    title: 'Comment vous aider à construire votre avenir en Hauts de France ?',
  },
  {
    theme: {
      colorStart: 'rgb(255, 182, 98)',
      colorEnd: 'rgb(255, 87, 87)',
    },
    startDate: '2019-05-06',
    endDate: '2019-06-30',
    slug: 'prevention-jeunes',
    aboutUrl: 'https://about.make.org/about-prevention-jeunes',
    title: 'Comment inciter les jeunes à mieux prendre soin de leur santé ?',
  },
];

const HomePage = () => (
  <HomeWrapperStyle>
    <MetaTags />
    <PaddingContainerStyle>
      <FeaturedConsultations />
    </PaddingContainerStyle>
    <CorporateBanner />
    <PaddingContainerStyle>
      <QuestionsList questions={questions} />
    </PaddingContainerStyle>
  </HomeWrapperStyle>
);

// default export needed for loadable component
export default HomePage; // eslint-disable-line import/no-default-export
