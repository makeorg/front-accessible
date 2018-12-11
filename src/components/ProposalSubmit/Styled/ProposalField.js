import styled from 'styled-components';
import { pxToRem } from 'Helpers/styled';
import Breakpoints from 'Assets/vars/Breakpoints';
import { NoStyleTextInput } from 'Components/Elements/Form';
import { MiddleRow } from 'Components/Elements/FlexElements';
import { SmallGreyButton, SmallRedButton } from 'Components/Elements/ButtonElements';
import { MakeFonts } from 'Assets/vars/Fonts';
import { TextColors, ShadowColors } from 'Assets/vars/Colors';

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
  padding: 0;
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
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroTwoOpacity};
`;

export const ProposalButton = styled(SmallRedButton)`
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
`;
