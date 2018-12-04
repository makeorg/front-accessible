import React from 'react';
import i18next from 'i18next';
import { DescriptionWrapper } from '../Styled';
import { Description } from '../../Elements/DescriptionElements';

const ProposalSubmitSuccessComponent = () => (
  <DescriptionWrapper>
    <Description id="proposal-submit-success">
      {i18next.t('proposal_submit.success')}
    </Description>
  </DescriptionWrapper>
);

export default ProposalSubmitSuccessComponent;
