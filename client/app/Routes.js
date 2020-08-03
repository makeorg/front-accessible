import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import loadable from '@loadable/component';
import {
  ROUTE_SEARCH,
  ROUTE_SEARCH_PROPOSALS,
  ROUTE_SEARCH_ORGANISATIONS,
  ROUTE_SEARCH_CONSULTATIONS,
  ROUTE_CONSULTATION,
  ROUTE_ACTION,
  ROUTE_SEQUENCE,
  ROUTE_ACCOUNT_ACTIVATION,
  ROUTE_PROPOSAL,
  ROUTE_PASSWORD_RECOVERY,
  ROUTE_PROFILE,
  ROUTE_PROFILE_EDIT,
  ROUTE_PROFILE_PROPOSALS,
  ROUTE_PROFILE_FAVOURITES,
  ROUTE_PROFILE_FOLLOWING,
  ROUTE_ORGANISATION_PROFILE,
  ROUTE_ORGANISATION_PROPOSALS,
  ROUTE_ORGANISATION_VOTES,
  ROUTE_COUNTRY_LANG,
  ROUTE_STATIC_LEGAL,
  ROUTE_STATIC_GTU,
  ROUTE_STATIC_DATA,
  ROUTE_STATIC_CONTACT,
  ROUTE_RESULTS,
  ROUTE_TOP_IDEAS,
  ROUTE_PERSONALITY_PROFILE,
  ROUTE_TOP_IDEA_DETAILS,
  ROUTE_PROFILE_OPINIONS,
  ROUTE_STATIC_NOTFOUND,
  ROUTE_STATIC_LEGAL_EN,
  ROUTE_STATIC_GTU_EN,
  ROUTE_STATIC_DATA_EN,
  ROUTE_STATIC_CONTACT_EN,
  ROUTE_SOON,
  ROUTE_BROWSE_CONSULTATIONS,
  ROUTE_BROWSE_RESULTS,
  BASE_PREVIEW_PATH,
} from 'Shared/routes';
import { TwitterUniversalTag } from 'Shared/services/Trackers/TwitterTracking';
import { QuestionWrapper } from 'Client/pages/Consultation/QuestionWrapper';
import { usePageBackgoundColor } from 'Client/hooks/usePageBackgroundColor';

const BrowsePage = loadable(() => import('Client/pages/Browse/index.js'));
const ConsultationPage = loadable(() =>
  import('Client/pages/Consultation/Consultation.js')
);
const ActionsPage = loadable(() =>
  import('Client/pages/Consultation/Actions.js')
);
export const ResultsPage = loadable(() =>
  import('Client/pages/Consultation/Results.js')
);
const TopIdeasPage = loadable(() =>
  import('Client/pages/Consultation/TopIdeas.js')
);
const TopIdeaDetailsPage = loadable(() =>
  import('Client/pages/Consultation/TopIdeaDetails.js')
);
const SequencePage = loadable(() =>
  import('Client/pages/Consultation/Sequence')
);
const PasswordRecoveryPage = loadable(() =>
  import('Client/pages/PasswordRecovery')
);
const NotFoundPage = loadable(() => import('Client/pages/NotFound'));
const HomePage = loadable(() => import('Client/pages/Home'));
const ProposalPage = loadable(() => import('Client/pages/Proposal'));
const AccountActivationPage = loadable(() =>
  import('Client/pages/AccountActivation')
);
const ProfileEditPage = loadable(() => import('Client/pages/Profile/Edit'));

const ProfilePage = loadable(() => import('Client/pages/Profile'));

const ProfileOpinionsPage = loadable(() =>
  import('Client/pages/Profile/Opinions')
);

const OrganisationPage = loadable(() => import('Client/pages/Organisation'));

const PersonalityPage = loadable(() => import('Client/pages/Personality'));

const SearchPage = loadable(() => import('Client/pages/Search'));

const LegalPage = loadable(() => import('Client/pages/Static/Legal'));
const TermsOfUse = loadable(() => import('Client/pages/Static/TermsOfUse'));
const Data = loadable(() => import('Client/pages/Static/Data'));
const Contact = loadable(() => import('Client/pages/Static/Contact'));

