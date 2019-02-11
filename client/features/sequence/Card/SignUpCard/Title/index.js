// @flow
import * as React from 'react';
import i18n from 'Shared/i18n';
import ProposalCard from '../../Styled';

type Props = {
  title: boolean | string
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
      {title || i18n.t('sign_up_card.title')}
    </ProposalCard.AltMainTitle>
  );
};

export default SignUpTitle;
