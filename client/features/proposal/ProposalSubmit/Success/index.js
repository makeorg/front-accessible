import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { DescriptionWrapperStyle } from '../Styled';

/**
 * Renders succes message after proposal is submitted
 */
export const ProposalSubmitSuccessComponent = () => (
  <DescriptionWrapperStyle>
    <ParagraphStyle id="proposal-submit-success">
      {i18n.t('proposal_submit.success')}
    </ParagraphStyle>
  </DescriptionWrapperStyle>
);
