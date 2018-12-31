// @flow
import type {
  introCardConfig,
  introCardWording,
  pushProposalCardConfig,
  signUpCardConfig,
  signUpCardWording,
  finalCardConfig,
  finalCardWording
} from 'Types/card';

export type ExtraSlidesConfig = {
  introCard: introCardConfig,
  pushProposal: pushProposalCardConfig,
  signUpCard: signUpCardConfig,
  finalCard: finalCardConfig
};

export type ExtraSlidesWording = {
  introCard: introCardWording,
  signUpCard: signUpCardWording,
  finalCard: finalCardWording
};


export type Card = {
  type: String,
  configuration: mixed
}
