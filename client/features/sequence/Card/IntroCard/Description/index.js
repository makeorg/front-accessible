// @flow
import * as React from 'react';
<<<<<<< HEAD
import { i18n } from 'Shared/i18n';
import { IntroParagraphStyle } from '../../Styled/Content';
=======
import { i18n } from 'Shared/i18n';
import ProposalCard from '../../Styled';
>>>>>>> refactor(transverse): wip remove export default

type Props = {
  /** Object with description paragraphs */
  description?: Array<string>
}

/**
 * Renders Intro DescriptionStyle component
 */
export const IntroDescription = (props: Props) => {
  const {
    description
  } = props;
  if (!description) {
    return (
      <div id="introduction">
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
    <div id="introduction">
      {description.map(
        introDescription => (
          <IntroParagraphStyle key={introDescription}>
            {introDescription}
          </IntroParagraphStyle>
        )
      )}
    </div>
  );
};

IntroDescription.defaultProps = {
  description: undefined
};
