import React from 'react';
import { matchPath, Redirect, type Location } from 'react-router';
import { Switch, Route, Link } from 'react-router-dom';
import { i18n } from 'Shared/i18n';
import { isGreatCause } from 'Shared/helpers/question';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { type Question } from 'Shared/types/question';
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
import { ActionsSkipLinks } from 'Client/app/SkipLinks/Actions';
import { useMobile } from 'Client/hooks/useMedia';
import { ConsultationPageWrapperStyle } from './Styled';

type Props = {
  questionConfiguration: QuestionConfiguration,
  question: Question,
  consultationLink: string,
  actionLink: string,
  location: Location,
};

export const ConsultationPageComponent = ({
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

  return (
    <React.Fragment>
      {isConsultationPage && (
        <ConsultationSkipLinks canPropose={question.canPropose} />
      )}
      {isActionPage && <ActionsSkipLinks />}
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
          <Switch>
            <Route
              path={ROUTE_CONSULTATION}
              exact
              component={() => (
                <ConsultationPanelContent
                  question={question}
                  questionConfiguration={questionConfiguration}
                />
              )}
            />
            <Route
              path={ROUTE_ACTION}
              exact
              component={() => {
                if (!questionIsGreatCause) {
                  return <Redirect to="/notfound" />;
                }
                return (
                  <ActionsPanelContent
                    question={question}
                    questionConfiguration={questionConfiguration}
                  />
                );
              }}
            />
          </Switch>
        </ConsultationPanelInnerStyle>
      </ConsultationPageWrapperStyle>
      {isMobile && <MobileSharing />}
    </React.Fragment>
  );
};
