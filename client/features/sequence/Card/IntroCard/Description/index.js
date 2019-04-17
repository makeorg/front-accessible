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

  if (!description) {
    return (
      <div>
        <IntroParagraphStyle>
          {i18n.t('intro_card.description_1')}
        </IntroParagraphStyle>
        <IntroParagraphStyle>
          {i18n.t('intro_card.description_2')}
        </IntroParagraphStyle>
      </div>
    );
  }

  return (
    <div>
      {description.map(introDescription => (
        <IntroParagraphStyle key={introDescription}>
          {introDescription}
        </IntroParagraphStyle>
      ))}
    </div>
  );
};
