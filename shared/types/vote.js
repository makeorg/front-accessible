// @flow
import { type QualificationType } from './qualification';

export type VoteType = {
  voteKey: string,
  count: number,
  qualifications: QualificationType[],
  hasVoted: boolean,
};
