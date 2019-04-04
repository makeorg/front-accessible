import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import * as ColorVars from 'Client/app/assets/vars/Colors';

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

export const InlineParagraphStyle = styled.p`
  display: inline;
  font-size: 14px;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
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
  color: ${ColorVars.TextColors.MediumGrey};
  font-size: 12px;
  margin-bottom: 15px;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 14px;
  }
`;

export const FormLabel = styled.label`
  color: #999;
  font-size: 14px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 45px;
  top: 20px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
`;
