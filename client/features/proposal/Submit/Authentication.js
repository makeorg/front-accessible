// @flow
import React, { useEffect } from 'react';
import { type StateRoot } from 'Shared/store/types';
import { i18n } from 'Shared/i18n';
import { ColumnElementStyle } from 'Client/ui/Elements/FlexElements';
import { AuthenticationRegisterButtons } from 'Client/features/auth/Register/Buttons';
import {
  trackClickPersonnalDataLink,
  trackDisplayAuthenticationForm,
} from 'Shared/services/Tracking';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getDataPageLink } from 'Shared/helpers/url';
import { closePanel } from 'Shared/store/reducers/panel/actions';
import { modalShowLogin } from 'Shared/store/actions/modal';
import { selectAuthentication } from 'Shared/store/selectors/user.selector';
import {
  ProposalStepWrapperStyle,
  ProposalBackButtonStyle,
  ProposalBackIconWrapperStyle,
  ProposalBackIconStyle,
  ProposalAuthWrapperStyle,
  ProposalStepTitleStyle,
  ProposalAuthSubtitleStyle,
  ProposalAuthDisclaimerStyle,
  ProposalAuthSeparatorStyle,
  ProposalAuthLoginStyle,
  ProposalAuthCancelStyle,
} from './style';

type Props = {
  handleStepBack: () => void,
  handleCancel: () => void,
  handleProposeAPICall: () => void,
};

export const ProposalAthentication = ({
  handleStepBack,
  handleCancel,
  handleProposeAPICall,
}: Props) => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: StateRoot) =>
    selectAuthentication(state)
  );
  const { country, language } = useSelector(
    (state: StateRoot) => state.appConfig
  );
  const handleModerationLink = () => {
    dispatch(closePanel());
    trackClickPersonnalDataLink();
  };

  useEffect(() => {
    trackDisplayAuthenticationForm();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      handleProposeAPICall();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return (
    <ProposalStepWrapperStyle>
      <ColumnElementStyle>
        <ProposalBackButtonStyle onClick={handleStepBack}>
          <ProposalBackIconWrapperStyle>
            <ProposalBackIconStyle aria-hidden />
          </ProposalBackIconWrapperStyle>
          {i18n.t('proposal_submit.authentication.button_back')}
        </ProposalBackButtonStyle>
        <ProposalAuthWrapperStyle>
          <ProposalStepTitleStyle className="center">
            {i18n.t('proposal_submit.authentication.title')}
          </ProposalStepTitleStyle>
          <ProposalAuthSubtitleStyle>
            {i18n.t('proposal_submit.authentication.subtitle')}
          </ProposalAuthSubtitleStyle>
          <AuthenticationRegisterButtons />
          <ProposalAuthDisclaimerStyle>
            {i18n.t('authentication.commitment')}
            <Link
              to={getDataPageLink(country, language)}
              onClick={handleModerationLink}
            >
              {i18n.t('authentication.personal_data')}
            </Link>
          </ProposalAuthDisclaimerStyle>
          <ProposalAuthSeparatorStyle />
          <ProposalAuthLoginStyle onClick={() => dispatch(modalShowLogin())}>
            {i18n.t('proposal_submit.authentication.button_login')}
          </ProposalAuthLoginStyle>
        </ProposalAuthWrapperStyle>
      </ColumnElementStyle>
      <ProposalAuthCancelStyle onClick={handleCancel}>
        {i18n.t('proposal_submit.form.button_cancel')}
      </ProposalAuthCancelStyle>
    </ProposalStepWrapperStyle>
  );
};
