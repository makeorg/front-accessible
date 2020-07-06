// @flow
import React, { useEffect } from 'react';
import { type PushProposalCardConfigType } from 'Shared/types/card';
import {
  trackDisplayProposalPushCard,
  trackClickProposalPushCardIgnore,
} from 'Shared/services/Tracking';
import { focusProposalField } from 'Client/app/SkipLinks/Consultation';
import { i18n } from 'Shared/i18n';
import {
  PencilIconStyle,
  ForwardIconStyle,
} from 'Client/ui/Elements/Buttons/style';
import { MiddleColumnToRowStyle } from 'Client/ui/Elements/FlexElements';
import { incrementSequenceIndex } from 'Shared/store/actions/sequence';
import { useDispatch } from 'react-redux';
import {
  SequenceContentWrapperStyle,
  SequenceInnerContentStyle,
  SequencePushProposalButtonStyle,
  SequencePushProposalNextButtonStyle,
  SequenceAltMainTitleStyle,
  ExtraLogoStyle,
} from '../style';

type Props = {
  /** Object with Static properties used to configure the Push Proposal Card */
  configuration: PushProposalCardConfigType,
  /** Boolean toggled when card is visible / hidden */
  isCardVisible: boolean,
};

/**
 * Handles Push Proposal Card Business Logic
 */
export const PushProposalCard = ({ configuration, isCardVisible }: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (isCardVisible) {
      trackDisplayProposalPushCard();
    }
  }, [isCardVisible]);

  return (
    <SequenceContentWrapperStyle>
      <SequenceInnerContentStyle>
        <header>
          {configuration.extraLogo && (
            <ExtraLogoStyle src={configuration.extraLogo} alt="" />
          )}
          <SequenceAltMainTitleStyle>
            {i18n.t('push_proposal_card.title')}
          </SequenceAltMainTitleStyle>
        </header>
        <MiddleColumnToRowStyle>
          <SequencePushProposalButtonStyle
            type="submit"
            onClick={focusProposalField}
          >
            <PencilIconStyle aria-hidden />
            {i18n.t('common.propose')}
          </SequencePushProposalButtonStyle>
          <SequencePushProposalNextButtonStyle
            onClick={() => {
              trackClickProposalPushCardIgnore();
              dispatch(incrementSequenceIndex());
            }}
            data-cy-button="push-proposal-next"
          >
            <ForwardIconStyle aria-hidden />
            {i18n.t('push_proposal_card.next-cta')}
          </SequencePushProposalNextButtonStyle>
        </MiddleColumnToRowStyle>
      </SequenceInnerContentStyle>
    </SequenceContentWrapperStyle>
  );
};
