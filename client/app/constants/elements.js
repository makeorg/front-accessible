/* @flow */

import { Elements } from 'Client/app/assets/vars/Elements';
import { DefaultPadding } from 'Client/app/assets/vars/Breakpoints';

export const CALC_RECOVERY_HEIGHT_MOBILE: number =
  Elements.HeaderHeightMobile +
  Elements.FooterHeightMobile +
  DefaultPadding.Mobile;

export const CALC_RECOVERY_HEIGHT_DESKTOP: number =
  Elements.HeaderHeightDesktop +
  Elements.FooterHeightDesktop +
  DefaultPadding.Desktop;
