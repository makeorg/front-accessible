// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { type StateRoot } from 'Shared/store/types';
import { HiddenOnTablet } from 'Client/ui/Elements/HiddenElements';
import { ProposalIconStyle } from 'Client/ui/Elements/Buttons/style';
import { matchDesktopDevice } from 'Shared/helpers/styled';
import { useSelector } from 'react-redux';
import { ProposalButtonStyle, ProposalButtonLabelStyle } from '../style';

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
export const ProposalSubmitButton = (props: Props) => {
  const { handleOnSubmit, canSubmit, isOpen } = props;
  const { device } = useSelector((state: StateRoot) => state.appConfig);
  const isDesktop = matchDesktopDevice(device);

  return (
    <ProposalButtonStyle
      id="proposal-submit-button"
      data-cy-button="proposal-submit"
      type="submit"
      onClick={handleOnSubmit}
      disabled={!canSubmit}
      aria-label={i18n.t('common.propose')}
    >
      <ProposalIconStyle className={!isOpen && 'closed'} aria-hidden />
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
