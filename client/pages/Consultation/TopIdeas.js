// @flow
import React, { useEffect, useState } from 'react';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { type TopIdea as TypeTopIdea } from 'Shared/types/topIdea';
import { trackDisplayIdeas } from 'Shared/services/Tracking';
import { IdeaCards } from 'Client/features/ideas/IdeaCards';
import { IntroBanner } from 'Client/features/consultation/IntroBanner/index';
import { IdeasSidebar } from 'Client/features/ideas/Sidebar';
import { getTopIdeas } from 'Shared/services/TopIdea';
import { useMobile } from 'Client/hooks/useMedia';
import { FollowUs } from 'Client/features/flipping/FollowUs';
import { withQuestionData } from './fetchQuestionData';
import {
  ConsultationPageContentStyle,
  ConsultationPageWrapperStyle,
  ConsultationPageSidebarStyle,
} from './style';

type Props = {
  question: TypeQuestion,
};

const TopIdeasPageWrapper = ({ question }: Props) => {
  const isMobile = useMobile();
  const [topIdeas, setTopIdeas] = useState<TypeTopIdea[]>([]);

  useEffect(() => {
    getTopIdeas(question.questionId).then(response => {
      setTopIdeas(response);
    });
  }, []);

  useEffect(() => {
    trackDisplayIdeas('ideas');
  }, []);

  return (
    <>
      <IntroBanner question={question} />
      <ConsultationPageWrapperStyle>
        <ConsultationPageSidebarStyle>
          <IdeasSidebar question={question} />
        </ConsultationPageSidebarStyle>
        <ConsultationPageContentStyle>
          <IdeaCards topIdeas={topIdeas} />
        </ConsultationPageContentStyle>
        {isMobile && <FollowUs />}
      </ConsultationPageWrapperStyle>
    </>
  );
};

const TopIdeasPage = withQuestionData(TopIdeasPageWrapper);

// default export needed for loadable component
export default TopIdeasPage; // eslint-disable-line import/no-default-export
