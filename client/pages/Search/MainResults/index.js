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
import { getSearchProposalsLink } from 'Shared/helpers/url';
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

const SearchMainResultsComponent = ({ country, language }: Props) => {
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

  const mockSearchTerm = 'croix rouge';

  useEffect(() => {
    async function fetchData() {
      const response = await ViewsApiService.searchViews(
        mockSearchTerm,
        country,
        language
      );
      setData(response);
    }
    fetchData();
    setIsLoading(false);
  }, []);

  return (
    <MainResultsWrapperStyle>
      <MetaTags
        title={i18n.t('meta.search.main_results', {
          term: mockSearchTerm,
          count: proposalsCount,
        })}
      />
      <SearchPageTitleStyle>
        {isLoading
          ? i18n.t('search.titles.loading')
          : i18n.t('search.titles.main_results', {
              term: mockSearchTerm,
              count: proposalsCount,
            })}
      </SearchPageTitleStyle>
      <SearchPageContentStyle>
        <SearchPageResultsStyle>
          {isLoading && <Spinner />}
          {noResults && (
            <React.Fragment>
              <HiddenItemStyle>
                <h2>{i18n.t('search.titles.no_results')}</h2>
              </HiddenItemStyle>
              <NoResultsStyle>
                {i18n.t('search.main_results.no_results', {
                  term: mockSearchTerm,
                })}
              </NoResultsStyle>
            </React.Fragment>
          )}
          {withProposals && (
            <MainResultsSectionStyle>
              <MainResultsContainerStyle>
                <MainResultsHeader
                  title={i18n.t('search.main_results.proposal', {
                    term: mockSearchTerm,
                    count: proposalsCount,
                  })}
                  count={proposalsCount}
                  link={getSearchProposalsLink(country, language)}
                />
              </MainResultsContainerStyle>
              <MainResultsProposals
                searchTerm={mockSearchTerm}
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
