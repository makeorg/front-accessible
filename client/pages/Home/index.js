/* @flow */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { type HomeViewType } from 'Shared/types/views';
import { trackDisplayHomepage } from 'Shared/services/Tracking';
import { MetaTags } from 'Client/app/MetaTags';
import { type StateRoot } from 'Shared/store/types';
import { loadHomepage } from 'Shared/store/reducers/views/actions';
import { ViewsService } from 'Shared/services/Views';

export const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { country, language } = useSelector(
    (state: StateRoot) => state.appConfig
  );
  const { homepage } = useSelector((state: StateRoot) => state.views);

  const initHomepage = async () => {
    setIsLoading(true);
    const homepageResponse: ?HomeViewType = await ViewsService.getHome(
      country,
      language
    );
    if (homepageResponse) {
      dispatch(loadHomepage(homepageResponse));
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (!homepage) {
      initHomepage();
    }
    trackDisplayHomepage();
  }, []);

  return (
    <>
      <MetaTags />
      {isLoading && 'is loading...'}
      {!isLoading && homepage && (
        <>
          <div>
            <ul>
              <li>
                participantsCount:
                {homepage.highlights.participantsCount}
              </li>
              <li>
                proposalsCount:
                {homepage.highlights.proposalsCount}
              </li>
              <li>
                partnersCount:
                {homepage.highlights.partnersCount}
              </li>
            </ul>
          </div>
          <div>
            currentQuestions:
            <ul>
              {homepage.currentQuestions.map(question => (
                <li>{question.questionSlug}</li>
              ))}
            </ul>
          </div>
          <div>
            featuredQuestions:
            <ul>
              {homepage.featuredQuestions.map(question => (
                <li>{question.questionSlug}</li>
              ))}
            </ul>
          </div>
          <div>
            articles:
            <ul>
              {homepage.articles.map(article => (
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
