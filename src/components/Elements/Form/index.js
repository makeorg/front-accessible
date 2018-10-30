import styled from 'styled-components';
import { pxToRem } from '../../../helpers/styled';
import {
  BasicColors,
  BackgroundColors,
  BorderColors,
  TextColors,
  MakeThemeColors
} from '../../../assets/vars/Colors';
import { UnstyledButton } from '../ButtonElements';
import Breakpoints from '../../../assets/vars/Breakpoints';

export const NoStyleTextInput = styled.input`
  border: none;
  background: transparent;
  background-color: transparent;
  padding: 0 ${pxToRem('10px')};
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled(FormWrapper)`
  width: 100%;
  margin: ${pxToRem('10px')} 0 0;
`;

export const InputError = styled.span`
  color: ${BorderColors.ErrorRed};
`;

export const LastFakeInput = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 ${pxToRem('18px')};
  border-radius: ${pxToRem('30px')};
  border: ${pxToRem('1px')} solid ${BorderColors.LightGrey};
`;

export const ClassicFakeInput = styled(LastFakeInput)`
  margin-bottom: ${pxToRem('15px')};
`;

export const FakeInputWhite = styled(ClassicFakeInput)`
  background: ${BasicColors.PureWhite};
  background-color: ${BasicColors.PureWhite};
`;

export const FakeInputGrey = styled(ClassicFakeInput)`
  background: ${BackgroundColors.LightGrey};
  background-color: ${BackgroundColors.LightGrey};
  border-color: ${props => (props.hasError ? BorderColors.ErrorRed : BorderColors.LightGrey)};
`;

export const LastFakeInputWhite = styled(LastFakeInput)`
  background: ${BasicColors.PureWhite};
  background-color: ${BasicColors.PureWhite};
`;

export const LastFakeInputGrey = styled(LastFakeInput)`
  background: ${BackgroundColors.LightGrey};
  background-color: ${BackgroundColors.LightGrey};
`;

export const BasicInput = styled(NoStyleTextInput)`
  width: 100%;
  color: ${TextColors.MediumGrey};
  font-size: ${pxToRem('14px')};
  line-height: ${pxToRem('35px')};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    font-size: ${pxToRem('16px')};
    line-height: ${pxToRem('40px')};
  }
`;

export const IconLabel = styled.label`
  width: ${pxToRem('30px')};
  color: ${MakeThemeColors.Red};
  font-size: ${pxToRem('16px')};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    font-size: ${pxToRem('18px')};
  }
`;

export const HidePasswordIcon = styled(UnstyledButton)`
  color: ${TextColors.MediumGrey};
`;

export const InlineParagraph = styled.p`
  display: inline;
  font-size: ${pxToRem('14px')};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    font-size: ${pxToRem('16px')};
  }
`;

export const ExtraParagraph = styled(InlineParagraph)`
  margin-top: ${pxToRem('15px')};
`;

export const ExtraAltParagraph = styled(InlineParagraph)`
  margin-top: ${pxToRem('10px')};
`;

export const ConditionParagraph = styled(InlineParagraph)`
  color: ${TextColors.MediumGrey};
  font-size: ${pxToRem('12px')};
  margin-bottom: ${pxToRem('15px')};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    font-size: ${pxToRem('14px')};
  }
`;

export const FormErrors = styled.ul`
  font-size: ${pxToRem('12px')};
  margin-top: ${pxToRem('10px')};
  margin-bottom: ${pxToRem('10px')};
  color: ${BorderColors.ErrorRed};
`;

export const FormError = styled.li`
  list-style: none;
`;
