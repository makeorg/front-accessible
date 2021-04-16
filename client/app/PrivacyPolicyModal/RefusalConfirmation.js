// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { RedButtonStyle } from 'Client/ui/Elements/Buttons/style';
import { getDataPageLink } from 'Shared/helpers/url';
import { useSelector } from 'react-redux';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import {
  DataPolicyNewWindowLinkStyle,
  NewWindowIconStyle,
} from 'Client/ui/Elements/Form/Styled/CheckBox';

import {
  DataPolicyContentStyle,
  DataPolicyTitleStyle,
  DataPolicyParagraphStyle,
  ButtonWrapperStyle,
  RefusalWhiteButtonStyle,
} from './style';

type Props = {
  toggleConfirmation: () => void,
};

export const RefusalConfirmation = ({ toggleConfirmation }: Props) => {
  const { country } = useSelector((state: StateRoot) => state.appConfig);
  const handleClick = () => {
    toggleConfirmation();
  };
  const handleClose = () => {
    // dispatch(modalClosePrivacyModal);
  };

  return (
    <>
      <DataPolicyContentStyle>
        <DataPolicyTitleStyle>
          {i18n.t('data_policy_modal.refusal_title')}
        </DataPolicyTitleStyle>
        <DataPolicyParagraphStyle isRefusal>
          {i18n.t('data_policy_modal.refusal_description_first_part')}
          <DataPolicyNewWindowLinkStyle
            href={getDataPageLink(country)}
            target="_blank"
            rel="noopener"
          >
            {i18n.t('legal_consent.privacy_policy')}
            <NewWindowIconStyle />
            <ScreenReaderItemStyle>
              {i18n.t('common.open_new_window')}
            </ScreenReaderItemStyle>
          </DataPolicyNewWindowLinkStyle>
          {i18n.t('data_policy_modal.refusal_description_second_part')}
        </DataPolicyParagraphStyle>
        <ButtonWrapperStyle>
          <RedButtonStyle type="button" onClick={handleClick}>
            {i18n.t('data_policy_modal.stay')}
          </RedButtonStyle>
          <RefusalWhiteButtonStyle type="button" onClick={handleClose}>
            {i18n.t('data_policy_modal.leave')}
          </RefusalWhiteButtonStyle>
        </ButtonWrapperStyle>
      </DataPolicyContentStyle>
    </>
  );
};
