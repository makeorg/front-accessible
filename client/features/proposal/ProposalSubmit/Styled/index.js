import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import {
  BasicColors,
  BorderColors,
  TextColors,
  ShadowColors,
} from 'Client/app/assets/vars/Colors';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { NoStyleTextInputStyle } from 'Client/ui/Elements/Form/Styled/Input';
import {
  MiddleRowStyle,
  FlexElementStyle,
} from 'Client/ui/Elements/FlexElements';
import {
  GreyButtonStyle,
  RedButtonStyle,
  IconWrapperStyle,
} from 'Client/ui/Elements/ButtonElements';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { Small } from 'Client/ui/Elements/Separators';

export const ProposalSubmitAuthentificationWrapperStyle = styled.div`
  max-width: 620px;
  min-height: 340px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 20px auto 0;
`;

export const ProposalSubmitSeparatorStyle = styled(Small)`
  margin: ${pxToRem('10px')} 0;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    margin: ${pxToRem('20px')} 0;
  }
`;

export const DescriptionWrapperStyle = styled.div`
  margin: 20px auto 0;
`;

export const ProposalSubmitFormStyle = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 0 8px;
  border: 1px solid ${BorderColors.LightGrey};
  border-radius: 30px;
  background-color: ${BasicColors.PureWhite};
  ${props =>
    props.isOpen
      ? `
    flex-flow: column;
    @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
      flex-flow: row;
    }`
      : ''};
`;

export const ProposalInputWrapperStyle = styled(FlexElementStyle)`
  width: 100%;
`;

export const ProposalButtonWrapperStyle = styled(FlexElementStyle)`
  justify-content: flex-end;
  padding: 7px 0;
  ${props => (props.isOpen ? 'width: 100%;' : '')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    min-width: 230px;
    ${props => (props.isOpen ? 'width: auto;' : '')};
  }
`;

export const ProposalLabelStyle = styled.label`
  font-size: 14px;
  line-height: 40px;
  margin-right: 2.5px;
  white-space: nowrap;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    font-size: 18px;
    line-height: 50px;
    margin-left: 22px;
  }
`;

export const ProposalInputStyle = styled(NoStyleTextInputStyle)`
  width: 100%;
  max-width: 780px;
  font-family: ${MakeFonts.RobotoBold};
  font-size: 16px;
  max-height: 40px;
  padding: 10px 0 0 5px;
  resize: none;
  ${props =>
    props.isOpen
      ? `
    height: 125px;
    max-height: 100%;`
      : ''};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    font-size: 18px;
    max-height: 50px;
    padding: 15px 0 0 5px;
    ${props => (props.isOpen ? `max-height: 50px;` : '')};
  }
`;

export const ProposalCharLimitStyle = styled(MiddleRowStyle)`
  font-family: ${MakeFonts.RobotoRegular};
  color: ${TextColors.MediumGrey};
  font-size: 12px;
  line-height: 30px;
  padding: 0 2.5px;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    font-size: 16px;
    line-height: 30px;
    padding: 0 16px;
  }
`;

export const DisabledProposalButtonStyle = styled(GreyButtonStyle)`
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroTwoOpacity};
  padding: 5px 10px;
`;

export const ProposalButtonStyle = styled(RedButtonStyle)`
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
  padding: 5px 10px;
`;

export const ProposalIconStyle = styled(IconWrapperStyle)`
  margin: 0;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    margin-right: 5px;
  }
`;

export const ProposalButtonLabelStyle = styled.span`
  display: inline;
  visibility: visible;
`;
