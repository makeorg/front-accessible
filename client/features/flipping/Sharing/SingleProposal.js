// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { Sharing } from 'Client/features/sharing';
import {
  SharingWrapperStyle,
  SharingTitleStyle,
} from 'Client/features/proposal/SingleProposalCard/Styled';

export const SingleProposalSharingComponent = () => (
  <SharingWrapperStyle
    id="sharing_proposal"
    as="section"
    aria-labelledby="sharing_title"
  >
    <SharingTitleStyle id="sharing_title">
      {i18n.t('proposal_page.share_text')}
    </SharingTitleStyle>
    <Sharing />
  </SharingWrapperStyle>
);
