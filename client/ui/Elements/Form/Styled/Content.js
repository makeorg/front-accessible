import styled from 'styled-components';
import {
  TextColors,
  BackgroundColors,
  BorderColors,
  MakeThemeColors,
} from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { ParagraphStyle } from '../../ParagraphElements';

export const FormStyle = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const FormRequirementsStyle = styled.p`
  font-size: 12px;
  line-height: 1.5;
  margin: 2.5px 0 15px;
  color: ${TextColors.MediumGrey};
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
  overflow: hidden;
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
  > textarea:not(:empty),
  > textarea:focus {
    padding-bottom: 15px;
  }
  > input:required + label {
    font-size: 14px;
    line-height: 38px;
  }
`;

export const InlineParagraphStyle = styled(ParagraphStyle)`
  display: inline;
`;

export const ExtraParagraphStyle = styled(InlineParagraphStyle)`
  margin-top: 15px;
`;

export const ExtraAltParagraphStyle = styled(InlineParagraphStyle)`
  margin-top: 10px;
`;

export const ConditionParagraphStyle = styled(InlineParagraphStyle)`
  margin-bottom: 15px;
  a {
    color: ${MakeThemeColors.Red};
  }
`;

export const FloatingLabelStyle = styled.label`
  font-family: ${MakeFonts.CircularStandardBook};
  color: ${TextColors.MediumGrey};
  font-size: 14px;
  line-height: 38px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 0;
  transition: 0.25s ease all;
  white-space: nowrap;
`;
