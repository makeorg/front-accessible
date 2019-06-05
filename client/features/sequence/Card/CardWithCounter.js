// @flow

import React from 'react';
import type { Node as TypeReactNode } from 'react';
import { CardDescription } from 'Client/features/sequence/Description';
import { ProposalCardStyle } from 'Client/features/sequence/Card/Styled';
import { CardHeader } from 'Client/features/sequence/Header';

type Props = {
  /** Offset of cards without pagination (introCard) */
  cardOffset: number,
  /** index of the card */
  index: number,
  /** Total of cards */
  cardsCount: number,
  /** Position of the card */
  position: number,
  /** Scale property used by Styled Component */
  scale: number,
  /** Zindex property used by Styled Component */
  zindex: number,
  /** Boolean toggled when card is visible / hidden */
  isCardVisible: boolean,
  /** Boolean toggled when card is visible / hidden */
  isCardCollapsed: boolean,
  /** Content of children */
  children: TypeReactNode,
  /** Method called when return to previous card */
  decrementCurrentIndex: () => void,
};

export const CardWithCounter = ({
  cardOffset,
  index,
  cardsCount,
  position,
  scale,
  zindex,
  isCardVisible,
  isCardCollapsed,
  children,
  decrementCurrentIndex,
}: Props) => {
  return (
    <React.Fragment>
      <CardDescription
        cardOffset={cardOffset}
        cardsCount={cardsCount}
        index={index}
        isCardVisible={isCardVisible}
      />
      <ProposalCardStyle
        position={position}
        scale={scale}
        zindex={zindex}
        isCardCollapsed={isCardCollapsed}
        isCardVisible={isCardVisible}
        aria-hidden={!isCardVisible}
        as="dd"
      >
        <CardHeader
          index={index}
          cardsCount={cardsCount}
          cardOffset={cardOffset}
          decrementCurrentIndex={decrementCurrentIndex}
        />
        {children}
      </ProposalCardStyle>
    </React.Fragment>
  );
};
