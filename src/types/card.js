// @flow

export type PartnerItem = {
  name: string,
  imageUrl: string
}

export type IntroCardConfig = {
  title: boolean,
  description: boolean,
  partners: Array<PartnerItem>,
  inPartnershipWith: boolean,
  extraLogo: boolean
}

export type IntroCardWording = {
  title: string,
  description: Array<string>
}

export type PushProposalCardConfig = {
  extraLogo: string
}

export type SignUpCardConfig = {
  customTitle: boolean,
  customNextCTA: boolean
}

export type SignUpCardWording = {
  title: string,
  nextCTA: string
}

export type FinalCardConfig = {
  customTitle: boolean,
  linkUrl: string,
  withSharing: boolean
}

export type FinalCardWording = {
  title: string,
  share: Array<string>,
  learn_more_title: string,
  learn_more_button: string
}
