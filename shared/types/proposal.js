
// @flow
export type Qualifications = {
};

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

export type Votes = {
  voteKey: string,
  count: number,
  qualifications: Qualifications[],
  hasVoted: boolean
};

export type VotesPercentObject = {
  agree: number,
  disagree: number,
  neutral: number
}

export type Proposal = {
  id: string,
  userId: string,
  content: string,
  slug: string,
  status: string,
  createdAt: string,
  updatedAt: string,
  votes: Votes[],
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
