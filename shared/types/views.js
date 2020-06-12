// @flow
import { type ProposalType } from 'Shared/types/proposal';
import {
  type QuestionThemeType,
  type QuestionType,
  type HomeQuestionType,
} from 'Shared/types/question';
import { type OrganisationType } from 'Shared/types/organisation';

// Home view
export type BusinessConsultationType = {
  theme: QuestionThemeType,
  startDate: ?string | null,
  endDate: ?string | null,
  slug: string,
  aboutUrl: string,
  question: string,
};

export type FeaturedConsultationType = {
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

export type CurrentConsultationType = {
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

export type DeprecatedHomeType = {
  popularProposals: ProposalType[],
  controverseProposals: ProposalType[],
  businessConsultations: BusinessConsultationType[],
  featuredConsultations: FeaturedConsultationType[],
  currentConsultations: CurrentConsultationType[],
};

export type HomeHighlightsType = {
  participantsCount: number,
  proposalsCount: number,
  partnersCount: number,
};

export type HomeArticleType = {
  title: string,
  description: string,
  picture: string,
  link: ?string | null,
};

export type HomeViewType = {
  highlights: HomeHighlightsType,
  currentQuestions: HomeQuestionType[],
  featuredQuestions: HomeQuestionType[],
  articles: HomeArticleType[],
};

export type SearchViewsType = {
  proposals: {
    total: number,
    results: ProposalType[],
  },
  questions: {
    total: number,
    results: QuestionType[],
  },
  organisations: {
    total: number,
    results: OrganisationType[],
  },
};

export type InteractiveChildrenType = {
  inputs?: boolean,
  buttons?: boolean,
  links?: boolean,
};

export type SliderParamsType = {
  slidesToShow?: number | string,
  slidesToScroll?: number | string,
  skipTrack?: boolean,
  arrows?: {
    prev: string,
    next: string,
  },
  responsive?: SliderParamsType[],
  interactiveChildren?: InteractiveChildrenType,
  counterName?: string,
};
