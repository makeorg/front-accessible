// @flow
import React, { useEffect } from 'react';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { trackDisplayIdeas } from 'Shared/services/Tracking';
import { IdeaCards } from 'Client/features/ideas/IdeaCards';
import { IntroBanner } from 'Client/features/consultation/IntroBanner/index';
import { IdeasSidebar } from 'Client/features/ideas/Sidebar';

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

const IdeasPageWrapper = ({ question }: Props) => {
  const isMobile = useMobile();
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
          <IdeaCards question={question} />
        </ConsultationPageContentStyle>
        {isMobile && <FollowUs />}
      </ConsultationPageWrapperStyle>
    </>
  );
};

const IdeasPage = withQuestionData(IdeasPageWrapper);

// default export needed for loadable component
export default IdeasPage; // eslint-disable-line import/no-default-export
