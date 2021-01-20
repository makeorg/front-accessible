// @flow
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { type Location } from 'history';
import { type RouterHistory } from 'react-router-dom';
import { i18n } from 'Shared/i18n';
import { type QuestionType } from 'Shared/types/question';
import { QuestionService } from 'Shared/services/Question';
import { trackDisplaySearchConsultationsResult } from 'Shared/services/Tracking';
import { type StateRoot } from 'Shared/store/types';
import { MetaTags } from 'Client/app/MetaTags';
import { SearchBackButton } from 'Client/features/search/BackButton';
import { BusinessConsultationsList } from 'Client/features/search/MainResults/BusinessConsultationItem';
import { matchDesktopDevice } from 'Shared/helpers/styled';
import {
  SearchPageTitleStyle,
  SearchPageContentStyle,
  SearchPageResultsStyle,
  SearchPageWrapperStyle,
} from '../Styled';
import { SearchSidebar } from '../Sidebar';

type Props = {
  location: Location,
  history: RouterHistory,
};

export const SearchConsultations = ({ location, history }: Props) => {
  const { country, language, device } = useSelector(
    (state: StateRoot) => state.appConfig
  );
  const params = new URLSearchParams(location.search);
  const term = params.get('query') || '';
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState<number>(0);
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const isDesktop = matchDesktopDevice(device);

  const initQuestions = async () => {
    setIsLoading(true);
    const response = await QuestionService.searchQuestions(
      country,
      language,
      term
    );
    if (response) {
      const { results, total } = response;
      setQuestions(results);
      setCount(total);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    initQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term]);

  useEffect(() => {
    trackDisplaySearchConsultationsResult();
  }, []);
  return (
    <SearchPageWrapperStyle>
      <MetaTags
        title={i18n.t('meta.search.consultations', {
          term,
        })}
      />
      <SearchBackButton term={term} history={history} />
      <SearchPageTitleStyle>
        {isLoading
          ? i18n.t('search.titles.loading')
          : i18n.t('search.titles.operations', {
              term,
              count,
            })}
      </SearchPageTitleStyle>
      <SearchPageContentStyle>
        <SearchPageResultsStyle>
          <BusinessConsultationsList questions={questions} />
        </SearchPageResultsStyle>
        {isDesktop && <SearchSidebar />}
      </SearchPageContentStyle>
    </SearchPageWrapperStyle>
  );
};
