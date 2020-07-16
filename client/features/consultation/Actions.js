// @flow
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { type QuestionType } from 'Shared/types/question';
import {
  ConsultationPageContentStyle,
  ConsultationPageSidebarStyle,
} from 'Client/pages/Consultation/style';
import Logo from 'Client/app/assets/images/logo.svg';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import { i18n } from 'Shared/i18n';
import { type StateRoot } from 'Shared/store/types';
import { PartnersTileContent } from 'Client/features/consultation/Actions/Tiles/Sidebar/Partners';
import { PlanTileContent } from 'Client/features/consultation/Actions/Tiles/Sidebar/Plan';
import { RegisterTileContent } from 'Client/features/consultation/Actions/Tiles/Register';
import { modalShowRegister } from 'Shared/store/actions/modal';
import { SupportContent } from 'Client/features/consultation/Actions/Support';
import { selectAuthentication } from 'Shared/store/selectors/user.selector';
import { Image } from 'Client/ui/Image';

type Props = {
  question: QuestionType,
};

export const ActionsContent = ({ question }: Props) => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: StateRoot) =>
    selectAuthentication(state)
  );

  return (
    <>
      <ConsultationPageSidebarStyle id="sidebar_content">
        <TileWithTitle title={i18n.t('actions.plan.title')}>
          <PlanTileContent />
        </TileWithTitle>
        <TileWithTitle title={i18n.t('actions.partners.title')}>
          <PartnersTileContent
            partners={question.partners}
            aboutUrl={question.aboutUrl}
          />
        </TileWithTitle>
      </ConsultationPageSidebarStyle>
      <ConsultationPageContentStyle id="main" data-cy-container="main">
        {!isLoggedIn && (
          <TileWithTitle title={<Image src={Logo} width={46} alt="Make.org" />}>
            <RegisterTileContent
              handleRegisterModal={() => dispatch(modalShowRegister())}
            />
          </TileWithTitle>
        )}
        <SupportContent />
      </ConsultationPageContentStyle>
    </>
  );
};
