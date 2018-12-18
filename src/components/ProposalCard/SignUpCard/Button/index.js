import * as React from 'react';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStepForward } from '@fortawesome/free-solid-svg-icons';
import { IconInButton } from 'Components/Elements/ButtonElements';
import ProposalCard from '../../Styled';

const SkipSignUpButton = ({ tabIndex, skipSignUpCard, wording }) => (
  <ProposalCard.AltNextButton
    tabIndex={tabIndex}
    onClick={skipSignUpCard}
  >
    <IconInButton>
      <FontAwesomeIcon
        aria-hidden
        icon={faStepForward}
      />
    </IconInButton>
    {wording || i18next.t('sign_up_card.next-cta') }
  </ProposalCard.AltNextButton>
);

export default SkipSignUpButton;
