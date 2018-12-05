import * as React from 'react';
import i18next from 'i18next';
import ProposalCard from '../../Styled';

const IntroTitle = ({ titleParams }) => (
  <ProposalCard.IntroTitle>
    {titleParams || i18next.t('intro_card.title')}
  </ProposalCard.IntroTitle>
);

export default IntroTitle;
