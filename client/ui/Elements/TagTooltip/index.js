// @flow
import React, { useState } from 'react';

import { i18n } from 'Shared/i18n';
import { SvgClose } from 'Client/ui/Svg/elements';
import {
  TagsTooltipWrapperStyle,
  TagsTooltipCrossStyle,
  TriangleStyle,
  LinkStyle,
} from './style';

export const TagTooltip = () => {
  const [isClosed, setIsClosed] = useState(false);

  if (isClosed) {
    return null;
  }

  return (
    <div>
      <TriangleStyle />
      <TagsTooltipWrapperStyle>
        <TagsTooltipCrossStyle onClick={() => setIsClosed(true)}>
          <SvgClose aria-hidden />
        </TagsTooltipCrossStyle>
        {i18n.t('common.notifications.tags_filter')}
        <LinkStyle onClick={() => setIsClosed(true)}>
          {i18n.t('common.notifications.thank_you')}
        </LinkStyle>
      </TagsTooltipWrapperStyle>
    </div>
  );
};
