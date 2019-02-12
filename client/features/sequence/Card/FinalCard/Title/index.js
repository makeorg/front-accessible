// @flow
import * as React from 'react';
import i18n from 'Shared/i18n';
import ProposalCard from '../../Styled';

type Props = {
  title?: string
}

/**
 * Renders finalCard Title component
 */
const FinalTitle = (props: Props) => {
  const {
    title
  } = props;

  if (title) {
    return (
      <ProposalCard.AltMainTitle>
        {title}
      </ProposalCard.AltMainTitle>
    );
  }

  return (
    <ProposalCard.FinalParagraph dangerouslySetInnerHTML={{ __html: i18n.t('final_card.title') }} />
  );
};

FinalTitle.defaultProps = {
  title: undefined
};
export default FinalTitle;
