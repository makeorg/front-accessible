import * as React from 'react';
import i18next from 'i18next';
import { DescriptionStyle } from 'Client/ui/Elements/DescriptionElements';
import { DescriptionWrapper } from '../Styled';

/**
 * Renders succes message after proposal is submitted
 */
const ProposalSubmitSuccessComponent = () => (
  <DescriptionWrapper>
    <DescriptionStyle id="proposal-submit-success">
      {i18next.t('proposal_submit.success')}
    </DescriptionStyle>
  </DescriptionWrapper>
);

export default ProposalSubmitSuccessComponent;
