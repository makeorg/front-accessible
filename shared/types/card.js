// @flow
import { type ProposalType } from 'Shared/types/proposal';
import { type QuestionType } from 'Shared/types/question';

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

export type SequenceCardType = {|
  type: string,
  configuration:
    | IntroCardConfigType
    | PushProposalCardConfigType
    | SignUpCardConfigType
    | FinalCardConfigType
    | ProposalType,
  offset: number,
|};

export type ProposalListCardType = {|
  type: string,
  proposal: ProposalType,
|};

export type TopProposalListCardType = {|
  type: string,
  question: QuestionType,
|};
