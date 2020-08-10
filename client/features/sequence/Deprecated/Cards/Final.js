// @flow
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  type QuestionType,
  type QuestionResultsType,
} from 'Shared/types/question';
import { type FinalCardConfigType } from 'Shared/types/card';
import {
  trackDisplayFinalCard,
  trackClickLearnMore,
} from 'Shared/services/Tracking';
import { checkIsFeatureActivated } from 'Client/helper/featureFlipping';
import { CONSULTATION_SHARE_DISABLE } from 'Shared/constants/featureFlipping';
import { Sharing } from 'Client/features/flipping/Sharing/FincalCardi';
import { i18n } from 'Shared/i18n';
import { resetSequenceVotedProposals } from 'Shared/store/actions/sequence';
import {
  SequenceContentWrapperStyle,
  SequenceInnerContentStyle,
  SequenceFinalCardContentWrapperStyle,
  SequenceAltMainTitleStyle,
  SequenceIntroParagraphStyle,
  SequenceMoreWrapperStyle,
  SequenceFinalLinkStyle,
} from '../style';

type Props = {
  /** Object with Static properties used to configure the Final Card */
  configuration: FinalCardConfigType,
  /** Boolean toggled when card is visible / hidden */
  isCardVisible: boolean,
};

type QuestionState = {
  question: QuestionType,
  questionResults?: QuestionResultsType,
};

export const DeprecatedFinalCard = ({
  configuration,
  isCardVisible,
}: Props) => {
  const dispach = useDispatch();
  const currentQuestion: string = useSelector(state => state.currentQuestion);
  const questionState: QuestionState = useSelector(
    state => state.questions[currentQuestion]
  );
  const { question } = questionState;
  const isSharingDisabled: boolean = checkIsFeatureActivated(
    CONSULTATION_SHARE_DISABLE,
    question.activeFeatures
  );

  useEffect(() => {
    if (isCardVisible) {
      trackDisplayFinalCard();
      dispach(resetSequenceVotedProposals(currentQuestion));
    }
  }, [isCardVisible]);

  return (
    <SequenceContentWrapperStyle>
      <SequenceInnerContentStyle>
        <SequenceAltMainTitleStyle data-cy-container="final-card-title">
          {configuration.title
            ? configuration.title
            : i18n.t('final_card.title')}
        </SequenceAltMainTitleStyle>
        <SequenceFinalCardContentWrapperStyle data-cy-container="final-card-share">
          {configuration.share && !isSharingDisabled && (
            <Sharing text={configuration.share} />
          )}
          <SequenceMoreWrapperStyle data-cy-container="final-card-learn-more">
            <SequenceIntroParagraphStyle>
              {configuration.learnMoreTitle
                ? configuration.learnMoreTitle
                : i18n.t('final_card.more.title')}
            </SequenceIntroParagraphStyle>
            <SequenceFinalLinkStyle
              as="a"
              href={configuration.linkUrl}
              onClick={() => trackClickLearnMore()}
            >
              {configuration.learnMoreTextButton
                ? configuration.learnMoreTextButton
                : i18n.t('final_card.more.button')}
            </SequenceFinalLinkStyle>
          </SequenceMoreWrapperStyle>
        </SequenceFinalCardContentWrapperStyle>
      </SequenceInnerContentStyle>
    </SequenceContentWrapperStyle>
  );
};
