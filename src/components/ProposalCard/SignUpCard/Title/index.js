// @flow
import * as React from 'react';
import i18next from 'i18next';
import ProposalCard from '../../Styled';

type Props = {
  title: string
}

/**
 * Renders Sign Up Title
 */
const SignUpTitle = (props: Props) => {
  const {
    title
  } = props;

  return (
    <ProposalCard.AltMainTitle>
      {title || i18next.t('sign_up_card.title')}
    </ProposalCard.AltMainTitle>
  );
};

export default SignUpTitle;
