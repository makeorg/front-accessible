// @flow
import React, { useState } from 'react';
import { i18n } from 'Shared/i18n';
import { SvgClose } from 'Client/ui/Svg/elements';
import {
  TagsTooltipWrapperStyle,
  TagsTooltipCrossStyle,
  TriangleUpStyle,
  TriangleDownStyle,
  LinkStyle,
  TagsTooltipContainerStyle,
  TooltipSvgInfos,
} from './style';
import { ScreenReaderItemStyle } from '../AccessibilityElements';

type Props = {
  /** isFirstSequenceVote for specific design on sequence firstProposal */
  isFirstSequenceVote?: boolean,
};
export const TagTooltip = ({ isFirstSequenceVote }: Props) => {
  const [isClosed, setIsClosed] = useState(false);

  if (isClosed) {
    return null;
  }

  return (
    <TagsTooltipContainerStyle isFirstSequenceVote={isFirstSequenceVote}>
      {!isFirstSequenceVote && <TriangleUpStyle />}
      <TagsTooltipWrapperStyle isFirstSequenceVote={isFirstSequenceVote}>
        <TagsTooltipCrossStyle
          aria-label={i18n.t('common.notifications.icons.close')}
          onClick={() => setIsClosed(true)}
        >
          <SvgClose aria-hidden />
        </TagsTooltipCrossStyle>
        <TooltipSvgInfos aria-hidden />
        <ScreenReaderItemStyle>
          {i18n.t('common.notifications.icons.information')}
        </ScreenReaderItemStyle>
        {isFirstSequenceVote
          ? i18n.t('common.notifications.vote_on_proposal')
          : i18n.t('common.notifications.tags_filter')}
        {!isFirstSequenceVote && (
          <>
            <ScreenReaderItemStyle>
              {i18n.t('consultation.tags.description')}
            </ScreenReaderItemStyle>
            <LinkStyle onClick={() => setIsClosed(true)}>
              {i18n.t('common.notifications.thank_you')}
            </LinkStyle>
          </>
        )}
      </TagsTooltipWrapperStyle>
      {isFirstSequenceVote && <TriangleDownStyle />}
    </TagsTooltipContainerStyle>
  );
};
