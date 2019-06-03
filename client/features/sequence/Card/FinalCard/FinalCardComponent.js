// @flow
import * as React from 'react';
import { type FinalCardConfig } from 'Shared/types/card';
import { FinalTitle } from './Title';
import { Sharing } from './Sharing';
import { More } from './More';
import { ProposalCardStyle } from '../Styled';
import {
  ContentWrapperStyle,
  InnerContentStyle,
  FinalCardContentWrapperStyle,
} from '../Styled/Content';
import { CardDescription } from '../../Description';
import { CardHeader } from '../../Header';

type Props = {
  /** Object with Static properties used to configure the Final Card */
  configuration: FinalCardConfig,
  /** Total of cards */
  cardsCount: number,
  /** Index of the card */
  index: number,
  /** Offset of cards without pagination (introCard) */
  cardOffset: number,
  /** Position of the card */
  position: number,
  /** Scale property used by Styled Component */
  scale: number,
  /** Zindex property used by Styled Component */
  zindex: number,
  /** Boolean toggled when card is visible / hidden */
  isCardVisible: boolean,
  /** Method called when previous card button is clicked  */
  goToPreviousCard: (event: SyntheticEvent<HTMLButtonElement>) => void,
};

/**
 * Renders Final Card of the Sequence
 */
export const FinalCardComponent = (props: Props) => {
  const {
    configuration,
    cardsCount,
    index,
    isCardVisible,
    cardOffset,
    position,
    scale,
    zindex,
    goToPreviousCard,
  } = props;

  return (
    <React.Fragment>
      <CardDescription
        cardOffset={cardOffset}
        index={index}
        cardsCount={cardsCount}
        isCardVisible={isCardVisible}
      />
      <ProposalCardStyle
        position={position}
        scale={scale}
        zindex={zindex}
        isCardVisible={isCardVisible}
        aria-hidden={!isCardVisible}
        as="dd"
      >
        <CardHeader
          index={index}
          cardsCount={cardsCount}
          cardOffset={cardOffset}
          goToPreviousCard={goToPreviousCard}
        />
        <ContentWrapperStyle>
          <InnerContentStyle>
            <FinalTitle title={configuration.title} />
            <FinalCardContentWrapperStyle>
              <Sharing text={configuration.share} />
              <More
                title={configuration.learnMoreTitle}
                url={configuration.linkUrl}
              />
            </FinalCardContentWrapperStyle>
          </InnerContentStyle>
        </ContentWrapperStyle>
      </ProposalCardStyle>
    </React.Fragment>
  );
};
