import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { DescriptionStyle } from 'Client/ui/Elements/DescriptionElements';
import { DescriptionWrapperStyle } from '../Styled';

/**
 * Renders succes message after proposal is submitted
 */
export const ProposalSubmitSuccessComponent = () => (
  <DescriptionWrapperStyle>
    <DescriptionStyle id="proposal-submit-success">
      {i18n.t('proposal_submit.success')}
    </DescriptionStyle>
  </DescriptionWrapperStyle>
);
