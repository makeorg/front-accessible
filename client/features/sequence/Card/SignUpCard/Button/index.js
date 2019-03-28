// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { IconWrapperStyle } from 'Client/ui/Elements/ButtonElements';
import { SvgStepForward } from 'Client/ui/Svg/elements';
import { AltNextButtonStyle } from '../../Styled/Buttons';

type Props = {
  /** Special text for next card button */
  text?: string,
  /** Tabindex for interactive items */
  tabIndex: number,
  /** Method called when next card button is clicked */
  skipSignUpCard: () => void,
};

/**
 * Renders Next Card Button in Sign Up Card
 */
export const SkipSignUpButton = (props: Props) => {
  const { tabIndex, skipSignUpCard, text } = props;

  return (
    <AltNextButtonStyle tabIndex={tabIndex} onClick={skipSignUpCard}>
      <IconWrapperStyle>
        <SvgStepForward aria-hidden />
      </IconWrapperStyle>
      {text || i18n.t('sign_up_card.next-cta')}
    </AltNextButtonStyle>
  );
};
