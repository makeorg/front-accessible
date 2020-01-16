// @flow
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  searchTaggedProposals,
  buildProposalsFeed,
  getProposalCardIndex,
} from 'Shared/helpers/proposal';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { trackLoadMoreProposals } from 'Shared/services/Tracking';
import { i18n } from 'Shared/i18n';
import { type StateRoot } from 'Shared/store/types';
import {
  type TypeProposalListCard,
  type TypeTopProposalListCard,
} from 'Shared/types/card';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { RedButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { FEED_PROPOSAL } from 'Shared/constants/card';
import { LoadMoreWrapperStyle } from '../Styled/Proposal';
import { InfiniteProposalsContainerStyle } from './style';
import { ProposalType } from './type';

type Props = {
  question: TypeQuestion,
  tags: string[],
  sortTypeKey: string,
};

export const InfiniteProposals = ({ question, tags, sortTypeKey }: Props) => {
  const country = useSelector((state: StateRoot) => state.appConfig.country);
  const language = useSelector((state: StateRoot) => state.appConfig.language);
  const [proposalCards, setProposalCards] = useState([]);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [seed, setSeed] = useState<?number>(undefined);
  const [page, setPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const initProposal = async () => {
    setIsLoading(true);
    const { results, total, seed: apiSeed } = await searchTaggedProposals(
      country,
      language,
      question.questionId,
      tags,
      undefined,
      0,
      sortTypeKey
    );
    const feed: Array<
      TypeProposalListCard | TypeTopProposalListCard
    > = buildProposalsFeed(results, question, sortTypeKey);
    setProposalCards(feed);
    setHasMore(feed.length < total);
    setSeed(apiSeed);
    setPage(1);
    setIsLoading(false);
  };

  const loadProposals = async () => {
    setIsLoading(true);
    const { results, total, seed: apiSeed } = await searchTaggedProposals(
      country,
      language,
      question.questionId,
      tags,
      seed,
      page,
      sortTypeKey
    );
    const addNewProposalCards: TypeProposalListCard[] = results.map(result => ({
      type: FEED_PROPOSAL,
      proposal: result,
    }));

    const newProposalList: Array<
      TypeProposalListCard | TypeTopProposalListCard
    > = [...proposalCards, ...addNewProposalCards];
    setProposalCards(newProposalList);
    setHasMore(newProposalList.length < total);
    setSeed(apiSeed);
    setPage(page + 1);
    setIsLoading(false);
  };

  const clickLoadMore = () => {
    loadProposals();
    trackLoadMoreProposals(page);
  };
  const flatTags = tags.join();

  useEffect(() => {
    initProposal();
  }, [flatTags, question]);

  const proposalsLength = proposalCards.length;
  const displayLoadMoreButton = hasMore && !isLoading;

  return (
    <InfiniteProposalsContainerStyle
      id="proposal_list"
      role="feed"
      aria-live="polite"
    >
      {proposalCards &&
        proposalCards.map((card, index) => (
          <ProposalType
            key={getProposalCardIndex(index)}
            card={card}
            index={index}
            proposalsLength={proposalsLength}
          />
        ))}
      {isLoading && <Spinner />}
      {displayLoadMoreButton && (
        <LoadMoreWrapperStyle>
          <RedButtonStyle onClick={clickLoadMore}>
            {i18n.t('consultation.proposal.load_more')}
          </RedButtonStyle>
        </LoadMoreWrapperStyle>
      )}
    </InfiniteProposalsContainerStyle>
  );
};
