// @flow
import React from 'react';
import { Redirect } from 'react-router';
import { type QuestionType } from 'Shared/types/question';
import { isGreatCause } from 'Shared/helpers/question';
import { IntroBanner } from 'Client/features/consultation/IntroBanner';
import { ActionsContent } from 'Client/features/consultation/Actions';
import { ActionsSkipLinks } from 'Client/app/SkipLinks/Actions';
import { FollowUs } from 'Client/features/flipping/FollowUs';
import { NavigationWithTabs } from 'Client/features/consultation/Navigation/Tabs';
import { MetaTags } from 'Client/app/MetaTags';
import { i18n } from 'Shared/i18n';
import { LocalActorsTile } from 'Client/features/flipping/LocalActors/Tille';
import { MobileDescriptionImage } from 'Client/features/consultation/MobileDescriptionImage';
import { useMobile } from 'Client/hooks/useMedia';
import { withQuestionData } from './fetchQuestionData';
import {
  ConsultationPageWrapperStyle,
  ConsultationHeaderWrapperStyle,
} from './style';

type Props = {
  question: QuestionType,
};

const ConsultationPageWrapper = ({ question }: Props) => {
  const isMobile = useMobile();
  const questionIsGreatCause = isGreatCause(question.operationKind);

  if (!questionIsGreatCause) {
    return <Redirect to="/notfound" />;
  }

  return (
    <>
      <MetaTags
        title={i18n.t('meta.actions.title', {
          question: question.wording.question,
        })}
        description={question.wording.metas.description}
        picture={question.wording.metas.picture}
      />
      <ActionsSkipLinks />
      <MobileDescriptionImage question={question} />
      <ConsultationHeaderWrapperStyle
        gradientStart={question.theme.gradientStart}
        gradientEnd={question.theme.gradientEnd}
        backgroundcolor={question.theme.gradientStart}
      >
        <IntroBanner question={question} />
        {questionIsGreatCause && <NavigationWithTabs question={question} />}
      </ConsultationHeaderWrapperStyle>
      <ConsultationPageWrapperStyle isGreatCause={questionIsGreatCause}>
        <ActionsContent question={question} />
      </ConsultationPageWrapperStyle>
      {isMobile && (
        <>
          <LocalActorsTile question={question} />
          <FollowUs question={question} />
        </>
      )}
    </>
  );
};

const ConsultationPage = withQuestionData(ConsultationPageWrapper);

// default export needed for loadable component
export default ConsultationPage; // eslint-disable-line import/no-default-export
