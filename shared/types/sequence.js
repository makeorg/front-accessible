// @flow
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { type Partner as TypePartner } from 'Shared/types/organisation';

export type QuestionTheme = {
  color: string,
  footerFontColor: string,
  gradientStart: string,
  gradientEnd: string,
};

export type ConsultationType = {
  presentation: string,
  logo: string,
};

export type Sharing = {
  twitterHashtags: string,
};

export type QuestionConfiguration = {
  sharing: Sharing,
  theme: QuestionTheme,
  partners: TypePartner[],
  consultation: ConsultationType,
};

export type SequenceType = {
  id: string,
  proposals: TypeProposal[],
};
