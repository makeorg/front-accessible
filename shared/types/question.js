// @flow
import {
  type IntroCardConfig,
  type PushProposalCardConfig,
  type SignUpCardConfig,
  type FinalCardConfig,
} from 'Shared/types/card';

export type Metas = {
  title: string,
  description: string,
  picture: string,
};

export type QuestionWording = {
  question: string,
  title: string,
  metas: Metas,
};
export type QuestionExtraSlidesConfig = {
  introCard: IntroCardConfig,
  pushProposalCard: PushProposalCardConfig,
  signUpCard: SignUpCardConfig,
  finalCard: FinalCardConfig,
};

export type Question = {
  questionId: string,
  operationId: string,
  slug: string,
  operationKind: string,
  wording: QuestionWording,
  country: string,
  language: string,
  allowedSources: string[],
  startDate: string,
  endDate: string,
  landingSequenceId: string,
  operationTitle: string,
  canPropose: boolean,
  aboutUrl: string,
  sequenceConfig: QuestionExtraSlidesConfig,
};
