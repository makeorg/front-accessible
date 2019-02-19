
// @flow
export type QualificationType = {
  count: number,
  hasQualified: false,
  qualificationKey: string
}

export type Author = {
  firstName: string,
  organisationName: string,
  organisationSlug: string,
  postalCode: string,
  age: number,
  avatarUrl: string
};

export type Context = {
  operation: string,
  source: string,
  location: string,
  question: string
};

export type VoteType = {
  voteKey: string,
  count: number,
  qualifications: Array<QualificationType>,
  hasVoted: boolean
};

export type VotesPercentObject = {
  agree: number,
  disagree: number,
  neutral: number
}

export type ProposalType = {
  id: string,
  userId: string,
  content: string,
  slug: string,
  status: string,
  createdAt: string,
  updatedAt: string,
  votes: Array<VoteType>,
  context: Context,
  trending: string,
  labels: any[],
  author: Author,
  organisations: any[],
  country: string,
  language: string,
  themeId: string,
  tags: any[],
  myProposal: boolean,
  idea: string,
  questionId: string,
  operationId: string,
  proposalKey: string
};
