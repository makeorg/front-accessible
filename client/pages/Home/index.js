/* @flow */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { type HomeViewType } from 'Shared/types/views';
import { ViewsService } from 'Shared/services/Views';
import { trackDisplayHomepage } from 'Shared/services/Tracking';
import { MetaTags } from 'Client/app/MetaTags';
import { type StateRoot } from 'Shared/store/types';

export const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<HomeViewType>({
    highlights: { participantsCount: 0, proposalsCount: 0, partnersCount: 0 },
    currentQuestions: [],
    featuredQuestions: [],
    articles: [],
  });
  // trackingParamsService.questionSlug = '';
  const { country, language } = useSelector(
    (state: StateRoot) => state.appConfig
  );

  useEffect(() => {
    async function fetchData() {
      const homeData: ?HomeViewType = await ViewsService.getHome(
        country,
        language
      );
      setData(homeData || data);
    }
    setIsLoading(true);
    trackDisplayHomepage();
    fetchData();
    setIsLoading(false);
  }, []);

  return (
    <>
      <MetaTags />
      {isLoading && 'is loading...'}
      {!isLoading && (
        <>
          <div>
            <ul>
              <li>
                participantsCount:
                {data.highlights.participantsCount}
              </li>
              <li>
                proposalsCount:
                {data.highlights.proposalsCount}
              </li>
              <li>
                partnersCount:
                {data.highlights.partnersCount}
              </li>
            </ul>
          </div>
          <div>
            currentQuestions:
            <ul>
              {data.currentQuestions.map(question => (
                <li>{question.questionSlug}</li>
              ))}
            </ul>
          </div>
          <div>
            featuredQuestions:
            <ul>
              {data.featuredQuestions.map(question => (
                <li>{question.questionSlug}</li>
              ))}
            </ul>
          </div>
          <div>
            articles:
            <ul>
              {data.articles.map(article => (
                <li>{article.title}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
};

// default export needed for loadable component
export default HomePage; // eslint-disable-line import/no-default-export
