// @flow
import React, { useEffect, useState } from 'react';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { type TopIdea as TypeTopIdea } from 'Shared/types/topIdea';
import { IntroBanner } from 'Client/features/consultation/IntroBanner/index';
import { getTopIdeas } from 'Shared/services/TopIdea';
import { trackDisplayTopIdeas } from 'Shared/services/Tracking';
import { TopIdeasSidebar } from 'Client/features/topIdeas/Sidebar';
import { useMobile } from 'Client/hooks/useMedia';
import { FollowUs } from 'Client/features/flipping/FollowUs';
import { i18n } from 'Shared/i18n';
import { TopIdeaCard } from 'Client/features/topIdeas/Card';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { MUNICIPAL_PERSONALITY_HEADER } from 'Shared/constants/featureFlipping';
import { CandidateEngagement } from 'Client/custom/municipales/CandidateEngagement';
import { checkIsFeatureActivated } from 'Client/helper/featureFlipping';
import { MetaTags } from 'Client/app/MetaTags';
import { withQuestionData } from './fetchQuestionData';
import {
  ConsultationPageContentStyle,
  ConsultationPageWrapperStyle,
  ConsultationPageSidebarStyle,
  TopIdeasPageTitleStyle,
  TopIdeasListStyle,
  TopIdeasListItemStyle,
  ConsultationHeaderWrapperStyle,
} from './style';

type Props = {
  question: TypeQuestion,
};

const TopIdeasPageWrapper = ({ question }: Props) => {
  const isMobile = useMobile();
  const [topIdeas, setTopIdeas] = useState<TypeTopIdea[]>([]);
  const hasTopIdeas = topIdeas && topIdeas.length > 0;

  // @todo remove or refactor when Municipales is over
  const withPersonalityHeader: boolean = checkIsFeatureActivated(
    MUNICIPAL_PERSONALITY_HEADER,
    question.activeFeatures
  );

  useEffect(() => {
    getTopIdeas(question.questionId).then(response => {
      setTopIdeas(response);
    });
  }, []);

  useEffect(() => {
    trackDisplayTopIdeas('top-ideas');
  }, []);

  return (
    <>
      <MetaTags
        title={i18n.t('meta.top-ideas.title', {
          question: question.wording.question,
        })}
        description={i18n.t('meta.top-ideas.description', {
          question: question.wording.question,
        })}
      />
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
          <TopIdeasPageTitleStyle>
            {i18n.t('idea_card.title')}
          </TopIdeasPageTitleStyle>
          <TopIdeasListStyle>
            {hasTopIdeas ? (
              topIdeas.map((topIdea, index) => (
                <TopIdeasListItemStyle key={topIdea.id}>
                  <TopIdeaCard
                    position={index + 1}
                    topIdea={topIdea}
                    withDetails
                  />
                </TopIdeasListItemStyle>
              ))
            ) : (
              <Spinner />
            )}
          </TopIdeasListStyle>
        </ConsultationPageContentStyle>
        {isMobile && <FollowUs />}
      </ConsultationPageWrapperStyle>
    </>
  );
};

const TopIdeasPage = withQuestionData(TopIdeasPageWrapper);

// default export needed for loadable component
export default TopIdeasPage; // eslint-disable-line import/no-default-export
