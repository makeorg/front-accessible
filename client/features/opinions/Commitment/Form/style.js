import styled from 'styled-components';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { CenterRowStyle } from 'Client/ui/Elements/FlexElements';

export const OpinionFormStyle = styled.form`
  display: flex;
  flex-flow: column;
  margin-top: 20px;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    margin-top: 30px;
  }
`;

export const OpinionFormTitleStyle = styled(ParagraphStyle)`
  font-family: ${MakeFonts.CircularStandardBold};
  margin-bottom: 20px;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    margin-bottom: 30px;
  }
`;

export const OpinionAreaWrapperStyle = styled.div`
  margin-bottom: 10px;
`;

export const OpinionSubmitWrapperStyle = styled(CenterRowStyle)`
  margin-top: 15px;
`;
