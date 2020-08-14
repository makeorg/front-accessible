// & flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { useDispatch } from 'react-redux';
import { setPanelContent } from 'Shared/store/reducers/panel/actions';
import { PanelTriggerStyle, PanelTriggerIconStyle } from './style';
import { ProposalJourney } from './Journey';

export const ProposalSubmit = () => {
  const dispatch = useDispatch();

  return (
    <>
      <PanelTriggerStyle
        onClick={() => dispatch(setPanelContent(<ProposalJourney />))}
      >
        <PanelTriggerIconStyle aria-hidden />
        {i18n.t('proposal_submit.form.panel_trigger')}
      </PanelTriggerStyle>
    </>
  );
};
