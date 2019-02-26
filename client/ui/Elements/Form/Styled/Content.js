import styled from 'styled-components';
import { IntToPx } from 'Shared/helpers/styled';
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
  @media (min-width: ${IntToPx(Breakpoints.Desktop)}) {
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
  @media (min-width: ${IntToPx(Breakpoints.Desktop)}) {
    font-size: 14px;
  }
`;
