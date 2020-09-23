// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { SpaceBetweenRowStyle } from 'Client/ui/Elements/FlexElements';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { SequenceContainerStyle, SequenceContentStyle } from './style';
import { SequencePlaceholderLineStyle } from './Cards/style';
import { SequencePlaceholderCard } from './Cards/Placeholder';

export const SequencePlaceholder = () => {
  return (
    <SequenceContainerStyle>
      <ScreenReaderItemStyle>{i18n.t('common.loading')}</ScreenReaderItemStyle>
      <SequenceContentStyle>
        <SequencePlaceholderLineStyle className="title" />
        <SequencePlaceholderCard />
        <SpaceBetweenRowStyle className="fullwidth">
          <SequencePlaceholderLineStyle className="button" />
          <SequencePlaceholderLineStyle />
        </SpaceBetweenRowStyle>
      </SequenceContentStyle>
    </SequenceContainerStyle>
  );
};
