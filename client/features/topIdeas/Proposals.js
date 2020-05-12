// @flow
import React, { useEffect, useState } from 'react';
import { type QuestionType } from 'Shared/types/question';
import { type ProposalType } from 'Shared/types/proposal';
import { type TopIdeaType } from 'Shared/types/topIdea';
import { trackLoadMoreProposals } from 'Shared/services/Tracking';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { i18n } from 'Shared/i18n';
import { searchProposals } from 'Shared/helpers/proposal';
import { ProposalCardTagged } from 'Client/features/proposal/ProposalCardTagged';
import { LoadMoreWrapperStyle } from 'Client/features/consultation/Styled/Proposal';
import { RedButtonStyle } from 'Client/ui/Elements/Buttons/style';
import { InfiniteProposalsContainerStyle } from 'Client/features/consultation/InfiniteProposals/style';
import { COMPONENT_PARAM_DETAIL_IDEAS } from 'Shared/constants/tracking';
import { ColumnElementStyle } from 'Client/ui/Elements/FlexElements';
import {
  TopComponentContext,
  type TopComponentContextValueType,
  TopComponentContextValue,
} from 'Client/context/TopComponentContext';
import { TopIdeaDetailsPageTitleStyle } from 'Client/pages/Consultation/style';

type Props = {
  topIdea: TopIdeaType,
  question: QuestionType,
};

export const TopIdeaDetailsProposals = ({ topIdea, question }: Props) => {
  const topComponentContext: TopComponentContextValueType = TopComponentContextValue.getTopideaProposalList();
  const [proposals, setProposals] = useState<ProposalType[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [seed, setSeed] = useState(undefined);
  const [page, setPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isPendingForMore, setIsPendingForMore] = useState<boolean>(false);
  const hasProposals = proposals && proposals.length > 0;
  const displayLoadMoreButton =
    hasProposals && hasMore && !isLoading && !isPendingForMore;

  const initProposals = async () => {
    const result = await searchProposals(
      question.country,
      question.language,
      undefined,
      page,
      undefined,
      undefined,
      question.questionId,
      undefined,
      'TOP_SCORE',
      topIdea.ideaId
    );

    if (result) {
      const { results, total, seed: apiSeed } = result;
      setProposals(results);
      setHasMore(results.length < total);
      setSeed(apiSeed);
      setPage(1);
    }
    setIsLoading(false);
  };

  const loadProposals = async () => {
    setIsPendingForMore(true);
    const result = await searchProposals(
      question.country,
      question.language,
      undefined,
      page,
      undefined,
      seed,
      question.questionId,
      undefined,
      'TOP_SCORE',
      topIdea.ideaId
    );
    if (result) {
      const { results, total, seed: apiSeed } = result;
      const newProposalList: ProposalType[] = [...proposals, ...results];
      setProposals(newProposalList);
      setHasMore(newProposalList.length < total);
      setSeed(apiSeed);
      setPage(page + 1);
    }
    trackLoadMoreProposals(COMPONENT_PARAM_DETAIL_IDEAS, page);
    setIsPendingForMore(false);
  };

  useEffect(() => {
    initProposals();
  }, [question]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        hasProposals && (
          <ColumnElementStyle id="proposals_list">
            <TopIdeaDetailsPageTitleStyle>
              {i18n.t('idea_details.proposals')}
            </TopIdeaDetailsPageTitleStyle>
            <TopComponentContext.Provider value={topComponentContext}>
              <InfiniteProposalsContainerStyle
                id="proposal_list"
                role="feed"
                aria-live="polite"
              >
                {proposals.map((proposal, index) => (
                  <ProposalCardTagged
                    key={proposal.id}
                    proposal={proposal}
                    position={index + 1}
                    size={proposals.length}
                  />
                ))}
              </InfiniteProposalsContainerStyle>
            </TopComponentContext.Provider>
          </ColumnElementStyle>
        )
      )}
      {isPendingForMore && <Spinner />}
      {displayLoadMoreButton && (
        <LoadMoreWrapperStyle>
          <RedButtonStyle onClick={loadProposals}>
            {i18n.t('consultation.proposal.load_more')}
          </RedButtonStyle>
        </LoadMoreWrapperStyle>
      )}
    </>
  );
};
