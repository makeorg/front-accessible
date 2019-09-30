// @flow
import {
  type IntroCardConfig,
  type PushProposalCardConfig,
  type SignUpCardConfig,
  type FinalCardConfig,
} from 'Shared/types/card';

export type QuestionTheme = {
  color?: string,
  footerFontColor?: string,
  gradientStart: string,
  gradientEnd: string,
};

export type QuestionResults = {
  context: string,
};

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
  question: string,
  theme: QuestionTheme,
  wording: QuestionWording,
  country: string,
  language: string,
  allowedSources: string[],
  startDate: string,
  endDate: string,
  landingSequenceId: string,
  operationTitle: string,
  canPropose: boolean,
  displayResults: boolean,
  aboutUrl: string,
  sequenceConfig: QuestionExtraSlidesConfig,
};
