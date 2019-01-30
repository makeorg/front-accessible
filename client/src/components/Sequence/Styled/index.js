import styled from 'styled-components';
import { Breakpoints, Layouts } from 'Client/app/assets/vars/Breakpoints';
import { pxToRem } from 'Shared/helpers/styled';
import { PROPOSALSTACK_HEIGHT_MOBILE, PROPOSALSTACK_HEIGHT_DESKTOP } from 'Client/app/constants/elements';
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
  height: calc(100% - ${pxToRem(PROPOSALSTACK_HEIGHT_MOBILE)});
  max-width: ${pxToRem(Layouts.SpecialContainerWidth)};
  transition: transform 0.5s ease-in;
  ${props => (props.isSequenceCollapsed ? 'transform: translateY(90%)' : 'transform: translateY(0)')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    height: calc(100% - ${pxToRem(PROPOSALSTACK_HEIGHT_DESKTOP)});
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
