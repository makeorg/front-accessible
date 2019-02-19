// @flow
import type {
  IntroCardConfig,
  IntroCardWording,
  PushProposalCardConfig,
  SignUpCardConfig,
  SignUpCardWording,
  FinalCardConfig,
  FinalCardWording
} from 'Shared/types/card';

import type {
  ProposalType
} from 'Shared/types/proposal';

export type ExtraSlidesConfig = {
  introCard: IntroCardConfig,
  pushProposal: PushProposalCardConfig,
  signUpCard: SignUpCardConfig,
  finalCard: FinalCardConfig
}


export type ExtraSlidesWording = {
  introCard: IntroCardWording,
  signUpCard: SignUpCardWording,
  finalCard: FinalCardWording
}

export type Theme = {
  color: string,
  footerFontColor: string,
  gradientStart: string,
  gradientEnd: string
}

export type Metas = {
  title: string,
  description: string,
  picture: string
}

export type Wording = {
  title: string,
  question: string,
  metas: Metas
}

export type TwitterType = {
  hashtags: string
}

export type SharingType = {
  twitter: TwitterType
}

export type FooterType = {
  sentence: string
}

export type Question = {
  questionId: string,
  operationId: string,
  slug: string,
  question: string,
  country: string,
  language: string,
  allowedSources: Array<string>,
  startDate: string,
  endDate: string,
  landingSequenceId: string,
  operationTitle: string
}

export type QuestionConfiguration = {
  wording: Wording,
  sharing: SharingType,
  theme: Theme,
  consultationUrl: string,
  sequenceUrl: string,
  sequenceExtraSlidesWording: ExtraSlidesWording,
  sequenceExtraSlidesConfig: ExtraSlidesConfig,
  sequenceSignUpForm: any,
  footer?: FooterType
}

export type ConfigurationTypes =
  | IntroCardConfig
  | PushProposalCardConfig
  | SignUpCardConfig
  | FinalCardConfig
  | ProposalType


export type WordingTypes =
  | IntroCardWording
  | SignUpCardWording
  | FinalCardWording

export type CardType = {
  type: string,
  configuration: ConfigurationTypes,
  wording?: WordingTypes,
  cardOffset?: number,
}
