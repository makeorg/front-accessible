import styled from 'styled-components';
import { BasicColors, BackgroundColors } from 'Client/app/assets/vars/Colors';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';

export const ProgressBarStyle = styled.rect`
  background-color: ${BasicColors.PureWhite};
  border-radius: 12.5px;
  border: solid 1px ${BackgroundColors.ExtraLightGrey};
  width: 227px;
  max-width: 227px;
  height: 20px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    width: 673px;
    max-width: 673px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    width: 1017px;
    max-width: 1017px;
  }
`;

export const ProgressRectangleStyle = styled.rect`
  /* @todo: color to be dynamically updated with consultation color */
  /* background-color: ${props => props.theme.color}; */
  /* add width progress rect */
  height: 20px;
`;
