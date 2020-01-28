// @flow

import { type Question } from './question';
import { type TopIdea } from './topIdea';

export type PersonalityCommentsType = {
  id: string,
  topIdeaId: string,
  personalityId: string,
  comment1: string,
  comment2: string,
  comment3: string,
  vote: string,
  qualification: string,
};

export type PersonalityOpinionType = {
  question: Question,
  topIdea: TopIdea,
  comment: PersonalityCommentsType,
};
