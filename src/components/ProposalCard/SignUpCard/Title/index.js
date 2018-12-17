// @flow
import * as React from 'react';
import i18next from 'i18next';
import ProposalCard from '../../Styled';

type Props = {
/** Special wording for Sign Up Card's title */
  titleParams: string
}

/**
 * Renders Sign Up Title
 */
const SignUpTitle = (props: Props) => {
  const {
    titleParams
  } = props;

  return (
    <ProposalCard.AltMainTitle>
      {titleParams || i18next.t('sign_up_card.title')}
    </ProposalCard.AltMainTitle>
  );
};

export default SignUpTitle;
