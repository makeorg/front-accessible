import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import {
  TextColors,
  BackgroundColors,
  BorderColors,
} from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { FlexElementStyle } from 'Client/ui/Elements/FlexElements';

export const FormWrapperStyle = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const FormStyle = styled(FormWrapperStyle)`
  width: 100%;
  margin: 10px 0 0;
`;

export const FakeFieldStyle = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  padding: 0 15px;
  border-radius: 30px;
  background-color: ${BackgroundColors.LightGrey};
  border-width: 1px;
  border-style: solid;
  border-color: ${props =>
    props.hasError ? BorderColors.ErrorRed : BorderColors.LightGrey};
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const MiddleFakeFieldStyle = styled(FakeFieldStyle)`
  align-items: center;
`;

export const FieldWrapperStyle = styled.div`
  position: relative;
  width: 100%;
  > input:focus,
  > input:invalid,
  > input:required:focus,
  > input:required:not([value='']),
  > input:not([value='']),
  > textarea:not(:empty),
  > textarea:focus {
    padding-top: 15px;
    line-height: 20px;
    padding-bottom: 3px;
    & + label {
      font-size: 10px;
      line-height: 20px;
    }
  }
  > input:required + label {
    font-size: 14px;
    line-height: 38px;
  }
`;

export const InlineParagraphStyle = styled.p`
  display: inline;
  font-size: 14px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 16px;
  }
`;

export const ExtraParagraphStyle = styled(InlineParagraphStyle)`
  margin-top: 15px;
`;

export const ExtraAltParagraphStyle = styled(InlineParagraphStyle)`
  margin-top: 10px;
`;

export const ConditionParagraphStyle = styled(InlineParagraphStyle)`
  color: ${TextColors.MediumGrey};
  font-size: 12px;
  margin-bottom: 15px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 14px;
  }
`;

export const FloatingLabelStyle = styled.label`
  font-family: ${MakeFonts.RobotoRegular};
  color: ${TextColors.MediumGrey};
  font-size: 14px;
  line-height: 38px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 0;
  transition: 0.25s ease all;
`;

export const SubmitButtonWrapperStyle = styled(FlexElementStyle)`
  justify-content: flex-end;
`;
