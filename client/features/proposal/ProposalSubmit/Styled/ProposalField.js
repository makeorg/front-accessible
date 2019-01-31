import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { NoStyleTextInput } from 'Client/ui/Elements/Form';
import { MiddleRow, FlexElement } from 'Client/ui/Elements/FlexElements';
import { SmallGreyButton, SmallRedButton, IconInButton } from 'Client/ui/Elements/ButtonElements';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { TextColors, ShadowColors } from 'Client/app/assets/vars/Colors';

export const InputWrapper = styled(FlexElement)`
  width: 100%;
`;

export const ButtonWrapper = styled(FlexElement)`
  justify-content: flex-end;
  padding: ${pxToRem('7px')} 0;
  ${props => (props.isFieldExpanded ? 'width: 100%;' : '')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    min-width: ${pxToRem('230px')};
    ${props => (props.isFieldExpanded ? 'width: auto;' : '')};
  }
  
`;

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
  max-width: ${pxToRem('780px')};
  font-family: ${MakeFonts.RobotoBold};
  font-weight: bold;
  font-size: ${pxToRem('16px')};
  max-height: ${pxToRem('40px')};
  padding: ${pxToRem('10px')} 0 0 ${pxToRem('5px')};
  resize: none;
  ${props => (props.isFieldExpanded ? `
    height: ${pxToRem('125px')};
    max-height: 100%;`
    : ''
  )};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    font-size: ${pxToRem('18px')};
    max-height: ${pxToRem('50px')};
    padding: ${pxToRem('15px')} 0 0 ${pxToRem('5px')};
    ${props => (props.isFieldExpanded ? `max-height: ${pxToRem('50px')};` : '')};
  }
`;

export const CharLimit = styled(MiddleRow)`
  font-family: ${MakeFonts.RobotoRegular};
  color: ${TextColors.MediumGrey};
  font-size: ${pxToRem('12px')};
  line-height: ${pxToRem('30px')};
  padding: 0 ${pxToRem('2.5px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    font-size: ${pxToRem('16px')};
    line-height: ${pxToRem('30px')};
    padding: 0 ${pxToRem('16px')};
  }
`;

export const DisabledProposalButton = styled(SmallGreyButton)`
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroTwoOpacity};
  padding: ${pxToRem('5px')} ${pxToRem('10px')};
`;

export const ProposalButton = styled(SmallRedButton)`
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
  padding: ${pxToRem('5px')} ${pxToRem('10px')};
`;

export const ProposalIcon = styled(IconInButton)`
  margin: 0;
`;

export const ProposalButtonLabel = styled.span`
  display: inline;
  visibility: visible;
`;
