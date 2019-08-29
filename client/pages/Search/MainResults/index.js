// @flow
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
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
  MainResultsContainerStyle,
  NoResultsStyle,
} from './Styled';
import { SearchSidebar } from '../Sidebar';

export type Props = {
  country: string,
  language: string,
};

const SearchMainResultsComponent = ({ location, country, language }: Props) => {
  const params = new URLSearchParams(location.search);
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
        params.get('query'),
        country,
        language
      );
      setData(response);
      setIsLoading(false);
    }

    fetchData();
  }, [params.get('query')]);

  return (
    <MainResultsWrapperStyle>
      <MetaTags
        title={i18n.t('meta.search.main_results', {
          term: params.get('query'),
          count: proposalsCount,
        })}
      />
      <SearchPageTitleStyle>
        {isLoading
          ? i18n.t('search.titles.loading')
          : i18n.t('search.titles.main_results', {
              term: params.get('query'),
              count: proposalsCount,
            })}
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
                {params.get('query')
                  ? i18n.t('search.main_results.no_results', {
                      term: params.get('query'),
                    })
                  : i18n.t('search.main_results.no_query')}
              </NoResultsStyle>
            </React.Fragment>
          )}
          {!isLoading && withProposals && (
            <MainResultsSectionStyle>
              <MainResultsContainerStyle>
                <MainResultsHeader
                  title={i18n.t('search.main_results.proposal', {
                    term: params.get('query'),
                    count: proposalsCount,
                  })}
                  count={proposalsCount}
                  link={getRouteSearchProposals(
                    country,
                    language,
                    params.get('query')
                  )}
                />
              </MainResultsContainerStyle>
              <MainResultsProposals
                searchTerm={params.get('query')}
                proposals={data.proposals.results}
                count={proposalsCount}
              />
            </MainResultsSectionStyle>
          )}
        </SearchPageResultsStyle>
        <MainResultsContainerStyle>
          <SearchSidebar />
        </MainResultsContainerStyle>
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
