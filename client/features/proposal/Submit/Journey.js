// & flow
import React, { useState } from 'react';
import { getBaitText } from 'Shared/constants/proposal';
import { trackClickBackProposals } from 'Shared/services/Tracking';
import { useDispatch } from 'react-redux';
import {
  closePanel,
  removePanelContent,
} from 'Shared/store/reducers/panel/actions';
import { ProposalForm } from './Form';
import { ProposalAthentication } from './Authentication';

const AUTHENTICATION_STEP = 'authentication';

export const ProposalJourney = () => {
  const dispatch = useDispatch();
  const [proposalContent, setProposalContent] = useState('');
  const [proposalStep, setProposalStep] = useState('form');
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

  if (proposalStep === AUTHENTICATION_STEP) {
    return (
      <ProposalAthentication
        handleStepBack={handleStepBack}
        handleCancel={handleCancel}
      />
    );
  }

  return (
    <ProposalForm
      proposalContent={proposalContent}
      handleValueChange={handleValueChange}
      handleFieldFocus={handleFieldFocus}
      handleCancel={handleCancel}
      handleSubmit={() => setProposalStep(AUTHENTICATION_STEP)}
    />
  );
};
