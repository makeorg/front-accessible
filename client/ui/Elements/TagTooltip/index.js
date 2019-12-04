// @flow
import React, { useState } from 'react';
import { i18n } from 'Shared/i18n';
import { SvgClose } from 'Client/ui/Svg/elements';
import {
  TagsTooltipWrapperStyle,
  TagsTooltipCrossStyle,
  TriangleStyle,
  LinkStyle,
  TagsTooltipContainerStyle,
} from './style';
import { ScreenReaderItemStyle } from '../AccessibilityElements';

export const TagTooltip = () => {
  const [isClosed, setIsClosed] = useState(false);

  if (isClosed) {
    return null;
  }

  return (
    <TagsTooltipContainerStyle>
      <TriangleStyle />
      <TagsTooltipWrapperStyle>
        <ScreenReaderItemStyle>
          {i18n.t('common.notifications.icons.information')}
        </ScreenReaderItemStyle>
        {i18n.t('common.notifications.tags_filter')}
        <ScreenReaderItemStyle>
          {i18n.t('consultation.tags.description')}
        </ScreenReaderItemStyle>
        <LinkStyle onClick={() => setIsClosed(true)}>
          {i18n.t('common.notifications.thank_you')}
        </LinkStyle>
        <TagsTooltipCrossStyle
          aria-label={i18n.t('common.notifications.icons.close')}
          onClick={() => setIsClosed(true)}
        >
          <SvgClose aria-hidden />
        </TagsTooltipCrossStyle>
      </TagsTooltipWrapperStyle>
    </TagsTooltipContainerStyle>
  );
};
