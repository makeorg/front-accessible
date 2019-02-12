import * as React from 'react';
import i18n from 'Shared/i18n';
import { Sharing } from 'Client/features/sharing';
import { SharingWrapperStyle, SharingTitleStyle } from '../Styled';

/**
 * Renders Sharing from Single Proposal Card
 */
export const SingleProposalSharingComponent = () => (
  <SharingWrapperStyle as="section" aria-labelledby="sharing_title">
    <SharingTitleStyle id="sharing_title">
      {i18n.t('proposal_page.share_text')}
    </SharingTitleStyle>
    <Sharing />
  </SharingWrapperStyle>
);
