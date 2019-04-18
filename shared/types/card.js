// @flow

export type PartnerItem = {
  name: string,
  imageUrl: string,
};

export type IntroCardConfig = {
  enabled: boolean,
  title?: string,
  description?: string[],
  partners?: PartnerItem[],
  extraLogo?: string,
  id?: string,
};

export type PushProposalCardConfig = {
  enabled: boolean,
  extraLogo?: string,
  id?: string,
};

export type SignUpCardConfig = {
  enabled: boolean,
  title?: string,
  nextCtaText?: string,
  id?: string,
};

export type FinalCardConfig = {
  enabled: boolean,
  withSharing: boolean,
  title?: string,
  share?: string[],
  learnMoreTitle?: string,
  learnMoreTextButton?: string,
  linkUrl?: string,
  id?: string,
};
