// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { SpaceBetweenRowStyle } from 'Client/ui/Elements/FlexElements';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { ProposalSkeleton } from 'Client/ui/Skeletons/Proposal';
import { SequenceContainerStyle, SequenceContentStyle } from './style';
import { SequencePlaceholderLineStyle } from './Cards/style';

export const SequencePlaceholder = () => (
  <SequenceContainerStyle>
    <ScreenReaderItemStyle>{i18n.t('common.loading')}</ScreenReaderItemStyle>
    <SequenceContentStyle>
      <SequencePlaceholderLineStyle className="title" />
      <ProposalSkeleton fromSequence />
      <SpaceBetweenRowStyle className="fullwidth">
        <SequencePlaceholderLineStyle className="button" />
        <SequencePlaceholderLineStyle />
      </SpaceBetweenRowStyle>
    </SequenceContentStyle>
  </SequenceContainerStyle>
);
