import styled from 'styled-components';
import { color } from 'athena-design-tokens';
import { ShadowColors } from 'Client/app/assets/vars/Colors';
import { FourthLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { intToPx } from 'Shared/helpers/styled';
import { Elements } from 'Client/app/assets/vars/Elements';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const PieChartWrapperStyle = styled.div`
  width: 100%;
  padding: 20px;
`;

export const PieChartTitleStyle = styled(FourthLevelTitleStyle)`
  width: 100%;
  text-align: center;
  font-family: ${MakeFonts.CircularStandardBold};
  color: ${props => props.theme.color};
  text-transform: none;
`;

export const PieChartCanvasStyle = styled.canvas`
  display: block;
  margin: 0 auto;
`;

export const PieChartLegendStyle = styled.p`
  background-color: ${color.white};
  padding: 20px;
  border-radius: ${intToPx(Elements.BorderRadius)};
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
  font-size: 10px;
  line-height: 16px;
  color: ${color.grey};
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 12px;
    line-height: 18px;
  }
`;
