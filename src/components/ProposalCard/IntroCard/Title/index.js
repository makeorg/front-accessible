// @flow
import * as React from 'react';
import i18next from 'i18next';
import ProposalCard from '../../Styled';

type Props = {
  title: string
}

/**
 * Renders Intro Title component
 */
const IntroTitle = (props: Props) => {
  const {
    title
  } = props;

  return (
    <ProposalCard.IntroTitle>
      {title || i18next.t('intro_card.title')}
    </ProposalCard.IntroTitle>
  );
};

export default IntroTitle;
