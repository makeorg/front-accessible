import * as React from 'react';
import i18n from 'Shared/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { HiddenOnMobileStyle } from 'Client/ui/Elements/HiddenElements';
import { IconInButtonStyle } from 'Client/ui/Elements/ButtonElements';
import {
  ProposalButtonStyle,
  DisabledProposalButtonStyle,
  ProposalIconStyle,
  ProposalButtonLabelStyle
} from '../Styled';

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
      <ProposalButtonStyle
        id="proposal-submit-button"
        type="submit"
        onClick={handleSubmit}
        tabIndex={isPannelOpen ? -1 : 0}
      >
        <IconInButtonStyle as={isFieldExpanded ? IconInButtonStyle : ProposalIconStyle}>
          <FontAwesomeIcon aria-hidden icon={faPencilAlt} />
        </IconInButtonStyle>
        <HiddenOnMobileStyle as={isFieldExpanded ? ProposalButtonLabelStyle : HiddenOnMobileStyle}>
          {i18n.t('common.propose')}
        </HiddenOnMobileStyle>
      </ProposalButtonStyle>
    );
  }

  return (
    <DisabledProposalButtonStyle id="proposal-submit-button" type="submit" disabled>
      <IconInButtonStyle as={isFieldExpanded ? IconInButtonStyle : ProposalIconStyle}>
        <FontAwesomeIcon aria-hidden icon={faPencilAlt} />
      </IconInButtonStyle>
      <HiddenOnMobileStyle as={isFieldExpanded ? ProposalButtonLabelStyle : HiddenOnMobileStyle}>
        {i18n.t('common.propose')}
      </HiddenOnMobileStyle>
    </DisabledProposalButtonStyle>
  );
};
