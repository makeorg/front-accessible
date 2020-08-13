// & flow
import React, { useState } from 'react';
import { getBaitText } from 'Shared/constants/proposal';
import { trackClickBackProposals } from 'Shared/services/Tracking';
import { ProposalForm } from './Form';

type Props = {
  closePanel: () => void,
};

const REGISTER_STEP = 'register';
export const ProposalJourney = ({ closePanel }: Props) => {
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

  if (proposalStep === REGISTER_STEP) {
    return <div>register step</div>;
  }

  const handleCancel = () => {
    closePanel();
    trackClickBackProposals();
    setProposalStep('form');
  };

  return (
    <ProposalForm
      proposalContent={proposalContent}
      handleValueChange={handleValueChange}
      handleFieldFocus={handleFieldFocus}
      handleCancel={handleCancel}
      handleSubmit={() => setProposalStep(REGISTER_STEP)}
    />
  );
};
