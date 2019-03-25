import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { HiddenOnMobileStyle } from 'Client/ui/Elements/HiddenElements';
import {
  IconWrapperStyle,
  BasicButtonStyle,
} from 'Client/ui/Elements/ButtonElements';
import { Svg } from 'Client/ui/Svg';
import {
  ProposalButtonStyle,
  DisabledProposalButtonStyle,
  ProposalIconStyle,
  ProposalButtonLabelStyle,
} from '../Styled';

type Props = {
  /** Method called when field's value is submitted */
  handleOnSubmit: (SyntheticEvent<*>) => void,
  /** Can user submit value */
  canSubmit: boolean,
  /** Boolean toggled when Proposal Fieldis expanded / collapsed */
  isFieldExpanded: boolean,
};

/**
 * Renders submit button in proposal's field
 */
export const ProposalSubmitButtonComponent = (props: Props) => {
  const { handleOnSubmit, canSubmit, isFieldExpanded } = props;

  return (
    <BasicButtonStyle
      as={canSubmit ? ProposalButtonStyle : DisabledProposalButtonStyle}
      id="proposal-submit-button"
      type="submit"
      onClick={handleOnSubmit}
      disabled={!canSubmit}
    >
      <IconWrapperStyle
        as={isFieldExpanded ? IconWrapperStyle : ProposalIconStyle}
      >
        <Svg aria-hidden type="SvgPencil" />
      </IconWrapperStyle>
      <HiddenOnMobileStyle
        as={isFieldExpanded ? ProposalButtonLabelStyle : HiddenOnMobileStyle}
      >
        {i18n.t('common.propose')}
      </HiddenOnMobileStyle>
    </BasicButtonStyle>
  );
};
