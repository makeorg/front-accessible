import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import {
  BasicColors,
  BorderColors,
  TextColors,
  ShadowColors,
} from 'Client/app/assets/vars/Colors';
import { Breakpoints, Layouts } from 'Client/app/assets/vars/Breakpoints';
import { NoStyleTextInputStyle } from 'Client/ui/Elements/Form/Styled/Input';
import {
  MiddleRowStyle,
  FlexElementStyle,
} from 'Client/ui/Elements/FlexElements';
import {
  GreyButtonStyle,
  RedButtonStyle,
  IconInButtonStyle,
} from 'Client/ui/Elements/ButtonElements';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const ProposalSubmitAuthentificationWrapperStyle = styled.div`
  max-width: ${pxToRem('620px')};
  min-height: ${pxToRem('340px')};
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: ${pxToRem('20px')} auto 0;
`;

export const DescriptionWrapperStyle = styled.div`
  margin: ${pxToRem('20px')} auto 0;
`;

export const ProposalSubmitFormStyle = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 0 ${pxToRem('8px')};
  border: ${pxToRem('1px')} solid ${BorderColors.LightGrey};
  border-radius: ${pxToRem('30px')};
  background-color: ${BasicColors.PureWhite};
  ${props =>
    props.isFieldExpanded
      ? `
    flex-flow: column;
    @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
      flex-flow: row;
    }`
      : ''};
`;

export const ProposalSubmitFormWrapperStyle = styled.aside`
  display: block;
  flex-grow: 0;
  width: 100%;
  max-width: ${pxToRem(Layouts.ContainerWidth)};
  margin: ${pxToRem('10px')} auto 0;
  padding: 0 ${pxToRem('20px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    margin: ${pxToRem('25px')} auto ${pxToRem('15px')};
  }
`;

export const ProposalInputWrapperStyle = styled(FlexElementStyle)`
  width: 100%;
`;

export const ProposalButtonWrapperStyle = styled(FlexElementStyle)`
  justify-content: flex-end;
  padding: ${pxToRem('7px')} 0;
  ${props => (props.isFieldExpanded ? 'width: 100%;' : '')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    min-width: ${pxToRem('230px')};
    ${props => (props.isFieldExpanded ? 'width: auto;' : '')};
  }
`;

export const ProposalLabelStyle = styled.label`
  font-size: ${pxToRem('14px')};
  line-height: ${pxToRem('40px')};
  margin-right: ${pxToRem('2.5px')};
  white-space: nowrap;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    font-size: ${pxToRem('18px')};
    line-height: ${pxToRem('50px')};
    margin-left: ${pxToRem('22px')};
  }
`;

export const ProposalInputStyle = styled(NoStyleTextInputStyle)`
  width: 100%;
  max-width: ${pxToRem('780px')};
  font-family: ${MakeFonts.RobotoBold};
  font-size: ${pxToRem('16px')};
  max-height: ${pxToRem('40px')};
  padding: ${pxToRem('10px')} 0 0 ${pxToRem('5px')};
  resize: none;
  ${props =>
    props.isFieldExpanded
      ? `
    height: ${pxToRem('125px')};
    max-height: 100%;`
      : ''};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    font-size: ${pxToRem('18px')};
    max-height: ${pxToRem('50px')};
    padding: ${pxToRem('15px')} 0 0 ${pxToRem('5px')};
    ${props =>
      props.isFieldExpanded ? `max-height: ${pxToRem('50px')};` : ''};
  }
`;

export const ProposalCharLimitStyle = styled(MiddleRowStyle)`
  font-family: ${MakeFonts.RobotoRegular};
  color: ${TextColors.MediumGrey};
  font-size: ${pxToRem('12px')};
  line-height: ${pxToRem('30px')};
  padding: 0 ${pxToRem('2.5px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    font-size: ${pxToRem('16px')};
    line-height: ${pxToRem('30px')};
    padding: 0 ${pxToRem('16px')};
  }
`;

export const DisabledProposalButtonStyle = styled(GreyButtonStyle)`
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroTwoOpacity};
  padding: ${pxToRem('5px')} ${pxToRem('10px')};
`;

export const ProposalButtonStyle = styled(RedButtonStyle)`
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
  padding: ${pxToRem('5px')} ${pxToRem('10px')};
`;

export const ProposalIconStyle = styled(IconInButtonStyle)`
  margin: 0;
`;

export const ProposalButtonLabelStyle = styled.span`
  display: inline;
  visibility: visible;
`;
