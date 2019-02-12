// @flow
import * as React from 'react';
import i18n from 'Shared/i18n';
import { IntroParagraphStyle, MoreWrapperStyle } from '../../Styled/Content';
import { FinalLinkStyle } from '../../Styled/Buttons';

type Props = {
  /** Special configuration for Final Card's Know More paragraph */
  configuration: Object,
  /** Special wording for Final Card's Know More paragraph */
  wording: Object,
  /** Tabindex for interactive items */
  tabIndex: number,
  /** Method called when button is clicked */
  handleEndSequence: () => void
}

/**
 * Renders finalCard More component
 */
export const More = (props: Props) => {
  const {
    configuration,
    wording,
    tabIndex,
    handleEndSequence
  } = props;

  if (wording && wording.learn_more_title && wording.learn_more_button) {
    return (
      <MoreWrapperStyle>
        <IntroParagraphStyle>
          {wording.learn_more_title}
        </IntroParagraphStyle>
        <FinalLinkStyle
          as="a"
          tabIndex={tabIndex}
          href={configuration.linkUrl}
          target="_blank"
          onClick={handleEndSequence}
        >
          {wording.learn_more_button}
        </FinalLinkStyle>
      </MoreWrapperStyle>
    );
  }

  return (
    <FinalLinkStyle
      as="a"
      tabIndex={tabIndex}
      href={configuration.linkUrl}
      target="_blank"
      onClick={handleEndSequence}
    >
      {i18n.t('final_card.button')}
    </FinalLinkStyle>
  );
};
