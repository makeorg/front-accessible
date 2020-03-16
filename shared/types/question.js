// @flow
import {
  type IntroCardConfig,
  type PushProposalCardConfig,
  type SignUpCardConfig,
  type FinalCardConfig,
} from 'Shared/types/card';

export type QuestionTheme = {
  color?: string,
  fontColor?: string,
  gradientStart: string,
  gradientEnd: string,
};

export type TypeThemeItem = {
  name: string,
  ideas: string[],
};

export type TypeReports = {
  type: string,
  path: string,
  size: string,
};

export type TypeControversialProposals = {
  author: string,
  content: string,
  like_it: number,
  no_way: number,
};

export type TypeRejectedProposals = {
  author: string,
  content: string,
  disagree: number,
  no_way: number,
};

export type TypePieChartData = {
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

export type TypePieChart = {
  type: string,
  unit: string,
  name: string,
  legend?: string,
  data: TypePieChartData[],
};

export type TypeHistogramLegend = {
  title: string,
  dimensions: {
    first: string,
    second?: string,
  },
};

export type TypeHistogramData = {
  label: string,
  color?: string,
  bars: {
    first: number,
    second?: number,
  },
};

export type TypeHistogram = {
  type: string,
  name: string,
  unit: string,
  legend: TypeHistogramLegend,
  forcedHigherValue?: number,
  data: TypeHistogramData[],
};

export type QuestionResults = {
  context: string,
  reports: ?Array<TypeReports>,
  key_figures: {
    participants: number,
    proposals: number,
    votes: number,
  },
  top_ideas: TypeThemeItem[],
  controversials: TypeControversialProposals[],
  rejected: TypeRejectedProposals[],
  cartography: TypePieChart[],
  participation: Array<TypeHistogram | TypePieChart>,
};

export type Metas = {
  title: string,
  description: string,
  picture: string,
};

export type QuestionWording = {
  question: string,
  description: string,
  title: string,
  metas: Metas,
};

export type QuestionExtraSlidesConfig = {
  introCard: IntroCardConfig,
  pushProposalCard: PushProposalCardConfig,
  signUpCard: SignUpCardConfig,
  finalCard: FinalCardConfig,
};

export type SimpleOperationData = {
  questionId: string,
  questionSlug: string,
  question: string,
  operationTitle: string,
  country: string,
  language: string,
  startDate: string,
  endDate: string,
};

export type PartnerOrganisation = {
  organisationId: string,
  slug: string,
};

export type TypePartner = {
  name: string,
  logo?: string,
  link?: string,
  organisation?: PartnerOrganisation,
  partnerKind: 'ACTOR' | 'FOUNDER' | 'MEDIA' | 'ACTION_PARTNER',
  weight: number,
};

export type Question = {
  questionId: string,
  operationId: string,
  wording: QuestionWording,
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
  sequenceConfig: QuestionExtraSlidesConfig,
  aboutUrl: string,
  partners: TypePartner[],
  theme: QuestionTheme,
  consultationImage?: string,
  descriptionImage?: string,
  displayResults: boolean,
  operation: {
    questions: SimpleOperationData[],
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
