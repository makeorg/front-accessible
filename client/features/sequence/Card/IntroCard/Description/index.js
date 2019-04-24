// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { IntroParagraphStyle } from '../../Styled/Content';

type Props = {
  /** Object with description paragraphs */
  description?: string[],
};

/**
 * Renders Intro DescriptionStyle component
 */
export const IntroDescription = (props: Props) => {
  const { description } = props;
  const descriptionText = description || [
    i18n.t('intro_card.description_1'),
    i18n.t('intro_card.description_2'),
  ];

  return (
    <div>
      {descriptionText.map(text => (
        <IntroParagraphStyle key={text}>{text}</IntroParagraphStyle>
      ))}
    </div>
  );
};
