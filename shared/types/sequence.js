// @flow
import {
  type IntroCardConfig,
  type PushProposalCardConfig,
  type SignUpCardConfig,
  type FinalCardConfig,
} from 'Shared/types/card';

import { type ProposalType } from 'Shared/types/proposal';

export type ExtraSlidesConfig = {
  introCard: IntroCardConfig,
  pushProposalCard: PushProposalCardConfig,
  signUpCard: SignUpCardConfig,
  finalCard: FinalCardConfig,
};

export type Theme = {
  color: string,
  footerFontColor: string,
  gradientStart: string,
  gradientEnd: string,
};

export type Metas = {
  title: string,
  description: string,
  picture: string,
};

export type Wording = {
  title: string,
  question: string,
  metas: Metas,
};

export type TwitterType = {
  hashtags: string,
};

export type SharingType = {
  twitter: TwitterType,
};

export type FooterType = {
  sentence: string,
};

export type QuestionConfiguration = {
  wording: Wording,
  sharing: SharingType,
  theme: Theme,
  consultationUrl: string,
  sequenceUrl: string,
  sequenceConfig: ExtraSlidesConfig,
  sequenceSignUpForm: any,
  footer?: FooterType,
};

export type ConfigurationTypes =
  | IntroCardConfig
  | PushProposalCardConfig
  | SignUpCardConfig
  | FinalCardConfig
  | ProposalType;

export type CardType = {
  type: string,
  configuration: ConfigurationTypes,
  cardOffset?: number,
};
