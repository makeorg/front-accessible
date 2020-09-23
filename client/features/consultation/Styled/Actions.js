import styled from 'styled-components';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { FourthLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { intToPx } from 'Shared/helpers/styled';
import {
  DefaultPadding,
  Breakpoints,
} from 'Client/app/assets/vars/Breakpoints';
import { BackgroundColors } from 'Client/app/assets/vars/Colors';

export const ActionsFourthLevelTitleStyle = styled(FourthLevelTitleStyle)`
  text-transform: none;
`;

export const ActionsParagraphStyle = styled(ParagraphStyle)`
  margin: 10px 0;
`;

export const SupportWrapperStyle = styled.section`
  padding: 0 10px;
  margin-top: ${intToPx(DefaultPadding.Mobile)};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin-top: ${intToPx(DefaultPadding.Desktop)};
    padding: 0;
  }
`;

export const SupportSeparatorStyle = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${BackgroundColors.MediumGrey};
  margin: 7px 0 ${intToPx(DefaultPadding.Mobile)};
`;
