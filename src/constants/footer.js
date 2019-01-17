// @flow

export type TypeFooterLink = {
  label: string;
  linkUrl: string;
}

export type TypeFooterItems = {
  gtu: TypeFooterLink;
  contact: TypeFooterLink;
  datapolicy: TypeFooterLink;
  legal: TypeFooterLink;
}

export const footerItems: TypeFooterItems = {
  gtu: {
    label: 'main-footer.menu.item-2.label',
    linkUrl: 'https://about.make.org/terms-of-use'
  },
  contact: {
    label: 'main-footer.menu.item-4.label',
    linkUrl: 'https://about.make.org/contact'
  },
  datapolicy: {
    label: 'main-footer.menu.item-3.label',
    linkUrl: 'https://about.make.org/data-use-policy'
  },
  legal: {
    label: 'main-footer.menu.item-1.label',
    linkUrl: 'https://about.make.org/legal-notice'
  }
};
