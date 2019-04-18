import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { HiddenOnMobileStyle } from 'Client/ui/Elements/HiddenElements';
import { IconWrapperStyle } from 'Client/ui/Elements/ButtonElements';
import { SvgPencil } from 'Client/ui/Svg/elements';
import {
  ProposalButtonStyle,
  ProposalIconStyle,
  ProposalButtonLabelStyle,
} from '../Styled';

type Props = {
  /** Method called when field's value is submitted */
  handleOnSubmit: (SyntheticEvent<*>) => void,
  /** Can user submit value */
  canSubmit: boolean,
  /** Boolean toggled when user is typing a proposal */
  isOpen: boolean,
};

/**
 * Renders submit button in proposal's field
 */
export const ProposalSubmitButtonComponent = (props: Props) => {
  const { handleOnSubmit, canSubmit, isOpen } = props;

  return (
    <ProposalButtonStyle
      id="proposal-submit-button"
      type="submit"
      onClick={handleOnSubmit}
      disabled={!canSubmit}
    >
      <IconWrapperStyle as={isOpen ? IconWrapperStyle : ProposalIconStyle}>
        <SvgPencil aria-hidden />
      </IconWrapperStyle>
      <HiddenOnMobileStyle
        as={isOpen ? ProposalButtonLabelStyle : HiddenOnMobileStyle}
      >
        {i18n.t('common.propose')}
      </HiddenOnMobileStyle>
    </ProposalButtonStyle>
  );
};
