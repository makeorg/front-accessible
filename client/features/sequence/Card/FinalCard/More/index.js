// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { TabIndexContext } from 'Client/app/TabIndexContext';
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
  handleEndSequence: () => void,
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
      <TabIndexContext.Consumer>
        {tabIndex => (
          <MoreWrapperStyle>
            <IntroParagraphStyle>{title}</IntroParagraphStyle>
            <FinalLinkStyle
              as="a"
              tabIndex={tabIndex}
              href={url}
              target="_blank"
              onClick={handleEndSequence}
            >
              {buttonText || i18n.t('final_card.button')}
            </FinalLinkStyle>
          </MoreWrapperStyle>
        )}
      </TabIndexContext.Consumer>
    );
  }

  return (
    <TabIndexContext.Consumer>
      {tabIndex => (
        <MoreWrapperStyle>
          <FinalLinkStyle
            as="a"
            tabIndex={tabIndex}
            href={url}
            target="_blank"
            onClick={handleEndSequence}
          >
            {buttonText || i18n.t('final_card.button')}
          </FinalLinkStyle>
        </MoreWrapperStyle>
      )}
    </TabIndexContext.Consumer>
  );
};
