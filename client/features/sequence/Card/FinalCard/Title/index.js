// @flow
import * as React from 'react';
import i18n from 'Shared/i18n';
import { FinalParagraphStyle } from '../../Styled/Content';
import { AltMainTitleStyle } from '../../Styled/Titles';

type Props = {
  title?: string
}

/**
 * Renders finalCard Title component
 */
export const FinalTitle = (props: Props) => {
  const {
    title
  } = props;

  if (title) {
    return (
      <AltMainTitleStyle>
        {title}
      </AltMainTitleStyle>
    );
  }

  return (
    <FinalParagraphStyle dangerouslySetInnerHTML={{ __html: i18n.t('final_card.title') }} />
  );
};

FinalTitle.defaultProps = {
  title: undefined
};
