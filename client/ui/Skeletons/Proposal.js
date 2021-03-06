// @flow
import React from 'react';
import {
  SkeletonCardStyle,
  SkeletonRoundStyle,
  SkeletonLineStyle,
  SkeletonVoteWrapperStyle,
  SequenceSkeletonCardStyle,
} from './style';

type Props = {
  fromSequence?: boolean,
};
export const ProposalSkeleton = ({ fromSequence = false }: Props) => (
  <SkeletonCardStyle as={fromSequence && SequenceSkeletonCardStyle}>
    <SkeletonRoundStyle className="avatar" />
    <SkeletonLineStyle className="small name" />
    <SkeletonLineStyle className="medium proposal" />
    <SkeletonLineStyle className="large proposal" />
    <SkeletonLineStyle className="medium" />
    <SkeletonVoteWrapperStyle>
      <SkeletonRoundStyle />
      <SkeletonRoundStyle />
      <SkeletonRoundStyle />
    </SkeletonVoteWrapperStyle>
  </SkeletonCardStyle>
);
