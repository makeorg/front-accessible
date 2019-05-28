// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { type Sharing as TypeSharing } from 'Shared/types/sequence';
import { Sharing } from 'Client/features/sharing';
import { SharingWrapperStyle, SharingTitleStyle } from '../Styled';

type Props = {
  sharingParams: TypeSharing,
};
/**
 * Renders Sharing from Single Proposal Card
 */
export const SingleProposalSharingComponent = ({ sharingParams }: Props) => (
  <SharingWrapperStyle
    id="sharing_proposal"
    as="section"
    aria-labelledby="sharing_title"
  >
    <SharingTitleStyle id="sharing_title">
      {i18n.t('proposal_page.share_text')}
    </SharingTitleStyle>
    <Sharing sharingParams={sharingParams} />
  </SharingWrapperStyle>
);
