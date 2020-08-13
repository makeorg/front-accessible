// & flow
import React, { useState } from 'react';
import { Panel } from 'Client/app/Panel';
import { i18n } from 'Shared/i18n';
import { PanelTriggerStyle, PanelTriggerIconStyle } from './style';
import { ProposalJourney } from './Journey';

export const ProposalSubmit = () => {
  const [isExpanded, setExpansion] = useState(false);

  return (
    <>
      <PanelTriggerStyle
        onClick={() => setExpansion(true)}
        disabled={isExpanded}
      >
        <PanelTriggerIconStyle aria-hidden />
        {i18n.t('proposal_submit.panel_trigger')}
      </PanelTriggerStyle>
      <Panel isExpanded={isExpanded}>
        <ProposalJourney closePanel={() => setExpansion(false)} />
      </Panel>
    </>
  );
};
