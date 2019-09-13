// @flow
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import {
  type QuestionTheme as TypeQuestionTheme,
  type Question as TypeQuestion,
} from 'Shared/types/question';
import { type Organisation as TypeOrganisation } from 'Shared/types/organisation';

// Home view
export type TypeBusinessConsultation = {
  theme: TypeQuestionTheme,
  startDate: string | null,
  endDate: string | null,
  slug: string,
  aboutUrl: string,
  question: string,
};

export type TypeFeaturedConsultation = {
  questionSlug: string | null,
  title: string,
  description: string | null,
  landscapePicture: string,
  portraitPicture: string,
  altPicture: string,
  label: string,
  buttonLabel: string,
  internalLink: 'consultation' | 'action' | 'sequence' | null,
  externalLink: string | null,
  slot: number,
};

export type TypeCurrentConsultation = {
  questionId: string | null,
  questionSlug: string | null,
  title: string,
  picture: string,
  altPicture: string,
  label: string,
  description: string,
  linkLabel: string,
  internalLink: 'consultation' | 'action' | 'sequence' | null,
  externalLink: string | null,
  proposalsNumber: number,
};

export type TypeHome = {
  popularProposals: TypeProposal[],
  controverseProposals: TypeProposal[],
  businessConsultations: TypeBusinessConsultation[],
  featuredConsultations: TypeFeaturedConsultation[],
  currentConsultations: TypeCurrentConsultation[],
};

export type TypeSearchViews = {
  proposals: {
    total: number,
    results: TypeProposal[],
  },
  questions: {
    total: number,
    results: TypeQuestion[],
  },
  organisations: {
    total: number,
    results: TypeOrganisation[],
  },
};

export type TypeSliderPeek = {
  before: number,
  after: number,
};

export type TypeSliderParams = {
  type: string,
  rewind: boolean,
  perView: number,
  gap: number,
  breakpoints?: any,
  peek: TypeSliderPeek,
};
