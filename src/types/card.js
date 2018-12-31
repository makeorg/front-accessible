// @flow

export type PartnerItem = {
  name: string,
  imageUrl: string
}

export type introCardConfig = {
  title: boolean,
  description: boolean,
  partners: Array<PartnerItem>,
  inPartnershipWith: boolean,
  extraLogo: boolean
}

export type introCardWording = {
  title: string,
  description: Array<string>
}

export type pushProposalCardConfig = {
  extraLogo: string
}

export type signUpCardConfig = {
  customTitle: boolean,
  customNextCTA: boolean
}

export type signUpCardWording = {
  title: string,
  nextCTA: string
}

export type finalCardConfig = {
  customTitle: boolean,
  linkUrl: string,
  withSharing: boolean
}

export type finalCardWording = {
  title: string,
  share: Array<string>,
  learn_more_title: string,
  learn_more_button: string
}
