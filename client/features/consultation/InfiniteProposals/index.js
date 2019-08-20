// @flow
import React, { useState, useEffect } from 'react';
import { searchProposals } from 'Shared/helpers/proposal';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { Tracking } from 'Shared/services/Tracking';
import { i18n } from 'Shared/i18n';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { ProposalCardTagged } from 'Client/features/proposal/ProposalCardTagged';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { RedButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { LoadMoreWrapperStyle } from '../Styled/Proposal';

type Props = {
  question: TypeQuestion,
  tags: string[],
};

export const InfiniteProposals = ({ question, tags }: Props) => {
  const [proposals, setProposals] = useState<TypeProposal[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [seed, setSeed] = useState<?number>(undefined);
  const [page, setPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

  const clickLoadMore = () => {
    loadProposals();
    Tracking.trackLoadMoreProposals(page);
  };

  useEffect(() => {
    initProposal();
  }, [tags, question]);

  const proposalsLength = proposals.length;
  const displayLoadMoreButton = hasMore && !isLoading;

  return (
    <section id="proposal_list" role="feed" aria-busy={isLoading}>
      {proposals &&
        proposals.map((proposal, index) => (
          <ProposalCardTagged
            position={index + 1}
            size={proposalsLength}
            key={proposal.id}
            proposal={proposal}
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
    </section>
  );
};
