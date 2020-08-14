// @flow
import React, { useEffect } from 'react';
import { type SignUpCardConfigType } from 'Shared/types/card';
import {
  trackSkipSignUpCard,
  trackDisplaySignUpCard,
} from 'Shared/services/Tracking';
import { i18n } from 'Shared/i18n';

import {
  RedLinkButtonStyle,
  ForwardIconStyle,
} from 'Client/ui/Elements/Buttons/style';
import { CenterColumnStyle } from 'Client/ui/Elements/FlexElements';
import { ExtraAltParagraphStyle } from 'Client/ui/Elements/Form/Styled/Content';
import { useDispatch, useSelector } from 'react-redux';
import { modalShowLogin } from 'Shared/store/actions/modal';
import {
  incrementSequenceIndex,
  resetSequenceVotedProposals,
} from 'Shared/store/actions/sequence';
import { AuthenticationRegisterButtons } from 'Client/features/auth/Register/Buttons';
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
export const DeprecatedSignUpCard = ({
  configuration,
  isCardVisible,
}: Props) => {
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
          {i18n.t('sign_up_card.authentication-text')}
        </SequenceSecondaryTitleStyle>
        <CenterColumnStyle>
          <AuthenticationRegisterButtons />
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
          data-cy-button="skip-sign-up"
        >
          <ForwardIconStyle aria-hidden />
          {configuration.nextCtaText
            ? configuration.nextCtaText
            : i18n.t('sign_up_card.next-cta')}
        </SequenceAltNextButtonStyle>
      </SequenceInnerContentStyle>
    </SequenceContentWrapperStyle>
  );
};
