// @flow
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { type QuestionType } from 'Shared/types/question';
import { type TopIdeaType } from 'Shared/types/topIdea';
import { trackDisplayTopIdeas } from 'Shared/services/Tracking';
import { IntroBanner } from 'Client/features/consultation/IntroBanner/index';
import { FollowUs } from 'Client/features/flipping/FollowUs';
import { TopIdeaService } from 'Shared/services/TopIdea';
import { TopIdeaCard } from 'Client/features/topIdeas/Card';
import { i18n } from 'Shared/i18n';
import { type BreadcrumbsPagesType, Breadcrumbs } from 'Client/app/Breadcrumbs';
import { getTopIdeasLink, redirectToNotFoundPage } from 'Shared/helpers/url';
import { MUNICIPAL_PERSONALITY_HEADER } from 'Shared/constants/featureFlipping';
import { CandidateEngagement } from 'Client/custom/municipales/CandidateEngagement';
import { checkIsFeatureActivated } from 'Client/helper/featureFlipping';
import { MetaTags } from 'Client/app/MetaTags';
import { ConsultationSidebar } from 'Client/features/consultation/Sidebar';
import { ColumnElementStyle } from 'Client/ui/Elements/FlexElements';
import { TopIdeaDetailsSkipLinks } from 'Client/app/SkipLinks/TopIdeaDetails';
import { TopIdeaDetailsProposals } from 'Client/features/topIdeas/Proposals';
import { TopIdeaDetailsComments } from 'Client/features/topIdeas/Comments';
import { MobileDescriptionImage } from 'Client/features/consultation/MobileDescriptionImage';
import { useMobile } from 'Client/hooks/useMedia';
import { withQuestionData } from './fetchQuestionData';
import {
  ConsultationPageContentStyle,
  ConsultationPageWrapperStyle,
  ConsultationHeaderWrapperStyle,
} from './style';

type Props = {
  question: QuestionType,
};

const TopIdeaDetailsPageWrapper = ({ question }: Props) => {
  const isMobile = useMobile();
  const { topIdeaId } = useParams();
  const location = useLocation();
  const [topIdea, setTopIdea] = useState<?TopIdeaType>(undefined);
  const hasComments = topIdea && topIdea.comments.length > 0;

  // @todo remove or refactor when Municipales is over
  const withPersonalityHeader: boolean = checkIsFeatureActivated(
    MUNICIPAL_PERSONALITY_HEADER,
    question.activeFeatures
  );

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

  const initTopIdea = async () => {
    const result = await TopIdeaService.getTopIdea(
      question.questionId,
      topIdeaId,
      () => redirectToNotFoundPage(question.country, question.language)
    );
    if (result) {
      const { questionTopIdea } = result;
      setTopIdea(questionTopIdea);
    }
  };

  useEffect(() => {
    initTopIdea().then(() => {
      trackDisplayTopIdeas('top-idea-details');
    });
  }, [question, topIdeaId]);

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
      <TopIdeaDetailsSkipLinks hasComments={hasComments} />
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
          {topIdea && (
            <>
              <TopIdeaDetailsComments
                comments={topIdea && topIdea.comments}
                question={question}
              />
              <TopIdeaDetailsProposals topIdea={topIdea} question={question} />
            </>
          )}
        </ConsultationPageContentStyle>
      </ConsultationPageWrapperStyle>
      {isMobile && <FollowUs question={question} />}
    </>
  );
};

const TopIdeaDetailsPage = withQuestionData(TopIdeaDetailsPageWrapper);

// default export needed for loadable component
export default TopIdeaDetailsPage; // eslint-disable-line import/no-default-export
