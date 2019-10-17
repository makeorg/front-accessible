// @flow
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { type Partner as TypePartner } from 'Shared/types/organisation';
import { type QuestionTheme as TypeQuestionTheme } from 'Shared/types/question';

export type ConsultationType = {
  presentation: string,
  logo: string,
};

export type Sharing = {
  twitterHashtags: string,
};

export type QuestionConfiguration = {
  sharing: Sharing,
  theme: TypeQuestionTheme,
  partners: TypePartner[],
  consultation: ConsultationType,
  customFinalCard: {
    imageUrl: string,
    nextQuestion: string,
  },
};

export type SequenceType = {
  id: string,
  proposals: TypeProposal[],
};
