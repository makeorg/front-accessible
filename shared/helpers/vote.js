/* @flow */

export const getVoteKey = (voteKey: string, proposalId: string) =>
  `${voteKey}_${proposalId}`;
