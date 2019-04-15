import React from 'react';
import { matchPath, type Location } from 'react-router';
import { Switch, Route, Link } from 'react-router-dom';
import { i18n } from 'Shared/i18n';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { type Question } from 'Shared/types/question';
import { MetaTags } from 'Client/app/MetaTags';
import { IntroBanner } from 'Client/features/consultation/IntroBanner';
import { MobileSharing } from 'Client/features/consultation/MobileSharing';
import { SkipLink } from 'Client/app/Styled/MainElements';
import { ROUTE_CONSULTATION, ROUTE_ACTION } from 'Shared/routes';
import { TabListStyle, TabStyle } from 'Client/ui/Elements/Tabs';
import { ConsultationPanelContent } from 'Client/features/consultation/TabsContent/Panel/Consultation';
import { ActionsPanelContent } from 'Client/features/consultation/TabsContent/Panel/Actions';
import { ConsultationTabContent } from 'Client/features/consultation/TabsContent/Tab/Consultation';
import { HiddenOnDesktopStyle } from 'Client/ui/Elements/HiddenElements';
import { ConsultationPanelInnerStyle } from 'Client/features/consultation/Styled/Tabs';
import { ConsultationPageWrapperStyle, ConsultationPageNav } from './Styled';

type Props = {
  questionConfiguration: QuestionConfiguration,
  question: Question,
  selectedTagIds: string[],
  consultationLink: string,
  actionLink: string,
  location: Location,
  handleSelectTag: () => void,
};

export const ConsultationPageComponent = (props: Props) => {
  const {
    questionConfiguration,
    question,
    selectedTagIds,
    consultationLink,
    actionLink,
    location,
    handleSelectTag,
  } = props;

  const isConsultationPage = !!matchPath(location.pathname, ROUTE_CONSULTATION);
  const isActionPage = !!matchPath(location.pathname, ROUTE_ACTION);

  const { metas } = questionConfiguration.wording;

  return (
    <React.Fragment>
      <MetaTags
        title={metas.title}
        description={metas.description}
        picture={metas.picture}
      />
      <SkipLink as="a" href="#intro ">
        {i18n.t('skip_links.intro')}
      </SkipLink>
      <SkipLink as="a" href="#main ">
        {i18n.t('skip_links.main')}
      </SkipLink>
      <SkipLink as="a" href="#sidebar">
        {i18n.t('skip_links.sidebar')}
      </SkipLink>
      <IntroBanner
        question={question}
        questionConfiguration={questionConfiguration}
      />
      <ConsultationPageWrapperStyle>
        <ConsultationPageNav aria-label={i18n.t('consultation.tabs.label')}>
          <TabListStyle>
            <TabStyle selected={isConsultationPage}>
              <Link to={consultationLink} aria-selected={isConsultationPage}>
                <ConsultationTabContent question={question} />
              </Link>
            </TabStyle>

            {questionConfiguration.isGreatCause && (
              <TabStyle selected={isActionPage}>
                <Link to={actionLink} aria-selected={isActionPage}>
                  {i18n.t('consultation.tabs.action')}
                </Link>
              </TabStyle>
            )}
          </TabListStyle>
        </ConsultationPageNav>
        <ConsultationPanelInnerStyle>
          <Switch>
            <Route
              path={ROUTE_CONSULTATION}
              exact
              component={() => (
                <ConsultationPanelContent
                  question={question}
                  questionConfiguration={questionConfiguration}
                  selectedTagIds={selectedTagIds}
                  handleSelectTag={handleSelectTag}
                />
              )}
            />
            {questionConfiguration.isGreatCause && (
              <Route
                path={ROUTE_ACTION}
                exact
                component={() => (
                  <ActionsPanelContent
                    questionConfiguration={questionConfiguration}
                  />
                )}
              />
            )}
          </Switch>
        </ConsultationPanelInnerStyle>
      </ConsultationPageWrapperStyle>
      <HiddenOnDesktopStyle>
        <MobileSharing />
      </HiddenOnDesktopStyle>
    </React.Fragment>
  );
};
