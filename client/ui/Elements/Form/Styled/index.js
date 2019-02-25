import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import * as ColorVars from 'Client/app/assets/vars/Colors';
import { UnstyledButtonStyle } from 'Client/ui/Elements/ButtonElements';

export const NoStyleTextInputStyle = styled.input`
  border: none;
  background: transparent;
  background-color: transparent;
  padding: 0 ${pxToRem('10px')};
`;

export const FormWrapperStyle = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const FormStyle = styled(FormWrapperStyle)`
  width: 100%;
  margin: ${pxToRem('10px')} 0 0;
`;

export const InputErrorMessageStyle = styled.p`
  color: ${ColorVars.BorderColors.ErrorRed};
  margin-bottom: ${pxToRem('10px')};
`;

export const FakeInputStyle = styled.div`
  display: flex;
  width: 100%;
  padding: 0 ${pxToRem('18px')};
  border-radius: ${pxToRem('30px')};
  background-color: ${ColorVars.BackgroundColors.LightGrey};
  border-width: ${pxToRem('1px')};
  border-style: solid;
  border-color: ${props =>
    props.hasError
      ? ColorVars.BorderColors.ErrorRed
      : ColorVars.BorderColors.LightGrey};
  margin-bottom: ${pxToRem('15px')};
  &:last-child {
    margin-bottom: 0;
  }
`;

export const MiddleFakeInputStyle = styled(FakeInputStyle)`
  align-items: center;
`;

export const BasicInputStyle = styled(NoStyleTextInputStyle)`
  width: 100%;
  color: ${ColorVars.TextColors.MediumGrey};
  font-size: ${pxToRem('14px')};
  line-height: ${pxToRem('35px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    font-size: ${pxToRem('16px')};
    line-height: ${pxToRem('40px')};
  }
`;

export const FakeTextAreaStyle = styled.div`
  display: flex;
  width: 100%;
  padding: 0 ${pxToRem('18px')};
  border-radius: ${pxToRem('30px')};
  background-color: ${ColorVars.BackgroundColors.LightGrey};
  border-width: ${pxToRem('1px')};
  border-style: solid;
  border-color: ${props =>
    props.hasError
      ? ColorVars.BorderColors.ErrorRed
      : ColorVars.BorderColors.LightGrey};
  margin-bottom: ${pxToRem('15px')};
`;

export const BasicTextAreaStyle = styled.textarea`
  width: 100%;
  border: none;
  background: transparent;
  background-color: transparent;
  padding: ${pxToRem('10px')};
  color: ${ColorVars.TextColors.MediumGrey};
  font-size: ${pxToRem('14px')};
  line-height: ${pxToRem('18px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    font-size: ${pxToRem('16px')};
    line-height: ${pxToRem('20px')};
  }
`;

export const InputIconStyle = styled.label`
  width: ${pxToRem('30px')};
  display: flex;
  color: ${ColorVars.MakeThemeColors.Red};
  font-size: ${pxToRem('16px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    font-size: ${pxToRem('18px')};
  }
`;

export const CenterInputIconStyle = styled(InputIconStyle)`
  align-items: center;
`;

export const TextAreaIconStyle = styled(InputIconStyle)`
  margin-top: ${pxToRem('10px')};
`;

export const HidePasswordIconStyle = styled(UnstyledButtonStyle)`
  color: ${ColorVars.TextColors.MediumGrey};
`;

export const InlineParagraphStyle = styled.p`
  display: inline;
  font-size: ${pxToRem('14px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    font-size: ${pxToRem('16px')};
  }
`;

export const ExtraParagraphStyle = styled(InlineParagraphStyle)`
  margin-top: ${pxToRem('15px')};
`;

export const ExtraAltParagraphStyle = styled(InlineParagraphStyle)`
  margin-top: ${pxToRem('10px')};
`;

export const ConditionParagraphStyle = styled(InlineParagraphStyle)`
  color: ${ColorVars.TextColors.MediumGrey};
  font-size: ${pxToRem('12px')};
  margin-bottom: ${pxToRem('15px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    font-size: ${pxToRem('14px')};
  }
`;

export const FormErrorsListStyle = styled.ul`
  font-size: ${pxToRem('12px')};
  margin-top: ${pxToRem('10px')};
  margin-bottom: ${pxToRem('10px')};
  color: ${ColorVars.BorderColors.ErrorRed};
`;

export const FormErrorStyle = styled.li`
  list-style: none;
`;
