// @flow
import {
  type IntroCardConfigType,
  type PushProposalCardConfigType,
  type SignUpCardConfigType,
  type FinalCardConfigType,
} from 'Shared/types/card';

export type QuestionThemeType = {
  color?: string,
  fontColor?: string,
  secondaryColor?: string,
  secondaryFontColor?: string,
  gradientStart: string,
  gradientEnd: string,
};

export type ThemeItemType = {
  name: string,
  ideas: string[],
};

export type ReportsType = {
  type: string,
  path: string,
  size: string,
};

export type ControversialProposalsType = {
  author: string,
  content: string,
  like_it: number,
  no_way: number,
};

export type RejectedProposalsType = {
  author: string,
  content: string,
  disagree: number,
  no_way: number,
};

export type PieChartDataType = {
  label: string,
  sublabel?: string,
  percent: number,
  color: string,
  adjustLabel?: {
    hidePercent?: boolean,
    textAlign?: string,
    xAxis?: number,
    yAxis?: number,
  },
};

export type PieChartType = {
  type: string,
  unit: string,
  name: string,
  legend?: string,
  data: PieChartDataType[],
};

export type HistogramLegendType = {
  title: string,
  dimensions: {
    first: string,
    second?: string,
  },
};

export type HistogramDataType = {
  label: string,
  color?: string,
  bars: {
    first: number,
    second?: number,
  },
};

export type HistogramType = {
  type: string,
  name: string,
  unit: string,
  legend: HistogramLegendType,
  forcedHigherValue?: number,
  data: HistogramDataType[],
};

export type QuestionResultsType = {
  context: string,
  reports: ?Array<ReportsType>,
  contact: boolean,
  key_figures: {
    participants: number,
    proposals: number,
    votes: number,
  },
  top_ideas: ThemeItemType[],
  controversials: ControversialProposalsType[],
  rejected: RejectedProposalsType[],
  cartography: PieChartType[],
  participation: Array<HistogramType | PieChartType>,
};

export type MetasType = {
  title: string,
  description: string,
  picture: string,
};

export type QuestionWordingType = {
  question: string,
  description: string,
  title: string,
  metas: MetasType,
};

export type QuestionExtraSlidesConfigType = {
  introCard: IntroCardConfigType,
  pushProposalCard: PushProposalCardConfigType,
  signUpCard: SignUpCardConfigType,
  finalCard: FinalCardConfigType,
};

export type SimpleOperationDataType = {
  questionId: string,
  questionSlug: string,
  question: string,
  shortTitle: string,
  operationTitle: string,
  country: string,
  language: string,
  startDate: string,
  endDate: string,
  displayResults: boolean,
};

export type PartnerOrganisationType = {
  organisationId: string,
  slug: string,
};

export type PartnerType = {
  name: string,
  logo?: string,
  link?: string,
  organisation?: PartnerOrganisationType,
  partnerKind: 'ACTOR' | 'FOUNDER' | 'MEDIA' | 'ACTION_PARTNER',
  weight: number,
};

export type QuestionType = {
  questionId: string,
  operationId: string,
  wording: QuestionWordingType,
  question: string,
  slug: string,
  country: string,
  language: string,
  allowedSources: string[],
  startDate: ?string | null,
  endDate: ?string | null,
  landingSequenceId: string,
  canPropose: boolean,
  operationKind: 'PUBLIC_CONSULTATION' | 'PRIVATE_CONSULTATION' | 'GREAT_CAUSE',
  sequenceConfig: QuestionExtraSlidesConfigType,
  aboutUrl: string,
  partners: PartnerType[],
  theme: QuestionThemeType,
  consultationImage?: string,
  descriptionImage?: string,
  displayResults: boolean,
  operation: {
    questions: SimpleOperationDataType[],
  },
  activeFeatures: string[],
};

export type QuestionPartnerType = $ReadOnly<{
  organisationId: string,
  organisationName: string,
  slug: string,
  avatarUrl: string,
  description: string,
  publicProfile: boolean,
  proposalsCount: number,
  votesCount: number,
  language: string,
  country: string,
  website: ?string,
  countsByQuestion: Object,
}>;
