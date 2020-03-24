// @flow
import React, { useEffect } from 'react';
import { type SignUpCardConfigType } from 'Shared/types/card';
import {
  trackSkipSignUpCard,
  trackDisplaySignUpCard,
} from 'Shared/services/Tracking';
import { i18n } from 'Shared/i18n';

import {
  EmailButtonStyle,
  IconWrapperStyle,
  ButtonSmallWrapperStyle,
  RedLinkButtonStyle,
} from 'Client/ui/Elements/ButtonElements';
import { CenterColumnStyle } from 'Client/ui/Elements/FlexElements';
import { ExtraAltParagraphStyle } from 'Client/ui/Elements/Form/Styled/Content';
import { FacebookAuthentificationButtonComponent } from 'Client/features/auth/Social/FacebookAuthentification/Button';
import { GoogleAuthentificationButtonComponent } from 'Client/features/auth/Social/GoogleAuthentification/Button';
import { SvgEnvelope, SvgStepForward } from 'Client/ui/Svg/elements';
import { useDispatch, useSelector } from 'react-redux';
import { modalShowRegister, modalShowLogin } from 'Shared/store/actions/modal';
import {
  incrementSequenceIndex,
  resetSequenceVotedProposals,
} from 'Shared/store/actions/sequence';
import {
  SequenceContentWrapperStyle,
  SequenceInnerContentStyle,
  SequenceTitleWrapperStyle,
  SequenceSecondaryTitleStyle,
  SequenceSignUpTitleStyle,
  SequenceAltNextButtonStyle,
} from '../style';

type Props = {
  /** Object with Static properties used to configure the Sign Up Card */
  configuration: SignUpCardConfigType,
  /** Boolean toggled when card is visible / hidden */
  isCardVisible: boolean,
};

/**
 * Handles Sign Up Card Business Logic
 */
export const SignUpCard = ({ configuration, isCardVisible }: Props) => {
  const dispatch = useDispatch();
  const dispach = useDispatch();
  const currentQuestion: string = useSelector(state => state.currentQuestion);

  useEffect(() => {
    if (isCardVisible) {
      trackDisplaySignUpCard();
      dispach(resetSequenceVotedProposals(currentQuestion));
    }
  }, [isCardVisible]);

  return (
    <SequenceContentWrapperStyle>
      <SequenceInnerContentStyle>
        <SequenceTitleWrapperStyle>
          <SequenceSignUpTitleStyle>
            {configuration.title
              ? configuration.title
              : i18n.t('sign_up_card.title')}
          </SequenceSignUpTitleStyle>
        </SequenceTitleWrapperStyle>
        <SequenceSecondaryTitleStyle as="p">
          {i18n.t('sign_up_card.authentification-text')}
        </SequenceSecondaryTitleStyle>
        <CenterColumnStyle>
          <ButtonSmallWrapperStyle>
            <FacebookAuthentificationButtonComponent />
            <GoogleAuthentificationButtonComponent />
            <EmailButtonStyle
              onClick={() => dispatch(modalShowRegister())}
              id="authentification-register-button"
            >
              <IconWrapperStyle>
                <SvgEnvelope aria-hidden />
              </IconWrapperStyle>
              {i18n.t('common.email')}
            </EmailButtonStyle>
          </ButtonSmallWrapperStyle>
          <ExtraAltParagraphStyle>
            {i18n.t('register.login_title')}
            <RedLinkButtonStyle onClick={() => dispatch(modalShowLogin())}>
              {i18n.t('register.login_link')}
            </RedLinkButtonStyle>
          </ExtraAltParagraphStyle>
        </CenterColumnStyle>
        <SequenceAltNextButtonStyle
          onClick={() => {
            trackSkipSignUpCard();
            dispatch(incrementSequenceIndex());
          }}
        >
          <IconWrapperStyle>
            <SvgStepForward aria-hidden />
          </IconWrapperStyle>
          {configuration.nextCtaText
            ? configuration.nextCtaText
            : i18n.t('sign_up_card.next-cta')}
        </SequenceAltNextButtonStyle>
      </SequenceInnerContentStyle>
    </SequenceContentWrapperStyle>
  );
};
