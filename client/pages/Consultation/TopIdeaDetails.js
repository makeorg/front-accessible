// @flow
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { type QuestionType } from 'Shared/types/question';
import { type ProposalType } from 'Shared/types/proposal';
import { type TopIdeaType } from 'Shared/types/topIdea';
import {
  trackDisplayTopIdeas,
  trackLoadMoreProposals,
} from 'Shared/services/Tracking';
import { IntroBanner } from 'Client/features/consultation/IntroBanner/index';
import { FollowUs } from 'Client/features/flipping/FollowUs';
import { TopIdeaService } from 'Shared/services/TopIdea';
import { TopIdeaCard } from 'Client/features/topIdeas/Card';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { i18n } from 'Shared/i18n';
import { searchProposals } from 'Shared/helpers/proposal';
import { ProposalCardTagged } from 'Client/features/proposal/ProposalCardTagged';
import { LoadMoreWrapperStyle } from 'Client/features/consultation/Styled/Proposal';
import { RedButtonStyle } from 'Client/ui/Elements/Buttons/style';
import { type BreadcrumbsPagesType, Breadcrumbs } from 'Client/app/Breadcrumbs';
import { getTopIdeasLink, redirectToNotFoundPage } from 'Shared/helpers/url';
import { InfiniteProposalsContainerStyle } from 'Client/features/consultation/InfiniteProposals/style';
import { COMPONENT_PARAM_DETAIL_IDEAS } from 'Shared/constants/tracking';
import { MUNICIPAL_PERSONALITY_HEADER } from 'Shared/constants/featureFlipping';
import { CandidateEngagement } from 'Client/custom/municipales/CandidateEngagement';
import { checkIsFeatureActivated } from 'Client/helper/featureFlipping';
import { OpinionComment } from 'Client/features/opinions/Comment';
import { MetaTags } from 'Client/app/MetaTags';
import { ConsultationSidebar } from 'Client/features/consultation/Sidebar';
import { ColumnElementStyle } from 'Client/ui/Elements/FlexElements';
import { TopIdeaDetailsSkipLinks } from 'Client/app/SkipLinks/TopIdeaDetails';
import {
  TopComponentContext,
  type TopComponentContextValueType,
  TopComponentContextValue,
} from 'Client/context/TopComponentContext';
import { MobileDescriptionImage } from 'Client/features/consultation/MobileDescriptionImage';
import { withQuestionData } from './fetchQuestionData';
import {
  TopIdeaDetailsPageTitleStyle,
  ConsultationPageContentStyle,
  ConsultationPageWrapperStyle,
  ConsultationHeaderWrapperStyle,
  TopIdeaDetailsIconStyle,
} from './style';

type Props = {
  question: QuestionType,
};

const TopIdeaDetailsPageWrapper = ({ question }: Props) => {
  const { topIdeaId } = useParams();
  const location = useLocation();
  const [topIdea, setTopIdea] = useState<?TopIdeaType>(undefined);
  const [relatedProposals, setRelatedProposals] = useState<ProposalType[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [seed, setSeed] = useState<?number>(undefined);
  const [page, setPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // @todo remove or refactor when Municipales is over
  const withPersonalityHeader: boolean = checkIsFeatureActivated(
    MUNICIPAL_PERSONALITY_HEADER,
    question.activeFeatures
  );

  const initRelatedProposals = async ideaId => {
    if (!ideaId) {
      return;
    }

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
      ideaId
    );

    if (result) {
      const { results, total, seed: apiSeed } = result;
      setRelatedProposals(results);
      setHasMore(results.length < total);
      setSeed(apiSeed);
      setPage(1);
    }
    setIsLoading(false);
  };

  const loadProposals = async () => {
    if (!topIdea) {
      return;
    }
    trackLoadMoreProposals(COMPONENT_PARAM_DETAIL_IDEAS, page);
    setIsLoading(true);
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
      const newProposalList: ProposalType[] = [...relatedProposals, ...results];
      setRelatedProposals(newProposalList);
      setHasMore(newProposalList.length < total);
      setSeed(apiSeed);
      setPage(page + 1);
    }
    setIsLoading(false);
  };

  const initTopIdea = async () => {
    const result = await TopIdeaService.getTopIdea(
      question.questionId,
      topIdeaId,
      () => redirectToNotFoundPage(question.country, question.language)
    );
    if (result) {
      const { questionTopIdea } = result;
      setTopIdea(questionTopIdea);
      initRelatedProposals(questionTopIdea.ideaId);
    }
  };

  useEffect(() => {
    initTopIdea().then(() => {
      trackDisplayTopIdeas('top-idea-details');
    });
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
  const topComponentContext: TopComponentContextValueType = TopComponentContextValue.getTopideaProposalList();

  return (
    <>
      <MetaTags
        title={i18n.t('meta.top-idea-details.title', {
          idea: topIdea ? topIdea.name : '',
        })}
        description={i18n.t('meta.top-idea-details.description', {
          idea: topIdea ? topIdea.name : '',
          question: question.wording.question,
        })}
        picture={i18n.t('meta.top-idea-details.picture')}
      />
      <TopIdeaDetailsSkipLinks
        hasComments={hasComments}
        hasProposals={hasProposals}
      />
      <MobileDescriptionImage question={question} />
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
        <ConsultationSidebar question={question} />
        <ConsultationPageContentStyle id="main" data-cy-container="main">
          <ColumnElementStyle>
            <Breadcrumbs parentPages={parentPages} currentPage={currentPage} />
            {topIdea && <TopIdeaCard topIdea={topIdea} />}
          </ColumnElementStyle>
          {hasComments && (
            <div id="comments_list">
              <TopIdeaDetailsPageTitleStyle>
                <TopIdeaDetailsIconStyle aria-hidden />
                {i18n.t('idea_details.comments')}
              </TopIdeaDetailsPageTitleStyle>
              <section>
                {topIdea &&
                  topIdea.comments.map(comment => (
                    <OpinionComment
                      key={comment.id}
                      question={question}
                      comment={comment}
                    />
                  ))}
              </section>
            </div>
          )}
          {hasProposals && (
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
                  {relatedProposals.map((proposal, index) => (
                    <ProposalCardTagged
                      key={proposal.id}
                      proposal={proposal}
                      position={index + 1}
                      size={relatedProposals.length}
                    />
                  ))}
                </InfiniteProposalsContainerStyle>
              </TopComponentContext.Provider>
            </ColumnElementStyle>
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
      </ConsultationPageWrapperStyle>
      <FollowUs question={question} />
    </>
  );
};

const TopIdeaDetailsPage = withQuestionData(TopIdeaDetailsPageWrapper);

// default export needed for loadable component
export default TopIdeaDetailsPage; // eslint-disable-line import/no-default-export
