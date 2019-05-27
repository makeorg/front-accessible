/* @flow */

import React, { useEffect } from 'react';
import { MetaTags } from 'Client/app/MetaTags';
import { FeaturedConsultations } from 'Client/features/homepage/FeaturedConsultations';
import { CorporateBanner } from 'Client/features/homepage/Corporate';
import { QuestionsList } from 'Client/features/homepage/QuestionsList';
import { GreatCausesList } from 'Client/features/homepage/GreatCausesList';
import { HomepageSkipLinks } from 'Client/app/SkipLinks/Homepage';
import { Tracking } from 'Shared/services/Tracking';
import { HomepageWrapperStyle, HomepageContainerStyle } from './Styled';

const questions = [
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
  {
    theme: {
      colorStart: '#1657ec',
      colorEnd: '#1657ec',
    },
    startDate: '2019-030-5',
    endDate: '2019-04-25',
    slug: 'economiebienveillante',
    aboutUrl: 'https://about.make.org/about-economiebienveillante',
    title: 'Comment agir pour rendre notre économie plus bienveillante ?',
  },
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
];

export const HomePage = () => {
  useEffect(() => {
    Tracking.trackDisplayHomepage();
  }, []);

  return (
    <HomepageWrapperStyle>
      <HomepageSkipLinks />
      <MetaTags />
      <HomepageContainerStyle>
        <FeaturedConsultations />
      </HomepageContainerStyle>
      <HomepageContainerStyle>
        <GreatCausesList />
      </HomepageContainerStyle>
      <CorporateBanner />
      <HomepageContainerStyle>
        <QuestionsList questions={questions} />
      </HomepageContainerStyle>
    </HomepageWrapperStyle>
  );
};

// default export needed for loadable component
export default HomePage; // eslint-disable-line import/no-default-export
