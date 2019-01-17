// @flow
import * as React from 'react';
import i18next from 'i18next';
import ProposalCard from '../../Styled';

type Props = {
  /** Object with description paragraphs */
  description?: Array<string>
}

/**
 * Renders Intro Description component
 */
const IntroDescription = (props: Props) => {
  const {
    description
  } = props;
  if (!description) {
    return (
      <React.Fragment>
        <ProposalCard.IntroParagraph id="introduction">
          {i18next.t('intro_card.description_1')}
        </ProposalCard.IntroParagraph>
        <ProposalCard.IntroParagraph>
          {i18next.t('intro_card.description_2')}
        </ProposalCard.IntroParagraph>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      {description.map(
        introDescription => (
          <ProposalCard.IntroParagraph key={introDescription}>
            {introDescription}
          </ProposalCard.IntroParagraph>
        )
      )}
    </React.Fragment>
  );
};

IntroDescription.defaultProps = {
  description: undefined
};

export default IntroDescription;
