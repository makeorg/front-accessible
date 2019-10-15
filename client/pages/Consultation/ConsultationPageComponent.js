import React, { useState, useEffect } from 'react';
import { matchPath, Redirect, type Location } from 'react-router';
import { Link } from 'react-router-dom';
import { i18n } from 'Shared/i18n';
import { isGreatCause } from 'Shared/helpers/question';
import { type QuestionConfiguration as TypeQuestionConfiguration } from 'Shared/types/sequence';
import {
  type Question as TypeQuestion,
  type QuestionResults as TypeQuestionResults,
} from 'Shared/types/question';
import { trackClickActionsTab } from 'Shared/services/Tracking';
import { ROUTE_CONSULTATION, ROUTE_ACTION } from 'Shared/routes';
import { IntroBanner } from 'Client/features/consultation/IntroBanner';
import { MobileSharing } from 'Client/features/consultation/MobileSharing';
import {
  TabNavStyle,
  TabListStyle,
  FullWidthTabStyle,
} from 'Client/ui/Elements/Tabs';
import { ConsultationPanelContent } from 'Client/features/consultation/TabsContent/Panel/Consultation';
import { ActionsPanelContent } from 'Client/features/consultation/TabsContent/Panel/Actions';
import { ConsultationTabContent } from 'Client/features/consultation/TabsContent/Tab/Consultation';
import { ConsultationPanelInnerStyle } from 'Client/features/consultation/Styled/Tabs';
import { ConsultationSkipLinks } from 'Client/app/SkipLinks/Consultation';
import { getConsultationLink } from 'Shared/helpers/url';
import { ActionsSkipLinks } from 'Client/app/SkipLinks/Actions';
import { useMobile } from 'Client/hooks/useMedia';
import { getIsActiveFeature } from 'Client/helper/featureFlipping';
import { ResultsPannel } from 'Client/features/consultation/TabsContent/Panel/Results';
import { ConsultationPageWrapperStyle } from './Styled';

type Props = {
  questionResults: TypeQuestionResults,
  questionConfiguration: TypeQuestionConfiguration,
  question: TypeQuestion,
  consultationLink: string,
  actionLink: string,
  location: Location,
};

export const ConsultationPageComponent = ({
  questionResults,
  questionConfiguration,
  question,
  consultationLink,
  actionLink,
  location,
}: Props) => {
  const isConsultationPage = !!matchPath(location.pathname, ROUTE_CONSULTATION);
  const isActionPage = !!matchPath(location.pathname, ROUTE_ACTION);
  const isMobile = useMobile();
  const questionIsGreatCause = isGreatCause(question.operationKind);
  const [isActiveFeature, setFeatureFlipping] = useState(() => () => false);

  useEffect(() => {
    setFeatureFlipping(() => getIsActiveFeature(question.activeFeatures));
  }, [question]);

  /** @toDo: remove or refactor after the end of bretagne consultation */
  const bretagneNavNames = {
    'bretagne-qualite-vie': 'Qualité de vie',
    'bretagne-ecologique-durable': 'Écologie',
    'bretagne-dynamisme-economique': 'Économie',
    'bretagne-vivre-ensemble': 'Vivre ensemble',
  };
  const navName = (slug, defaultName) =>
    slug in bretagneNavNames ? bretagneNavNames[slug] : defaultName;

  return (
    <React.Fragment>
      {isConsultationPage && (
        <ConsultationSkipLinks canPropose={question.canPropose} />
      )}
      {isActionPage && <ActionsSkipLinks />}
      {isActiveFeature('operation-multi-questions-navigation') &&
        question.operation.questions.length > 0 && (
          <TabListStyle>
            {question.operation.questions.map(siblingQuestion => (
              <FullWidthTabStyle
                isSelected={siblingQuestion.questionId === question.questionId}
                key={siblingQuestion.questionId}
              >
                <Link
                  to={getConsultationLink(
                    siblingQuestion.country,
                    siblingQuestion.language,
                    siblingQuestion.questionSlug
                  )}
                  aria-current={
                    siblingQuestion.questionId === question.questionId
                  }
                >
                  <React.Fragment>
                    {navName(
                      siblingQuestion.questionSlug,
                      siblingQuestion.question
                    )}
                  </React.Fragment>
                </Link>
              </FullWidthTabStyle>
            ))}
          </TabListStyle>
        )}
      <IntroBanner
        question={question}
        questionConfiguration={questionConfiguration}
      />
      <ConsultationPageWrapperStyle>
        <TabNavStyle
          aria-label={i18n.t('common.consultation_nav', {
            name: question.wording.question,
          })}
          id="consultation_nav"
        >
          <TabListStyle>
            <FullWidthTabStyle isSelected={isConsultationPage}>
              <Link to={consultationLink} aria-current={isConsultationPage}>
                <ConsultationTabContent question={question} />
              </Link>
            </FullWidthTabStyle>
            {questionIsGreatCause && (
              <FullWidthTabStyle isSelected={isActionPage}>
                <Link
                  to={actionLink}
                  aria-current={isActionPage}
                  onClick={() => {
                    trackClickActionsTab();
                  }}
                >
                  {i18n.t('consultation.tabs.action')}
                </Link>
              </FullWidthTabStyle>
            )}
          </TabListStyle>
        </TabNavStyle>
        <ConsultationPanelInnerStyle>
          {isConsultationPage && (
            <React.Fragment>
              {questionResults ? (
                <ResultsPannel
                  question={question}
                  questionConfiguration={questionConfiguration}
                  questionResults={questionResults}
                />
              ) : (
                <ConsultationPanelContent
                  question={question}
                  questionConfiguration={questionConfiguration}
                />
              )}
            </React.Fragment>
          )}
          {isActionPage && !questionIsGreatCause && <Redirect to="/notfound" />}
          {isActionPage && questionIsGreatCause && (
            <ActionsPanelContent
              question={question}
              questionConfiguration={questionConfiguration}
            />
          )}
        </ConsultationPanelInnerStyle>
      </ConsultationPageWrapperStyle>
      {isMobile && <MobileSharing />}
    </React.Fragment>
  );
};
