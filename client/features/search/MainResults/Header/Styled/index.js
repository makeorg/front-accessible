import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { TextColors, BorderColors } from 'Client/app/assets/vars/Colors';

export const MainResultsHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid ${BorderColors.LightGrey};
  margin-bottom: 20px;
`;

export const MainResultsTitleWrapperStyle = styled.span`
  font-family: 'Times New Roman', Times, serif;
  font-style: italic;
  font-size: 14px;
  line-height: 18px;
  color: ${TextColors.DarkGrey};
`;

export const MainResultsTitleStyle = styled.h3`
  display: inline-flex;
  font-family: 'Times New Roman', Times, serif;
  font-style: italic;
  font-size: 16px;
  line-height: 24px;
  margin-right: 10px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 18px;
    line-height: 1;
  }
`;
