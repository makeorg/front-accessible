import * as React from 'react';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { HiddenOnMobile } from 'Components/Elements/HiddenElements';
import { IconInButton } from 'Components/Elements/ButtonElements';
import {
  ProposalButton,
  DisabledProposalButton,
  ProposalIcon,
  ProposalButtonLabel
} from '../Styled/ProposalField';

/**
 * Renders submit button in proposal's field
 */
const ProposalSubmitButtonComponent = ({
  canSubmit,
  handleSubmit,
  isPannelOpen,
  isFieldExpanded
}) => {
  if (canSubmit) {
    return (
      <ProposalButton
        id="proposal-submit-button"
        type="submit"
        onClick={handleSubmit}
        tabIndex={isPannelOpen ? -1 : 0}
      >
        <IconInButton as={isFieldExpanded ? IconInButton : ProposalIcon}>
          <FontAwesomeIcon aria-hidden icon={faPencilAlt} />
        </IconInButton>
        <HiddenOnMobile as={isFieldExpanded ? ProposalButtonLabel : HiddenOnMobile}>
          {i18next.t('common.propose')}
        </HiddenOnMobile>
      </ProposalButton>
    );
  }

  return (
    <DisabledProposalButton id="proposal-submit-button" type="submit" disabled>
      <IconInButton as={isFieldExpanded ? IconInButton : ProposalIcon}>
        <FontAwesomeIcon aria-hidden icon={faPencilAlt} />
      </IconInButton>
      <HiddenOnMobile as={isFieldExpanded ? ProposalButtonLabel : HiddenOnMobile}>
        {i18next.t('common.propose')}
      </HiddenOnMobile>
    </DisabledProposalButton>
  );
};

export default ProposalSubmitButtonComponent;
