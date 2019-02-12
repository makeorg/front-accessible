// @flow
import * as React from 'react';
import i18n from 'Shared/i18n';
import ProposalCard from '../../Styled';

type Props = {
  title: boolean | string
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
      {title || i18n.t('intro_card.title')}
    </ProposalCard.IntroTitle>
  );
};

export default IntroTitle;
