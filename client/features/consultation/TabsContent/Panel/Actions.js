// @flow
import React from 'react';
import { connect } from 'react-redux';
import { type QuestionConfiguration as TypeQuestionConfiguration } from 'Shared/types/sequence';
import { type Question as TypeQuestion } from 'Shared/types/question';
import {
  ConsultationPageContentStyle,
  ConsultationPageSidebarStyle,
} from 'Client/pages/Consultation/Styled';
import Logo from 'Client/app/assets/images/logo.svg';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import { i18n } from 'Shared/i18n';
import { PartnersTileContent } from 'Client/features/consultation/Actions/Tiles/Sidebar/Partners';
import { PlanTileContent } from 'Client/features/consultation/Actions/Tiles/Sidebar/Plan';
import { RegisterTileContent } from 'Client/features/consultation/Actions/Tiles/Register';
import { modalShowRegister } from 'Shared/store/actions/modal';
import { SupportContent } from 'Client/features/consultation/Actions/Support';
import { selectAuthentification } from 'Shared/store/selectors/user.selector';
import { MetaTags } from 'Client/app/MetaTags';

type Props = {
  questionConfiguration: TypeQuestionConfiguration,
  question: TypeQuestion,
  handleRegisterModal: () => void,
  isLoggedIn: boolean,
};

export const ActionsPanel = ({
  questionConfiguration,
  question,
  handleRegisterModal,
  isLoggedIn,
}: Props) => (
  <React.Fragment>
    <MetaTags
      title={i18n.t('meta.actions.title', {
        question: question.wording.question,
      })}
    />
    <ConsultationPageSidebarStyle id="sidebar_content">
      <TileWithTitle title={i18n.t('actions.plan.title')}>
        <PlanTileContent />
      </TileWithTitle>
      <TileWithTitle title={i18n.t('actions.partners.title')}>
        <PartnersTileContent
          partners={questionConfiguration.partners}
          aboutUrl={question.aboutUrl}
        />
      </TileWithTitle>
    </ConsultationPageSidebarStyle>
    <ConsultationPageContentStyle id="main">
      {!isLoggedIn && (
        <TileWithTitle title={<img src={Logo} width={46} alt="Make.org" />}>
          <RegisterTileContent handleRegisterModal={handleRegisterModal} />
        </TileWithTitle>
      )}
      <SupportContent />
    </ConsultationPageContentStyle>
  </React.Fragment>
);

const mapStateToProps = state => {
  const { isLoggedIn } = selectAuthentification(state);

  return {
    isLoggedIn,
  };
};

const mapDispatchToProps = dispatch => ({
  handleRegisterModal: () => {
    dispatch(modalShowRegister());
  },
});

export const ActionsPanelContent = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionsPanel);
