// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { IntroParagraphStyle, MoreWrapperStyle } from '../../Styled/Content';
import { FinalLinkStyle } from '../../Styled/Buttons';

type Props = {
  /** Title of the More paragraph */
  title?: string,
  /** Url of show more button */
  url?: string,
  /** Method called when button is clicked */
  handleEndSequence: (event: SyntheticEvent<HTMLButtonElement>) => void,
};

/**
 * Renders finalCard More component
 */
export const More = (props: Props) => {
  const { title, url, handleEndSequence } = props;

  return (
    <MoreWrapperStyle>
      <IntroParagraphStyle>
        {title || i18n.t('final_card.more.title')}
      </IntroParagraphStyle>
      <FinalLinkStyle
        as="a"
        href={url}
        target="_blank"
        onClick={handleEndSequence}
      >
        {i18n.t('final_card.more.button')}
      </FinalLinkStyle>
    </MoreWrapperStyle>
  );
};
