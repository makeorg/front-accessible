// @flow
export type IdeaScoreType = {
  totalProposalsRatio: number,
  agreementRatio: number,
  likeItRatio: number,
};

export type TopIdea = {
  id: string,
  ideaId: string,
  questionId: string,
  name: string,
  scores: IdeaScoreType,
  proposalsCount: number,
  avatars: string[],
  weight: number,
};
