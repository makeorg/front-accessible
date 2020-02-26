// @flow
import { type Qualification as TypeQualification } from './qualification';

export type Vote = {
  voteKey: string,
  count: number,
  qualifications: TypeQualification[],
  hasVoted: boolean,
};
