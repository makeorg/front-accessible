import styled from 'styled-components';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { intToPx } from 'Shared/helpers/styled';
import {
  Breakpoints,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';

export const LightBulbStyle = {
  fontSize: '72px',
  fill: 'rgb(255, 212, 0)',
  margin: '15px 0 5px',
};

export const PlaceholderParagraphStyle = styled.p`
  font-family: ${MakeFonts.RobotoBold};
  font-size: 14px;
  margin: ${intToPx(DefaultPadding.Mobile)} 0 0;
  padding: 0 10px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 18px;
    padding: 0;
  }
`;
