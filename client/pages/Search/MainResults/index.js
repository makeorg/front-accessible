// @flow
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { type Location } from 'history';
import { type TypeSearchViews } from 'Shared/types/views';
import { ViewsApiService } from 'Shared/api/ViewsApiService';
import { i18n } from 'Shared/i18n';
import { trackDisplaySearchMainResult } from 'Shared/services/Tracking';
import { MetaTags } from 'Client/app/MetaTags';
import { MainResultsHeader } from 'Client/features/search/MainResults/Header';
import { MainResultsProposals } from 'Client/features/search/MainResults/Proposals';
import { MainResultsConsultations } from 'Client/features/search/MainResults/Consultations';
import { MainResultsOrganisations } from 'Client/features/search/MainResults/Organisations';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import {
  getRouteSearchProposals,
  getRouteSearchConsultations,
  getRouteSearchOrganisations,
} from 'Shared/routes';
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
  const noResults = responseCount === 0;

  useEffect(() => {
    trackDisplaySearchMainResult();
  }, []);

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
          count: responseCount,
        })}
      />
      <SearchPageTitleStyle>
        {isLoading && i18n.t('search.titles.loading')}
        {!isLoading && !!term
          ? i18n.t('search.titles.main_results', {
              term,
              count: responseCount,
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
          {!isLoading && !!responseCount && (
            <React.Fragment>
              {!!proposalsCount && (
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
              {!!organisationsCount && (
                <MainResultsSectionStyle>
                  <MainResultsHeader
                    title={i18n.t('search.main_results.organisation', {
                      term,
                      count: organisationsCount,
                    })}
                    count={organisationsCount}
                    link={getRouteSearchOrganisations(country, language, term)}
                  />
                  <MainResultsOrganisations
                    organisations={data.organisations.results}
                  />
                </MainResultsSectionStyle>
              )}
              {!!questionsCount && (
                <MainResultsSectionStyle>
                  <MainResultsHeader
                    title={i18n.t('search.main_results.operation', {
                      term,
                      count: questionsCount,
                    })}
                    count={questionsCount}
                    link={getRouteSearchConsultations(country, language, term)}
                  />
                  <MainResultsConsultations
                    questions={data.questions.results}
                  />
                </MainResultsSectionStyle>
              )}
            </React.Fragment>
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
