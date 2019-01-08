// @flow
import type {
  IntroCardConfig,
  IntroCardWording,
  PushProposalCardConfig,
  SignUpCardConfig,
  SignUpCardWording,
  FinalCardConfig,
  FinalCardWording
} from 'Types/card';

export type ExtraSlidesConfig = {
  introCard: IntroCardConfig,
  pushProposal: PushProposalCardConfig,
  signUpCard: SignUpCardConfig,
  finalCard: FinalCardConfig
};

export type ExtraSlidesWording = {
  introCard: IntroCardWording,
  signUpCard: SignUpCardWording,
  finalCard: FinalCardWording
};


export type Card = {
  type: string,
  configuration: mixed
}
