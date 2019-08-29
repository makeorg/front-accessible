import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints, Layouts } from 'Client/app/assets/vars/Breakpoints';
import { BackgroundColors } from 'Client/app/assets/vars/Colors';
import { PlayfairParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { HomeTitleStyle } from 'Client/pages/Home/Styled';

export const ProposalsContentStyle = styled.section`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 30px 0;
  background-color: ${BackgroundColors.LightGrey};
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    padding: 30px 20px;
  }
`;

export const ProposalsTitleStyle = styled(HomeTitleStyle)`
  max-width: ${intToPx(Layouts.ContainerWidth)};
`;

export const ProposalsIntroStyle = styled(PlayfairParagraphStyle)`
  text-transform: none;
  margin-bottom: 6px;
`;

export const ProposalsSliderWrapperStyle = styled.div`
  max-width: ${intToPx(Layouts.ContainerWidth)};
  padding: 0;
`;
