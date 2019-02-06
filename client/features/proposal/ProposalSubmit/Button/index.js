import * as React from 'react';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { HiddenOnMobileStyle } from 'Client/ui/Elements/HiddenElements';
import { IconInButtonStyle } from 'Client/ui/Elements/ButtonElements';
import {
  ProposalButton,
  DisabledProposalButton,
  ProposalIcon,
  ProposalButtonLabel
} from '../Styled/ProposalField';

type Props = {
  /** Method called when field's value is submitted */
  handleSubmit: (SyntheticEvent<*>) => void,
  /** Can user submit value */
  canSubmit: boolean,
  /** Boolean toggled when Sliding pannel is opened / closed */
  isPannelOpen: boolean,
  /** Boolean toggled when Proposal Fieldis expanded / collapsed */
  isFieldExpanded: boolean
}

/**
 * Renders submit button in proposal's field
 */
export const ProposalSubmitButtonComponent = (props: Props) => {
  const {
    handleSubmit,
    canSubmit,
    isPannelOpen,
    isFieldExpanded
  } = props;

  if (canSubmit) {
    return (
      <ProposalButton
        id="proposal-submit-button"
        type="submit"
        onClick={handleSubmit}
        tabIndex={isPannelOpen ? -1 : 0}
      >
        <IconInButtonStyle as={isFieldExpanded ? IconInButtonStyle : ProposalIcon}>
          <FontAwesomeIcon aria-hidden icon={faPencilAlt} />
        </IconInButtonStyle>
        <HiddenOnMobileStyle as={isFieldExpanded ? ProposalButtonLabel : HiddenOnMobileStyle}>
          {i18next.t('common.propose')}
        </HiddenOnMobileStyle>
      </ProposalButton>
    );
  }

  return (
    <DisabledProposalButton id="proposal-submit-button" type="submit" disabled>
      <IconInButtonStyle as={isFieldExpanded ? IconInButtonStyle : ProposalIcon}>
        <FontAwesomeIcon aria-hidden icon={faPencilAlt} />
      </IconInButtonStyle>
      <HiddenOnMobileStyle as={isFieldExpanded ? ProposalButtonLabel : HiddenOnMobileStyle}>
        {i18next.t('common.propose')}
      </HiddenOnMobileStyle>
    </DisabledProposalButton>
  );
};
