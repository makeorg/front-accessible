import React from 'react';
import { i18n } from 'Shared/i18n';

type Props = {
  partnerName: string,
  isFounder: boolean,
};

export const PartnerTooltipComponent = (props: Props) => {
  const { partnerName, isFounder } = props;

  return (
    <React.Fragment>
      <p>{partnerName}</p>
      {isFounder && (
        <React.Fragment>
          <p>-</p>
          <p>{i18n.t('consultation.partners.founder')}</p>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
