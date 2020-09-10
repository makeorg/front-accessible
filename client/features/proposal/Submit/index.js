// & flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { useDispatch } from 'react-redux';
import { setPanelContent } from 'Shared/store/reducers/panel/actions';
import { ProposalJourney } from './Journey';
import { PanelTriggerStyle, TriggerIconStyle } from './style';

export const ProposalSubmit = () => {
  const dispatch = useDispatch();

  return (
    <PanelTriggerStyle
      onClick={() => dispatch(setPanelContent(<ProposalJourney />))}
    >
      <TriggerIconStyle aria-hidden />
      {i18n.t('proposal_submit.form.panel_trigger')}
    </PanelTriggerStyle>
  );
};
