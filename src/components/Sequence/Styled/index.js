import styled from 'styled-components';
import { Breakpoints, Layouts } from 'Assets/vars/Breakpoints';
import { Elements } from 'Assets/vars/Elements';
import { pxToRem } from 'Helpers/styled';
import {
  Wrapper,
  List
} from './List';
import {
  BackArrow,
  BackButton
} from './Button';
import {
  Footer,
  FooterNav,
  FooterTitle,
  FooterLink,
  InPartnershipWith
} from './Footer';

const Sequence = styled.section`
  position: relative;
  z-index: 0;
  width: 100%;
  height: calc(100% - ${pxToRem(Elements.SequenceFooterHeightMobile)});
  max-width: ${pxToRem(Layouts.SpecialContainerWidth)};
  transition: transform 0.5s ease-in;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    height: calc(100% - ${pxToRem(Elements.SequenceFooterHeightDesktop)});
  }
`;

/* List */
Sequence.Wrapper = Wrapper;
Sequence.List = List;
/* BackButton */
Sequence.BackArrow = BackArrow;
Sequence.BackButton = BackButton;
/* Footer */
Sequence.Footer = Footer;
Sequence.FooterNav = FooterNav;
Sequence.FooterTitle = FooterTitle;
Sequence.FooterLink = FooterLink;
Sequence.InPartnershipWith = InPartnershipWith;


export default Sequence;
