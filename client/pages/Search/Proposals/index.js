// @flow
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { type Location, type History } from 'history';
import { type ProposalType } from 'Shared/types/proposal';
import { i18n } from 'Shared/i18n';
import { getRouteSearch } from 'Shared/routes';
import { MetaTags } from 'Client/app/MetaTags';
import { SvgAngleArrowLeft } from 'Client/ui/Svg/elements';
import { searchProposals } from 'Shared/helpers/proposal';
import { type StateRoot } from 'Shared/store/types';
import { ProposalCardWithQuestion } from 'Client/features/proposal/ProposalCardWithQuestion';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import {
  trackDisplaySearchProposalsResult,
  trackClickSearchReturn,
} from 'Shared/services/Tracking';
import { useDesktop } from 'Client/hooks/useMedia';
import {
  TopComponentContext,
  type TopComponentContextValueType,
  TopComponentContextValue,
} from 'Client/context/TopComponentContext';
import {
  SearchPageTitleStyle,
  SearchPageContentStyle,
  SearchPageResultsStyle,
  SearchBackStyle,
  SearchBackArrowStyle,
  SearchResultsProposalItemStyle,
  SearchMoreProposalsButtonStyle,
  SearchResultsProposalListStyle,
  SearchPageWrapperStyle,
} from '../Styled';
import { SearchSidebar } from '../Sidebar';

type Props = {
  location: Location,
  history: History,
};
const PROPOSALS_LIMIT = 10;

export const SearchResultsProposals = ({ location, history }: Props) => {
  const { country, language } = useSelector(
    (state: StateRoot) => state.appConfig
  );
  const params = new URLSearchParams(location.search);
  const term = params.get('query') || '';
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState<number>(0);
  const [proposalsCount, setProposalsCount] = useState<number>(0);
  const [proposalsResult, setProposalsResult] = useState<ProposalType[]>([]);
  const getMoreButton =
    proposalsCount > PROPOSALS_LIMIT &&
    proposalsCount > proposalsResult.length &&
    !isLoading;
  const isDesktop = useDesktop();

  const initProposal = async () => {
    const result = await searchProposals(country, language, term, page);
    if (result) {
      const { results, total } = result;
      setProposalsResult(results);
      setProposalsCount(total);
      setPage(1);
    }
    setIsLoading(false);
  };

  const loadMoreProposals = async () => {
    setIsLoading(true);
    const result = await searchProposals(
      country,
      language,
      term,
      page,
      PROPOSALS_LIMIT
    );
    if (result) {
      const { results } = result;
      const newProposalList = [...proposalsResult, ...results];
      setProposalsResult(newProposalList);
      setPage(page + 1);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    initProposal();
  }, [term]);

  useEffect(() => {
    trackDisplaySearchProposalsResult();
  }, []);

  const handleReturn = () => {
    trackClickSearchReturn();
    history.push(getRouteSearch(country, language, term));
  };
  const topComponentContext: TopComponentContextValueType = TopComponentContextValue.getSearchResultProposalList();

  return (
    <SearchPageWrapperStyle>
      <MetaTags
        title={i18n.t('meta.search.proposals', {
          term,
          count: proposalsCount,
        })}
      />
      <SearchBackStyle onClick={() => handleReturn()}>
        <SvgAngleArrowLeft style={SearchBackArrowStyle} aria-hidden />
        {i18n.t('common.back')}
      </SearchBackStyle>
      <SearchPageTitleStyle>
        {isLoading
          ? i18n.t('search.titles.loading')
          : i18n.t('search.titles.proposals', {
              term,
              count: proposalsCount,
            })}
      </SearchPageTitleStyle>
      <SearchPageContentStyle>
        <SearchPageResultsStyle
          id="proposal_list"
          role="feed"
          aria-busy={isLoading}
        >
          <TopComponentContext.Provider value={topComponentContext}>
            <SearchResultsProposalListStyle>
              {proposalsResult.map((proposal, index) => (
                <SearchResultsProposalItemStyle key={proposal.id}>
                  <ProposalCardWithQuestion
                    proposal={proposal}
                    position={index + 1}
                    size={proposalsResult.length}
                  />
                </SearchResultsProposalItemStyle>
              ))}
            </SearchResultsProposalListStyle>
          </TopComponentContext.Provider>
          {isLoading && <Spinner />}
          {getMoreButton && (
            <SearchMoreProposalsButtonStyle onClick={loadMoreProposals}>
              {i18n.t('consultation.proposal.load_more')}
            </SearchMoreProposalsButtonStyle>
          )}
        </SearchPageResultsStyle>
        {isDesktop && <SearchSidebar />}
      </SearchPageContentStyle>
    </SearchPageWrapperStyle>
  );
};
