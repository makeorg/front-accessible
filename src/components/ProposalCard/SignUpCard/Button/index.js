// @flow
import * as React from 'react';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStepForward } from '@fortawesome/free-solid-svg-icons';
import { IconInButton } from 'Components/Elements/ButtonElements';
import ProposalCard from '../../Styled';

type Props = {
  /** Tabindex for interactive items */
  tabIndex: number,
  /** Method called when next card button is clicked */
  skipSignUpCard: Function,
  /** Special wording for next card button */
  wording: string
}

/**
 * Renders Next Card Button in Sign Up Card
 */
const SkipSignUpButton = (props: Props) => {
  const {
    tabIndex,
    skipSignUpCard,
    wording
  } = props;

  return (
    <ProposalCard.AltNextButton
      tabIndex={tabIndex}
      onClick={skipSignUpCard}
    >
      <IconInButton>
        <FontAwesomeIcon
          aria-hidden
          icon={faStepForward}
        />
      </IconInButton>
      {wording || i18next.t('sign_up_card.next-cta') }
    </ProposalCard.AltNextButton>
  );
};

export default SkipSignUpButton;
