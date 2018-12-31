// @flow
import * as React from 'react';
import i18next from 'i18next';
import ProposalCard from '../../Styled';

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

  if (configuration) {
    return (
      <ProposalCard.MoreWrapper>
        <ProposalCard.IntroParagraph>
          {wording.learn_more_title}
        </ProposalCard.IntroParagraph>
        <ProposalCard.FinalLink
          as="a"
          tabIndex={tabIndex}
          href={configuration.linkUrl}
          target="_blank"
          onClick={handleEndSequence}
        >
          {wording.learn_more_button}
        </ProposalCard.FinalLink>
      </ProposalCard.MoreWrapper>
    );
  }

  return (
    <ProposalCard.FinalLink
      as="a"
      tabIndex={tabIndex}
      href={configuration.linkUrl}
      target="_blank"
      onClick={handleEndSequence}
    >
      {i18next.t('final_card.button')}
    </ProposalCard.FinalLink>
  );
};
