import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import {
  Breakpoints,
  Layouts,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import { BackgroundColors } from 'Client/app/assets/vars/Colors';

export const ProposalsWrapperStyle = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  padding: 30px 0;
  background-color: ${BackgroundColors.LightGrey};
`;

export const ProposalsContentStyle = styled.section`
  width: 100%;
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    width: ${intToPx(Layouts.ContainerWidth)};
  }
`;

export const ProposalsIntroStyle = styled.span`
  display: block;
  font-family: 'Times New Roman', Times, serif;
  font-style: italic;
  font-size: 16px;
  text-transform: none;
  margin-bottom: 10px;
`;

export const ProposalsSliderWrapperStyle = styled.div`
  padding: 0;
  @media (min-width: ${intToPx(Breakpoints.Tablet)} and max-width: ${intToPx(
  Breakpoints.LargeDesktop
)}) {
    padding: 0 ${intToPx(DefaultPadding.Mobile)};
  }
`;
