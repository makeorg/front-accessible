// @flow
import * as React from 'react';
import i18n from 'Shared/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStepForward } from '@fortawesome/free-solid-svg-icons';
import { IconInButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { AltNextButtonStyle } from '../../Styled/Buttons';

type Props = {
  /** Tabindex for interactive items */
  tabIndex: number,
  /** Method called when next card button is clicked */
  skipSignUpCard: () => void,
  /** Special wording for next card button */
  wording: boolean | string
}

/**
 * Renders Next Card Button in Sign Up Card
 */
export const SkipSignUpButton = (props: Props) => {
  const {
    tabIndex,
    skipSignUpCard,
    wording
  } = props;

  return (
    <AltNextButtonStyle
      tabIndex={tabIndex}
      onClick={skipSignUpCard}
    >
      <IconInButtonStyle>
        <FontAwesomeIcon
          aria-hidden
          icon={faStepForward}
        />
      </IconInButtonStyle>
      {wording || i18n.t('sign_up_card.next-cta') }
    </AltNextButtonStyle>
  );
};
