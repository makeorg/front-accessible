// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { IntroParagraphStyle, MoreWrapperStyle } from '../../Styled/Content';
import { FinalLinkStyle } from '../../Styled/Buttons';

type Props = {
  /** Title of the More paragraph */
  title?: string,
  /** Text of the button */
  buttonText?: string,
  /** Url of show more button */
  url?: string,
  /** Method called when button is clicked */
  handleEndSequence: (event: SyntheticEvent<HTMLButtonElement>) => void,
};

/**
 * Renders finalCard More component
 */
export const More = (props: Props) => {
  const { title, buttonText, url, handleEndSequence } = props;

  if (!url) {
    return null;
  }

  if (title) {
    return (
      <MoreWrapperStyle>
        <IntroParagraphStyle>{title}</IntroParagraphStyle>
        <FinalLinkStyle
          as="a"
          href={url}
          target="_blank"
          onClick={handleEndSequence}
        >
          {buttonText}
        </FinalLinkStyle>
      </MoreWrapperStyle>
    );
  }

  return (
    <MoreWrapperStyle>
      <FinalLinkStyle
        as="a"
        href={url}
        target="_blank"
        onClick={handleEndSequence}
      >
        {buttonText}
      </FinalLinkStyle>
    </MoreWrapperStyle>
  );
};

More.defaultProps = {
  buttonText: i18n.t('final_card.button'),
};
