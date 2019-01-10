import styled from 'styled-components';
import { pxToRem } from 'Helpers/styled';
import { Breakpoints } from 'Assets/vars/Breakpoints';
import { NoStyleTextInput } from 'Components/Elements/Form';
import { MiddleRow } from 'Components/Elements/FlexElements';
import { SmallGreyButton, SmallRedButton } from 'Components/Elements/ButtonElements';
import { MakeFonts } from 'Assets/vars/Fonts';
import { TextColors, ShadowColors } from 'Assets/vars/Colors';

export const Label = styled.label`
  font-size: ${pxToRem('14px')};
  line-height: ${pxToRem('40px')};
  margin-right:  ${pxToRem('2.5px')};
  white-space: nowrap;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    font-size: ${pxToRem('18px')};
    line-height: ${pxToRem('50px')};
    margin-left: ${pxToRem('22px')};
  }
`;

export const Input = styled(NoStyleTextInput)`
  width: 100%;
  font-family: ${MakeFonts.RobotoBold};
  font-weight: bold;
  font-size: ${pxToRem('14px')};
  line-height: ${pxToRem('40px')};
  padding: 0 0 0 ${pxToRem('2.5px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    font-size: ${pxToRem('18px')};
    line-height: ${pxToRem('50px')};
  }
`;

export const CharLimit = styled(MiddleRow)`
  font-family: ${MakeFonts.RobotoRegular};
  color: ${TextColors.MediumGrey};
  font-size: ${pxToRem('12px')};
  padding: 0 ${pxToRem('2.5px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    font-size: ${pxToRem('16px')};
    padding: 0 ${pxToRem('16px')};
  }
`;

export const DisabledProposalButton = styled(SmallGreyButton)`
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroTwoOpacity};
`;

export const ProposalButton = styled(SmallRedButton)`
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
`;
