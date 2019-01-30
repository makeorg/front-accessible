import * as React from 'react';
import i18next from 'i18next';
import { Sharing } from 'Client/features/Sharing';
import * as ProposalSharing from '../Styled/Sharing';

/**
 * Renders Sharing from Single Proposal Card
 */
export const SingleProposalSharingComponent = () => (
  <ProposalSharing.Wrapper as="section" aria-labelledby="sharing_title">
    <ProposalSharing.Title id="sharing_title">
      {i18next.t('proposal_page.share_text')}
    </ProposalSharing.Title>
    <Sharing />
  </ProposalSharing.Wrapper>
);