export const Routes = () => {
  const location = useLocation();
  const { country } = useSelector((state: StateRoot) => state.appConfig);
  const { pathname } = location;

  usePageBackgoundColor(pathname);

  React.useEffect(() => {
    TwitterUniversalTag.pageView();
  }, [location.pathname]);

  return (
    <Switch>
      <Route path={ROUTE_BROWSE_CONSULTATIONS} component={BrowsePage} />
      <Route path={ROUTE_BROWSE_RESULTS} component={BrowsePage} />
      <Route path={ROUTE_CONSULTATION}>
        <QuestionWrapper withRedirect>
          <ConsultationPage />
        </QuestionWrapper>
      </Route>
      <Route path={ROUTE_ACTION}>
        <QuestionWrapper>
          <ActionsPage />
        </QuestionWrapper>
      </Route>
      <Route path={ROUTE_SEQUENCE}>
        <QuestionWrapper withRedirect>
          <SequencePage />
        </QuestionWrapper>
      </Route>
      <Route path={ROUTE_RESULTS}>
        <QuestionWrapper>
          <ResultsPage />
        </QuestionWrapper>
      </Route>
      <Route path={`${BASE_PREVIEW_PATH}${ROUTE_RESULTS}`}>
        <QuestionWrapper>
          <ResultsPage />
        </QuestionWrapper>
      </Route>
      <Route path={ROUTE_TOP_IDEA_DETAILS}>
        <QuestionWrapper>
          <TopIdeaDetailsPage />
        </QuestionWrapper>
      </Route>
      <Route path={ROUTE_TOP_IDEAS}>
        <QuestionWrapper>
          <TopIdeasPage />
        </QuestionWrapper>
      </Route>
      <Route
        path={ROUTE_ACCOUNT_ACTIVATION}
        component={AccountActivationPage}
      />
      <Route path={ROUTE_PROPOSAL} component={ProposalPage} />
      <Route path={ROUTE_PASSWORD_RECOVERY} component={PasswordRecoveryPage} />
      <Route path={ROUTE_PROFILE_EDIT} component={ProfileEditPage} />
      <Route path={ROUTE_PROFILE_PROPOSALS} component={ProfilePage} />
      <Route path={ROUTE_PROFILE_FAVOURITES} component={ProfilePage} />
      <Route path={ROUTE_PROFILE_FOLLOWING} component={ProfilePage} />
      <Route path={ROUTE_PROFILE_OPINIONS} component={ProfileOpinionsPage} />
      <Route path={ROUTE_ORGANISATION_PROPOSALS} component={OrganisationPage} />
      <Route path={ROUTE_ORGANISATION_VOTES} component={OrganisationPage} />
      <Route path={ROUTE_SEARCH} component={SearchPage} />
      <Route path={ROUTE_SEARCH_PROPOSALS} component={SearchPage} />
      <Route path={ROUTE_SEARCH_ORGANISATIONS} component={SearchPage} />
      <Route path={ROUTE_SEARCH_CONSULTATIONS} component={SearchPage} />
      <Route path={ROUTE_PERSONALITY_PROFILE} component={PersonalityPage} />
      <Redirect
        path={ROUTE_ORGANISATION_PROFILE}
        to={ROUTE_ORGANISATION_PROPOSALS}
      />
      <Redirect path={ROUTE_PROFILE} to={ROUTE_PROFILE_PROPOSALS} />
      <Route exact path={ROUTE_COUNTRY_LANG} component={HomePage} />

      <Route path={ROUTE_STATIC_LEGAL} component={LegalPage} />
      <Route path={ROUTE_STATIC_GTU} component={TermsOfUse} />
      <Route path={ROUTE_STATIC_DATA} component={Data} />
      <Route path={ROUTE_STATIC_CONTACT} component={Contact} />
      <Route path={ROUTE_STATIC_NOTFOUND} component={NotFoundPage} />

      {/* Routes used for en language */}
      <Route path={ROUTE_STATIC_LEGAL_EN} component={LegalPage} />
      <Route path={ROUTE_STATIC_GTU_EN} component={TermsOfUse} />
      <Route path={ROUTE_STATIC_DATA_EN} component={Data} />
      <Route path={ROUTE_STATIC_CONTACT_EN} component={Contact} />

      <Route path={ROUTE_STATIC_NOTFOUND} component={NotFoundPage} />
      {country === 'FR' && <Route exact path="/" component={HomePage} />}
      {country !== 'FR' && <Redirect exact path="/" to={ROUTE_SOON} />}

      <Route component={NotFoundPage} />
    </Switch>
  );
};
