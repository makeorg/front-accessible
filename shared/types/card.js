// @flow
import { type ProposalType } from 'Shared/types/proposal';
import { type QuestionType } from 'Shared/types/question';
import { type VoteType } from 'Shared/types/vote';

export type PartnerItemType = {
  name: string,
  imageUrl: string,
};

export type IntroCardConfigType = {|
  enabled: boolean,
  title?: string,
  description?: string,
  partners?: PartnerItemType[],
  extraLogo?: string,
  id?: string,
|};

export type PushProposalCardConfigType = {|
  enabled: boolean,
  extraLogo?: string,
  id?: string,
|};

export type SignUpCardConfigType = {|
  enabled: boolean,
  title?: string,
  nextCtaText?: string,
  id?: string,
|};

export type FinalCardConfigType = {|
  enabled: boolean,
  withSharing: boolean,
  title?: string,
  share?: string,
  learnMoreTitle?: string,
  learnMoreTextButton?: string,
  linkUrl?: string,
  id?: string,
|};

export type ProposalCardConfigType = {
  proposal: ProposalType,
};

export type ProposalCardStateType = {
  votes: VoteType[],
};

export type ProposalCardType = {|
  type: string,
  configuration: ProposalCardConfigType,
  offset: number,
  state?: ProposalCardStateType,
  index: number,
|};

export type SequenceCardType = {|
  type: string,
  configuration:
    | IntroCardConfigType
    | PushProposalCardConfigType
    | SignUpCardConfigType
    | FinalCardConfigType
    | ProposalCardConfigType,
  offset: number,
  state?: ProposalCardStateType,
  index: number,
|};

export type ProposalListCardType = {|
  type: string,
  proposal: ProposalType,
|};

export type TopProposalListCardType = {|
  type: string,
  question: QuestionType,
|};
