// @flow
import React, { useState } from 'react';
import { i18n } from 'Shared/i18n';
import { useSelector } from 'react-redux';
import { CheckBox } from 'Client/ui/Elements/Form/CheckBox';
import { SubmitButton } from 'Client/ui/Elements/Form/SubmitButton';
import { getDataPageLink } from 'Shared/helpers/url';
import { DATA_POLICY_CONSENT } from 'Shared/constants/form';
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
} from './style';

export const DataPolicy = () => {
  const [dataPolicyConsent, setDataPolicyConsent] = useState<boolean>(false);
  const { country } = useSelector((state: StateRoot) => state.appConfig);
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
  const handleCheck = (event: SyntheticEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setDataPolicyConsent(!dataPolicyConsent);
    setCanSubmit(!canSubmit);
  };

  return (
    <DataPolicyContentStyle>
      <DataPolicyTitleStyle>
        {i18n.t('data_policy_modal.title')}
      </DataPolicyTitleStyle>
      <DataPolicyParagraphStyle>
        {i18n.t('data_policy_modal.description')}
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
      </DataPolicyParagraphStyle>
      <CheckBox
        name="dataPolicyConsent"
        value={dataPolicyConsent}
        handleCheck={handleCheck}
        label={
          <span
            dangerouslySetInnerHTML={{
              __html: i18n.t('data_policy_modal.consent'),
            }}
          />
        }
        isChecked={dataPolicyConsent}
        required
        isBlack
        noFontSizeChange
      />
      <ButtonWrapperStyle>
        <SubmitButton
          disabled={!canSubmit}
          formName={DATA_POLICY_CONSENT}
          label={i18n.t('data_policy_modal.validate')}
        />
      </ButtonWrapperStyle>
    </DataPolicyContentStyle>
  );
};
