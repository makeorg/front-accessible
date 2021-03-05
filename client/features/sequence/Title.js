// @flow
import React from 'react';
import {
  getSequenceTitleByZone,
  getSpecialTitle,
} from 'Shared/helpers/sequence';
import { capitalizeFirstLetter } from 'Shared/helpers/stringFormatter';
import {
  SequenceAltTitleStyle,
  SequenceSpecialIconStyle,
  SequenceSpecialTitleStyle,
  SequenceTitleStyle,
} from './style';

export type Props = {
  /** Object with Dynamic properties used to configure the Sequence (questionId, country, ...) */
  question: QuestionType,
  /** optional zone parameter for popular and controversy sequences */
  zone?: string,
  /** optional keyword parameter for thematic sequences */
  keyword?: string,
};

export const SequenceTitle = ({ question, zone, keyword }: Props) => {
  const specialTitle = getSpecialTitle(zone, keyword);
  const hasKeyword = keyword && keyword !== undefined;
  const keywordWithUppercase = hasKeyword && capitalizeFirstLetter(keyword);

  if (!specialTitle) {
    return <SequenceTitleStyle>{question.question}</SequenceTitleStyle>;
  }

  return (
    <>
      <SequenceAltTitleStyle>{question.question}</SequenceAltTitleStyle>
      <SequenceSpecialTitleStyle>
        <SequenceSpecialIconStyle aria-hidden focusable={false} />
        {zone && getSequenceTitleByZone(zone)}
        {keyword && `${keywordWithUppercase}`}
      </SequenceSpecialTitleStyle>
    </>
  );
};
