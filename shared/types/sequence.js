// @flow
import {
  type IntroCardConfig,
  type PushProposalCardConfig,
  type SignUpCardConfig,
  type FinalCardConfig,
} from 'Shared/types/card';

import { type Proposal as TypeProposal } from 'Shared/types/proposal';

import { type Partner as TypePartner } from 'Shared/types/organisation';

export type ExtraSlidesConfig = {
  introCard: IntroCardConfig,
  pushProposalCard: PushProposalCardConfig,
  signUpCard: SignUpCardConfig,
  finalCard: FinalCardConfig,
};

export type QuestionTheme = {
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

export type ConsultationType = {
  presentation: string,
  logo: string,
};

export type Sharing = {
  twitterHashtags: string,
};

export type QuestionConfiguration = {
  wording: Wording,
  sharing: Sharing,
  theme: QuestionTheme,
  partners: TypePartner[],
  consultation: ConsultationType,
  isGreatCause: boolean,
  aboutUrl: string,
  sequenceConfig: ExtraSlidesConfig,
};

export type ConfigurationTypes =
  | IntroCardConfig
  | PushProposalCardConfig
  | SignUpCardConfig
  | FinalCardConfig
  | TypeProposal;

export type CardType = {
  type: string,
  configuration: ConfigurationTypes,
  cardOffset?: number,
};

export type SequenceType = {
  id: string,
  proposals: TypeProposal[],
};
