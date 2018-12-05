import * as React from 'react';
import i18next from 'i18next';
import ProposalCard from '../../Styled';

const SignUpTitle = ({ titleParams }) => (
  <ProposalCard.AltMainTitle>
    {titleParams || i18next.t('sign_up_card.title')}
  </ProposalCard.AltMainTitle>
);

export default SignUpTitle;
