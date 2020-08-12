// & flow
import React, { useState } from 'react';
import { Panel } from 'Client/app/Panel';
import { PanelTriggerStyle } from './style';

export const ProposalPanelTrigger = () => {
  const [isExpanded, setExpansion] = useState(false);

  const togglePanel = () => {
    setExpansion(!isExpanded);
  };

  return (
    <>
      <PanelTriggerStyle onClick={togglePanel} disabled={isExpanded}>
        Toggle Panel
      </PanelTriggerStyle>
      <Panel isExpanded={isExpanded}>
        Component to display
        <PanelTriggerStyle onClick={togglePanel} disabled={!isExpanded}>
          Toggle Panel
        </PanelTriggerStyle>
      </Panel>
    </>
  );
};
