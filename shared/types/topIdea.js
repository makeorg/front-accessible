// @flow
export type IdeaScoreType = {
  totalProposalsRatio: number,
  agreementRatio: number,
  likeItRatio: number,
};

export type PersonalityCommentType = {
  personalityId: string,
  displayName: string,
  avatarUrl: string,
  politicalParty: string,
};

export type TopIdeaCommentsType = {
  id: string,
  personality: PersonalityCommentType,
  comment1: string,
  comment2: string,
  comment3: string,
  vote: string,
  qualification: string,
};

export type TopIdea = {
  id: string,
  ideaId: string,
  questionId: string,
  name: string,
  label: string,
  scores: IdeaScoreType,
  proposalsCount: number,
  avatars: string[],
  comments: TopIdeaCommentsType[],
  weight: number,
  commentsCount: number,
};