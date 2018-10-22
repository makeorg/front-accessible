import styled from 'styled-components';
import { pxToRem } from '../../../helpers/styled';
import Breakpoints from '../../../assets/vars/Breakpoints';
import { NoStyleTextInput } from '../../Elements/Form';
import { MiddleRow } from '../../Elements/FlexElements';
import { SmallGreyButton, SmallRedButton } from '../../Elements/ButtonElements';
import { MakeFonts } from '../../../assets/vars/Fonts';
import { TextColors } from '../../../assets/vars/Colors';

export const Label = styled.label`
  font-size: ${pxToRem('14px')};
  line-height: ${pxToRem('40px')};
  margin-left:  ${pxToRem('12px')};
  min-width: ${pxToRem('42px')};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    font-size: ${pxToRem('18px')};
    line-height: ${pxToRem('50px')};
    margin-left: ${pxToRem('22px')};
    min-width: ${pxToRem('52px')};
  }
`;

export const Input = styled(NoStyleTextInput)`
  width: 100%;
  font-family: ${MakeFonts.CircularBold};
  font-size: ${pxToRem('14px')};
  line-height: ${pxToRem('40px')};
  padding-right: 0;
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    font-size: ${pxToRem('18px')};
    line-height: ${pxToRem('50px')};
  }
`;

export const CharLimit = styled(MiddleRow)`
  font-family: ${MakeFonts.CircularBook};
  color: ${TextColors.MediumGrey};
  font-size: ${pxToRem('12px')};
  min-width: ${pxToRem('55px')};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    font-size: ${pxToRem('14px')};
    min-width: ${pxToRem('70px')};
  }
`;

export const DisabledProposalButton = styled(SmallGreyButton)`
  padding: ${pxToRem('9px')} ${pxToRem('20px')} ${pxToRem('7px')};
  box-shadow: none;
`;

export const ProposalButton = styled(SmallRedButton)`
  padding: ${pxToRem('9px')} ${pxToRem('20px')} ${pxToRem('7px')};
  box-shadow: none;
`;
