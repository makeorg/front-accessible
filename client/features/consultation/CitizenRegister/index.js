import React from 'react';
import { AuthenticationRegisterButtons } from 'Client/features/auth/Register/Buttons';
import { i18n } from 'Shared/i18n';
import { useSelector } from 'react-redux';
import { type StateRoot } from 'Shared/store/types';
import { selectAuthentication } from 'Shared/store/selectors/user.selector';

import {
  CitizenRegisterContentStyle,
  CitizenRegisterTitleStyle,
  CitizenRegisterWrapperStyle,
  CitizenRegisterSubtitleStyle,
  SocialRegisterLabelStyle,
  SocialCitizenRegisterWrapperStyle,
} from './style';

export const CitizenRegister = () => {
  const { isLoggedIn } = useSelector((state: StateRoot) =>
    selectAuthentication(state)
  );
  if (isLoggedIn) {
    return null;
  }

  return (
    <CitizenRegisterWrapperStyle as="section">
      <CitizenRegisterContentStyle>
        <CitizenRegisterTitleStyle>
          {i18n.t('consultation.citizen_account.title')}
        </CitizenRegisterTitleStyle>
        <CitizenRegisterSubtitleStyle>
          {i18n.t('consultation.citizen_account.description')}
        </CitizenRegisterSubtitleStyle>
        <SocialCitizenRegisterWrapperStyle>
          <SocialRegisterLabelStyle>
            {i18n.t('consultation.citizen_account.register_links')}
          </SocialRegisterLabelStyle>
          <AuthenticationRegisterButtons />
        </SocialCitizenRegisterWrapperStyle>
      </CitizenRegisterContentStyle>
    </CitizenRegisterWrapperStyle>
  );
};
