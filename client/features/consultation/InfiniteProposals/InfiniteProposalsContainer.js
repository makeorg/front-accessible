/* @flow */
import React, { useState, useEffect } from 'react';
import { searchProposals } from 'Shared/helpers/proposal';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { Tracking } from 'Shared/services/Tracking';
import { InfiniteProposalsComponent } from './InfiniteProposalsComponent';

type Props = {
  question: TypeQuestion,
  tags: string[],
};

export const InfiniteProposalsContainer = ({ question, tags }: Props) => {
  const [proposals, setProposals] = useState([]);
  const [startInfiniteScroll, setStartInfiniteScroll] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [seed, setSeed] = useState(undefined);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const clickLoadMore = () => {
    setStartInfiniteScroll(true);
    Tracking.trackLoadMoreProposals();
  };

  const initProposal = async () => {
    setIsLoading(true);
    const { results, total, seed: apiSeed } = await searchProposals(
      question.questionId,
      tags
    );
    setProposals(results);
    setHasMore(results.length < total);
    setSeed(apiSeed);
    setPage(1);
    setIsLoading(false);
  };

  const loadProposals = async () => {
    setIsLoading(true);
    const { results, total, seed: apiSeed } = await searchProposals(
      question.questionId,
      tags,
      seed,
      page
    );
    const newProposalList = [...proposals, ...results];
    setProposals(newProposalList);
    setHasMore(newProposalList.length < total);
    setSeed(apiSeed);
    setPage(page + 1);
    setIsLoading(false);
  };

  const handleOnScroll = () => {
    const scrollThresold =
      document.body &&
      window.innerHeight + window.scrollY >= document.body.scrollHeight;

    if (isLoading || !hasMore) return;

    if (scrollThresold && page > 1) {
      loadProposals();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleOnScroll, false);

    return () => window.removeEventListener('scroll', handleOnScroll, false);
  }, [page, isLoading, hasMore]);

  useEffect(() => {
    if (startInfiniteScroll) loadProposals();
  }, [startInfiniteScroll]);

  useEffect(() => {
    initProposal();
  }, [tags, question]);

  return (
    <InfiniteProposalsComponent
      proposals={proposals}
      page={page}
      hasMore={hasMore}
      isLoading={isLoading}
      clickLoadMore={clickLoadMore}
    />
  );
};
