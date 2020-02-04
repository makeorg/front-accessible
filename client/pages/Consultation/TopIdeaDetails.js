// @flow
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { type TopIdea } from 'Shared/types/topIdea';
import {
  trackDisplayTopIdeas,
  trackLoadMoreProposals,
} from 'Shared/services/Tracking';
import { IntroBanner } from 'Client/features/consultation/IntroBanner/index';
import { TopIdeasSidebar } from 'Client/features/topIdeas/Sidebar';
import { useMobile } from 'Client/hooks/useMedia';
import { FollowUs } from 'Client/features/flipping/FollowUs';
import { getTopIdea } from 'Shared/services/TopIdea';
import { TopIdeaCard } from 'Client/features/topIdeas/Card';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { i18n } from 'Shared/i18n';
import { searchProposals } from 'Shared/helpers/proposal';
import { ProposalCardTagged } from 'Client/features/proposal/ProposalCardTagged';
import { LoadMoreWrapperStyle } from 'Client/features/consultation/Styled/Proposal';
import { RedButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { type BreadcrumbsPagesType, Breadcrumbs } from 'Client/app/Breadcrumbs';
import { getTopIdeasLink } from 'Shared/helpers/url';
import { InfiniteProposalsContainerStyle } from 'Client/features/consultation/InfiniteProposals/style';
import { COMPONENT_PARAM_DETAIL_IDEAS } from 'Shared/constants/tracking';
import { MUNICIPAL_PERSONALITY_HEADER } from 'Shared/constants/featureFlipping';
import { CandidateEngagement } from 'Client/custom/municipales/CandidateEngagement';
import { checkIsFeatureActivated } from 'Client/helper/featureFlipping';
import { OpinionComment } from 'Client/features/opinions/Comment';
import { withQuestionData } from './fetchQuestionData';
import {
  TopIdeaDetailsPageTitleStyle,
  ConsultationPageContentStyle,
  ConsultationPageWrapperStyle,
  ConsultationPageSidebarStyle,
  ConsultationHeaderWrapperStyle,
} from './style';

type Props = {
  question: TypeQuestion,
};

const TopIdeaDetailsPageWrapper = ({ question }: Props) => {
  const isMobile = useMobile();
  const { topIdeaId } = useParams();
  const location = useLocation();
  const [topIdea, setTopIdea] = useState<?TopIdea>(undefined);
  const [ideaId, setIdeaId] = useState<string>('');
  const [relatedProposals, setRelatedProposals] = useState<TypeProposal[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [seed, setSeed] = useState<?number>(undefined);
  const [page, setPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // @todo remove or refactor when Municipales is over
  const withPersonalityHeader: boolean = checkIsFeatureActivated(
    MUNICIPAL_PERSONALITY_HEADER,
    question.activeFeatures
  );

  const initRelatedProposals = async (idea: string) => {
    const { results, total, seed: apiSeed } = await searchProposals(
      question.country,
      question.language,
      undefined,
      page,
      undefined,
      undefined,
      question.questionId,
      undefined,
      'TAGGED_FIRST',
      idea
    );

    setRelatedProposals(results);
    setHasMore(results.length < total);
    setSeed(apiSeed);
    setPage(1);
    setIsLoading(false);
  };

  const loadProposals = async () => {
    trackLoadMoreProposals(COMPONENT_PARAM_DETAIL_IDEAS, page);
    setIsLoading(true);

    const { results, total, seed: apiSeed } = await searchProposals(
      question.country,
      question.language,
      undefined,
      page,
      undefined,
      seed,
      question.questionId,
      undefined,
      'TAGGED_FIRST',
      ideaId
    );

    const newProposalList: TypeProposal[] = [...relatedProposals, ...results];
    setRelatedProposals(newProposalList);
    setHasMore(newProposalList.length < total);
    setSeed(apiSeed);
    setPage(page + 1);
    setIsLoading(false);
  };

  const initTopIdea = async () => {
    const { questionTopIdea } = await getTopIdea(
      question.questionId,
      topIdeaId
    );

    setIdeaId(questionTopIdea.ideaId);
    setTopIdea(questionTopIdea);
    initRelatedProposals(questionTopIdea.ideaId);
  };

  useEffect(() => {
    initTopIdea();
    trackDisplayTopIdeas('top-idea-details');
  }, [question, topIdeaId]);

  const hasProposals = relatedProposals && relatedProposals.length > 0;
  const hasComments = topIdea && topIdea.comments.length > 0;
  const displayLoadMoreButton = hasProposals && hasMore && !isLoading;
  const parentPages: BreadcrumbsPagesType = [
    {
      name: i18n.t('idea_card.title'),
      link: getTopIdeasLink(question.country, question.language, question.slug),
    },
  ];
  const currentPage = {
    name: i18n.t('idea_details.current_page'),
    link: location,
  };

  return (
    <>
      <ConsultationHeaderWrapperStyle
        gradientStart={question.theme.gradientStart}
        gradientEnd={question.theme.gradientEnd}
        backgroundcolor={question.theme.gradientStart}
      >
        <IntroBanner question={question} />
      </ConsultationHeaderWrapperStyle>
      {/** @todo remove or refactor when Municipales is over */}
      {withPersonalityHeader && <CandidateEngagement question={question} />}
      <ConsultationPageWrapperStyle>
        <ConsultationPageSidebarStyle>
          <TopIdeasSidebar question={question} />
        </ConsultationPageSidebarStyle>
        <ConsultationPageContentStyle id="main" data-cy-container="main">
          <Breadcrumbs parentPages={parentPages} currentPage={currentPage} />
          {topIdea && <TopIdeaCard topIdea={topIdea} />}
          {hasComments && (
            <>
              <TopIdeaDetailsPageTitleStyle>
                {i18n.t('idea_details.comments')}
              </TopIdeaDetailsPageTitleStyle>
              <section>
                {topIdea &&
                  topIdea.comments.map(comment => (
                    <OpinionComment question={question} comment={comment} />
                  ))}
              </section>
            </>
          )}
          {hasProposals && (
            <>
              <TopIdeaDetailsPageTitleStyle>
                {i18n.t('idea_details.proposals')}
              </TopIdeaDetailsPageTitleStyle>
              <InfiniteProposalsContainerStyle
                id="proposal_list"
                role="feed"
                aria-live="polite"
              >
                {relatedProposals.map((proposal, index) => (
                  <ProposalCardTagged
                    key={proposal.id}
                    proposal={proposal}
                    position={index + 1}
                    size={relatedProposals.length}
                  />
                ))}
              </InfiniteProposalsContainerStyle>
            </>
          )}
          {isLoading && <Spinner />}
          {displayLoadMoreButton && (
            <LoadMoreWrapperStyle>
              <RedButtonStyle onClick={loadProposals}>
                {i18n.t('consultation.proposal.load_more')}
              </RedButtonStyle>
            </LoadMoreWrapperStyle>
          )}
        </ConsultationPageContentStyle>
        {isMobile && <FollowUs />}
      </ConsultationPageWrapperStyle>
    </>
  );
};

const TopIdeaDetailsPage = withQuestionData(TopIdeaDetailsPageWrapper);

// default export needed for loadable component
export default TopIdeaDetailsPage; // eslint-disable-line import/no-default-export
