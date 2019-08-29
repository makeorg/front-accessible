import styled from 'styled-components';
import { Breakpoints, Layouts } from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const MainResultsWrapperStyle = styled.div`
  width: 100%;
  max-width: ${intToPx(Layouts.SpecialContainerWidth)};
  margin: 0 auto;
  padding: 20px 0;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    padding: 40px 20px;
  }
`;

export const MainResultsSectionStyle = styled.section`
  display: flex;
  flex-flow: column;
  margin-bottom: 20px;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const MainResultsContainerStyle = styled.div`
  padding: 0 20px;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    padding: 0;
  }
`;

export const NoResultsStyle = styled.p`
  font-family: ${MakeFonts.CircularStandardBold};
  font-size: 14px;
  line-height: 21px;
`;
