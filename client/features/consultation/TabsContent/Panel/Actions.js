import React from 'react';
import { connect } from 'react-redux';
import { type QuestionConfiguration } from 'Shared/types/sequence';
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
import { Tracking } from 'Shared/services/Tracking';
import { modalShowRegister } from 'Shared/store/actions/modal';
import { SupportContent } from 'Client/features/consultation/Actions/Support';
import { selectAuthentification } from 'Shared/store/selectors/user.selector';
import { MetaTags } from 'Client/app/MetaTags';

type Props = {
  questionConfiguration: QuestionConfiguration,
  handleRegisterModal: () => void,
  isLoggedIn: boolean,
};

export class ActionsPanelClass extends React.Component<Props> {
  trackMoreLink = () => {
    Tracking.trackSeeMorePartners();
  };

  render() {
    const {
      questionConfiguration,
      handleRegisterModal,
      isLoggedIn,
    } = this.props;

    return (
      <React.Fragment>
        <MetaTags
          title={i18n.t('meta.actions.title', {
            question: questionConfiguration.wording.question,
          })}
        />
        <ConsultationPageSidebarStyle id="sidebar_content" as="aside">
          <TileWithTitle title={i18n.t('actions.plan.title')}>
            <PlanTileContent />
          </TileWithTitle>
          <TileWithTitle title={i18n.t('actions.partners.title')}>
            <PartnersTileContent
              questionConfiguration={questionConfiguration}
              trackMoreLink={this.trackMoreLink}
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
  }
}

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
)(ActionsPanelClass);
