import * as React from 'react';
import i18n from 'Shared/i18n';
import { Sharing } from 'Client/features/sharing';
import * as ProposalSharing from '../Styled/Sharing';

/**
 * Renders Sharing from Single Proposal Card
 */
export const SingleProposalSharingComponent = () => (
  <ProposalSharing.Wrapper as="section" aria-labelledby="sharing_title">
    <ProposalSharing.Title id="sharing_title">
      {i18n.t('proposal_page.share_text')}
    </ProposalSharing.Title>
    <Sharing />
  </ProposalSharing.Wrapper>
);
