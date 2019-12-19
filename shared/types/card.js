// @flow
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { type Question as TypeQuestion } from 'Shared/types/question';

export type PartnerItem = {
  name: string,
  imageUrl: string,
};

export type IntroCardConfig = {|
  enabled: boolean,
  title?: string,
  description?: string,
  partners?: PartnerItem[],
  extraLogo?: string,
  id?: string,
|};

export type PushProposalCardConfig = {|
  enabled: boolean,
  extraLogo?: string,
  id?: string,
|};

export type SignUpCardConfig = {|
  enabled: boolean,
  title?: string,
  nextCtaText?: string,
  id?: string,
|};

export type FinalCardConfig = {|
  enabled: boolean,
  withSharing: boolean,
  title?: string,
  share?: string,
  learnMoreTitle?: string,
  learnMoreTextButton?: string,
  linkUrl?: string,
  id?: string,
|};

export type TypeSequenceCard = {|
  type: string,
  configuration:
    | IntroCardConfig
    | PushProposalCardConfig
    | SignUpCardConfig
    | FinalCardConfig
    | TypeProposal,
  offset: number,
|};

export type TypeProposalListCard = {|
  type: string,
  proposal: TypeProposal,
|};

export type TypeTopProposalListCard = {|
  type: string,
  question: TypeQuestion,
|};
