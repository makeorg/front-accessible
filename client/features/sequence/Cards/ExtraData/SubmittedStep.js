// @flow
import { setTitleByType } from 'Client/helper/demographics';
import { RedButtonStyle } from 'Client/ui/Elements/Buttons/V2/style';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { type StateRoot } from 'Shared/store/types';
import {
  addQuestionToDemographics,
  incrementSequenceIndex,
} from 'Shared/store/actions/sequence';
import { DemographicsTrackingService } from 'Shared/services/DemographicsTracking';
import {
  trackClickVoteDemographics,
  trackDisplayDemographicsConfirmation,
} from 'Shared/services/Tracking';
import { SequenceIntroParagraphStyle, SequenceParagraphStyle } from '../style';

type Props = {
  type: string,
  value: string,
};

export const SubmittedDemographics = ({ type, value }: Props) => {
  const dispatch = useDispatch();
  const currentQuestion = useSelector(
    (state: StateRoot) => state.currentQuestion
  );
  const persistedDemographics = useSelector(
    (state: StateRoot) => state.sequence.demographics
  );
  const { questions } = persistedDemographics;
  const submittedForCurrentQuestion = questions.find(
    question => question === currentQuestion
  );

  useEffect(() => {
    const postDemographics = async () => {
      await DemographicsTrackingService.track(type, value, {});
      dispatch(addQuestionToDemographics(currentQuestion));
    };

    if (!submittedForCurrentQuestion) {
      postDemographics();
    }

    trackDisplayDemographicsConfirmation(type);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SequenceIntroParagraphStyle className="with-margin-bottom">
        {setTitleByType(type)}
      </SequenceIntroParagraphStyle>
      <SequenceParagraphStyle>
        {i18n.t('demographics_card.submitted_thanks')}
      </SequenceParagraphStyle>
      <SequenceParagraphStyle>
        {i18n.t('demographics_card.submitted_disclaimer')}
      </SequenceParagraphStyle>
      <RedButtonStyle
        onClick={() => {
          dispatch(incrementSequenceIndex());
          trackClickVoteDemographics(type);
        }}
      >
        {i18n.t('proposal_submit.success.button')}
      </RedButtonStyle>
    </>
  );
};
