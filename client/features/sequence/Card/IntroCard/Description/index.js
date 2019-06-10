// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { IntroParagraphStyle } from '../../Styled/Content';

type Props = {
  /** Object with description paragraphs */
  description?: string,
};

/**
 * Renders Intro DescriptionStyle component
 */
export const IntroDescription = (props: Props) => {
  const { description } = props;

  const descriptionText = description || i18n.t('intro_card.description');

  return (
    <div>
      {descriptionText.split('\n').map(text => (
        <IntroParagraphStyle key={text}>{text}</IntroParagraphStyle>
      ))}
    </div>
  );
};
