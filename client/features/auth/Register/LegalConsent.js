// @flow
import React, { useState } from 'react';
import { CheckBox } from 'Client/ui/Elements/Form/CheckBox';
import { LEGAL_CONSENT_FORMNAME } from 'Shared/constants/form';

type Props = {
  handleLegalField: (fieldName: string, value: boolean) => any,
  handleSubmit: (event: SyntheticInputEvent<HTMLInputElement>) => any,
  toggleLegalConsent: () => void,
};

export const LegalConsent = ({
  handleLegalField,
  handleSubmit,
  toggleLegalConsent,
}: Props) => {
  const [minorConsent, setMinorConsent] = useState<boolean>(false);
  const [parentalConsent, setParentalConsent] = useState<boolean>(false);
  const agreedAllConsents = minorConsent && parentalConsent;
  return (
    <form name={LEGAL_CONSENT_FORMNAME} onSubmit={handleSubmit}>
      <CheckBox
        name="legalMinorConsent"
        value={minorConsent}
        handleCheck={() => setMinorConsent(!minorConsent)}
        handleChange={() => handleLegalField('legalMinorConsent', minorConsent)}
        label="legalMinorConsent"
        isChecked={minorConsent}
        required
      />
      <CheckBox
        name="profile.legalAdvisorApproval"
        value={parentalConsent}
        handleCheck={() => setParentalConsent(!parentalConsent)}
        handleChange={() =>
          handleLegalField('legalAdvisorApproval', parentalConsent)
        }
        label="legalAdvisorApproval"
        isChecked={parentalConsent}
        required
      />
      <button type="button" onClick={toggleLegalConsent}>
        cancel
      </button>
      <button type="submit" disabled={!agreedAllConsents}>
        submit
      </button>
    </form>
  );
};
