// @flow
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { type QuestionTheme as TypeQuestionTheme } from 'Shared/types/question';

// Home view
export type TypeBusinessConsultation = {
  theme: TypeQuestionTheme,
  startDate: string | null,
  endDate: string | null,
  slug: string,
  aboutUrl: string,
  title: string,
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
};

export type TypeCurrentConsultation = {
  questionSlug: string | null,
  title: string,
  picture: string,
  altPicture: string,
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
