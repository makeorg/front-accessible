import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { HiddenOnTablet } from 'Client/ui/Elements/HiddenElements';
import { IconWrapperStyle } from 'Client/ui/Elements/ButtonElements';
import { SvgPencil } from 'Client/ui/Svg/elements';
import { useDesktop } from 'Client/hooks/useMedia';
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
  const isDesktop = useDesktop();

  return (
    <ProposalButtonStyle
      id="proposal-submit-button"
      type="submit"
      onClick={handleOnSubmit}
      disabled={!canSubmit}
      aria-label={i18n.t('common.propose')}
    >
      <IconWrapperStyle as={isOpen ? IconWrapperStyle : ProposalIconStyle}>
        <SvgPencil aria-hidden />
      </IconWrapperStyle>
      {(isOpen || isDesktop) && (
        <ProposalButtonLabelStyle
          as={isOpen || isDesktop ? ProposalButtonLabelStyle : HiddenOnTablet}
          aria-hidden
        >
          {i18n.t('common.propose')}
        </ProposalButtonLabelStyle>
      )}
    </ProposalButtonStyle>
  );
};
