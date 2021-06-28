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

export type FinalCardConfigType = {|
  enabled: boolean,
  withSharing: boolean,
  title?: string,
  share?: boolean,
  learnMoreTitle?: string,
  learnMoreTextButton?: string,
  linkUrl?: string,
  description?: string,
|};

export type ProposalCardConfigType = {
  proposal: ProposalType,
};

export type NoProposalCardConfigType = {
  title: string,
  description: string,
};

export type ProposalCardStateType = {
  votes: VoteType[],
};

export type ProposalCardType = {|
  type: string,
  configuration: ProposalCardConfigType,
  state?: ProposalCardStateType,
  index: number,
|};

export type SequenceCardType = {|
  type: string,
  configuration:
    | IntroCardConfigType
    | PushProposalCardConfigType
    | ProposalCardConfigType
    | NoProposalCardConfigType,
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

export type DemographicsType = {
  value: string,
  label: string,
};
