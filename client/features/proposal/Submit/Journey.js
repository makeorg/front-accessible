// & flow
import React, { useState } from 'react';
import { getBaitText } from 'Shared/constants/proposal';
import {
  trackClickBackProposals,
  trackDisplayProposalSubmitValidation,
} from 'Shared/services/Tracking';
import { useDispatch, useSelector } from 'react-redux';
import {
  closePanel,
  removePanelContent,
} from 'Shared/store/reducers/panel/actions';
import { selectAuthentication } from 'Shared/store/selectors/user.selector';
import { ProposalService } from 'Shared/services/Proposal';
import { modalShowProposalSuccess } from 'Shared/store/actions/modal';
import { ProposalForm } from './Form';
import { ProposalAthentication } from './Authentication';

const AUTHENTICATION_STEP = 'authentication';

export const ProposalJourney = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: StateRoot) =>
    selectAuthentication(state)
  );
  const currentQuestion: string = useSelector(state => state.currentQuestion);
  const questionState = useSelector(state => state.questions[currentQuestion]);
  const { question } = questionState;
  const [proposalContent, setProposalContent] = useState('');
  const [proposalStep, setProposalStep] = useState('form');
  const [waiting, setWaiting] = useState(false);
  const baitText = getBaitText();

  const handleFieldFocus = () => {
    if (proposalContent.length === 0) {
      setProposalContent(baitText);
    }
  };

  const handleValueChange = (event: SyntheticEvent<HTMLTextAreaElement>) => {
    if (proposalContent.length < baitText.length) {
      return setProposalContent(baitText);
    }
    return setProposalContent(event.currentTarget.value);
  };

  const handleCancel = () => {
    dispatch(closePanel());
    dispatch(removePanelContent());
    trackClickBackProposals();
  };

  const handleStepBack = () => {
    setProposalStep('form');
  };

  const handleProposeAPICall = async () => {
    setWaiting(true);
    await ProposalService.propose(proposalContent, question.questionId);
    setWaiting(false);
    dispatch(removePanelContent());
    dispatch(closePanel());
    dispatch(modalShowProposalSuccess());
    trackDisplayProposalSubmitValidation();
  };

  if (proposalStep === AUTHENTICATION_STEP) {
    return (
      <ProposalAthentication
        handleStepBack={handleStepBack}
        handleCancel={handleCancel}
        handleProposeAPICall={handleProposeAPICall}
      />
    );
  }

  return (
    <ProposalForm
      proposalContent={proposalContent}
      handleValueChange={handleValueChange}
      handleFieldFocus={handleFieldFocus}
      handleCancel={handleCancel}
      handleSubmit={
        isLoggedIn
          ? handleProposeAPICall
          : () => setProposalStep(AUTHENTICATION_STEP)
      }
      waitingApiCallback={waiting}
    />
  );
};
