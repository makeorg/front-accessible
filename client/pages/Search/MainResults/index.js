// @flow
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { type Location } from 'history';
import { type TypeSearchViews } from 'Shared/types/views';
import { ViewsApiService } from 'Shared/api/ViewsApiService';
import { i18n } from 'Shared/i18n';
import { MetaTags } from 'Client/app/MetaTags';
import { MainResultsHeader } from 'Client/features/search/MainResults/Header';
import { MainResultsProposals } from 'Client/features/search/MainResults/Proposals';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import { getRouteSearchProposals } from 'Shared/routes';

import {
  SearchPageTitleStyle,
  SearchPageContentStyle,
  SearchPageResultsStyle,
} from '../Styled';
import {
  MainResultsWrapperStyle,
  MainResultsSectionStyle,
  NoResultsStyle,
} from './Styled';
import { SearchSidebar } from '../Sidebar';

export type Props = {
  location: Location,
  country: string,
  language: string,
};

const SearchMainResultsComponent = ({ location, country, language }: Props) => {
  const params = new URLSearchParams(location.search);
  const term = params.get('query') || '';

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<TypeSearchViews>({
    proposals: { total: 0, results: [] },
    questions: { total: 0, results: [] },
    organisations: { total: 0, results: [] },
  });
  const proposalsCount = data.proposals.total;
  const questionsCount = data.questions.total;
  const organisationsCount = data.organisations.total;
  const responseCount = proposalsCount + questionsCount + organisationsCount;
  const withProposals = proposalsCount > 0;
  const noResults = responseCount === 0;

  useEffect(() => {
    async function fetchData() {
      const response = await ViewsApiService.searchViews(
        term,
        country,
        language
      );
      setData(response);
      setIsLoading(false);
    }

    fetchData();
  }, [term]);

  return (
    <MainResultsWrapperStyle>
      <MetaTags
        title={i18n.t('meta.search.main_results', {
          term,
          count: proposalsCount,
        })}
      />
      <SearchPageTitleStyle>
        {isLoading && i18n.t('search.titles.loading')}
        {!isLoading && !!term
          ? i18n.t('search.titles.main_results', {
              term,
              count: proposalsCount,
            })
          : i18n.t('search.titles.main_results_empty_term')}
      </SearchPageTitleStyle>
      <SearchPageContentStyle>
        <SearchPageResultsStyle>
          {isLoading && <Spinner />}
          {!isLoading && noResults && (
            <React.Fragment>
              <HiddenItemStyle>
                <h2>{i18n.t('search.titles.no_results')}</h2>
              </HiddenItemStyle>
              <NoResultsStyle>
                {term
                  ? i18n.t('search.main_results.no_results', {
                      term,
                    })
                  : i18n.t('search.main_results.no_query')}
              </NoResultsStyle>
            </React.Fragment>
          )}
          {!isLoading && withProposals && (
            <MainResultsSectionStyle>
              <MainResultsHeader
                title={i18n.t('search.main_results.proposal', {
                  term,
                  count: proposalsCount,
                })}
                count={proposalsCount}
                link={getRouteSearchProposals(country, language, term)}
              />
              <MainResultsProposals
                searchTerm={term}
                proposals={data.proposals.results}
                count={proposalsCount}
              />
            </MainResultsSectionStyle>
          )}
        </SearchPageResultsStyle>
        <SearchSidebar />
      </SearchPageContentStyle>
    </MainResultsWrapperStyle>
  );
};

const mapStateToProps = state => {
  const { country, language } = state.appConfig;

  return {
    country,
    language,
  };
};

export const SearchMainResults = connect(mapStateToProps)(
  SearchMainResultsComponent
);
